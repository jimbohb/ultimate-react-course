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
      <div className="chatcardouter">
        <div className="chatcard">
          <img
            src={  image_url}
            loading="lazy"
            width="75"
            height="75"
            alt=""
            className="avatar"
          />
          <div className="chatcardtextarea">
            <div className="chatcardnamereceivedbox">
              <div className="chatcardnametext">{name}</div>
              <div className="chatcardreceived">{`${zeropad(
                date.getHours(),
                2
              )}:${zeropad(date.getMinutes(), 2)}`}</div>
            </div>
            <div className="chatcardmessagebox">
              <div className="chatcardmessage">
                {lastmessage.substring(0, maxmessagelength) +
                  (lastmessage.length > maxmessagelength ? "..." : "")}
              </div>
              {unreadmessages > 0 && (
                <div className="cardmessagenum">{unreadmessages} new</div>
              )}
            </div>
          </div>
        </div>
        <div className="separatorline"></div>
      </div>
    </>
  );
}
