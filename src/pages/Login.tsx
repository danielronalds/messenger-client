import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import TextInput from "../components/TextInput";
import { isBlank } from "../utils";
import { Link } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";

const Login = ({ serverAddr, setSessionKey }: { serverAddr: string; setSessionKey: (key: string) => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isLoginDisabled = isBlank(username) || isBlank(password);

  const onLogin = async () => {
    try {
      setPassword("");

      const res = await axios.post(serverAddr + '/auth', {
        username: username,
        password: password
      });

      // If the request is successful, we'll get a security key back
      const { key, displayname } = await res.data;
      setSessionKey(key);

      toast.success("Logged into " + displayname + "!");
    } catch (err) {
      console.log(err);
      toast.error("Login Failed!");
    }
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white w-[400px] shadow-2xl rounded-lg p-6 flex flex-col gap-3">
        <form action="none" className="flex flex-col gap-6">
          <TextInput
            placeholder="Username"
            value={username}
            setValue={setUsername}
            isPassword={false}
          />
          <TextInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            isPassword={true}
          />
          <PrimaryButton desc={"Login"} onClick={onLogin} isDisabled={isLoginDisabled} />
        </form>
        <Link to={"/signup"} className="text-blue-400 text-right">Don't have an account?</Link>
      </div>
    </div>
  );
};

export default Login;
