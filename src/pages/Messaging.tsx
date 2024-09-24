import axios from "axios";
import GradientBackground from "../components/GradientBackground";
import { useEffect, useState } from "react";
import ContactsList from "../components/ContactsList";
import Chat from "../components/Chat";

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

      console.log(users);
    });
  }, []);

  return (
    <GradientBackground>
      <div className="h-[90%] w-[90%] flex flex-row ">
        <ContactsList
          users={users}
          currentUser={selectedUser}
          setCurrentUser={setSelectedUser}
        />
        <Chat />
      </div>
    </GradientBackground>
  );
};

export default Messaging;
