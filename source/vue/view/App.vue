<template>
    <div class="app">
<<<<<<< HEAD
=======
        <v-loading ref="loading"></v-loading>
>>>>>>> 2312275b72dca303976d703d8a85fe347188bdd0
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
<<<<<<< HEAD
        name: 'v-app' ,
=======
        mounted () {
            topContext.ins.loading = new Loading(this.$refs.loading.$el , {
                status: 'hide' ,
                type: 'line-scale'
            });
        } ,
>>>>>>> 2312275b72dca303976d703d8a85fe347188bdd0
    };
</script>
<style scoped></style>