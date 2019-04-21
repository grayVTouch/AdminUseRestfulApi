export default {
    name: 'v-report' ,
    data () {
        return {
            form: {} ,
            dom: {} ,
            ins: {} ,
            ajax: {} ,
            pending: {} ,
            callback: {} ,
            value: {} ,
            type: '' ,
            api: carApi ,
            menu: 'one' ,
            navMenu: [
                {
                    id: 'one' ,
                    name: '驾驶系统检测' ,
                } ,
                {
                    id: 'two' ,
                    name: '控制系统检测' ,
                } ,
            ] ,
            rule: [] ,
            report: [] ,
            opacity: 1 ,
        };
    } ,
    mixins: [
        // 加载
        mixins.loading ,
        // 状态
        mixins.state ,
        // 菜单
        mixins.form.menuSwitch ,
        // 确定
        mixins.form.confirm ,
    ] ,
    mounted () {
        this.initDom();
        this.initStatic();
        this.initDynamic();
        this.initInstance();
        this.initialize();
    } ,
    methods: {
        initDom () {
            this.dom.list = G(this.$refs.list);
        } ,

        initStatic () {
            this.form.id = this.param.id;
        } ,

        initDynamic () {
            this.dom.optionSet = this.dom.list.children();
        } ,

        initInstance () {

        } ,

        // 生成 menu
        genMenu () {
            let i = 0;
            let cur = null;
            let menu = [];
            let curMenu = null;
            for (; i < this.rule.length; ++i)
            {
                cur = this.rule[i];
                menu.push({
                    id: cur.id ,
                    name: cur.name ,
                });
                if (i == 0) {
                    this.menu = cur.id;
                }
            }
            this.navMenu = menu;
            this.$nextTick(() => {
                this.initMenuSwitch();
            });
        } ,

        initialize () {
            new Promise((resolve) => {
                this.pendingState('loading');
                // 获取规则
                this.api.rule((res , code) => {
                    resolve();
                    if (code != 200) {
                        this.eNotice(res);
                        return ;
                    }
                    res.forEach((v) => {
                        v.result = '';
                        v.position.forEach((v1) => {
                            v1.item.forEach((v2) => {
                                v2.option = G.jsonDecode(v2.option);
                                v2.desc = '';
                            });
                        });
                    });
                    this.rule = res;
                });
            }).then(() => {
                return new Promise((resolve) => {
                    this.$nextTick(() => {
                        this.initDynamic();
                        this.genMenu();
                        this.api.getReport({
                            id: this.param.id ,
                        } , (res , code) => {
                            resolve();
                            if (code != 200) {
                                if (code == 404) {
                                    return ;
                                }
                                this.eNotice(res);
                                return ;
                            }
                            this.report = res;
                            // todo 稍作处理
                            this.rule.forEach((module,k) => {
                                const _module = res[k] ? res[k] : {};
                                module.result = res[k] ? _module.result : '';
                                module.position.forEach((position , k1) => {
                                    const positions = _module.position ? _module.position : [];
                                    const _position = positions[k1] ? positions[k1] : {};
                                    position.item.forEach((item , k2) => {
                                        const items = _position.item ? _position.item : [];
                                        const _item = items[k2] ? items[k2] : {};
                                        item.value = _item.value ? _item.value : item.value;
                                        item.desc = _item.desc ? _item.desc : item.desc;
                                    });
                                });
                            });
                        });
                    });
                });
            }).finally(() => {
                this.initialState('loading');
            });
        } ,

        check () {
            return {
                status: true ,
                field: '' ,
                msg: '' ,
            };
        } ,

        submit () {
            new Promise((resolve) => {
                if (this.pending.submit) {
                    this.$info('请求中...请耐心等待');
                    return ;
                }
                let filter = this.check();
                if (!filter.status) {
                    this.error = G.createObject(this.error , {[filter.field]: filter.msg});
                    this.vScroll(filter.field);
                    return ;
                }
                console.log(this.rule);
                this.form.report = G.jsonEncode(this.rule);
                this.pendingState('loading' , 'submit');
                this.ajax.submit = this.api[this.param.mode](this.form , (res , code) => {
                    this.error = {};
                    if (code != 200) {
                        this.initialState('loading' , 'submit' , 'submit');
                        this.$error(res);
                        return ;
                    }
                    resolve();
                });
                this.ins.loading.setArgs(this.ajax.submit , 'submit');
            }).then(() => {
                this.confirm('车辆列表' , '/car/list');
            }).finally(() => {
                this.initialState('loading' , 'submit' , 'submit');
            });
        } ,
    } ,
};