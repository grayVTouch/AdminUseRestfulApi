<<<<<<< HEAD
const verifyCode = `${topContext.api}misc/verifyCode`;
=======
const code = `${topContext.api}misc/code`;
const refreshToken = `${topContext.api}oauth/token`;
>>>>>>> 2312275b72dca303976d703d8a85fe347188bdd0

let xhrForCode = null;
export default {
    // 获取验证码
<<<<<<< HEAD
    verifyCode  (success , error) {
        if (xhrForCode instanceof G.ajax) {
            xhrForCode.native('abort');
        }
        return xhrForCode = G.ajax({
            url: verifyCode ,
=======
    code (success , error) {
        if (!G.isNull(xhrForCode)) {
            xhrForCode.native('abort');
        }
        return xhrForCode = G.ajax({
            url: code ,
>>>>>>> 2312275b72dca303976d703d8a85fe347188bdd0
            method: 'get' ,
            success ,
            error
        });
    } ,
<<<<<<< HEAD

=======
    // 获取最新的 token
    refreshToken (data , success , error) {
        return G.ajax({
            url: refreshToken ,
            method: 'post' ,
            data ,
            direct: true ,
            success ,
            error
        });
    } ,
>>>>>>> 2312275b72dca303976d703d8a85fe347188bdd0
};