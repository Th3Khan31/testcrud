<template>
    <div></div>
</template>
<script>
	import {
		mapActions
	} from "vuex";

	export default {
		name: 'Logout',
		data() {
			return {
			};
		},
		computed: {

		},
		methods: {
			...mapActions(["destroyToken"]),
			formSubmit() {
				this.destroyToken()
				.then( () => {
					this.$router.push({name: 'auth-login'});
				});
			}
		},
		created() {
			this.formSubmit();
		}
	};
</script>
