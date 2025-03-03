import { PropsWithChildren } from "react";
import Box from "@mui/material/Box";

export default function ChatMainArea({ children }: PropsWithChildren) {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundColor: "blue",
      }}
    >
      {/* Your content here */}
    </Box>
  );
}
