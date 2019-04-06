export default {
    name: "v-login" ,
    data () {
        return {
            form: {
                username: '',
                password: '',
<<<<<<< HEAD
                verify_code: '' ,
                verify_code_key: '' ,
            },
            error: {},
            verifyCode: '' ,
            ins: {} ,
            ajax: {} ,
            api: adminApi ,
            pending: {
                login: false
            }
        };
    } ,
    created () {
        // 获取验证码
        this.getVerifyCode();
    } ,
    mixins: [
        mixins.loading ,
    ] ,
    mounted () {
=======
            },
            error: {},
            code: '' ,
        };
    } ,
    created () {
>>>>>>> 2312275b72dca303976d703d8a85fe347188bdd0

    } ,
    methods: {
        check () {
            return {
                status: true ,
<<<<<<< HEAD
                field: '' ,
                value: ''
            };
        } ,

        // 获取验证码
        getVerifyCode () {
            miscApi.verifyCode((res , code) => {
                if (code != 200) {
                    this.error.code_verify = res;
                    vScroll('code_verify');
                    return ;
                }
                // 清空错误信息
                this.error.code_verify = '';
                this.verifyCode = res.img;
                this.form.verify_code_key = res.key;
            });
        } ,

        submit () {
            if (this.pending.login) {
                return this.$info('请求中...请耐心等待');
            }
            let filter = this.check();
            if (!filter.status) {
                this.error[filter.field] = filter.value;
                return ;
            }
            this.pending.login = true;
            this.ins.loading.show();
            new Promise((resolve , reject) => {
                this.ajax.login = this.api.login(this.form , (res , code) => {
                    resolve();
                    if (code != 200) {
                        // 重新获取验证码
                        this.getVerifyCode();
                        if (code == 460) {
                            this.$error(res);
                            return ;
                        }
                        this.error = G.createObject(this.error , res);
                        return ;
                    }
                    // 更新验证码
                    G.s.json('token' , res);
=======
                msg: ''
            };
        } ,

        submit () {
            if (this.isRunning) {
                return Prompt.alert('请求中...请耐心等待');
            }
            let filter = this.check();
            if (!filter.status) {
                return Prompt.alert(filter.msg);
            }
            this.isRunning = true;
            topContext.ins.loading.show();
            new Promise((resolve , reject) => {
                userApi.login(this.form , (res , code) => {
                    resolve();
                    if (res.code == 400) {
                        this.error = res.data;
                        return ;
                    }
                    if (res.code == 450) {
                        this.$Message.error(res.data);
                        return ;
                    }
                    let data = res.data;
                    // 更新验证码
                    G.s.set('token' , data);
>>>>>>> 2312275b72dca303976d703d8a85fe347188bdd0
                    // 获取用户权限范围
                    this.$router.push({name: 'home'});
                    // 跳转到首页
                } , (...args) => {
                    resolve();
                });
<<<<<<< HEAD
                this.ins.loading.setArgs(this.ajax.login , 'login');
            }).then(() => {
                this.pending.login = false;
                this.ins.loading.hide();
=======
            }).then(() => {
                this.isRunning = false;
                topContext.ins.loading.hide();
>>>>>>> 2312275b72dca303976d703d8a85fe347188bdd0
            });
        } ,
    } ,
    watch: {
<<<<<<< HEAD

=======
        remember (nV , oV) {
            this.form.remember = nV ? 'y' : 'n';
        }
>>>>>>> 2312275b72dca303976d703d8a85fe347188bdd0
    }
}