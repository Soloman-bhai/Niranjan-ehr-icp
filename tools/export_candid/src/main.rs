use SwasthyaAccess_backend::api::*;
candid::export_service!();

fn main() {
    println!("{}", __export_service());
}