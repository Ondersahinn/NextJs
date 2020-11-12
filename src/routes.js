
import {ProgressBar} from 'react-bootstrap';
import Dasboard from './views/Dashboard';
import ArticleDetail from './components/ArticleDetail';
import Contact from './views/Contact';
import Contributors from './components/Contributors';

export const accountRoutes = [
    {
        path: '/',
        name: 'Home',
        icon: ProgressBar,
        component: Dasboard,
        layout: '/home',
    },
    {
        path: '/iletisim',
        name: 'Contact',
        icon: ProgressBar,
        component: Contact,
        layout: '/home',
    },
    {
        path: '/articles/:id',
        name: 'Detail',
        icon: ProgressBar,
        component: ArticleDetail,
        layout: '/home',
    },
    {
        path: '/contributors',
        name: 'Contributors',
        icon: ProgressBar,
        component: Contributors,
        layout: '/home',
    },
 
]

