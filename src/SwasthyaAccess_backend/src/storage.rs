//Persistent data storage logic

use std::cell::RefCell;
use std::collections::HashMap;
use crate::models::PatientRecord;

thread_local! {
    pub static PATIENTS: RefCell<HashMap<u32, PatientRecord>> = RefCell::new(HashMap::new());
}