import Header from '../components/Header';
import Sidebar from './Sidebar';
import Navbar from '../components/Navigationbar';

function DefaultLayout({ children }) {
  return (
    <div className="m-0 p-0 flex flex-col items-center">
      <Header />
      <div className="mt-20 flex justify-between w-full min-h-[1000px] bg-slate-400">
        <Navbar />
        <div className="content">{children}</div>
        <Sidebar />
      </div>
    </div>
  );
}

export default DefaultLayout;
