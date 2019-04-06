<<<<<<< HEAD
// 全部采用异步组件的方式加载
// 压缩 js 体积
const index = () => import('../view/index/index.vue');
const login = () => import('../view/login/login.vue');
const listForRoute = () => import('../view/route/list.vue');
const route = () => import('../view/route/route.vue');
const listForRole = () => import('../view/role/list.vue');
const role = () => import('../view/role/role.vue');
const priv = () => import('../view/role/priv.vue');
const listForAdmin = () => import('../view/admin/list.vue');
const admin = () => import('../view/admin/user.vue');
=======
import index from '../view/index/index.vue';
import login from '../view/login/login.vue';
import listForRole from '../view/role/list.vue';
import listForRoute from '../view/route/list.vue';
import listForArticleType from '../view/articleType/list.vue';
import listForArticle from '../view/article/list.vue';
import articleType from '../view/articleType/articleType.vue';
import article from '../view/article/article.vue';
import listForAnnouncement from '../view/announcement/list.vue';
import announcement from '../view/announcement/announcement.vue';
import listForApp from '../view/app/list.vue';
import app from '../view/app/app.vue';
import listForImage from '../view/image/list.vue';
import image from '../view/image/image.vue';
>>>>>>> 2312275b72dca303976d703d8a85fe347188bdd0

export default [
    {
        name: 'home' ,
        path: '/' ,
        component: index
    } ,
    {
        name: 'login' ,
        path: '/login' ,
        component: login
    } ,
<<<<<<< HEAD

    /**
     * ********************
     * 模块：路由
     * ********************
     */
=======
    {
        path: '/role/list' ,
        component: listForRole
    } ,
>>>>>>> 2312275b72dca303976d703d8a85fe347188bdd0
    {
        path: '/route/list' ,
        component: listForRoute
    } ,
<<<<<<< HEAD
    {
        path: '/route/add' ,
        component: route
    } ,
    {
        path: '/route/edit' ,
        component: route
    } ,

    /**
     * ********************
     * 模块：角色
     * ********************
     */
    {
        path: '/role/list' ,
        component: listForRole
    } ,
    {
        path: '/role/add' ,
        component: role
    } ,
    {
        path: '/role/edit' ,
        component: role
    } ,
    {
        path: '/role/priv' ,
        component: priv
    } ,

    /**
     * ***********************
     * 后台用户
     * ***********************
     */
    {
        path: '/admin/list' ,
        component: listForAdmin
    } ,
    {
        path: '/admin/edit' ,
        component: admin
    } ,
    {
        path: '/admin/add' ,
        component: admin
=======

    // 文章分类
    {
        path: '/articleType/list' ,
        component: listForArticleType
    } ,
    {
        path: '/articleType/edit' ,
        component: articleType
    } ,
    {
        path: '/articleType/add' ,
        component: articleType
    } ,

    // 文章
    {
        path: '/article/list' ,
        component: listForArticle
    } ,
    {
        path: '/article/edit' ,
        component: article
    } ,
    {
        path: '/article/add' ,
        component: article
    } ,

    // 公告
    {
        path: '/announcement/list' ,
        component: listForAnnouncement
    } ,
    {
        path: '/announcement/edit' ,
        component: announcement
    } ,
    {
        path: '/announcement/add' ,
        component: announcement
    } ,

    // 应用
    {
        path: '/app/list' ,
        component: listForApp
    } ,
    {
        path: '/app/edit' ,
        component: app
    } ,
    {
        path: '/app/add' ,
        component: app
    } ,

    // 图片
    {
        path: '/image/list' ,
        component: listForImage
    } ,
    {
        path: '/image/edit' ,
        component: image
    } ,
    {
        path: '/image/add' ,
        component: image
>>>>>>> 2312275b72dca303976d703d8a85fe347188bdd0
    } ,
];