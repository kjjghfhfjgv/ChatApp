import clsx from "clsx";
import { MessageItem } from "../../components/MessageItem/MessageItem";
import { RecipientHeader } from "../../components/RecipientHeader/RecipientHeader";
import type { Chat, MessageContent, Recipient, User } from "../../types/types";

import style from "./styles.module.css";
import { MessageTextArea } from "../../components/MessageTextArea/MessageTextArea";

type Props = {
  recipient: Recipient;
  sender: User; //TODO: get this from context
  chat: Chat;
  onSubmit: (chat: Chat) => void;
};

export const MessageSection = ({
  recipient,
  sender,
  chat,
  onSubmit,
}: Props) => {
  const handleSubmit = (text: string) => {
    const newNsg: MessageContent = {
      id: crypto.randomUUID(),
      text,
      timestamp: `${new Date()}`,
      from: sender,
      to: recipient,
    };
    const newChatItem = {
      ...chat,
      content: [...chat.content, newNsg],
    };

    onSubmit(newChatItem);
  };

  return (
    <section className={style.messagesSection}>
      <RecipientHeader user={recipient} />

      <div className={style.chatDisplayArea}>
        {chat.content.map((chat) => (
          <div
            key={chat.id}
            className={clsx(style.chatItem, {
              [style.right]: chat.from.id === sender.id,
            })}
          >
            <MessageItem
              key={chat.id}
              isSent={chat.from.id === sender.id}
              text={chat.text}
            />
          </div>
        ))}
      </div>
      <div className={style.chatTextArea}>
        <MessageTextArea onSubmit={handleSubmit} />
      </div>
    </section>
  );
};
