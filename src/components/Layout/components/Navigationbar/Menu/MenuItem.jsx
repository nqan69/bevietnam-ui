import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function MenuItem({ title, to, icon }) {
  return (
    <NavLink
      className="max-w-[76px] p-3 mt-4 ml-2 flex-col items-center flex text-xs rounded-3xl hover:bg-themecolor-100"
      to={to}
    >
      {icon}
      <span className="">{title}</span>
    </NavLink>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default MenuItem;
