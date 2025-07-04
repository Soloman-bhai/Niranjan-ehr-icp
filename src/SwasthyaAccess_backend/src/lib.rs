// lib.rs or main.rs (root file)
mod models;
mod storage;
mod errors;
mod auth;
mod api;

// Re-export your main API functions
pub use api::*;
pub use models::PatientRecord;

// Export candid interface
candid::export_service!();

