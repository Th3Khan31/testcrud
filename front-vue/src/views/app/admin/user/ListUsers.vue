<template>
	<div>
		<section class="content-header">
			<div class="container-fluid">
				<div class="row mb-2">
					<div class="col-sm-6">
						<h1>Listado de Clientes</h1>
					</div>
					<div class="col-sm-6">
						<ol class="breadcrumb float-sm-right">
							<li class="breadcrumb-item"><router-link :to="{name: 'dashboard'}">Dashboard</router-link></li>
							<li class="breadcrumb-item active">Listado de Clientes</li>
						</ol>
					</div>
				</div>
			</div>
		</section>
		<loading :active.sync="processing" :can-cancel="false" :color="'#007bff'"></loading>
		<section class="content">
			<div class="card">
				<div class="card-header">
					<h3 class="card-title">Listados de Clientes</h3>
					<div class="card-tools">
						<b-button v-b-modal.modal-form-client variant="primary" size="sm" class="btn btn-primary mr-1 mb-1" ref="botton-new" @click="addNew()"><i class="fa fa-plus-square"></i> Agregar</b-button>
					</div>
				</div>
				<div class="card-body">
					<div class="row mb-3">
						<div class="col-12 col-sm-12 col-md-6 col-lg-6">
							<div class="row">
								<div class="col-12 col-md-12">
									<div class="row">
										<div class="col-12 col-sm-12 col-md-12">
											Status del usuario: 
										</div>
									</div>
									<select class="form-control" v-model="short_by_status" v-on:change="loadItems();">
										<option value="1">Activos</option>
										<option value="0">Inactivos</option>
									</select>
								</div>
							</div>
						</div>
						<div class="col-12 col-sm-12 col-md-6 col-lg-6">
							<div class="row">
								<div class="col-12 col-md-9">
									<div class="row">
										<div class="col-12 col-sm-12 col-md-12">
											Filtrar: 
										</div>
									</div>
									<input type="text" name="filter" v-model="filter" class="form-control" placeholder="Escriba para filtrar los resultados">
								</div>
								<div class="col-12 col-md-3">
									<div class="row">
										<div class="col-12 col-sm-12 col-md-12">
											Mostrar: 
										</div>
									</div>
									<select class="form-control" v-model="pagination.per_page" v-on:change="pagination.current_page = 1; loadItems();">
										<option value="10">10</option>
										<option value="15">15</option>
										<option value="20">20</option>
										<option value="50">50</option>
										<option value="75">75</option>
										<option value="100">100</option>
										<option value="150">150</option>
										<option value="300">300</option>
										<option value="500">500</option>
										<option value="1000">1000</option>
										<option :value="pagination.total+1">Todo</option>
									</select>
								</div>
							</div>
						</div>
					</div>
					<div class="row mt-1">
						<div class="table-responsive col-12 col-sm-12 col-md-12 col-lg-12">
							<datatable class="table table-hover table-hover-animation mb-0" :columns="columns" :data="clients" :filter="filter">
								<template slot-scope="{ row }">
									<tr>
										<td class="text-center">
											<img :src="row.image" width="100" />
										</td>
										<td class="text-center">{{ row.name }}</td>
										<td class="text-center">{{ row.email }}</td>
										<td class="text-center">{{ row.phone }}</td>
										<td class="text-center">
											<is-active :is_active="row.is_active"></is-active>
										</td>
										<td class="text-right" style="width: 10%; white-space: nowrap;">
											<b-button v-b-modal.modal-form-client variant="outline-warning" size="sm" class="mr-1 mb-1" ref="botton-edit" @click="viewItem(row)"><i class="fa fa-edit"></i></b-button>
											<b-button variant="outline-danger" size="sm" class="mr-1 mb-1" ref="botton-delete" @click="deleteItem(row)"><i class="fa fa-trash"></i></b-button>
										</td>
									</tr>
								</template>
							</datatable>							
						</div>
					</div>
				</div>
				<div class="card-footer">
					<div class="row">
						<div class="col-12 col-sm-12 col-md-6 col-lg-6">
							<span class="text-muted text-small mr-1 mb-2">Mostrando {{pagination.from}} a {{pagination.to}} de {{ pagination.total }} registros</span>
						</div>
						<div class="col-12 col-sm-12 col-md-6 col-lg-6">
							<b-pagination v-model="pagination.current_page" :total-rows="pagination.total" @input="loadItems()" :per-page="pagination.per_page" size="sm" align="right">
								<template slot="page"></template>
							</b-pagination>
						</div>
					</div>
				</div>
			</div>
			<modal-form-client :user="client" :countries="countries" v-on:save-success=" loadItems() "></modal-form-client>
		</section>
	</div>
</template>

<script type="text/javascript">
	import { mapActions, mapGetters } from "vuex";
	import StatusItem from '@/components/StatusItem';
	import Loading from 'vue-loading-overlay';
	import ModalFormClient from './ModalFormClient';

	export default {
		name: 'ListClients',
		components: {
			"is-active": StatusItem,
			'modal-form-client': ModalFormClient,
			Loading,
		},
		data() {
			return {
				loginError: false,
				clients: [],
				client: {},
				columns: [
				{label: 'Imagén', field: ''},
				{label: 'Nombres y Apellidos', field: 'name'},
				{label: 'Correo', field: 'email'},
				{label: 'Teléfono', field: 'phone'},
				{label: 'Status', field: 'is_active'},
				{label: '', field: ''},
				],
				offset: 3,
				filter: '',
				current_page: 1,
				short_by_status: '1',
				countries: [],
			};
		},
		created()
		{
			
		},
		methods: {
			...mapActions(["getAllWithPagination", "deleteData", "getData"]),
			loadItems(){
				var url = '/users/get-all-with-pagination';
				url += `?page=${this.pagination.current_page}&per_page=${this.pagination.per_page}`;
				url += '&short_by=is_active&is_active='+this.short_by_status;
				var params = {'url': url};
				this.getAllWithPagination(params)
				.then(response => {
					console.log(response.data.data);
					this.clients = [];
					for (var i = 0; i < response.data.data.length; i++) {
						var c = response.data.data[i]
						c['password'] = '';
						c['password2'] = '';
						this.clients.push(c);
					}
				})
				.catch(error => {
					console.log(error);
				});
			},
			addNew(){
				this.client = {
					id: '',
					name: '',
					email: '',
					phone: '',
					main_image: '',
					password: '',
					password2: '',
					is_active: 1,
					actionForm: 'save',
				}
			},
			viewItem(item){
				this.client = item;
				this.client.actionForm = 'update';
			},
			deleteItem(item)
			{
				var vm = this;
				this.$swal.fire({
					title: '¿Está seguro de eliminar el cliente?',
					text: "Se eliminará el cliente seleccionado de forma permanente.",
					icon: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Si, eliminar!'
				}).then((result) => {
					if (result.value) {
						this.deleteData({'url': '/users/delete/'+item.id})
						.then(function(){
							vm.$Toast.fire({
								icon: 'success',
								title: '¡Eliminado con éxito!'
							});
							vm.loadItems();
						}).catch(error => {
							vm.processing = false;
							console.log(error);
						});

					}
				});
			},
		},
		mounted(){
			this.loadItems();
		},
		computed: {
			...mapGetters({
				processing: "processingData",
				pagination: "pagination",
			})
		},
	}
</script>