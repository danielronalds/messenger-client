// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[tauri::command]
fn get_server_address() -> String {
    // NOTE: Temp measure, will pull from config
    "http://127.0.0.1:8080".to_string()
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_server_address])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
