import toast from 'react-hot-toast';
import { useAppDispatch } from '../redux/hooks';

const useSearch = () => {
  const dispatch = useAppDispatch();

  const search = async () => {
    try {
      //dispatch();
    } catch (e) {
      toast.error(e.message);
    }
  };

  return search;
};

export default useSearch;
