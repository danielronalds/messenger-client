import { useState } from "react";
import TextInput from "./TextInput";
import { isBlank } from "../utils";
import SendButton from "./SendButton";

const MessagingBar = ({ currentUser }: { currentUser: User | null }) => {
  const [message, setMessage] = useState("");

  return (
    <div className="flex flex-row gap-2">
      <TextInput placeholder={"Message " + currentUser?.displayname} isPassword={false} value={message} setValue={setMessage} />
      <SendButton onClick={() => {}} isDisabled={isBlank(message)}/>
    </div>
  )
}

export default MessagingBar;
