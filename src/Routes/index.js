import Home from '../Pages/Home';
import AboutUsPage from '../Pages/AboutUsPage';
import UsedCarPage from '../Pages/UsedCarPage';
import BankPage from '../Pages/BankPage';
import config from '../config';
import DetailCar from '../Pages/DetailCar';
import UtilityPage from '../Pages/UtilityPage';

export const privateRoutes = [];
export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.aboutUs, component: AboutUsPage },
    { path: config.routes.usedCar, component: UsedCarPage },
    { path: config.routes.detailUsedCar, component: DetailCar },
    { path: config.routes.banking, component: BankPage },
    { path: config.routes.utility, component: UtilityPage },
];
