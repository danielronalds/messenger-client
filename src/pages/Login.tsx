import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import TextInput from "../components/TextInput";
import { isBlank } from "../utils";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import GradientBackground from "../components/GradientBackground";

const Login = ({ serverAddr, setUserSession }: { serverAddr: string; setUserSession: (session: UserSession) => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

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

      setUserSession({
        key,
        username,
        displayname
      })

      toast.success("Logged into " + displayname + "!");

      navigate('/messaging');
    } catch (err) {
      console.log(err);
      toast.error("Login Failed!");
    }
  };

  return (
    <GradientBackground>
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
        <Link to="/signup" className="text-blue-400 text-right">Don't have an account?</Link>
      </div>
    </GradientBackground>
  );
};

export default Login;
