import clsx from "clsx";

import styles from "./styles.module.css";

type Props = {
  isSent: boolean;
  text: string;
};

export const MessageItem = ({ text, isSent }: Props) => {
  return (
    <div
      className={clsx(styles.wrapper, {
        [styles.sent]: isSent,
      })}
    >
      {text}
    </div>
  );
};
