const SendButton = ({
  onClick,
  isDisabled,
}: {
  onClick: () => void;
  isDisabled: boolean;
}) => {
  return (
    <button
      type="button"
      className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 disabled:bg-gradient-to-r disabled:from-cyan-400 disabled:to-blue-400 disabled:text-gray-50 transition-colors text-white p-2 shadow-md"
      onClick={onClick}
      disabled={isDisabled}
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/></svg>
    </button>
  );
};

export default SendButton;
