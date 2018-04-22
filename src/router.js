import Vue from 'vue';
import VueRouter from 'vue-router';

import IndexPage from './components/IndexPage';
import AboutUsPage from './components/AboutUsPage';
import FaqPage from './components/FaqPage';
import DojoPage from './components/DojoPage';
import RoadMapPage from './components/RoadMapPage';
import RosterPage from './components/RosterPage';
import WhitePaperPage from './components/WhitePaperPage';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: IndexPage },
    { path: '/about-us', component: AboutUsPage },
    { path: '/dojo', component: DojoPage },
    { path: '/faq', component: FaqPage },
    { path: '/road-map', component: RoadMapPage },
    { path: '/roster', component: RosterPage },
    { path: '/white-paper', component: WhitePaperPage },
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

export default router;