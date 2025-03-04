import Footer from "./Layout/Footer";
import MainChatArea from "./Layout/MainChatArea";
import { ThemeProvider } from "@emotion/react";
import bonomitheme from "./theme";

export default function ChatMainFrame() {
  return (
    <>
      <ThemeProvider theme={bonomitheme}>
        <MainChatArea />
      </ThemeProvider>
      <Footer />
    </>
  );
}
