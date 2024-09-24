import { Contact } from "./Contact";

const ContactsList = ({
  users,
  currentUser,
  setCurrentUser,
}: {
  users: Array<User>;
  currentUser: User | null;
  setCurrentUser: (user: User) => void;
}) => {
  return (
    <div className="flex gap-4 flex-col z-10 pr-4">
      {users.map((user) => (
        <Contact
          user={user}
          isSelected={user === currentUser}
          onClick={() => {
            setCurrentUser(user);
          }}
        />
      ))}
    </div>
  );
};

export default ContactsList;
