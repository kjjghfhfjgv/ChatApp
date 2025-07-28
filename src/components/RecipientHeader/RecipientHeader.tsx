import type { Recipient } from "../../types/types";
import styles from "./styles.module.css";

type Props = {
  user: Recipient;
};

export const RecipientHeader = ({ user }: Props) => {
  return <h3 className={styles.wrapper}>{user.name}</h3>;
};
