import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
	{
		path: '',
		component: () => import('./views/app/admin'),
		redirect: '/dashboard',
		meta: {requiresRoot: false, title: 'Dashboard'},
	},
	{
		path: '/me',
		component: () => import("./views/app/me"),
		name: 'me',
		meta: {requiresRoot: false, title: 'Comprobando Identidad'},
	},
	{
		path: '/',
		component: () => import('./views/app/admin'),
		redirect: '/dashboard',
		children: [
			{
				path: 'dashboard',
				component: () => import("./views/app/dashboard"),
				name: 'dashboard',
				meta: {requiresRoot: false, requiresAuth: true, requiresVisitor: false, title: 'Dashboard'},
			},
			{
				path: 'users',
				component: () => import('./views/app/admin/user'),
				redirect: '/users/list',
				children: [
					{
						path: 'list',
						component: () => import('./views/app/admin/user/ListUsers'),
						name: 'users',
						meta: {requiresRoot: false, requiresAuth: true, requiresVisitor: false, title: 'Listado de Usuarios', menuParent: 'users'},
					},
					{
						path: 'profile/:id',
						component: () => import('./views/app/admin/user/Profile'),
						name: 'users-profile',
						meta: {requiresRoot: false, requiresAuth: true, requiresVisitor: false, title: 'Perfil de usuario', menuParent: 'users'},
					}
				]
			},
			{
				path: "/error",
				component: () => import("./views/Error"),
				meta: {requiresRoot: false, requiresAuth: true, requiresVisitor: false, title: 'Error'}
			},
			{
				path: "*",
				component: () => import("./views/Error"),
				meta: {requiresRoot: false, requiresAuth: true, requiresVisitor: false, title: 'Error'}
			},
		]
	},
	{
		path: "/auth",
		component: () => import("./views/app/auth"),
		redirect: "/auth/login",
		children: [
		{
			path: "login",
			component: () => import("./views/app/auth/Login"),
			name: 'auth-login',
			meta: {requiresRoot: false, requiresVisitor: true, requiresAuth: false, title: 'Login'}
		},
		{
			path: "logout",
			component: () => import("./views/app/auth/Logout"),
			name: 'auth-logout',
			meta: {requiresRoot: false, requiresAuth: true, requiresVisitor: false, title: 'Logout'}
		},
		]
	},
];
const router = new VueRouter({
    linkActiveClass: "active",
    routes,
    mode: "history"
});
export default router;