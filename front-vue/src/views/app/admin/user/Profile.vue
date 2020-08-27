<template>
	<div>
		<section class="content-header">
			<div class="container-fluid">
				<div class="row mb-2">
					<div class="col-sm-6">
						<h1>Editar Perfil</h1>
					</div>
					<div class="col-sm-6">
						<ol class="breadcrumb float-sm-right">
							<li class="breadcrumb-item"><router-link :to="{name: 'dashboard'}">Dashboard</router-link></li>
							<li class="breadcrumb-item active">Editar Perfil</li>
						</ol>
					</div>
				</div>
			</div>
		</section>
		<loading :active.sync="processing" :can-cancel="false" :color="'#007bff'"></loading>
		<section class="content">
			<form @submit.prevent="saveItem" id="form-create-article" class="form form-vertical">
				<div class="row">
					<div class="col-12 col-sm-12 col-md-12 col-lg-12">
						<div class="card">
							<div class="card-body">
								<div class="mb-3">
									<div class="form-body">
										<div class="row">
											<div class="col-12 col-sm-12 col-md-6 col-lg-6">
												<div class="form-group" >
													<label>Imagén de perfil (*)</label>
													<div class="input-group mb-3">
														<vue-dropzone ref="main_image" id="main_image" name="main_image" style="width: 100%; margin: 0 auto; text-align: center; height: 214px;" :options="dropzoneOptions" v-on:vdropzone-error="mainImageError" v-on:vdropzone-success="mainImageAddSuccess" v-on:vdropzone-removed-file="removeMainImage" :class="[$v.user.main_image.$anyError ? 'is-invalid' : '', $v.user.main_image.$anyError && $v.user.main_image.$model != '' ? 'is-valid' : '']"></vue-dropzone>
														<b-form-invalid-feedback v-if="!$v.user.main_image.required">Debe completar la imagén principal del producto</b-form-invalid-feedback>
													</div>
												</div>
											</div>
											<div class="col-12 col-sm-12 col-md-6 col-lg-6">
												<div class="form-group" >
													<label>Nombre (*)</label>
													<div class="input-group mb-3">
														<input type="text" name="name" class="form-control" placeholder="Ingrese su nombre" v-model="$v.user.name.$model" :state="!$v.user.name.$error" :class="[$v.user.name.$anyError ? 'is-invalid' : '', $v.user.name.$anyError && $v.user.name.$model != '' ? 'is-valid' : '']">
														<div class="input-group-append">
															<div class="input-group-text">
																<span class="fas fa-font"></span>
															</div>
														</div>
														<b-form-invalid-feedback v-if="!$v.user.name.required">El campo debe ser completado</b-form-invalid-feedback>
														<b-form-invalid-feedback v-if="!$v.user.name.maxLength">El campo debe ser menor a 50 carácteres</b-form-invalid-feedback>
													</div>
												</div>
												<div class="form-group" >
													<label>Email (*)</label>
													<div class="input-group mb-3">
														<input type="email" name="email" class="form-control" placeholder="Ingrese su email" v-model="$v.user.email.$model" :state="!$v.user.email.$error" :class="[$v.user.email.$anyError ? 'is-invalid' : '', $v.user.email.$anyError && $v.user.email.$model != '' ? 'is-valid' : '']">
														<div class="input-group-append">
															<div class="input-group-text">
																<span class="fas fa-envelope-open-text"></span>
															</div>
														</div>
														<b-form-invalid-feedback v-if="!$v.user.email.required">El campo debe ser completado</b-form-invalid-feedback>
														<b-form-invalid-feedback v-if="!$v.user.email.email">El correo electrónico es válido</b-form-invalid-feedback>
													</div>
												</div>
												<div class="form-group" >
													<label>Teléfono (*)</label>
													<div class="input-group mb-3">
														<input type="text" name="phone" class="form-control" placeholder="Ingrese su Número de teléfono" v-model="$v.user.phone.$model" :state="!$v.user.phone.$error" :class="[$v.user.phone.$anyError ? 'is-invalid' : '', $v.user.phone.$anyError && $v.user.phone.$model != '' ? 'is-valid' : '']">
														<div class="input-group-append">
															<div class="input-group-text">
																<span class="fas fa-phone"></span>
															</div>
														</div>
														<b-form-invalid-feedback v-if="!$v.user.phone.required">El campo debe ser completado</b-form-invalid-feedback>
													</div>
												</div>
											</div>
										</div>
										<div class="row">
											<div class="col-md-12">
												<div class="icheck-primary">
													<input type="checkbox" id="change_password" name="change_password" v-model="change_password">
													<label for="change_password">
														Cambiar Contraseña
													</label>
												</div>
											</div>
											<template v-if="change_password">
												<div class="col-12 col-sm-12 col-md-6 col-lg-6">
													<div class="form-group" >
														<label>Nueva contraseña (*)</label>
														<div class="input-group mb-3">
															<input type="password" name="password" class="form-control" placeholder="Ingrese su nueva contraseña" v-model="$v.user.password.$model" :state="!$v.user.password.$error" :class="[$v.user.password.$anyError ? 'is-invalid' : '', $v.user.password.$anyError && $v.user.password.$model != '' ? 'is-valid' : '']">
															<div class="input-group-append">
																<div class="input-group-text">
																	<span class="fas fa-lock"></span>
																</div>
															</div>
															<b-form-invalid-feedback v-if="!$v.user.password.required">El campo debe ser completado</b-form-invalid-feedback>
															<b-form-invalid-feedback v-if="!$v.user.password.minLength">La contraseña debe tener un mínimo de 6 carácteres</b-form-invalid-feedback>
															<b-form-invalid-feedback v-if="!$v.user.password.maxLength">La contraseña debe tener un máximo de 10 carácteres</b-form-invalid-feedback>
														</div>
													</div>
												</div>
												<div class="col-12 col-sm-12 col-md-6 col-lg-6">
													<div class="form-group" >
														<label>Confirmar contraseña (*)</label>
														<div class="input-group mb-3">
															<input type="password" name="whatsapp" class="form-control" placeholder="Confirme su nueva contraseña" v-model="$v.user.password2.$model" :state="!$v.user.password2.$error" :class="[$v.user.password2.$anyError ? 'is-invalid' : '', $v.user.password2.$anyError && $v.user.password2.$model != '' ? 'is-valid' : '']">
															<div class="input-group-append">
																<div class="input-group-text">
																	<span class="fas fa-lock"></span>
																</div>
															</div>
															<b-form-invalid-feedback v-if="!$v.user.password2.required">El campo debe ser completado</b-form-invalid-feedback>
															<b-form-invalid-feedback v-if="!$v.user.password2.sameAsPassword">La contraseña no coinciden</b-form-invalid-feedback>
														</div>
													</div>
												</div>
											</template>
											<div class="col-12 col-sm-12 col-md-12 col-lg-12">
												<div class="alert alert-primary" role="alert">
													<h4 class="alert-heading">IMPORTANTE: </h4>
													<p class="mb-0">
														Todos los campos con (*) deben ser completados
													</p>
												</div>
											</div>
											<div class="col-md-12">
												<b-button type="submit" variant="outline-primary" class="float-right" @click="saveItem()" :disabled="processing == true">
													<template v-if="!processing">
														Guardar
													</template>
													<template v-if="processing">
														<i class="fa fa-spinner fa-spin"></i>
													</template>
												</b-button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</section>
	</div>
