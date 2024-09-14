import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const LoginInput = ({
  placeholder,
  isPassword,
  value,
  setValue,
}: {
  placeholder: string;
  isPassword: boolean;
  value: string;
  setValue: (value: string) => void;
}) => {
  return (
    <input
      type={isPassword ? "password" : "text"}
      className="block border-grey-200 border-2 rounded p-2"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

const LoginForm = ({ serverAddr, setSessionKey }: { serverAddr: string; setSessionKey: (key: string) => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isBlank = (str: string) => {
    return !str || /^\s*$/.test(str);
  };

  const isDisabled = isBlank(username) || isBlank(password);

  const onLogin = async () => {
    try {
      setPassword("");

      const res = await axios.post(serverAddr + '/auth', {
        UserName: username,
        Password: password
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
    <div className="bg-white w-[400px] shadow-2xl rounded-lg p-6">
      <form action="none" className="flex flex-col gap-6">
        <LoginInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
          isPassword={false}
        />
        <LoginInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          isPassword={true}
        />
        <button
          type="button"
          className="rounded bg-blue-400 disabled:bg-blue-200 disabled:text-gray-50 transition-colors text-white p-2 shadow-md"
          onClick={onLogin}
          disabled={isDisabled}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
