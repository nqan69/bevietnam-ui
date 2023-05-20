import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HeaderOnly } from '../components/Layout';

import TrangChu from '../pages/TrangChu';
import NgayLe from '../pages/NgayLe';
import VanHoc from '../pages/VanHoc';
import Quiz from '../pages/Quiz';
import DaLuu from '../pages/DaLuu';

const publicRoutes = [
  { path: '/', component: TrangChu },
  { path: '/ngayle', component: NgayLe },
  { path: '/vanhoc', component: VanHoc },
  { path: '/quiz', component: Quiz },
  { path: '/daluu', component: DaLuu },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
