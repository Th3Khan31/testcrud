import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import store from './store'
import jQuery from 'jquery';
import VueSweetalert2 from 'vue-sweetalert2';
import { VuejsDatatableFactory } from 'vuejs-datatable';
Vue.use( VuejsDatatableFactory );
Vue.config.productionTip = false
Vue.use(BootstrapVue);
window.$ = window.jQuery = jQuery

Vue.use(VueSweetalert2);
var Toast_ = Vue.prototype.$Toast = Vue.swal.mixin({
	toast: true,
	position: 'top-end',
	showConfirmButton: false,
	timer: 3000,
	timerProgressBar: true,
	onOpen: (toast) => {
		toast.addEventListener('mouseenter', Vue.swal.stopTimer)
		toast.addEventListener('mouseleave', Vue.swal.resumeTimer)
	}
});
router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth) {
		if (store.getters.loggedIn && store.getters.isTokenValid) {
			if (to.meta.requiresRoot) {
				if (store.getters.currentUser.type == 'root') {
					next();
				} else {
					Toast_.fire({
						icon: 'error',
						title: 'Acceso No permitido',
					});
					router.push({name: 'dashboard'});
				}
			} else {
				next();
			}
		} else if (store.getters.isTokenValid == 'refresh') {
			store.dispatch('refreshToken');
			next();
		} else {
			store.dispatch('destroyToken');
			router.push({name: 'auth-login'});
		}
	} else if(to.meta.requiresVisitor){
		if(store.getters.loggedIn){
			router.push({name: 'dashboard'});
		} else {
			next();
		}
	} else {
		next();
	}
});
new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')