import { useEffect, useState } from "react";
import style from "./styles.module.css";

type Props = {
  onSubmit: (text: string) => void;
};

export const MessageTextArea = ({ onSubmit }: Props) => {
  const [text, setText] = useState("");

  useEffect(() => {
    return () => setText("");
  }, []);

  const handleSubmit = () => {
    setText("");
    onSubmit(text);
  };
  return (
    <form
      className={style.textWrapper}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <input
        type="text"
        placeholder="Type a message"
        className={style.type}
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button type="submit" className={style.sendBtn}>
        Send
      </button>
    </form>
  );
};
