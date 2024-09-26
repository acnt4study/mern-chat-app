import Messages from './Messages';
import MsgInp from './MsgInp';
import Welcome from './Welcome';

const MsgView = () => {
  const noChat = false;
  return (
    <div className="flex flex-col md:min-w-[450px]">
      {noChat ? (
        <Welcome />
      ) : (
        <>
          <Messages />
          <MsgInp />
        </>
      )}
    </div>
  );
};

export default MsgView;
