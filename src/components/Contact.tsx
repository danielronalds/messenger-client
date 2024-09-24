import clsx from "clsx";
import FaceIcon from "./icons/FaceIcon";

export const Contact = ({
  user,
  isSelected,
  onClick,
}: {
  user: User;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={clsx(
        "w-[350px] bg-white shadow-2xl rounded-lg p-4",
        isSelected && "border-blue-400 border-4 border-solid",
      )}
      onClick={onClick}
    >
      <div className="flex flex-row gap-2">
        <FaceIcon />
        <div className="flex flex-col gap-0 justify-center">
          <p>{user.displayname}</p>
          <p className="text-gray-400">{user.username}</p>
        </div>
      </div>
    </div>
  );
};
