const zeropad = (num, width) => num.toString().padStart(width, "0");

export default function ChatContactCard({ name, timestamp, unreadmessages, lastmessage, image }) {
    const date = new Date(timestamp);
    return (<>
        <div className="chatcardouter">
            <div className="chatcard"><img
                src={image}
                loading="lazy" width="75" height="75" alt="" className="avatar" />
                <div className="chatcardtextarea">
                    <div className="chatcardnamereceivedbox">
                        <div className="chatcardnametext">{name}</div>
                        <div className="chatcardreceived">{`${zeropad(date.getHours(),2)}:${zeropad(date.getMinutes(),2)}`}</div>
                    </div>
                    <div className="chatcardmessagebox">
                        <div className="chatcardmessage">{lastmessage}</div>
                        { unreadmessages > 0 && <div className="cardmessagenum">{unreadmessages} new</div>}
                    </div>
                </div>
            </div>
            <div className="separatorline"></div>
        </div>
    </>);

}