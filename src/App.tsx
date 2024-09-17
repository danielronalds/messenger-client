import { invoke } from "@tauri-apps/api/tauri";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";

function App() {
  const [serverAddr, setServerAddr] = useState('');
  const [sessionKey, setSessionKey] = useState('');

  // Getting the server address from the local config
  invoke('get_server_address').then((addr) => setServerAddr(addr as string));

  return (
  <>
      <Toaster/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login serverAddr={serverAddr} setSessionKey={setSessionKey} />} />
        </Routes>
      </BrowserRouter>
  </>
  );
}

export default App;
