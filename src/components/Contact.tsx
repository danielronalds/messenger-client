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
        "w-[350px] p-4",
        isSelected && "bg-gray-200",
      )}
      onClick={onClick}
    >
      <div className="flex flex-row gap-2">
        <FaceIcon size={55} />
        <div className="flex flex-col gap-0 justify-center">
          <p>{user.displayname}</p>
          <p className="text-gray-400">{user.username}</p>
        </div>
      </div>
    </div>
  );
};
