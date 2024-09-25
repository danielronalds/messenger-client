import SearchIcon from "./icons/SearchIcon";
import TextInput from "./TextInput";

const ContactSearchBar = ({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}) => {
  return (
    <div
      className={
        "w-[350px] bg-white shadow-2xl rounded-lg p-4 flex flex-row gap-1 items-center"
      }
    >
      <SearchIcon />
      <TextInput
        placeholder={"Search"}
        isPassword={false}
        value={searchTerm}
        setValue={setSearchTerm}
      />
    </div>
  );
};

export default ContactSearchBar;