</template>

<script type="text/javascript">
	import jQuery from 'jquery';
	import { mapGetters, mapActions } from "vuex";
	import Loading from 'vue-loading-overlay';
	import { validationMixin } from "vuelidate";
	import { required, maxLength, email, minLength, sameAs } from "vuelidate/lib/validators";
	import vue2Dropzone from 'vue2-dropzone'
	import 'vue2-dropzone/dist/vue2Dropzone.min.css'
	import { apiUrl } from '../../../../constants/config-app';
	export default {
		name: 'ProfileUser',
		data(){
			return {
				user: {
					id: '',
					name: '',
					email: '',
					phone: '',
					main_image: '',
					password: '',
					password2: '',
				},
				change_password: 0,
				dropzoneOptions: {
					url: apiUrl+'/upload-image',
					// previewTemplate: this.template(),
					thumbnailWidth: 200,
					maxFilesize: 2,
					acceptedFiles: 'image/png, image/jpg, image/jpeg, image/svg, image/webp',
					dictDefaultMessage: "<i class='fas fa-upload'></i> Seleccionar Imagén principal",
					addRemoveLinks: true,
					maxFiles: 1,
					paramName: 'main_image',
					dictFileTooBig: "La imagén seleccionada pesa ({{filesize}}MiB). el max. permitido es de: {{maxFilesize}}MiB.",
					dictInvalidFileType: "Solo se acepta imagenes PNG, JPEG, JPG, SVG",
					dictRemoveFile: "Eliminar Imagén",
				},
			}
		},
		mixins: [validationMixin],
		validations() {
			if (this.change_password) {
				return {
					user: {
						name: {required, maxLength: maxLength(50)},
						email: {required, email},
						phone: {required},
						main_image: {required},
						password: {
							required,
							minLength: minLength(6),
							maxLength: maxLength(10),
						},
						password2: {
							required,
							sameAsPassword: sameAs('password')
						}
					}
				}
			} else {
				return {
					user: {
						name: {required, maxLength: maxLength(50)},
						email: {required, email},
						phone: {required},
						main_image: {required},
					}
				}
			}
			
		},
		components: {
			Loading,
			vueDropzone: vue2Dropzone,
		},
		created()
		{
			this.getUserById();
		},
		methods: {
			...mapActions(['getUser', 'getData', 'updateData', 'getUserLogin']),
			getUserById()
			{
				this.getUser().then(response => {
					this.user.id = response.data.id;
					this.user.name = response.data.name;
					this.user.email = response.data.email;
					this.user.phone = response.data.phone;
					var file = { size: response.data.size_image, name: response.data.name, type: response.data.type_image };
					this.$refs.main_image.manuallyAddFile(file, response.data.image);
					this.user.main_image = file;
					jQuery('div.dz-default.dz-message').attr('style', 'display:none;');
				});
			},
			mainImageError()
			{
				return this.$Toast.fire({
					icon: 'error',
					html: 'Error al subir imagén del producto.',
				});
			},
			mainImageAddSuccess(file)
			{
				this.$v.user.main_image.$model = file;
				this.$v.user.main_image.$model.type_image = file.type;
				this.$v.user.main_image.$model.size_image = file.size;
				jQuery('div.dz-default.dz-message').attr('style', 'display:none;');
			},
			removeMainImage()
			{
				this.user.main_image = null;
				jQuery('div.dz-default.dz-message').removeAttr('style');
			},
			saveItem()
			{
				this.$v.$touch();
				if (!this.$v.$anyError) {
					this.user.change_password = this.change_password;
					this.updateData({'url': '/users/update-profile/'+this.user.id, 'formData': this.user})
					.then( () => {
						this.getUserLogin()
						.then( () => {
							this.$Toast.fire({
								icon: 'success',
								title: '¡Actualizado con éxito!',
							});
						} );						
					});
				} else {
					return this.$Toast.fire({
						icon: 'error',
						title: 'Todos los campo (*) deben ser completados para continuar.',
					});
				}
			}
		},
		computed: {
			...mapGetters({
				processing: "processingData",
			}),
			cities()
			{
				for (var i = 0; i < this.countries.length; i++) {
					if (this.countries[i].id == this.user.countries_id) {
						return this.countries[i].cities;
					}
				}
				return [];
			}
		}
	}
</script>