import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import LoginForm from "./components/LoginForm";
import { useState } from "react";

function App() {
  const [serverAddr, setServerAddr] = useState('127.0.0.1:8080');
  const [sessionKey, setSessionKey] = useState('');

  invoke('get_server_address').then((addr) => setServerAddr(addr as string));

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <LoginForm serverAddr={serverAddr} setSessionKey={setSessionKey} />
    </div>
  );
}

export default App;
