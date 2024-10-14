import { useEffect, useState } from "react";
import FaceIcon from "./icons/FaceIcon";
import SendIcon from "./icons/SendIcon";
import PrimaryButton from "./PrimaryButton";
import TextInput from "./TextInput";
import { isBlank } from "../utils";
import axios from "axios";
import MessageBubble from "./MessageBubble";
import toast from "react-hot-toast";

const Chat = ({
  selectedUser,
  userSession,
  serverAddr,
}: {
  selectedUser: User | null;
  userSession: UserSession;
  serverAddr: string;
}) => {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const sortMessages = (messages: ChatMessage[]) => messages.sort((a,b) => Date.parse(a.delivered) - Date.parse(b.delivered))

  const addMessages = (newMessages: ChatMessage[]) => {
    if (newMessages.length == 0) {
      return;
    }

    const filteredMessage = newMessages.filter((message) => {
      const isAlreadyAdded = messages.find((x) => x.id === message.id) !== undefined;
      const isFromSelectedUser = message.sender === selectedUser?.username;

      return isFromSelectedUser && !isAlreadyAdded;
    });

    scrollToBottom('MessagesDiv');

    setMessages(sortMessages([...messages, ...filteredMessage]));
  }

  // Resetting the page when a new user is selected
  useEffect(() => {
    setMessage("");
    setMessages([]);

    // Getting already sent messages
    axios
      .post(serverAddr + "/inbox", {
        key: userSession.key,
        contact: selectedUser?.username,
      })
      .then((res) => {
        setMessages(sortMessages(res.data));
      });

  }, [selectedUser, userSession]);

  // Setting up pinging for new messages
  useEffect(() => {
    const getNewMessagesInterval = setInterval(handleNewMessages, 3000);

    return () => clearInterval(getNewMessagesInterval);
  }, [messages, selectedUser]);

  const handleNewMessages = () => {
      axios
        .post(serverAddr + "/inbox/unread", {
          key: userSession.key,
        })
        .then((res) => {
          if (!res.data) return;

          const newMessages: ChatMessage[] = res.data;

          if (newMessages.length == 0) return;

          // Alerting messages from the not focused user
          newMessages.filter(m => {
            const isAlreadyAdded = messages.find((x) => x.id === m.id) !== undefined;
            const isFromSelectedUser = m.sender === selectedUser?.username;

            return !isAlreadyAdded && !isFromSelectedUser
          }).forEach(m => toast.success(m.sender + ': ' + m.content));

          addMessages(res.data);
        });
  }

  const scrollToBottom = (id: string) => {
    const element: HTMLElement | null = document.getElementById(id);
    if (element != null) element.scrollTop = element?.scrollHeight;
  }

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") sendMessage();
  };

  const sendMessage = async () => {
    if (isBlank(message)) return;

    axios
      .post(serverAddr + "/message", {
        key: userSession.key,
        to: selectedUser?.username,
        content: message,
      })
      .then((res) => {
        const sentMessage: ChatMessage = res.data;
        setMessages([...messages, sentMessage]);

        setMessage("");
      });
  };

  return (
    <div className="w-full h-full rounded-r-xl p-4 flex flex-col">
      <div className="flex flex-row gap-1">
        <FaceIcon size={35} />
        <h1 className="w-full text-2xl">{selectedUser?.displayname}</h1>
      </div>
      <div className="w-full h-full flex flex-col gap-1 overflow-y-auto p-3" id='MessagesDiv'>
        {messages.map((message) => {
          return <MessageBubble message={message.content} isFromMe={message.sender === userSession.username} messageId={message.id} />
        })}
      </div>
      <div className="flex flex-row gap-2" onKeyDown={handleKeyDown}>
        <TextInput
          placeholder={"Message " + selectedUser?.displayname}
          isPassword={false}
          value={message}
          setValue={setMessage}
        />
        <PrimaryButton onClick={sendMessage} isDisabled={isBlank(message)}>
          <SendIcon size={24} />
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Chat;
