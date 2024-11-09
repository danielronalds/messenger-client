import toast from "react-hot-toast";
import { trunicateString } from "../utils"
import FaceIcon from "./icons/FaceIcon"

const ChatNotification = ({ t, message, selectUser }: { t: any, message: ChatMessage, selectUser: (u: string) => void }) => {
  const onMessageClick = () => {
    onClose();
    selectUser(message.sender);
  }

  const onClose = () => toast.dismiss(t.id);

  return <div
    className={`${t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
  >
    <div className="flex-1 w-0 p-4">
      <div className="flex items-start">
        <div className="flex-shrink-0 pt-0.5">
          <FaceIcon size={55} />
        </div>
        <div className="ml-3 flex-1 cursor-pointer" onClick={onMessageClick}>
          <p className="text-sm font-medium text-gray-900">{message.sender}</p>
          <p className="mt-1 text-sm text-gray-500">{trunicateString(message.content)}</p>
        </div>
      </div>
    </div>
    <div className="flex border-l border-gray-200">
      <button
        onClick={onClose}
        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-blue-500 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Close
      </button>
    </div>
  </div>
}

export default ChatNotification
