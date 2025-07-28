import type { Chat as ChatType } from "../../types/types";

import styles from "./styles.module.css";

type Props = {
  chat: ChatType;
  onSelect: (id: string) => void;
};

export const Chat = ({ chat, onSelect }: Props) => {
  return (
    <div className={styles.chat} onClick={() => onSelect(chat.id)}>
      <div>
        <div className={styles.header}>
          <p>{chat.recipient.name}</p>
        </div>
        <span className={styles.minimalChatContent}>
          {chat.content[chat.content.length - 1].text.slice(0, MAX_LENGTH)}
        </span>
      </div>
    </div>
  );
};

const MAX_LENGTH = 100;
