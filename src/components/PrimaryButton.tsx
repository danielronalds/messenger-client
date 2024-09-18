const PrimaryButton = ({ desc, onClick, isDisabled }: { desc: string; onClick: () => void; isDisabled: boolean; }) => {
  return (
    <button
      type="button"
      className="rounded bg-gradient-to-r from-cyan-500 to-blue-500 disabled:bg-gradient-to-r disabled:from-cyan-400 disabled:to-blue-400 disabled:text-gray-50 transition-colors text-white p-2 shadow-md"
      onClick={onClick}
      disabled={isDisabled}
    >
      {desc}
    </button>
  );
}

export default PrimaryButton;
