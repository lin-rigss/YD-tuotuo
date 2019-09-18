import Home from '@/views/Home'
import Index from '@/views/index/Index.vue'
// import ContactUs from '@/views/conact_us/ConnctUs.vue'
// import OperationProcess from '@/views/operation_process/OperationProcess.vue'
// import CommonProblem from '@/views/common_problem/CommonProblem.vue'
import TrainProcess from '@/views/train_process/TrainProcess.vue'
// import BridgeFinance from '@/views/bridge_finace/BridgeFinance.vue'
// import Header from '../views/layput/Header.vue'
const ContactUs = r => require.ensure([], () => r(require('@/views/conact_us/ConnctUs.vue')), 'ContactUs')
const Header = r => require.ensure([], () => r(require('../views/layput/Header.vue')), 'Header')
const CommonProblem = r => require.ensure([], () => r(require('@/views/common_problem/CommonProblem.vue')), 'CommonProblem')
const BridgeFinance = r => require.ensure([], () => r(require('@/views/bridge_finace/BridgeFinance.vue')), 'BridgeFinance')
const ServiceCase = r => require.ensure([], () => r(require('@/views/service_case/ServiceCase.vue')), 'ServiceCase')
const AboutUs = r => require.ensure([], () => r(require('@/views/about_us/AboutUs.vue')), 'AboutUs')

const TransportCar = r => require.ensure([], () => r(require('@/views/transport_car/TransportCar.vue')), 'TransportCar')
const TuoNews = r => require.ensure([], () => r(require('@/views/tuo_news/TuoNews.vue')), 'TuoNews')
const NewsDetail = r => require.ensure([], () => r(require('@/views/tuo_news/NewsDetail.vue')), 'newsDetail')
const OrderSuccess = r => require.ensure([], () => r(require('@/views/order_success/OrderSuccess.vue')), 'OrderSuccess')





let routes = [{
  path: '/',
  redirect: '/index'
},
{
  path: '/index',
  name: 'Index',
  component: Index
},
{
  path: '/home',
  name: 'home',
  component: Home
},
{
  path: '/',
  // name: 'header',
  component: Header,
  children: [{
    path: '/servicecase',
    name: 'ServiceCase',
    component: ServiceCase
  }]
},
{
  path: '/',
  // name: 'header',
  component: Header,
  children: [{
    path: '/ordersuccess',
    name: 'OrderSuccess',
    component: OrderSuccess
  }]
},
{
  path: '/',
  // name: 'header',
  component: Header,
  children: [{
    path: '/transportcar',
    name: 'TransportCar',
    component: TransportCar
  }]
},
{
  path: '/',
  // name: 'header',
  component: Header,
  children: [{
    path: '/tuonews',
    name: 'TuoNews',
    component: TuoNews
  }]
},
{
  path: '/',
  // name: 'header',
  component: Header,
  children: [{
    path: '/newsdetail',
    name: 'newsDetail',
    component: NewsDetail
  }]
},
{
  path: '/',
  // name: 'header',
  component: Header,
  children: [{
    path: 'contactus',
    name: 'ContactUs',
    component: ContactUs
  }]
},
{
  path: '/',
  // name: 'header',
  component: Header,
  children: [{
    path: 'about_us',
    name: 'aboutus',
    component: AboutUs
  }]
},
{
  path: '/',
  // name: 'header',
  component: Header,
  children: [{
    path: '/commonproblem',
    name: 'commonproblem',
    component: CommonProblem
  }]
},
{
  path: '/',
  // name: 'header',
  component: Header,
  children: [{
    path: 'trainprocess',
    component: TrainProcess
  }]
},
{
  path: '/',
  // name: 'header',
  component: Header,
  children: [{
    path: '/bridgefinace',
    name: 'bridgefinace',
    component: BridgeFinance
  }]

}
]

export default routes
