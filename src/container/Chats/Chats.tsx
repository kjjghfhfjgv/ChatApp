import type { Chat as ChatType } from "../../types/types";

import { SearchFriend } from "../../components/SearchFriend/SearchFriend";
import { Chat } from "../../components/Chat/Chat";
import { useMemo, useState } from "react";

type Props = {
  chats: ChatType[];
  onSelect: (chatId: string) => void;
};

const Chats = ({ chats, onSelect }: Props) => {
  const [searchedFriend, setSearchedFriend] = useState("");

  const filteredFriends = useMemo(() => {
    if (!searchedFriend) return chats;

    return chats.filter((chat) =>
      chat.recipient.name.toLowerCase().includes(searchedFriend.toLowerCase())
    );
  }, [chats, searchedFriend]);

  return (
    <div>
      <section>
        <SearchFriend onSearch={setSearchedFriend} />
      </section>
      <section>
        {filteredFriends.map((chat) => (
          <Chat chat={chat} onSelect={onSelect} />
        ))}
      </section>
    </div>
  );
};

export default Chats;
