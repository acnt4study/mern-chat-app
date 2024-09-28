import { formatTime } from '../../utils/formatTime';

const Message = ({ data, sPic, rPic, id }) => {
  const isSender = data.sId === id;
  const pic = isSender ? sPic : rPic;
  const time = formatTime(data.createdAt);
  return (
    <div className={`chat ${isSender ? 'chat-start' : 'chat-end'}`}>
      <div className="avatar chat-image">
        <div className="w-10 rounded-full">
          <img src={pic} alt="avatar" />
        </div>
      </div>
      <div
        className={`chat-bubble ${isSender ? 'bg-blue-500' : ''} text-white`}
      >
        {data.msg}
      </div>
      <div className="chat-footer flex items-center gap-1 text-xs opacity-50">
        {time}
      </div>
    </div>
  );
};

export default Message;
