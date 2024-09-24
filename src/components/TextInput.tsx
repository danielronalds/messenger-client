const TextInput = ({
  placeholder,
  isPassword,
  value,
  setValue,
}: {
  placeholder: string;
  isPassword: boolean;
  value: string;
  setValue: (value: string) => void;
}) => {
  return (
    <input
      type={isPassword ? "password" : "text"}
      className="block border-gray-200 border-2 rounded p-2 w-full"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default TextInput;
