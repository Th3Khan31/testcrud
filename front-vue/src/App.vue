<template>
    <div ><router-view /></div>
</template>
<script>
import './assets/js/adminlte.js';
import {
    mapActions
} from "vuex";
export default {
	name: 'App',
	methods: {
		...mapActions(["setTitlePage"]),
	},
	watch: {
		$route(to, from) {
			if (to.path !== from.path) {
				window.scrollTo(0, 0);
				this.setTitlePage(to.meta.title);
			}
		}
	}
};
</script>
