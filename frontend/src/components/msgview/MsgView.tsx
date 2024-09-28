import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import Messages from './Messages';
import MsgInp from './MsgInp';
import Welcome from './Welcome';
import { useEffect } from 'react';
import { fetchMessages } from './MessagesSlice';

const MsgView = () => {
  const selected = useAppSelector((state) => state.people.selected);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (selected) {
      dispatch(fetchMessages());
    }
  }, [dispatch, selected]);
  return (
    <div className="flex flex-col md:min-w-[450px]">
      {!selected ? (
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
