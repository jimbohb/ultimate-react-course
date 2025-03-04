import Box from "@mui/material/Box";

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
} : ChatContactCardProps) {
  const date = new Date(timestamp);
  return (
    <>
      <Box className="chatcardouter">
        <Box className="chatcard">
          <img
            src={  image_url}
            loading="lazy"
            width="75"
            height="75"
            alt=""
            className="avatar"
          />
          <Box className="chatcardtextarea">
            <Box className="chatcardnamereceivedbox">
              <Box className="chatcardnametext">{name}</Box>
              <Box className="chatcardreceived">{`${zeropad(
                date.getHours(),
                2
              )}:${zeropad(date.getMinutes(), 2)}`}</Box>
            </Box>
            <Box className="chatcardmessagebox">
              <Box className="chatcardmessage">
                {lastmessage.substring(0, maxmessagelength) +
                  (lastmessage.length > maxmessagelength ? "..." : "")}
              </Box>
              {unreadmessages > 0 && (
                <Box className="cardmessagenum">{unreadmessages} new</Box>
              )}
            </Box>
          </Box>
        </Box>
        <Box className="separatorline"></Box>
      </Box>
    </>
  );
}
