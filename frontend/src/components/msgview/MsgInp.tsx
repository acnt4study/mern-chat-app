import { useState } from 'react';
import { MdSend } from 'react-icons/md';
import useSend from '../../hooks/useSend';

const MsgInp = () => {
  const { isLoading, send } = useSend();
  const [msg, setMsg] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (msg) {
      const { rId } = await send(msg);
      if (rId) {
        setMsg('');
      }
    }
  };
  return (
    <form className="my-3 px-4" onSubmit={handleSubmit}>
      <div className="relative w-full">
        <input
          type="text"
          className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-white"
          placeholder="Send a msg..."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {isLoading ? (
            <span className="loading loading-spinner" />
          ) : (
            <MdSend className="text-white" />
          )}
        </button>
      </div>
    </form>
  );
};

export default MsgInp;
