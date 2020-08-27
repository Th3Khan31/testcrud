<template>
	<div>
		<!-- Content Header (Page header) -->
		<section class="content-header">
			<div class="container-fluid">
				<div class="row mb-2">
					<div class="col-sm-6">
						<h1>Dashboard</h1>
					</div>
					<div class="col-sm-6">
						<ol class="breadcrumb float-sm-right">
							<li class="breadcrumb-item active">Dashboard</li>
						</ol>
					</div>
				</div>
			</div><!-- /.container-fluid -->
		</section>
		<loading :active.sync="processing" :can-cancel="false" :color="'#007bff'"></loading>
		<!-- Main content -->
		<section class="content">

			<!-- Default box -->
			<div class="card">
				<div class="card-header">
					<h3 class="card-title">Bienvenido</h3>

					<div class="card-tools">
						<button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
							<i class="fas fa-minus"></i>
						</button>
						<button type="button" class="btn btn-tool" data-card-widget="remove" title="Remove">
							<i class="fas fa-times"></i>
						</button>
					</div>
				</div>
				<div class="card-body">
					Hola {{ user.name }}!
				</div>
			</div>
			<!-- /.card -->

		</section>
		<!-- /.content -->
	</div>
</template>
<script>
	import Loading from 'vue-loading-overlay';
	import {
		mapGetters,
	} from "vuex";
	export default {
		name: 'Dashboard',
		components: {
			Loading,
		},
		computed: {
			...mapGetters({
				user: "currentUser",
				processing: "processingData",
			}),
		},
	};
</script>
