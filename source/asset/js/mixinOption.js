export default {
    loading: {
        mounted () {
            let self = this;
            this.ins.loading = new Loading(this.$refs.loading.$el , {
                status: 'hide' ,
                type: 'line-scale' ,
                close (ins , key) {
                    // 中断请求
                    if (ins instanceof G.ajax) {
                        ins.native('abort');
                    }
                    self.pending[key] = false;
                }
            });
        } ,
    } ,
    list: {
        // 该数据近用于复制粘贴使用，无其他作用
        data: {
            page: {
                total: 0 ,
                page: 0 ,
                per_page: 0 ,
            } ,
            form: {
                page: 1
            } ,
            api: null ,
            dom: null ,
        } ,
        page: {
            methods: {
                // 分页事件
                pageEvent (page) {
                    this.form.page = page;
                    this.getData();
                } ,
            } ,
        } ,
        filter: {
            methods: {
                // 用户提交
                submit () {
                    this.form.page = 1;
                    this.getData();
                } ,

                // 重置
                reset () {
                    this.form = {};
                    this.submit();
                } ,
                // 排序
                order (e) {
                    let tar = G(e.currentTarget);
                    let order = tar.data('order');
                    let items = tar.parent().children();
                    tar.highlight('focus' , items.get());
                    this.form.order = order;
                    this.submit();
                } ,
            }
        } ,
        get: {
            // 获取数据，层级数据
            floor: {
                methods: {
                    // 获取数据
                    getData () {
                        this.ins.loading.show();
                        this.ajax.list = this.api.list(this.form , (res , code) => {
                            this.ins.loading.hide();
                            if (code != 200) {
                                this.$error(res);
                                return ;
                            }
                            this.data = res;
                        });
                        this.ins.loading.setArgs(this.ajax.list);
                    } ,
                }
            } ,
            // 获取数据，非层级数据
            normal: {
                methods: {
                    // 获取数据
                    getData () {
                        this.ins.loading.show();
                        this.ajax.list = this.api.list(this.form , (res , code) => {
                            this.ins.loading.hide();
                            if (code != 200) {
                                this.$error(res);
                                return ;
                            }
                            this.data = res.data;
                            delete res.data;
                            this.page = res;
                        });
                        this.ins.loading.setArgs(this.ajax.list);
                    } ,
                }
            } ,
        } ,

        del: {
            methods: {
                // 删除选中项
                del (idList , fn) {
                    if (this.pending.del) {
                        layer.alert('请求中...请耐心等待');
                        return ;
                    }
                    this.ins.loading.show();
                    this.ajax.del = this.api.del({
                        id_list: G.jsonEncode(idList)
                    } , (res , code) => {
                        this.pending.del = false;
                        this.ins.loading.hide();
                        if (code != 200) {
                            this.$error(res);
                            return ;
                        }
                        this.$success('删除成功');
                        this.getData();
                        if (G.isFunction(fn)) {
                            fn();
                        }
                    });
                    this.ins.loading.setArgs(this.ajax.del , 'del');
                } ,

                // 删除选中项
                delTarget (id) {
                    new Promise((resolve , reject) => {
                        // 提示
                        this.$info('你确定要删除吗？' , {
                            btn: ['确定' , '取消'] ,
                            btn1: resolve,
                            btn2: reject
                        });
                    }).then((index) => {
                        layer.close(index);
                        this.del([id] , () => {
                            this.delId(id);
                        });
                    } , (index) => {
                        layer.close(index);
                    });
                } ,

                // 删除选中项
                delSelected () {
                    new Promise((resolve , reject) => {
                        this.$info('你确定要删除吗？' , {
                            btn: ['确定' , '取消'] ,
                            btn1: resolve,
                            btn2: reject
                        });
                    }).then((index) => {
                        layer.close(index);
                        this.del(this.idList , () => {
                            this.idList = [];
                        });
                    } , (index) => {
                        layer.close(index);
                    });
                } ,

                // 选择事件
                selectEvent (e) {
                    let tar = G(e.currentTarget);
                    let id = tar.data('id');
                    if (tar.hasClass('focus')) {
                        this.unselectedLine(id);
                    } else {
                        this.selectedLine(id);
                    }
                } ,

                // 选中所有
                selectAllEvent (e) {
                    let tar = G(e.currentTarget);
                    let checked = tar.native('checked');
                    let trs = this.dom.tbody.children();
                    trs.each((dom) => {
                        dom = G(dom);
                        let id = dom.data('id');
                        if (checked) {
                            this.selectedLine(id);
                        } else {
                            this.unselectedLine(id);
                        }
                    });
                } ,

                // 选中行
                selectedLine (id) {
                    let trs = this.dom.tbody.children({
                        tagName: 'tr'
                    });
                    for (let i = 0; i < trs.length; ++i)
                    {
                        let cur = trs.jump(i , true);
                        if (cur.data('id') == id) {
                            cur.addClass('focus');
                            let cbox = G('.c-box' , cur.get(0)).native('checked' , true);
                            this.addId(id);
                        }
                    }
                } ,

                // 取消选中
                unselectedLine (id) {
                    let trs = this.dom.tbody.children({
                        tagName: 'tr'
                    });
                    for (let i = 0; i < trs.length; ++i)
                    {
                        let cur = trs.jump(i , true);
                        if (cur.data('id') == id) {
                            cur.removeClass('focus');
                            let cbox = G('.c-box' , cur.get(0)).native('checked' , false);
                            this.delId(id);
                        }
                    }
                } ,

                // 添加
                addId (id) {
                    if (this.idList.indexOf(id) != -1) {
                        return ;
                    }
                    this.idList.push(id);
                } ,

                // 删除
                delId (id) {
                    let index = -1;
                    if ((index = this.idList.indexOf(id)) == -1) {
                        return ;
                    }
                    this.idList.splice(index , 1);
                } ,
            }
        } ,
    } ,

    // form 表单
    form: {
        get: {
            methods: {
                getData () {
                    if (this.param.mode != 'edit') {
                        return ;
                    }
                    this.ins.loading.show();
                    this.ajax.getData = this.api.detail(this.param.id , (res , code) => {
                        this.ins.loading.hide();
                        if (code != 200) {
                            this.$error(res);
                            return ;
                        }
                        this.form = res;
                    });
                    this.ins.loading.setArgs(this.ajax.getData);
                } ,
            }
        } ,
    } ,
};