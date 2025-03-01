/* eslint-disable react/prop-types */
import { useState } from "react";
import ContactsArea from "./ContactsArea/Index";
import ChatContactCard from "./Components/ChatContactCard";
import "./styles.css";
import MainChatArea from "./MainChatArea/Index";
import IconArea from "./IconArea/Index";
import ChatArea from "./ChatArea/Index";
import DetailsArea from "./DetailsArea/Index";
import Footer from "./Footer/Index";

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

export default function App() {
  const [showDetails, setshowDetails] = useState(true);
  const [chats, setChats] = useState(data);
  return (
    <>
      <MainChatArea>
        <IconArea></IconArea>
        <ContactsArea>
          {chats.map((item, index) => {
            return (
              <ChatContactCard
                key={index}
                name={item.name}
                timestamp={item.lastmessagetimestamp}
                unreadmessages={item.unreadmessages}
                lastmessage={item.lastmessage}
                image_url={item.image} 
                />
            );
          })}
        </ContactsArea>
        <ChatArea>
          {showDetails || (
            <ShowDetailsButton handleXDetailsButton={setshowDetails} />
          )}
        </ChatArea>
        <DetailsArea show={showDetails}>
          <HideDetailsButton handleXDetailsButton={setshowDetails} />
        </DetailsArea>
      </MainChatArea>
      <Footer>
        <div className="designplaceholdertext">Footer area</div>
      </Footer>
    </>
  );
}

interface DetailsButton {
  handleXDetailsButton: (x: boolean) => void;
}
function ShowDetailsButton({ handleXDetailsButton }: DetailsButton) {
  return (
    <div className="div-block">
      <a
        href="#"
        className="showproperties w-button"
        onClick={() => handleXDetailsButton(true)}
      >
        &lt;&lt; Show
      </a>
    </div>
  );
}

function HideDetailsButton({ handleXDetailsButton } : DetailsButton) {
  return (
    <a
      href="#"
      className="w-button"
      onClick={() => handleXDetailsButton(false)}
    >
      Hide &gt;&gt;
    </a>
  );
}
