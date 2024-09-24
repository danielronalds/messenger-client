import MessagingBar from "./MessagingBar";

const Chat = ({ currentUser }: { currentUser: User | null }) => {

  return (
    <div className="w-full h-full bg-white shadow-2xl rounded-lg p-4 flex flex-col">
      <h1 className="w-full text-2xl">{currentUser?.displayname}</h1>
      <div className="w-full h-full"></div>
      <MessagingBar currentUser={currentUser} />
    </div>
  );
};

export default Chat;
