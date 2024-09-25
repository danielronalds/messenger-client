import { useState } from "react";
import TextInput from "../components/TextInput";
import PrimaryButton from "../components/PrimaryButton";
import { isBlank } from "../utils";
import toast from "react-hot-toast";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import GradientBackground from "../components/GradientBackground";

const Signup = ({ serverAddr }: { serverAddr: string }) => {
  const [username, setUsername] = useState("");
  const [displayname, setDisplayname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const isSignupDisabled =
    isBlank(username) ||
    isBlank(displayname) ||
    isBlank(password) ||
    isBlank(confirmPassword) ||
    password !== confirmPassword;

  const onKeyDown = (event: any) => {
    if (event.key === "Enter") onSignup();
  };

  const onSignup = () => {
    if (isSignupDisabled) return;

    const loadingToastId = toast.loading("Attempting signup...");

    axios
      .post(serverAddr + "/users", { username, displayname, password })
      .then((res) => {
        const { username } = res.data;

        toast.dismiss(loadingToastId);
        toast.success("Successfully created new user: " + username);

        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.dismiss(loadingToastId);
        toast.error("Failed to create account");
      });
  };

  return (
    <GradientBackground>
      <div className="bg-white w-[400px] shadow-2xl rounded-lg p-6 flex flex-col gap-3">
        <form
          action="none"
          className="flex flex-col gap-6"
          onKeyDown={onKeyDown}
        >
          <TextInput
            placeholder="Username"
            isPassword={false}
            value={username}
            setValue={setUsername}
          />
          <TextInput
            placeholder={"Display Name"}
            isPassword={false}
            value={displayname}
            setValue={setDisplayname}
          />
          <TextInput
            placeholder={"Password"}
            isPassword={true}
            value={password}
            setValue={setPassword}
          />
          <TextInput
            placeholder={"Confirm Password"}
            isPassword={true}
            value={confirmPassword}
            setValue={setConfirmPassword}
          />
          <PrimaryButton onClick={onSignup} isDisabled={isSignupDisabled}>
            Create Account
          </PrimaryButton>
        </form>
        <Link to="/" className="text-blue-400 text-right">
          Take me back!
        </Link>
      </div>
    </GradientBackground>
  );
};

export default Signup;
