<template>
    <div class='infinite-classification'>
        <div class="list">
            <v-item v-for="v in $store.state.menu" :data="v" :key="v.id"></v-item>
        </div>
    </div>
</template>

<script>
    import item from './item.vue';

    export default {
        name: "v-menu" ,
        data () {
            return {
                // mapping ,
            };
        } ,
        created () {
<<<<<<< HEAD

=======
            console.log(this.$store.state.menu);
>>>>>>> 2312275b72dca303976d703d8a85fe347188bdd0
        } ,
        mounted () {
        } ,
        components: {
            'v-item': item
        }
    }
</script>

<style scoped>

</style>