const PrimaryButton = ({ desc, onClick, isDisabled }: { desc: string; onClick: () => void; isDisabled: boolean; }) => {
  return (
    <button
      type="button"
      className="rounded bg-blue-400 disabled:bg-blue-200 disabled:text-gray-50 transition-colors text-white p-2 shadow-md"
      onClick={onClick}
      disabled={isDisabled}
    >
      {desc}
    </button>
  );
}

export default PrimaryButton;
