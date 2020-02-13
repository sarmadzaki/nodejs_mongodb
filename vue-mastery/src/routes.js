// import App from './App.vue';
const Home = { template: '<p>HOME Component</p>'}
const Todo = { template: '<p>Todo Component</p>'}
import HelloWorld from './components/HelloWorld.vue';
export default [
  {path: '/todo', component: Todo },
  {path: '/home', component: Home },
  {path: '/', component: HelloWorld },
];