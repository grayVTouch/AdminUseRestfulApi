(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{391:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"module-container"},[i("module-nav",{attrs:{topRoute:t.topRoute,pos:t.pos}}),t._v(" "),i("div",{staticClass:"module-content"},[i("div",{staticClass:"in"},[i("form",{on:{submit:function(s){return s.preventDefault(),t.submit(s)}}},[i("table",{staticClass:"input-tb"},[i("tbody",[i("tr",{class:t.getClass(t.error.title),attrs:{id:"title"}},[i("td",[t._v("标题")]),t._v(" "),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],staticClass:"form-text",attrs:{type:"text"},domProps:{value:t.form.title},on:{input:function(s){s.target.composing||t.$set(t.form,"title",s.target.value)}}}),t._v(" "),i("span",{staticClass:"necessary"},[t._v("*")]),t._v(" "),i("span",{staticClass:"tip"},[t._v("例如：2016 Nissan Quest")]),t._v(" "),i("span",{staticClass:"msg"},[t._v(t._s(t.error.title))])])]),t._v(" "),i("tr",{class:t.getClass(t.error.username),attrs:{id:"username"}},[i("td",[t._v("用户名称")]),t._v(" "),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.username,expression:"form.username"}],staticClass:"form-text",attrs:{type:"text"},domProps:{value:t.form.username},on:{input:function(s){s.target.composing||t.$set(t.form,"username",s.target.value)}}}),t._v(" "),i("span",{staticClass:"necessary"},[t._v("*")]),t._v(" "),i("span",{staticClass:"tip"},[t._v("例如：陈先生")]),t._v(" "),i("span",{staticClass:"msg"},[t._v(t._s(t.error.username))])])]),t._v(" "),i("tr",{class:t.getClass(t.error.logo_explain),attrs:{id:"logo"}},[i("td",[t._v("图片")]),t._v(" "),i("td",{ref:"image-container"},[i("div",{staticClass:"upload-image"},[t._m(0),t._v(" "),i("div",{staticClass:"init-show-image-list"},["edit"==t.param.mode&&t.form.image_explain?i("img",{staticClass:"init-show-image",attrs:{src:t.form.image_explain}}):t._e()]),t._v(" "),i("div",{staticClass:"preview-images hide"}),t._v(" "),t._m(1)]),t._v(" "),i("span",{staticClass:"tip"}),t._v(" "),i("span",{staticClass:"msg"},[t._v(t._s(t.error.image))])])]),t._v(" "),i("tr",{class:t.getClass(t.error.content),attrs:{id:"content"}},[i("td",[t._v("内容")]),t._v(" "),i("td",[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.content,expression:"form.content"}],staticClass:"form-textarea",domProps:{value:t.form.content},on:{input:function(s){s.target.composing||t.$set(t.form,"content",s.target.value)}}}),t._v(" "),i("span",{staticClass:"necessary"},[t._v("*")]),t._v(" "),i("span",{staticClass:"tip"}),t._v(" "),i("span",{staticClass:"msg"},[t._v(t._s(t.error.letter))])])]),t._v(" "),i("tr",{class:t.getClass(t.error.score),attrs:{id:"score"}},[i("td",[t._v("分数")]),t._v(" "),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.score,expression:"form.score"}],staticClass:"form-text",attrs:{type:"number",step:"0.01"},domProps:{value:t.form.score},on:{input:function(s){s.target.composing||t.$set(t.form,"score",s.target.value)}}}),t._v(" "),i("span",{staticClass:"necessary"},[t._v("*")]),t._v(" "),i("span",{staticClass:"tip"},[t._v("例如：9，最多允许两位小数")]),t._v(" "),i("span",{staticClass:"msg"},[t._v(t._s(t.error.score))])])]),t._v(" "),i("tr",{class:t.getClass(t.error.hidden),attrs:{id:"hidden"}},[i("td",[t._v("隐藏？")]),t._v(" "),i("td",[i("RadioGroup",{model:{value:t.form.hidden,callback:function(s){t.$set(t.form,"hidden",s)},expression:"form.hidden"}},t._l(t.$store.state.business.bool_str,function(s,e){return i("Radio",{key:e,attrs:{label:e}},[t._v(t._s(s))])}),1),t._v(" "),i("span",{staticClass:"necessary"},[t._v("*")]),t._v(" "),i("span",{staticClass:"tip"},[t._v("默认：否")]),t._v(" "),i("span",{staticClass:"msg"},[t._v(t._s(t.error.hidden))])],1)]),t._v(" "),i("tr",{class:t.getClass(t.error.weight),attrs:{id:"weight"}},[i("td",[t._v("权重")]),t._v(" "),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.weight,expression:"form.weight"}],staticClass:"form-text",attrs:{type:"number",step:"0"},domProps:{value:t.form.weight},on:{input:function(s){s.target.composing||t.$set(t.form,"weight",s.target.value)}}}),t._v(" "),i("span",{staticClass:"necessary"}),t._v(" "),i("span",{staticClass:"tip"},[t._v("默认：0，仅允许输入整数")]),t._v(" "),i("span",{staticClass:"msg"},[t._v(t._s(t.error.weight))])])]),t._v(" "),t._m(2)])])])])]),t._v(" "),i("v-loading",{ref:"loading"})],1)};e._withStripped=!0;var a={name:"v-brand",data:function(){return{form:{hidden:"n",weight:0,score:0},error:{},ajax:{get:null,submit:null},dom:{},ins:{loading:null,image:null},pending:{submit:null},data:{},callback:{image:null},api:storyApi,image:{}}},created:function(){},mounted:function(){this.initDom(),this.initInstance(),this.getData()},mixins:[mixins.state,mixins.loading,mixins.form.image,mixins.form.get,mixins.form.confirm],methods:{initDom:function(){},initInstance:function(){},check:function(t){return{status:!0,field:"",msg:""}},submit:function(){var t=this;new Promise(function(s){if(t.pending.submit)t.$info("请求中...请耐心等待");else{var i=t.check();if(!i.status)return t.error[i.field]=i.msg,void vScroll(i.field);t.pending.submit=!0,t.ins.loading.show(),t.ajax.submit=t.api[t.param.mode](t.form,function(i,e){if(t.error={},200!=e)return t.initialState("loading","submit","submit"),400==e?(t.error=i,void vScroll(G.firstKey(i))):void t.$error(i);t.form.id=i,s()}),t.ins.loading.setArgs(t.ajax.submit,"submit")}}).then(function(){return new Promise(function(s){t.ins.image.empty()?s(!1):(t.callback.image=function(i,e){if(200!=e)return t.eNotice(i),void s(!1);t.image=i,s(!0)},t.ins.image.upload())})}).then(function(s){return new Promise(function(i){s?t.api.image({id:t.form.id,image:t.image.url},function(s,e){i(),200==e||t.eNotice(s)}):i(!0)})}).then(function(){t.confirm("故事列表","/story/list")}).finally(function(){t.initialState("loading","submit","submit")})}}},n=(i(393),i(670),i(671),i(14)),r=Object(n.a)(a,e,[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"select-images"},[s("div",{staticClass:"upload-show"},[s("div",{staticClass:"image-line"},[s("img",{staticClass:"image upload-image-btn",attrs:{src:""}}),s("span",{staticClass:"selected-count hide"},[this._v("10")])]),this._v(" "),s("div",{staticClass:"text-line"},[this._v("请选择要上传的图片")]),this._v(" "),s("div",{staticClass:"clear-selected",attrs:{title:"清空已选择的图片"}},[s("img",{staticClass:"image",attrs:{src:""}})]),this._v(" "),s("input",{staticClass:"upload-images-input",attrs:{type:"file",name:"upload_images"}})]),this._v(" "),s("div",{staticClass:"tip"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"upload-image-list hide"},[i("div",{staticClass:"upload-title"},[t._v("待上传列表")]),t._v(" "),i("div",{staticClass:"image-list"},[i("div",{staticClass:"list-content list-title"},[i("div",{staticClass:"item div-preview"},[t._v("图片预览")]),t._v(" "),i("div",{staticClass:"item div-type"},[t._v("类型")]),t._v(" "),i("div",{staticClass:"item div-size"},[t._v("大小")]),t._v(" "),i("div",{staticClass:"item div-speed"},[t._v("速度")]),t._v(" "),i("div",{staticClass:"item div-status"},[t._v("状态")]),t._v(" "),i("div",{staticClass:"item div-opr"},[t._v("操作")])]),t._v(" "),i("div",{staticClass:"list-content list-body"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",{attrs:{colspan:"2"}},[s("button",{staticClass:"run-button run-button-submit",attrs:{type:"submit"}},[this._v("提交")])])])}],!1,null,"00977a29",null);r.options.__file="source/vue/view/story/thing.vue";s.default=r.exports},392:function(t,s,i){},393:function(t,s,i){"use strict";var e=i(392);i.n(e).a},524:function(t,s,i){},525:function(t,s,i){},670:function(t,s,i){"use strict";var e=i(524);i.n(e).a},671:function(t,s,i){"use strict";var e=i(525);i.n(e).a}}]);