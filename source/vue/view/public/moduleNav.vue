<template>
<<<<<<< HEAD
    <div class="module-nav" ref="module-nav">
=======
    <div class="module-nav">
>>>>>>> 2312275b72dca303976d703d8a85fe347188bdd0
        <div class="left">
            <img :src="topRoute.b_ico" class="image">
            <span class="cn">{{ topRoute.name }}</span>
            <span class="delimiter">/</span>
            <span class="en">{{ topRoute.en }}</span>
            &nbsp;&nbsp;
<<<<<<< HEAD
            <button class="run-button run-button-blue" @click.prevent="$parent.location($parent.route.route , $parent.param)">
                <i class="run-iconfont run-reset"></i>标签页刷新
            </button>
=======
            <button class="btn-8" @click.prevent="$parent.location($parent.route.route , $parent.param)">标签页刷新</button>
>>>>>>> 2312275b72dca303976d703d8a85fe347188bdd0
        </div>
        <div class="right">
            <!-- 面包屑 -->
            <template v-for="(v,k) in pos">
                <span class="text" @click="v.route != '' && v.route != $parent.route.route ? $parent.location(v.route) : null">{{ v.name }}</span>
                <span class="delimiter" v-if="!(k == pos.length - 1)">/</span>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
<<<<<<< HEAD
        name: "v-module-nav" ,
        data () {
            return {
                dom: {} ,
                ins: {} ,
            };
        } ,
=======
        name: "v-moduleNav" ,
>>>>>>> 2312275b72dca303976d703d8a85fe347188bdd0
        props: {
            topRoute: {
                type: Object ,
                required: true ,
                default: {}
            } ,
            pos: {
                type: Array ,
                required: true ,
                default: []
            }
        } ,
<<<<<<< HEAD
        mounted () {
            this.initDom();
            this.initInstance();
            this.initialize();
        } ,
        methods: {
            initDom () {
                this.dom.moduleNav = G(this.$refs['module-nav']);
                this.dom.win = G(window);
            } ,

            initInstance () {

            } ,

            initialize () {
                this.fixNav();
                this.dom.win.on('scroll' , this.fixNav.bind(this) , true , false);
            } ,

            fixNav () {
                let y = window.pageYOffset;
                if (y == 0) {
                    this.dom.moduleNav.removeClass('module-nav-fix');
                } else {
                    this.dom.moduleNav.addClass('module-nav-fix');
                }
                this.dom.moduleNav.css({
                    top: y + 'px'
                });
            } ,
        }
=======
        watch: {}
>>>>>>> 2312275b72dca303976d703d8a85fe347188bdd0
    }
</script>
<style scoped src="./css/moduleNav.css"></style>