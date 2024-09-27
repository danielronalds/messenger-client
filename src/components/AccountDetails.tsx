import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AccountIcon from "./icons/AccountIcon";
import axios from "axios";

export const AccountDetails = ({
  serverAddr,
  userSession,
}: {
  serverAddr: string,
  userSession: UserSession;
}) => {
  const navigate = useNavigate();

  const onSignout = () => {
    axios.delete(serverAddr + '/auth', { data: { key: userSession.key }}).then((res) => {
      toast.success("Signed out of " + userSession.displayname);
      navigate("/");
    }).catch(err => {
      console.log(err);
      toast.error("Failed to signout");
    });
  };

  return (
    <div className="w-[350px] bg-gray-100 rounded-xl p-4">
      <div className="flex flex-row gap-2">
        <AccountIcon size={55} />
        <div className="flex flex-col gap-0 justify-center">
          <div className="flex flex-row gap-1">
            <p>{userSession.displayname}</p>
            <p className="text-gray-400">{userSession.username}</p>
          </div>
          <p
            className="text-blue-400 text-sm cursor-pointer hover:underline"
            onClick={onSignout}
          >
            Signout
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
