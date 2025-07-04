// Consent management logic

use ic_cdk::api::msg_caller;
use candid::Principal;
use crate::errors::ERR_UNAUTHORIZED;

pub fn authorize() -> Result<Principal, String> {
    let caller = msg_caller();
    if caller == Principal::anonymous() {
        return Err(ERR_UNAUTHORIZED.to_string());
    }
    Ok(caller)
}