import clsx from "clsx";

const MessageBubble = ({ message, isFromMe, messageId }: { message: string, isFromMe: boolean, messageId: number }) => {
  return (
    <div className="w-full flex flex-row gap-0" key={messageId}>
      {isFromMe && <div className="w-full"></div>/* Space to shift the message over if it is from the user*/}
      <div className={clsx('rounded-xl h-fit px-3 py-2', isFromMe && 'bg-blue-500 text-white', !isFromMe && 'bg-gray-200')}>
        <p className='max-w-[50ch] w-fit h-fit'>{message}</p>
      </div>
      {!isFromMe && <div className="w-full"></div>}
    </div>
  );
}

export default MessageBubble;
