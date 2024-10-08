import { getRandomEmoji } from '../../utils/emojis';
import { selectPerson } from './PeopleSlice';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { resetMessgaes } from '../msgview/MessagesSlice';
import { useSocketContext } from '../../context/SocketContext';

const Person = ({ data, isLast }) => {
  const selected = useAppSelector((state) => state.people.selected);
  const dispatch = useAppDispatch();
  const { onlineUsers } = useSocketContext();
  const handleSelect = (p) => {
    if (p.id !== selected) {
      resetMessgaes();
      dispatch(selectPerson(p));
    }
  };
  return (
    <>
      <div
        className={`flex cursor-pointer items-center gap-2 rounded p-2 py-1 hover:bg-sky-500 ${selected === data._id ? 'bg-black' : ''}`}
        onClick={() => handleSelect({ id: data._id, pic: data.profilePic })}
      >
        <div
          className={`avatar ${onlineUsers.includes(data._id) ? 'online' : ''}`}
        >
          <div className="w-12 rounded-full">
            <img src={data.profilePic} alt="avatar" />
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex justify-between gap-3">
            <p className="font-bold text-white">{data.userName}</p>
            <span className="text-xl">{getRandomEmoji()}</span>
          </div>
        </div>
      </div>
      {!isLast && <div className="divider my-0 h-1 py-0" />}
    </>
  );
};

export default Person;
