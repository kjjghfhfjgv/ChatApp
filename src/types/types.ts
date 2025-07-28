export type Chat = {
  id: string;
  content: MessageContent[];
  sender: User;
  recipient: Recipient;
};

export type User = {
  id: string;
  name: string;
  chats: Chat[];
};

export type MessageContent = {
  id: string;
  text: string;
  timestamp: string;
  from: User;
  to: Recipient;
};

export type Recipient = {
  id: string;
  name: string;
};
