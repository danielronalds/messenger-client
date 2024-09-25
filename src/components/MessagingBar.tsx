import { useEffect, useState } from "react";
import TextInput from "./TextInput";
import { isBlank } from "../utils";
import PrimaryButton from "./PrimaryButton";
import SendIcon from "./icons/SendIcon";
import toast from "react-hot-toast";

const MessagingBar = ({ currentUser }: { currentUser: User | null }) => {
  const [message, setMessage] = useState("");

  // Wiping the message when the current user changes
  useEffect(() => setMessage(""), [currentUser]);

  const handleKeyDown = (event: any) => {if (event.key === 'Enter') sendMessage();}

  const sendMessage = () => {
    if (isBlank(message)) return;

    setMessage("");
    toast.success("Sent message!");
  }

  return (
    <div className="flex flex-row gap-2" onKeyDown={handleKeyDown}>
      <TextInput
        placeholder={"Message " + currentUser?.displayname}
        isPassword={false}
        value={message}
        setValue={setMessage}
      />
      <PrimaryButton onClick={sendMessage} isDisabled={isBlank(message)}>
        <SendIcon size={24} />
      </PrimaryButton>
    </div>
  );
};

export default MessagingBar;
