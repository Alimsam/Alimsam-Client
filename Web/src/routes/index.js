import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/People'
import Fullcalender from '@/components/Calender'
import School from '@/components/School'


Vue.use(Router)

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/calender',
            name: 'calender',
            component: Fullcalender
        },
        {
            path: '/school',
            name: 'school',
            component: School
        }
    ]
})