const logining = `${topContext.api}admin/logining`;
const info = `${topContext.api}admin/info`;
const refreshToken = `${topContext.api}oauth/token`;

export default {
    // 用户登录
    login (data , success , error) {
        return G.ajax({
            url: logining ,
            method: 'post' ,
            data ,
            success ,
            error
        });
    } ,

    // 注销
    logout (data , success , error) {
        return G.ajax({
            url: logining ,
            method: 'delete' ,
            data ,
            success ,
            error
        });
    } ,

    // 获取当前登录用户相关信息
    info (success , error) {
        return G.ajax({
            url: info ,
            method: 'get' ,
            success ,
            error ,
        });
    } ,

    // 获取最新的 token
    refreshToken (data , success , error) {
        return G.ajax({
            url: refreshToken ,
            method: 'patch' ,
            data ,
            success ,
            error
        });
    } ,
};