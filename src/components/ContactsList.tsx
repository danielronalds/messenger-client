import { Contact } from "./Contact"

const ContactsList = ({ users }: { users: Array<User>}) => {
  return (
  <div className="flex gap-4 flex-col z-10 pr-4">
    {users.map(user => <Contact user={user} />)}
  </div>
  )
}

export default ContactsList
