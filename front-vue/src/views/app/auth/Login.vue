<template>
	<div class="hold-transition login-page">
		<div class="login-box">
			<div class="login-logo">
				<img src="../../../assets/img/AdminLTELogo.png" />
			</div>
			<!-- /.login-logo -->
			<div class="card">
				<div class="card-body login-card-body">
					
					<p class="login-box-msg">¡Ingrese sus datos de acceso!</p>

					<form @submit.prevent="formSubmit" method="post">
						<div class="input-group mb-3">
							<input type="email" name="email" class="form-control" @input="loginError = false;" :class="[ ((!$v.form.email.required || !$v.form.email.email || !$v.form.email.minLength) && $v.form.email.$model != '') || loginError == true ? 'is-invalid' : '', ($v.form.email.required || $v.form.email.email || $v.form.email.minLength) && $v.form.email.$model != '' ? 'is-valid' : ''] " placeholder="Ingrese su correo electrónico" v-model="$v.form.email.$model" :state="!$v.form.email.$error">
							<div class="input-group-append">
								<div class="input-group-text">
									<span class="fas fa-envelope"></span>
								</div>
							</div>
							<b-form-invalid-feedback v-if="!$v.form.email.required && $v.form.email.$model != ''">Ingrese un correo electrónico</b-form-invalid-feedback>
							<b-form-invalid-feedback v-else-if="!$v.form.email.email && $v.form.email.$model != ''">Ingrese una cuenta de correo válida</b-form-invalid-feedback>
							<b-form-invalid-feedback v-else-if="!$v.form.email.minLength && $v.form.email.$model != ''">El correo debe tener al menos 4 carácteres</b-form-invalid-feedback>
						</div>
						<div class="input-group mb-3">
							<input type="password" name="password" class="form-control" @input="loginError = false;" :class="[ (!$v.form.password.required || !$v.form.password.minLength) && $v.form.password.$model != '' ? 'is-invalid' : '', ($v.form.password.required || $v.form.password.minLength) && $v.form.password.$model != '' ? 'is-valid' : ''] " v-model="$v.form.password.$model" :state="!$v.form.password.$error" placeholder="Ingrese su contraseña">
							<div class="input-group-append">
								<div class="input-group-text">
									<span class="fas fa-lock"></span>
								</div>
							</div>
							<b-form-invalid-feedback v-if="!$v.form.password.required">Debe completar el campo </b-form-invalid-feedback>
							<b-form-invalid-feedback v-else-if="!$v.form.password.minLength || !$v.form.password.maxLength">Su contraseña debe ser de entre 4 y 16 carácteres</b-form-invalid-feedback>
						</div>
						<div class="row">
							<div class="col-8">
								<div class="icheck-primary">
									<input type="checkbox" id="remember">
									<label for="remember">
										Recordas Datos
									</label>
								</div>
							</div>
							<!-- /.col -->
							<div class="col-4">
								<button type="submit" class="btn btn-primary btn-block" :disabled="processing == true">
									<template v-if="!processing">
										Ingresar
									</template>
									<template v-if="processing">
										<i class="fa fa-spinner fa-spin"></i>
									</template>
								</button>
							</div>
							<!-- /.col -->
						</div>
					</form>
				<!-- <p class="mb-0">
					<a href="register.html" class="text-center">Crear cuenta</a>
				</p> -->
			</div>
			<!-- /.login-card-body -->
		</div>
	</div>
</div>

</template>
<script>
	import {
		mapActions
	} from "vuex";
	import {
		validationMixin
	} from "vuelidate";
	const {
		required,
		maxLength,
		minLength,
		email
	} = require("vuelidate/lib/validators");
	export default {
		name: 'Login',
		data() {
			return {
				form: {
					email: "",
					password: ""
				},
				processing: false,
				loginError: false,
			};
		},
		created(){
			//document.body.classList.remove('sidebar-mini');
			document.body.classList.remove('sidebar-mini');
			document.body.classList.remove('layout-fixed');
			document.body.classList.remove('sidebar-open');
			document.body.classList.add('login-page');
		},
		mixins: [validationMixin],
		validations: {
			form: {
				password: {
					required,
					maxLength: maxLength(16),
					minLength: minLength(4)
				},
				email: {
					required,
					email,
					minLength: minLength(4)
				}
			}
		},
		methods: {
			...mapActions(["obtainToken"]),
			formSubmit() {
				this.loginError = false;
				this.$v.form.$touch();
				if (!this.$v.form.$anyError) {
					this.processing = true;
					this.obtainToken({
						email: this.form.email,
						password: this.form.password
					}).then( () => {
						this.processing = false;
						this.loginError = false;
						this.$Toast.fire({
							icon: 'success',
							title: '¡Acceso con éxito!',
						});
						// this.$router.push({name: 'dashboard'});
						window.location.href = '/dashboard';
					}).catch(error => {
						console.log(error);
						this.processing = false;
						this.loginError = true;
						return this.$Toast.fire({
							icon: 'error',
							title: 'Los datos enviados son inválidos verifiquelos e intentelo una vez más',
						});
					});
				} else {
					this.loginError = true;
					return this.$Toast.fire({
						icon: 'error',
						title: 'Debe completar todos los campos de forma obligatoria.',
					});
				}
			}
		},
	};
</script>
