import FaceIcon from "./icons/FaceIcon";

export const Contact = ({ user }: { user: User }) => {
  return (
    <div className="w-[350px] bg-white shadow-2xl rounded-lg p-4">
      <div className="flex flex-row gap-2">
        <FaceIcon />
        <div className="flex flex-col gap-0 justify-center">
          <p>{user.displayname}</p>
          <p className="text-gray-400">{user.username}</p>
        </div>
      </div>
    </div>
  );
}
