import Login from './modules/Login/Containers/Login';
import Home from './modules/Home/Containers/Home';
import CoursesContainer from './modules/Courses/Containers/CoursesContainer'
import FeaturesContainer from './modules/Features/Containers/FeaturesContainer'
export const routes = [
    {
        isExact: true,
        path: '/',
        component: Login,
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/Courses',
        component: CoursesContainer,
    },
    {
        path: '/Features',
        component: FeaturesContainer,
    }
];
