import { PropsWithChildren, useState } from "react";
import Box from "@mui/material/Box";
import ChatContactCard from "../Components/ChatContactCard";
import ChatContactCardOld from "../Components/ChatContactCardOld";

const data = [
  {
    name: "Balazs Horvath",
    lastmessage: "Fine, thanx!😍",
    lastmessagetimestamp: Date.now(),
    unreadmessages: 5,
    image: "http://localhost:8000/01.png",
  },
  {
    name: "Lisa Kudrow",
    lastmessage: "See you soon!✋",
    lastmessagetimestamp: Date.now() - 60 * 1000 * 70,
    unreadmessages: 0,
    image: "http://localhost:8000/02.png",
  },
  {
    name: "John Doe",
    lastmessage: "Fine, thanx!😍",
    lastmessagetimestamp: Date.now(),
    unreadmessages: 5,
    image: "http://localhost:8000/04.png",
  },
  {
    name: "Melanie Musterfrau",
    lastmessage:
      "✋ This section provides detailed reference documentation for working with React. For an introduction to React, please visit the Learn section.",
    lastmessagetimestamp: Date.now() - 60 * 1000 * 70,
    unreadmessages: 0,
    image: "http://localhost:8000/03.png",
  },
];

export default function ContactsArea({ children }: PropsWithChildren) {
  const [chats, setChats] = useState(data);
  return (
    <Box className="contactsarea">
      {chats.map((item, index) => {
        return (
          <>
            <ChatContactCardOld
              key={index}
              name={item.name}
              timestamp={item.lastmessagetimestamp}
              unreadmessages={item.unreadmessages}
              lastmessage={item.lastmessage}
              image_url={item.image}
            />
            <ChatContactCard
              key={index}
              name={item.name}
              timestamp={item.lastmessagetimestamp}
              unreadmessages={item.unreadmessages}
              lastmessage={item.lastmessage}
              image_url={item.image}
            />
          </>
        );
      })}
    </Box>
  );
}
