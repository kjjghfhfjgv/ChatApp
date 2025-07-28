import styles from "./styles.module.css";

type Props = {
  onSearch: (searchedFriend: string) => void;
};

export const SearchFriend = ({ onSearch }: Props) => {
  return (
    <input
      type="text"
      placeholder="Search a chat"
      className={styles.search}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};
