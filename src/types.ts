type UserSession = {
  key: string;
  username: string;
  displayname: string;
};

type User = {
  username: string;
  displayname: string;
};

type ChatMessage = {
  id: number,
  sender: string,
  receiver: string,
  content: string,
  delivered: string,
  isRead: boolean
}
