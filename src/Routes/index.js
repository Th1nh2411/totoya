import Home from '../Pages/Home';
import AboutUsPage from '../Pages/AboutUsPage';
import UsedCarPage from '../Pages/UsedCarPage';
import BankPage from '../Pages/BankPage';
import config from '../config';
import DetailCar from '../Pages/DetailCar';
import UtilityPage from '../Pages/UtilityPage';
import LoginPage from '../Pages/AuthPage/Login';
import AdminCar from '../Pages/AdminPages/AdminCar';
import AdminLayout from '../layout/AdminLayout/AdminLayout';
import AdminUser from '../Pages/AdminPages/AdminUser';
import AdminBanner from '../Pages/AdminPages/AdminBanner';

export const allRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.aboutUs, component: AboutUsPage },
    { path: config.routes.usedCar, component: UsedCarPage },
    { path: config.routes.detailUsedCar, component: DetailCar },
    { path: config.routes.banking, component: BankPage },
    { path: config.routes.utility, component: UtilityPage },
    { path: config.routes.loginAdmin, component: LoginPage, layout: null },
    { path: config.routes.admin, component: AdminCar, layout: AdminLayout, auth: true },
    { path: config.routes.carAdmin, component: AdminCar, layout: AdminLayout, auth: true },
    { path: config.routes.userAdmin, component: AdminUser, layout: AdminLayout, auth: true },
    { path: config.routes.bannerAdmin, component: AdminBanner, layout: AdminLayout, auth: true },
];
