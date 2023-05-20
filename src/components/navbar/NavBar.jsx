import { AiOutlineMenu } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between pb-4">
      <ul className="">
        <AiOutlineMenu size={'2rem'} className="cursor-pointer" />
      </ul>
      <div>
        <div className="text-2xl font-semibold p-3 ">BeVietNam</div>
      </div>
      <div>
        <FaUserCircle size={'2rem'} className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default NavBar;
