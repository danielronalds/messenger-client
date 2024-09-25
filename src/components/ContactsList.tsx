import { useMemo, useState } from "react";
import { Contact } from "./Contact";
import ContactSearchBar from "./ContactSearchBar";
import { isBlank } from "../utils";

const ContactsList = ({
  users,
  currentUser,
  setCurrentUser,
}: {
  users: Array<User>;
  currentUser: User | null;
  setCurrentUser: (user: User) => void;
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = useMemo(() => {
    return users.filter(
      (user) =>
        isBlank(searchTerm) ||
        user.username.includes(searchTerm) ||
        user.displayname.includes(searchTerm),
    );
  }, [searchTerm, users]);

  return (
    <>
      <ContactSearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {filteredUsers.map((user) => (
        <Contact
          user={user}
          isSelected={user === currentUser}
          onClick={() => {
            setCurrentUser(user);
          }}
        />
      ))}
    </>
  );
};

export default ContactsList;
