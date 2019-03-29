<template>
    <div class="app">
        <v-loading ref="loading"></v-loading>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        mounted () {
            topContext.ins.loading = new Loading(this.$refs.loading.$el , {
                status: 'hide' ,
                type: 'line-scale' ,
                close (ins , field) {
                    if (ins instanceof G.ajax) {
                        ins.native('abort');
                    }
                    this.pending[field] = false;
                } ,
            });
        } ,
    };
</script>
<style scoped></style>