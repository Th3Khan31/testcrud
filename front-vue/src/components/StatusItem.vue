<template>
    <div><span v-if="is_active == 1" class="badge badge-success badge-pill">ACTIVO</span><span v-else  class="badge badge-warning badge-pill">INACTIVO</span></div>
</template>
<script>
    export default {
        name: 'StatusItem',
        props: ['is_active'],
    };
</script>
