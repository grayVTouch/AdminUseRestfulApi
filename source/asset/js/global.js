<<<<<<< HEAD
import mixins from './mixinOption.js';

// const host = 'http://www.grayvtouch.top/';
const host = 'http://xq.com/';
const plugin = `${host}plugin/`;
const api = `${host}api/admin/`;
const imageApiForwangEditor = `${api}Image/saveForWangEditor`;
const imageApi = `${api}file/image`;
const fileApi = `${api}file/file`;

Object.assign(window , {
    mixins ,
=======
import mixin from './mixinOption.js';

// const host = 'http://chat_adm.t1.tuuz.cc/';
const host = 'http://xq.com/';
const plugin = `${host}plugin/`;
const api = `${host}admin/`;
const imageApiForwangEditor = `${api}Image/saveForWangEditor`;

Object.assign(window , {
>>>>>>> 2312275b72dca303976d703d8a85fe347188bdd0
    // 共享变量
    topContext: {
        host ,
        plugin ,
        api ,
        ins: {} ,
        // 动画时间
        animateDuration: 300 ,
        imageApiForwangEditor ,
<<<<<<< HEAD
        imageApi ,
        fileApi ,
    } ,
=======
    } ,
    mixin ,
>>>>>>> 2312275b72dca303976d703d8a85fe347188bdd0
});
