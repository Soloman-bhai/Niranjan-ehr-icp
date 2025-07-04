use candid::{CandidType, Principal};
use serde::{Serialize, Deserialize};

#[derive(Clone, Debug, CandidType, Serialize, Deserialize)]
pub struct PatientRecord {
    pub id: u32,
    pub name: String,
    pub age: u8,
    pub medical_history: String,
    pub created_at: u64,
    pub created_by: Option<Principal>,
    pub last_updated: Option<u64>,
    pub updated_by: Option<Principal>,
} 