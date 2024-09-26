import LogoutBtn from './LogoutBtn';
import People from './People';
import Search from './Search';

const SideBar = () => {
  return (
    <div className="flex flex-col border-r border-slate-500 p-4">
      <Search />
      <div className="divider px-3"></div>
      <People />
      <LogoutBtn />
    </div>
  );
};

export default SideBar;
