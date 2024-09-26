import { MdOutlinePersonSearch } from 'react-icons/md';

const Search = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
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
