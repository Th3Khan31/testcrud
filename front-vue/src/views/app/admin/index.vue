<template>
    <div class="wrapper"><app-layout><router-view /></app-layout></div>
</template>
<script>
	import AppLayout from '../../layouts/AppLayout';
	export default {
		name: 'IndexApp',
		components: {
			"app-layout":AppLayout
		},
		created(){
			document.body.classList.remove('login-page');
			document.body.classList.add('sidebar-mini');
			document.body.classList.add('layout-fixed');
			document.body.classList.add('sidebar-open');
		}
	};
</script>
