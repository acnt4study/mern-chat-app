import MsgView from '../../components/msgview/MsgView';
import SideBar from '../../components/sidebar/SideBar';

const Home = () => {
  return (
    <div className="flex overflow-hidden rounded-lg bg-gray-400 bg-opacity-0 bg-clip-padding backdrop-blur-lg backdrop-filter sm:h-[450px] md:h-[550px]">
      <SideBar />
      <MsgView />
    </div>
  );
};

export default Home;
