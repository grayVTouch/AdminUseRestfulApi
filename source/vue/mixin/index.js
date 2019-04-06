export default {
    store ,
    router ,
<<<<<<< HEAD
    methods: {
        forceLogout ,
        isLogin ,
        vScroll ,
        getClass ,
        $success ,
        $error ,
        $msg ,
        $info ,
        $unknow ,
        // 通知
        notice (type , title , desc = '') {
            this.$Notice[type]({
                title ,
                desc ,
            });
        } ,
        sNotice (title , desc = '') {
            this.notice('success' , title , desc);
        } ,

        wNotice (title , desc = '') {
            this.notice('warning' , title , desc);
        } ,

        iNotice (title , desc = '') {
            this.notice('info' , title , desc);
        } ,

        eNotice (title , desc = '') {
            this.notice('error' , title , desc);
=======
    data () {
        return {

        };
    } ,

    methods: {
        getClass (v) {
            return v ? 'error' : '';
        } ,
        logout () {
            logout();
        } ,

        $success (msg , option = {}) {
            option.icon = 1;
            layer.alert(msg , option);
        } ,
        // 错误提示
        $error (msg , option = {}) {
            option.icon = 2;
            layer.alert(msg , option);
        } ,
        // 消息提醒
        $msg (msg , option = {}) {
            layer.msg(msg , option);
>>>>>>> 2312275b72dca303976d703d8a85fe347188bdd0
        } ,
    } ,
    components: {

    }
};