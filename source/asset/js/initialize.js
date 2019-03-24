/**
 * *************************
 * vue 初始化处理
 * *************************
 */
// 开发者提示关闭！
Vue.config.productionTip = false;
// 是否允许 vue devtool 进行 debug
Vue.config.devtools = true;

/**
 * *********************
 * 对请求进行拦截
 * *********************
 */

G.ajax.opened = function(){
    // 设置 Authorization 头部
    this.native('setRequestHeader' , 'Authorization' , G.s.get('token'));
    return true;
};

// 拦截 网络/登录状态 变更
G.ajax.responded = function(res , status){
    if (status == 0) {
        Prompt.alert('出现异常情况，请稍后再试');
        return false;
    }
    if (res.code == 401) {
        logout();
        return false;
    }
    return true;
};