import { PropsWithChildren } from "react";
import Box from "@mui/material/Box";
import IconArea from "./IconArea";
import ContactsArea from "./ContactsArea";
import ChatArea from "./ChatArea";
import DetailsArea from "./DetailsArea";

export default function ChatMainArea({ children }: PropsWithChildren) {
  return (
    <Box className="mainchatarea">
      <IconArea></IconArea>
      <ContactsArea></ContactsArea>
      <ChatArea></ChatArea>
      <DetailsArea></DetailsArea>
    </Box>
  );
}
