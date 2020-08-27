<template>
  <div>
    
  </div>
</template>
<script>
import {
	mapGetters,
	mapActions
} from "vuex";

export default {
	name: 'me',
	data()
	{
		return {
			token: null,
		}
	},
	created()
	{
		this.token = this.$route.query.token;
		if (this.token == '' || this.token == null) {
			this.$router.push({name: 'dashboard'});
		}
		this.destroyToken()
		.then( () => {
			this.getUserLogin(this.token)
			.then( () => {
				this.$router.push({name: 'dashboard'});
			})
			.catch(error => {
				console.log(error.response.data);
				this.$Toast.fire({
					icon: 'success',
					title: '¡Token Inválido, debe iniciar sesión nuevamente!'
				});
				this.$router.push({name: 'auth-login'});
			});			
		});
		
	},
	methods: {
		...mapActions(["destroyToken", "getUserLogin"]),
		formSubmit() {
			this.destroyToken()
			.then( () => {
				this.$router.push('/auth/login');
			});
		}
	},
	computed: {
		...mapGetters({
			tokenUser: "tokenUser",
		})
	},
};
</script>