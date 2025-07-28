import { useEffect, useState } from "react";
import "./App.css";
import Chats from "./container/Chats/Chats";
import { MessageSection } from "./container/MessageSection/MessageSection";
import type { Chat } from "./types/types";

function App() {
  const [selectedChat, setSelectedChat] = useState("");
  const [currentChat, setCurrentChat] = useState<Chat | null>(null);
  const [allChats, setAllChats] = useState(chatData);

  useEffect(() => {
    const chatItemClicked = allChats.find((chat) => chat.id === selectedChat);
    if (chatItemClicked) {
      setCurrentChat(chatItemClicked);
    }
  }, [allChats, selectedChat]);

  const handleSubmit = (newChat: Chat) => {
    setCurrentChat(newChat);
    setAllChats((prev) => {
      const newList = prev.map((chatItem) => {
        if (chatItem.id === newChat.id) {
          return newChat;
        }
        return chatItem;
      });
      return newList;
    });
  };

  return (
    <div className="wrapper">
      <section className="chats__section">
        <Chats chats={allChats} onSelect={setSelectedChat} />
      </section>
      <section className="message__section">
        {currentChat ? (
          <MessageSection
            recipient={currentChat.recipient}
            sender={currentChat.sender}
            chat={currentChat}
            onSubmit={handleSubmit}
          />
        ) : (
          <h2>Select a chat</h2>
        )}
      </section>
    </div>
  );
}

export default App;

const chatData: Chat[] = [
  {
    id: "chat-001",
    sender: { id: "user-001", name: "Alice", chats: [] },
    recipient: { id: "user-002", name: "Bob" },
    content: [
      {
        id: "msg-001",
        text: "Hey Bob! How's everything?",
        timestamp: "2025-07-26T08:00:00Z",
        from: { id: "user-001", name: "Alice", chats: [] },
        to: { id: "user-002", name: "Bob" },
      },
      {
        id: "msg-002",
        text: "All good! Working on the deployment script. You?",
        timestamp: "2025-07-26T08:01:30Z",
        from: { id: "user-002", name: "Bob", chats: [] },
        to: { id: "user-001", name: "Alice" },
      },
      {
        id: "msg-003",
        text: "Same here, prepping for the client demo.",
        timestamp: "2025-07-26T08:03:00Z",
        from: { id: "user-001", name: "Alice", chats: [] },
        to: { id: "user-002", name: "Bob" },
      },
      {
        id: "msg-004",
        text: "Good luck! Need help with anything?",
        timestamp: "2025-07-26T08:04:30Z",
        from: { id: "user-002", name: "Bob", chats: [] },
        to: { id: "user-001", name: "Alice" },
      },
      {
        id: "msg-005",
        text: "Actually yes, can you review the slide deck?",
        timestamp: "2025-07-26T08:05:45Z",
        from: { id: "user-001", name: "Alice", chats: [] },
        to: { id: "user-002", name: "Bob" },
      },
      {
        id: "msg-006",
        text: "Sure, send it over.",
        timestamp: "2025-07-26T08:06:00Z",
        from: { id: "user-002", name: "Bob", chats: [] },
        to: { id: "user-001", name: "Alice" },
      },
      {
        id: "msg-007",
        text: "Just emailed it!",
        timestamp: "2025-07-26T08:06:30Z",
        from: { id: "user-001", name: "Alice", chats: [] },
        to: { id: "user-002", name: "Bob" },
      },
      {
        id: "msg-008",
        text: "Got it. Looks solid overall.",
        timestamp: "2025-07-26T08:08:00Z",
        from: { id: "user-002", name: "Bob", chats: [] },
        to: { id: "user-001", name: "Alice" },
      },
      {
        id: "msg-009",
        text: "Thanks! Hopefully the client likes it too.",
        timestamp: "2025-07-26T08:08:45Z",
        from: { id: "user-001", name: "Alice", chats: [] },
        to: { id: "user-002", name: "Bob" },
      },
      {
        id: "msg-010",
        text: "Fingers crossed. Let me know how it goes.",
        timestamp: "2025-07-26T08:09:10Z",
        from: { id: "user-002", name: "Bob", chats: [] },
        to: { id: "user-001", name: "Alice" },
      },
    ],
  },
  {
    id: "chat-002",
    sender: { id: "user-003", name: "Charlie", chats: [] },
    recipient: { id: "user-004", name: "Dana" },
    content: Array.from({ length: 10 }, (_, i) => ({
      id: `msg-1${i + 1}`,
      text: `Message ${i + 1} between Charlie and Dana.`,
      timestamp: `2025-07-26T09:${(10 + i).toString().padStart(2, "0")}:00Z`,
      from: {
        id: i % 2 === 0 ? "user-003" : "user-004",
        name: i % 2 === 0 ? "Charlie" : "Dana",
        chats: [],
      },
      to: {
        id: i % 2 === 0 ? "user-004" : "user-003",
        name: i % 2 === 0 ? "Dana" : "Charlie",
        chats: [],
      },
    })),
  },
  {
    id: "chat-003",
    sender: { id: "user-005", name: "Eve", chats: [] },
    recipient: { id: "user-006", name: "Frank" },
    content: Array.from({ length: 12 }, (_, i) => ({
      id: `msg-2${i + 1}`,
      text: `Eve ${i % 2 === 0 ? "asks" : "responds"}: Part ${i + 1}`,
      timestamp: `2025-07-26T10:${(i + 10).toString().padStart(2, "0")}:00Z`,
      from: {
        id: i % 2 === 0 ? "user-005" : "user-006",
        name: i % 2 === 0 ? "Eve" : "Frank",
        chats: [],
      },
      to: {
        id: i % 2 === 0 ? "user-006" : "user-005",
        name: i % 2 === 0 ? "Frank" : "Eve",
        chats: [],
      },
    })),
  },
  {
    id: "chat-004",
    sender: { id: "user-007", name: "Grace", chats: [] },
    recipient: { id: "user-008", name: "Hank" },
    content: Array.from({ length: 11 }, (_, i) => ({
      id: `msg-3${i + 1}`,
      text: `Quick sync msg ${i + 1}`,
      timestamp: `2025-07-26T11:${(i + 10).toString().padStart(2, "0")}:30Z`,
      from: {
        id: i % 2 === 0 ? "user-007" : "user-008",
        name: i % 2 === 0 ? "Grace" : "Hank",
        chats: [],
      },
      to: {
        id: i % 2 === 0 ? "user-008" : "user-007",
        name: i % 2 === 0 ? "Hank" : "Grace",
        chats: [],
      },
    })),
  },
];
