import FaceIcon from "./icons/FaceIcon";
import MessagingBar from "./MessagingBar";

const Chat = ({ currentUser }: { currentUser: User | null }) => {
  return (
    <div className="w-full h-full bg-white shadow-2xl rounded-lg p-4 flex flex-col">
      <div className="flex flex-row gap-1">
        <FaceIcon size={35} />
        <h1 className="w-full text-2xl">{currentUser?.displayname}</h1>
      </div>
      <div className="w-full h-full"></div>
      <MessagingBar currentUser={currentUser} />
    </div>
  );
};

export default Chat;
