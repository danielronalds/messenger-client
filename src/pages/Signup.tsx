import { useState } from "react";
import TextInput from "../components/TextInput";
import PrimaryButton from "../components/PrimaryButton";
import { isBlank } from "../utils";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = ({ serverAddr }: { serverAddr: string }) => {
  const [username, setUsername] = useState('');
  const [displayname, setDisplayname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const isSignupDisabled = isBlank(username) 
                         || isBlank(displayname) 
                         || isBlank(password) 
                         || isBlank(confirmPassword) 
                         || password !== confirmPassword;

  const onSignup = () => {
    axios.post(serverAddr + '/users', { username, displayname, password })
    .then((res) => {
      const { username } = res.data;

      toast.success('Successfully created new user: ' + username);

      navigate('/');
    })
    .catch((err) => {
      const res = err.response;

      toast.error(res.data);
    });
  }

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white w-[400px] shadow-2xl rounded-lg p-6 flex flex-col gap-3">
        <form action="none" className="flex flex-col gap-6">
          <TextInput placeholder="Username" isPassword={false} value={username} setValue={setUsername} />
          <TextInput placeholder={"Display Name"} isPassword={false} value={displayname} setValue={setDisplayname} />
          <TextInput placeholder={"Password"} isPassword={true} value={password} setValue={setPassword} />
          <TextInput placeholder={"Confirm Password"} isPassword={true} value={confirmPassword} setValue={setConfirmPassword} />

          <PrimaryButton desc="Sign Up" onClick={onSignup} isDisabled={isSignupDisabled} />
        </form>
      </div>
    </div>
  )
};

export default Signup;
