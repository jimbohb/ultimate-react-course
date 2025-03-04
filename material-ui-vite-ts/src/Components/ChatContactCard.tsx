import { Avatar, CardContent, CardHeader } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { red } from "@mui/material/colors";

const zeropad = (num: number, width: number) =>
  num.toString().padStart(width, "0");

interface ChatContactCardProps {
  name: string;
  timestamp: number;
  unreadmessages: number;
  lastmessage: string;
  image_url: string;
  maxmessagelength?: number;
}

export default function ChatContactCard({
  name,
  timestamp,
  unreadmessages,
  lastmessage,
  image_url,
  maxmessagelength = 20,
}: ChatContactCardProps) {
  const date = new Date(timestamp);
  return (
    <>
      <Box className="chatcardouter">
        <Card variant="neu">
          <CardContent>
            <Avatar sx={{height:"75px",width:"75px"}}>
              <img
                src={image_url}
                loading="lazy"
                height={"75px"}
                width={"75px"}
                alt=""
              />
            </Avatar>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
