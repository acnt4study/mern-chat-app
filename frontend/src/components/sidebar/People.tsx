import { Fragment } from 'react/jsx-runtime';
import { useAppSelector } from '../../redux/hooks';
import PeopleSkeleton from '../skeleton/PeopleSkeleton';
import Person from './Person';

const People = () => {
  const people = useAppSelector((state) => state.people);
  const lastIdx = people.people.length - 1;
  return (
    <div
      className={`flex flex-1 flex-col ${people.isLoading ? 'items-center justify-center' : ''} overflow-auto py-2 scrollbar-thin`}
    >
      {people.isLoading
        ? [...Array(4)].map((_, i) => (
            <Fragment key={i}>
              <PeopleSkeleton />
              {i !== 3 && <div className="divider mt-2 h-1 py-0" />}
            </Fragment>
          ))
        : people.people.map((p, i) => (
            <Person key={p._id} data={p} isLast={lastIdx === i} />
          ))}
    </div>
  );
};

export default People;
