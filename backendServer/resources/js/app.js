
import Vue from 'vue';
import Vuetify from 'vuetify';
import Routes from './routes';
import App from '../views/App';
Vue.use(Vuetify);
require('./bootstrap');

window.Vue = require('vue');


// Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const app = new Vue({
    el: '#app',
    router: Routes,
    render: h => h(App),
});

export default app;
