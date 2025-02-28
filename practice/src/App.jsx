/* eslint-disable react/prop-types */
import { useState } from "react";
import ContactsArea from "./ContactsArea/Index";
import ChatContactCard from "./Components/ChatContactCard";
import "./styles.css";

const data = [
  { name: "Max Mustermann", lastmessage: "Fine, thanx!😍", lastmessagetimestamp: Date.now(), unreadmessages: 5, image:"https://cdn.prod.website-files.com/67c02fbdead921f0287e1d79/67c19f6e9dccac811d77a47f_ksnip_20250228-122547%201.png" },
  { name: "Balazs Horvath", lastmessage: "See you soon!✋", lastmessagetimestamp: Date.now() - 60 * 1000 * 70, unreadmessages: 0,image:"https://cdn.prod.website-files.com/67c02fbdead921f0287e1d79/67c1ca7f31d535460d47b834_ksnip_20250228-122647.png" },
  { name: "Max Mustermann", lastmessage: "Fine, thanx!😍", lastmessagetimestamp: Date.now(), unreadmessages: 5, image:"https://cdn.prod.website-files.com/67c02fbdead921f0287e1d79/67c19f6e9dccac811d77a47f_ksnip_20250228-122547%201.png" },
  { name: "Balazs Horvath", lastmessage: "See you soon!✋", lastmessagetimestamp: Date.now() - 60 * 1000 * 70, unreadmessages: 0,image:"https://cdn.prod.website-files.com/67c02fbdead921f0287e1d79/67c1ca7f31d535460d47b834_ksnip_20250228-122647.png" },
  { name: "Max Mustermann", lastmessage: "Fine, thanx!😍", lastmessagetimestamp: Date.now(), unreadmessages: 5, image:"https://cdn.prod.website-files.com/67c02fbdead921f0287e1d79/67c19f6e9dccac811d77a47f_ksnip_20250228-122547%201.png" },
  { name: "Balazs Horvath", lastmessage: "See you soon!✋", lastmessagetimestamp: Date.now() - 60 * 1000 * 70, unreadmessages: 0,image:"https://cdn.prod.website-files.com/67c02fbdead921f0287e1d79/67c1ca7f31d535460d47b834_ksnip_20250228-122647.png" },
  { name: "Max Mustermann", lastmessage: "Fine, thanx!😍", lastmessagetimestamp: Date.now(), unreadmessages: 5, image:"https://cdn.prod.website-files.com/67c02fbdead921f0287e1d79/67c19f6e9dccac811d77a47f_ksnip_20250228-122547%201.png" },
  { name: "Balazs Horvath", lastmessage: "See you soon!✋", lastmessagetimestamp: Date.now() - 60 * 1000 * 70, unreadmessages: 0,image:"https://cdn.prod.website-files.com/67c02fbdead921f0287e1d79/67c1ca7f31d535460d47b834_ksnip_20250228-122647.png" },
  { name: "Max Mustermann", lastmessage: "Fine, thanx!😍", lastmessagetimestamp: Date.now(), unreadmessages: 5, image:"https://cdn.prod.website-files.com/67c02fbdead921f0287e1d79/67c19f6e9dccac811d77a47f_ksnip_20250228-122547%201.png" },
  { name: "Balazs Horvath", lastmessage: "See you soon!✋", lastmessagetimestamp: Date.now() - 60 * 1000 * 70, unreadmessages: 0,image:"https://cdn.prod.website-files.com/67c02fbdead921f0287e1d79/67c1ca7f31d535460d47b834_ksnip_20250228-122647.png" },
  { name: "Max Mustermann", lastmessage: "Fine, thanx!😍", lastmessagetimestamp: Date.now(), unreadmessages: 5, image:"https://cdn.prod.website-files.com/67c02fbdead921f0287e1d79/67c19f6e9dccac811d77a47f_ksnip_20250228-122547%201.png" },
  { name: "Balazs Horvath", lastmessage: "See you soon!✋", lastmessagetimestamp: Date.now() - 60 * 1000 * 70, unreadmessages: 0,image:"https://cdn.prod.website-files.com/67c02fbdead921f0287e1d79/67c1ca7f31d535460d47b834_ksnip_20250228-122647.png" },
  { name: "Max Mustermann", lastmessage: "Fine, thanx!😍", lastmessagetimestamp: Date.now(), unreadmessages: 5, image:"https://cdn.prod.website-files.com/67c02fbdead921f0287e1d79/67c19f6e9dccac811d77a47f_ksnip_20250228-122547%201.png" },
  { name: "Balazs Horvath", lastmessage: "See you soon!✋", lastmessagetimestamp: Date.now() - 60 * 1000 * 70, unreadmessages: 0,image:"https://cdn.prod.website-files.com/67c02fbdead921f0287e1d79/67c1ca7f31d535460d47b834_ksnip_20250228-122647.png" },
  { name: "Max Mustermann", lastmessage: "Fine, thanx!😍", lastmessagetimestamp: Date.now(), unreadmessages: 5, image:"https://cdn.prod.website-files.com/67c02fbdead921f0287e1d79/67c19f6e9dccac811d77a47f_ksnip_20250228-122547%201.png" },
  { name: "Balazs Horvath", lastmessage: "See you soon!✋", lastmessagetimestamp: Date.now() - 60 * 1000 * 70, unreadmessages: 0,image:"https://cdn.prod.website-files.com/67c02fbdead921f0287e1d79/67c1ca7f31d535460d47b834_ksnip_20250228-122647.png" },
  { name: "Max Mustermann", lastmessage: "Fine, thanx!😍", lastmessagetimestamp: Date.now(), unreadmessages: 5, image:"https://cdn.prod.website-files.com/67c02fbdead921f0287e1d79/67c19f6e9dccac811d77a47f_ksnip_20250228-122547%201.png" },
  { name: "Balazs Horvath", lastmessage: "See you soon!✋", lastmessagetimestamp: Date.now() - 60 * 1000 * 70, unreadmessages: 0,image:"https://cdn.prod.website-files.com/67c02fbdead921f0287e1d79/67c1ca7f31d535460d47b834_ksnip_20250228-122647.png" },
  { name: "Max Mustermann", lastmessage: "Fine, thanx!😍", lastmessagetimestamp: Date.now(), unreadmessages: 5, image:"https://cdn.prod.website-files.com/67c02fbdead921f0287e1d79/67c19f6e9dccac811d77a47f_ksnip_20250228-122547%201.png" },
  { name: "Balazs Horvath", lastmessage: "See you soon!✋", lastmessagetimestamp: Date.now() - 60 * 1000 * 70, unreadmessages: 0,image:"https://cdn.prod.website-files.com/67c02fbdead921f0287e1d79/67c1ca7f31d535460d47b834_ksnip_20250228-122647.png" },
  { name: "Max Mustermann", lastmessage: "Fine, thanx!😍", lastmessagetimestamp: Date.now(), unreadmessages: 5, image:"https://cdn.prod.website-files.com/67c02fbdead921f0287e1d79/67c19f6e9dccac811d77a47f_ksnip_20250228-122547%201.png" },
  { name: "Balazs Horvath", lastmessage: "See you soon!✋", lastmessagetimestamp: Date.now() - 60 * 1000 * 70, unreadmessages: 0,image:"https://cdn.prod.website-files.com/67c02fbdead921f0287e1d79/67c1ca7f31d535460d47b834_ksnip_20250228-122647.png" },
  { name: "Max Mustermann", lastmessage: "Fine, thanx!😍", lastmessagetimestamp: Date.now(), unreadmessages: 5, image:"https://cdn.prod.website-files.com/67c02fbdead921f0287e1d79/67c19f6e9dccac811d77a47f_ksnip_20250228-122547%201.png" },
  { name: "Balazs Horvath", lastmessage: "See you soon!✋", lastmessagetimestamp: Date.now() - 60 * 1000 * 70, unreadmessages: 0,image:"https://cdn.prod.website-files.com/67c02fbdead921f0287e1d79/67c1ca7f31d535460d47b834_ksnip_20250228-122647.png" },
  { name: "Max Mustermann", lastmessage: "Fine, thanx!😍", lastmessagetimestamp: Date.now(), unreadmessages: 5, image:"https://cdn.prod.website-files.com/67c02fbdead921f0287e1d79/67c19f6e9dccac811d77a47f_ksnip_20250228-122547%201.png" },
  { name: "Balazs Horvath", lastmessage: "See you soon!✋", lastmessagetimestamp: Date.now() - 60 * 1000 * 70, unreadmessages: 0,image:"https://cdn.prod.website-files.com/67c02fbdead921f0287e1d79/67c1ca7f31d535460d47b834_ksnip_20250228-122647.png" },
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
            return (<ChatContactCard
              key={index} name={item.name} timestamp={item.lastmessagetimestamp} unreadmessages={item.unreadmessages} lastmessage={item.lastmessage} image={item.image}/>);
          })
          }
        </ContactsArea>
        <ChatArea>
          {showDetails || (
            <ShowDetailsButton handleShowDetailsButton={setshowDetails} />
          )}
        </ChatArea>
        <DetailsArea show={showDetails}>
          <HideDetailsButton handleHideDetailsButton={setshowDetails} />
        </DetailsArea>
      </MainChatArea>
      <Footer>
        <div className="designplaceholdertext">Footer area</div>
      </Footer>
    </>
  );
}

function MainChatArea({ children }) {
  return <div className="mainchatarea">{children}</div>;
}

function IconArea({ children }) {
  return <div className="iconarea">{children}</div>;
}

function ChatArea({ children }) {
  return <div className="chatarea">{children}</div>;
}

function DetailsArea({ children, show }) {
  return (
    <div className="detailsarea" style={show ? {} : { display: "none" }}>
      {children}
    </div>
  );
}

function Footer({ children }) {
  return <div className="footer">{children}</div>;
}

function ShowDetailsButton({ handleShowDetailsButton }) {
  return (
    <div className="div-block">
      <a href="#" className="showproperties w-button" onClick={() => handleShowDetailsButton(true)}>
        &lt;&lt; Show
      </a>
    </div>
  );
}

function HideDetailsButton({ handleHideDetailsButton }) {
  return (
    <a href="#" className="w-button" onClick={() => handleHideDetailsButton(false)}>
      Hide &gt;&gt;
    </a>
  );
}
