export default {
    name: "v-login" ,
    data () {
        return {
            form: {
                username: '',
                password: '',
                verify_code: '' ,
                verify_code_key: '' ,
            },
            error: {},
            verifyCode: '' ,
            ins: {} ,
            ajax: {} ,
            pending: {
                login: false
            }
        };
    } ,
    created () {
        // 获取验证码
        this.getVerifyCode();
    } ,
    mounted () {
        let self = this;
        this.ins.loading = new Loading(this.$refs.loading.$el , {
            status: 'hide' ,
            type: 'line-scale' ,
            close (ins , key) {
                // 终端请求
                if (ins instanceof G.ajax) {
                    ins.native('abort');
                }
                self.pending[key] = false;
            }
        });
    } ,
    methods: {
        check () {
            return {
                status: true ,
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
                this.ajax.login = userApi.login(this.form , (res , code) => {
                    resolve();
                    if (code != 200) {
                        if (code == 400) {
                            this.error = res;
                            return ;
                        }
                        if (code == 450) {
                            this.$error(res);
                            return ;
                        }
                        this.$unknow();
                        return ;
                    }
                    // 更新验证码
                    G.s.json('token' , res);
                    // 获取用户权限范围
                    this.$router.push({name: 'home'});
                    // 跳转到首页
                } , (...args) => {
                    resolve();
                });
                this.ins.loading.setArgs(this.ajax.login , 'login');
            }).then(() => {
                this.pending.login = false;
                this.ins.loading.hide();
            });
        } ,
    } ,
    watch: {

    }
}