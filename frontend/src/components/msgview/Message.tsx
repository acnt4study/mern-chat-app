const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="https://avatar.iran.liara.run/public/5" alt="avatar" />
        </div>
      </div>
      <div className="chat-bubble bg-blue-500 text-white">Hi, hru</div>
      <div className="chat-footer flex items-center gap-1 text-xs opacity-50">
        12:12
      </div>
    </div>
  );
};

export default Message;
