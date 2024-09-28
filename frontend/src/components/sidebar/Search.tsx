import { useState } from 'react';
import toast from 'react-hot-toast';
import { MdOutlinePersonSearch } from 'react-icons/md';

const Search = () => {
  const [search, setSearch] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      return;
    }
    if (search.length < 3) {
      return toast.error('Need at least 3 chars to search...');
    }
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-circle bg-sky-500 text-white hover:text-sky-500"
      >
        <MdOutlinePersonSearch className="h-6 w-6" />
      </button>
    </form>
  );
};

export default Search;
