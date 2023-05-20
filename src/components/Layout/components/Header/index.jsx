import Logo from '~/assets/images/logo.png';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <nav className="flex items-center justify-between mx-4 max-h-14">
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <div>
        <div className="text-2xl font-semibold p-3 ">BeVietNam</div>
      </div>
      <div>
        <FaUserCircle size={'2rem'} className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Header;
