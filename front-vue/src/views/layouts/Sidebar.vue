<template>
	<!-- Main Sidebar Container -->
	<aside class="main-sidebar sidebar-dark-primary elevation-4">
		<!-- Brand Logo -->
		<router-link :to="{name: 'dashboard'}" class="brand-link">
			<img src="../../assets/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
			<span class="brand-text font-weight-light">Administrador</span>
		</router-link>
		<!-- Sidebar -->
		<div class="sidebar">
			<!-- Sidebar user (optional) -->
			<div class="user-panel mt-3 pb-3 mb-3 d-flex">
				<div class="image">
					<img :src="user.image" class="img-circle elevation-2" alt="User Image">
				</div>
				<div class="info">
					<a href="javascript:void(0)" class="d-block">{{ user.name }}</a>
				</div>
			</div>

			<!-- SidebarSearch Form -->
			<div class="form-inline">
				<div class="input-group" data-widget="sidebar-search">
					<input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
					<div class="input-group-append">
						<button class="btn btn-sidebar">
							<i class="fas fa-search fa-fw"></i>
						</button>
					</div>
				</div>
			</div>

			<!-- Sidebar Menu -->
			<nav class="mt-2">
				<ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
					<li class="nav-item">
						<router-link :to="{name: 'dashboard'}" class="nav-link">
							<i class="nav-icon fas fa-tachometer-alt"></i>
							<p>
								Dashboard
							</p>
						</router-link>
					</li>
					<li class="nav-header">APP</li>
					<li class="nav-item">
						<router-link :to="{name: 'users'}" class="nav-link">
							<i class="nav-icon fas fa-users"></i>
							<p>
								Usuarios
							</p>
						</router-link>
					</li>
					<li class="nav-item">
						<router-link :to="{name: 'users-profile', params: {id: user.id}}" class="nav-link">
							<i class="nav-icon fas fa-user"></i>
							<p>
								Perfil
							</p>
						</router-link>
					</li>
				</ul>
			</nav>
			<!-- /.sidebar-menu -->
		</div>
		<!-- /.sidebar -->
	</aside>
</template>
<script>
	import { AppUrl } from '@/constants/config-app';
	import {
		mapGetters,
	} from "vuex";
	export default {
		name: 'Aside',
		data(){
			return {
				app_url: AppUrl,
			}
		},
		computed: {
			...mapGetters({
				user: "currentUser",
			})
		},
	};
</script>