<template>
	<div>
		<section class="content-header">
			<div class="container-fluid">
				<div class="row mb-2">
					<div class="col-sm-6">
						<h1>404 Error </h1>
					</div>
				</div>
			</div><!-- /.container-fluid -->
		</section>
		<section class="content mt-4">

			<!-- Default box -->
			<div class="card">
				<div class="card-body">
					<div class="error-page">
						<h2 class="headline text-warning"> 404</h2>

						<div class="error-content">
							<h3><i class="fas fa-exclamation-triangle text-warning"></i> Oops! Página no encontrada.</h3>

							<p>
								No pudimos encontrar la página que buscaba.
								Mientras tanto, puedes <router-link :to="{name: 'dashboard'}" >regresar al Dashboard</router-link>
							</p>
						</div>
						<!-- /.error-content -->
					</div>
				</div>
			</div>
			<!-- /.card -->

		</section>
	</div>
</template>
<script>
	export default {
		name: 'Error',
	};
</script>
