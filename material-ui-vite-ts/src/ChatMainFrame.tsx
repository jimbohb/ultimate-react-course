import Box from "@mui/material/Box";
import Footer from "./Layout/Footer";

export default function ChatMainFrame() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundColor: "var(--backgrouncolormain)",
      }}
    >
      <Footer />
    </Box>
  );
}
