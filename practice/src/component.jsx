/* eslint-disable react/prop-types */
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [showDetails, setshowDetails] = useState(true);
  return (
    <>
      <MainChatArea>
        <IconArea></IconArea>
        <ContactsArea>
            TODO
        </ContactsArea>
        <ChatArea>
          {showDetails || (
            <ShowDetailsButton handleShowDetailsButton={setshowDetails} />
          )}
        </ChatArea>
        <DetailsArea show={showDetails}>
          <HideDetailsButton handleHideDetailsButton={setshowDetails}/>
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

function ContactsArea({ children }) {
  return <div className="contactsarea">{children}</div>;
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

function ShowDetailsButton({handleShowDetailsButton}) {
  return (
    <div className="div-block">
      <a href="#" className="showproperties w-button" onClick={()=>handleShowDetailsButton(true)}>
        &lt;&lt; Show
      </a>
    </div>
  );
}

function HideDetailsButton({handleHideDetailsButton}) {
  return (
    <a href="#" className="w-button" onClick={()=>handleHideDetailsButton(false)}>
      Hide &gt;&gt;
    </a>
  );
}
