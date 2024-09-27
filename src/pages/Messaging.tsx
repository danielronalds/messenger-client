import axios from "axios";
import GradientBackground from "../components/GradientBackground";
import { useEffect, useState } from "react";
import ContactsList from "../components/ContactsList";
import Chat from "../components/Chat";
import AccountDetails from "../components/AccountDetails";

const Messaging = ({
  serverAddr,
  userSession,
}: {
  serverAddr: string;
  userSession: UserSession;
}) => {
  const [users, setUsers] = useState<User[]>([]);

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    axios.get(serverAddr + "/users").then((res) => {
      const usersList = res.data as Array<User>;
      const filteredUsers = usersList.filter(
        (x: User) => x.username != userSession.username,
      );

      setUsers(filteredUsers);
      setSelectedUser(filteredUsers[0]);

      console.log(users);
    });
  }, []);

  return (
    <GradientBackground>
      <div className="h-[90%] w-[90%] flex flex-row bg-white rounded-xl shadow-2xl">
        <div className="flex gap-2 flex-col bg-gray-100 rounded-l-xl">
          <AccountDetails userSession={userSession} serverAddr={serverAddr} />
          <hr className="border border-gray-250"/>
          <ContactsList
            users={users}
            currentUser={selectedUser}
            setCurrentUser={setSelectedUser}
          />
        </div>
        <Chat currentUser={selectedUser} />
      </div>
    </GradientBackground>
  );
};

export default Messaging;
