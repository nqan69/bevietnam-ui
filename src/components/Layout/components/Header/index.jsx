import Logo from '~/assets/images/logo.png';

import { FaUserCircle } from 'react-icons/fa';
import { IoIosCloseCircle } from 'react-icons/io';
import { CgSearch } from 'react-icons/cg';

const Header = () => {
  return (
    <header className="top-0 fixed py-2 flex items-center justify-between w-full bg-white">
      <img className="ml-5 object-scale-down h-14 w-14" src={Logo} alt="Logo" />

      <div className="relative text-sm flex items-center text-gray-400 focus-within:text-gray-600 bottom-1.5 left-2 w-full max-w-md">
        <button>
          <CgSearch className="absolute bottom-1.5 left-3 w-5 h-5 pointer-events-none" />
        </button>
        <input
          placeholder="Tìm kiếm bài viết, ngày lễ, ..."
          className="w-full mt-4 pr-8 pl-12 py-2 font-semibold placeholder-gray-500 text-black
                    rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:outline-none"
        />
        <button>
          <IoIosCloseCircle className="absolute bottom-2.5 right-2" />
        </button>
      </div>

      <div>
        <FaUserCircle size={'2.25rem'} className="mr-5 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
