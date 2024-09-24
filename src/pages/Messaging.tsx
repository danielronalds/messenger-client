import axios from "axios";
import GradientBackground from "../components/GradientBackground";
import { useEffect, useState } from "react";

const Messaging = ({serverAddr, userSession}: {serverAddr: string, userSession: UserSession}) => {
  const [users, setUsers] = useState<User[]>([]);


  useEffect(() => {
    axios.get(serverAddr + '/users').then((res) => {
      const usersList = res.data as Array<User>
      const filteredUsers = usersList.filter((x: User) => x.username != userSession.username);

      setUsers(filteredUsers);

      console.log(users);
    });
  }, []);

  return (
    <GradientBackground>
      <div className="bg-white h-[90%] w-[90%] shadow-2xl rounded-lg p-6 flex flex-col gap-3">
      </div>
    </GradientBackground>
  );
}

export default Messaging;
