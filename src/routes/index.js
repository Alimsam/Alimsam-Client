import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import MainNext from '@/components/MainNext'
import Meal from '@/components/Meal'
import Notice from '@/components/Notice'
import board from '@/components/board'
import Outting from '@/components/Outting'
import Moving from '@/components/Moving'


const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

Vue.use(Router)

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        { 
            path: '/info', 
            name: 'MainNext',
            component: MainNext
        },
        {
            path: '/meal',
            name: 'Meal',
            component: Meal,
        },
        {
            path: '/notice',
            name: 'Notice',
            component: Notice
        },
        {
            path: '/outting',
            name : 'Outting',
            component: Outting
        },
        {
            path: '/moving',
            name: 'Moving',
            component: Moving
        },
        {
            path: '/board',
            name: 'board',
            component: board
        }
    ]
})