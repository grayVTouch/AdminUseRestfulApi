import mixin from './mixinOption.js';

// const host = 'http://chat_adm.t1.tuuz.cc/';
const host = 'http://xq.com/';
const plugin = `${host}plugin/`;
const api = `${host}admin/`;
const imageApiForwangEditor = `${api}Image/saveForWangEditor`;

Object.assign(window , {
    // 共享变量
    topContext: {
        host ,
        plugin ,
        api ,
        ins: {} ,
        // 动画时间
        animateDuration: 300 ,
        imageApiForwangEditor ,
    } ,
    mixin ,
});