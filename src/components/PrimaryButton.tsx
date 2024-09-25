const PrimaryButton = ({
  children,
  onClick,
  isDisabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  isDisabled: boolean;
}) => {
  return (
    <button
      type="button"
      className="rounded bg-gradient-to-r from-cyan-500 to-blue-500 disabled:bg-gradient-to-r disabled:from-cyan-400 disabled:to-blue-400 disabled:text-gray-50 transition-colors text-white p-2 shadow-md cursor-pointer"
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
