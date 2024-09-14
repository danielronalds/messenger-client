import { useState } from "react";

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

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isBlank = (str: string) => {
    return !str || /^\s*$/.test(str);
  };

  const isDisabled = isBlank(username) || isBlank(password);

  const onLogin = () => {
    console.log("Button clicked! " + username + " " + password);

    setPassword("");
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
