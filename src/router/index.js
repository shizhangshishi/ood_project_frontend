import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

import Login from '../views/Login'
import Register from '../views/Register'

import Audit from '../views/role/Audit'
import Market from '../views/role/Market'
import Expert from '../views/role/Expert'

import Executives from "../components/role/audit/executives/Executives";
import Products from "../components/role/audit/products/Products";
import AuditTasks from "../components/role/audit/auditTasks/AuditTasks";
import Default from "../components/role/Default";
import Executive from "../views/executive/Executive";
import AuditTask from "../views/task/AuditTask";
import MarketReports from "../components/role/market/reports/MarketReports";
import MarketReport from "../views/report/MarketReport";
import ExpertReport from "../views/report/ExpertReport";
import ExpertReports from "../components/role/expert/reports/ExpertReports"
import SubMarketReport from "../views/report/SubMarketReport";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/audit',
    name: 'Audit',
    component: Audit,
    children: [
      {
        path: '',
        name: 'Default',
        component: Default
      },
      {
        path: 'products',
        name: 'Products',
        component: Products
      },
      {
        path: 'executives',
        name: 'Executives',
        component: Executives
      },
      {
        path: 'audittasks',
        name: 'AuditTasks',
        component: AuditTasks
      }
    ]
  },
  {
    path: '/expert',
    name: 'Expert',
    component: Expert,
    children: [
      {
        path: '',
        name: 'Default',
        component: Default
      },
      {
        path: 'expertreports',
        name: 'ExpertReports',
        component: ExpertReports
      },
    ]
  },
  {
    path: '/market',
    name: 'Market',
    component: Market,
    children: [
      {
        path: '',
        name: 'Default',
        component: Default
      },
      {
        path: 'marketreports',
        name: 'MarketReports',
        component: MarketReports
      },
    ]
  },
  {
    path: '/executive/:name',
    name: 'Executive',
    component: Executive
  },
  {
    path: '/auditTask/:id',
    name: 'AuditTask',
    component: AuditTask
  },
  {
    path: '/marketreport/:id',
    name: 'MarketReport',
    component: MarketReport
  },
  {
    path: '/expertreport/:id',
    name: 'ExpertReport',
    component: ExpertReport
  },
  {
    path: '/submarketreport/:id',
    name: 'SubMarketReport',
    component: SubMarketReport
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
