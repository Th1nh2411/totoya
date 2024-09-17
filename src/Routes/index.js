import Home from '../Pages/Home';
import AboutUsPage from '../Pages/AboutUsPage';
import UsedCarPage from '../Pages/UsedCarPage';
import CoursePage from '../Pages/CoursePage';
import MentorPage from '../Pages/MentorPage';
import config from '../config';
import DetailCar from '../Pages/DetailCar';

export const privateRoutes = [];
export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.aboutUs, component: AboutUsPage },
    { path: config.routes.usedCar, component: UsedCarPage },
    { path: config.routes.detailUsedCar, component: DetailCar },
    { path: config.routes.banking, component: CoursePage },
    { path: config.routes.utility, component: UsedCarPage },
];
