import { invoke } from "@tauri-apps/api/tauri";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Messaging from "./pages/Messaging";

function App() {
  const [serverAddr, setServerAddr] = useState('');
  const [userSession, setUserSession] = useState<UserSession>({ key: '', username: ''});

  // Getting the server address from the local config
  invoke('get_server_address').then((addr) => setServerAddr(addr as string));

  return (
  <>
      <Toaster/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login serverAddr={serverAddr} setUserSession={setUserSession} />} />
          <Route path="signup" element={<Signup serverAddr={serverAddr}/>} />
          <Route path="messaging" element={<Messaging serverAddr={serverAddr} userSession={userSession}/>} />
        </Routes>
      </BrowserRouter>
  </>
  );
}

export default App;
