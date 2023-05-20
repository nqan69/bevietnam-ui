import config from '~/config';
import Menu, { MenuItem } from './Menu';

import { TbHome2, TbFlag3, TbBook, TbBulb, TbBookmark } from 'react-icons/tb';

function Navbar() {
  return (
    <aside className="w-24 bg-white">
      <Menu>
        <MenuItem title="Trang chủ" to={config.routes.TrangChu} icon={<TbHome2 size={30} />} />
        <MenuItem title="Ngày lễ" to={config.routes.NgayLe} icon={<TbFlag3 size={30} />} />
        <MenuItem title="Văn học" to={config.routes.VanHoc} icon={<TbBook size={30} />} />
        <MenuItem title="Quiz" to={config.routes.Quiz} icon={<TbBulb size={30} />} />
        <MenuItem title="Đã lưu" to={config.routes.DaLuu} icon={<TbBookmark size={30} />} />
      </Menu>
    </aside>
  );
}

export default Navbar;
