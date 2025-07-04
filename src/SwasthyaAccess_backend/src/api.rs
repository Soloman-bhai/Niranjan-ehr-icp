use ic_cdk_macros::*;
use ic_cdk::api::time;
use crate::models::PatientRecord;
use crate::storage::PATIENTS;
use crate::auth::authorize;
use crate::errors::*;
use std::collections::HashMap;

#[update]
pub fn create_patient_record(mut record: PatientRecord) -> Result<(), String> {
    let caller = authorize().ok();
    if record.id == 0 {
        return Err(ERR_INVALID_ID.to_string());
    }
    if record.name.trim().is_empty() {
        return Err(ERR_INVALID_NAME.to_string());
    }
    if record.age == 0 || record.age > 120 {
        return Err(ERR_INVALID_AGE.to_string());
    }
    let now = time();
    record.created_at = now;
    record.created_by = caller;
    record.last_updated = Some(now);
    record.updated_by = caller;
    PATIENTS.with(|patients| {
        let mut map = patients.borrow_mut();
        if map.contains_key(&record.id) {
            return Err(ERR_RECORD_EXISTS.to_string());
        }
        map.insert(record.id, record);
        Ok(())
    })
}

#[query]
pub fn get_patient_record(id: u32) -> Option<PatientRecord> {
    PATIENTS.with(|patients| patients.borrow().get(&id).cloned())
}

#[update]
pub fn update_patient_record(id: u32, mut updated_record: PatientRecord) -> Result<(), String> {
    let caller = authorize().ok();
    if updated_record.id != id {
        return Err("ID in record does not match update target".to_string());
    }
    if updated_record.name.trim().is_empty() {
        return Err(ERR_INVALID_NAME.to_string());
    }
    if updated_record.age == 0 || updated_record.age > 120 {
        return Err(ERR_INVALID_AGE.to_string());
    }
    updated_record.last_updated = Some(time());
    updated_record.updated_by = caller;
    PATIENTS.with(|patients| {
        let mut map = patients.borrow_mut();
        if !map.contains_key(&id) {
            return Err(ERR_RECORD_NOT_FOUND.to_string());
        }
        let existing = map.get(&id).unwrap();
        updated_record.created_at = existing.created_at;
        updated_record.created_by = existing.created_by;
        map.insert(id, updated_record);
        Ok(())
    })
}

#[update]
pub fn delete_patient_record(id: u32) -> Result<(), String> {
    authorize().ok();
    PATIENTS.with(|patients| {
        let mut map = patients.borrow_mut();
        if map.remove(&id).is_some() {
            Ok(())
        } else {
            Err(ERR_RECORD_NOT_FOUND.to_string())
        }
    })
}

#[query]
pub fn list_patient_records(page: Option<u32>, page_size: Option<u32>) -> Vec<PatientRecord> {
    let page = page.unwrap_or(1);
    let page_size = page_size.unwrap_or(10);
    PATIENTS.with(|patients| {
        let mut records: Vec<_> = patients.borrow().values().cloned().collect();
        records.sort_by_key(|r| r.id);
        let total_records = records.len() as u32;
        let start_index = (page - 1) * page_size;
        let end_index = std::cmp::min(start_index + page_size, total_records);
        records
            .into_iter()
            .skip(start_index as usize)
            .take((end_index - start_index) as usize)
            .collect()
    })
}

#[query]
pub fn search_patients(query: String) -> Vec<PatientRecord> {
    PATIENTS.with(|patients| {
        patients
            .borrow()
            .values()
            .filter(|record| record.name.to_lowercase().contains(&query.to_lowercase()))
            .cloned()
            .collect()
    })
}

#[pre_upgrade]
pub fn pre_upgrade() {
    let patients = PATIENTS.with(|p| p.borrow().clone());
    ic_cdk::storage::stable_save((patients,)).unwrap();
}

#[post_upgrade]
pub fn post_upgrade() {
    let (patients,): (HashMap<u32, PatientRecord>,) = ic_cdk::storage::stable_restore().unwrap();
    PATIENTS.with(|p| *p.borrow_mut() = patients);
}
