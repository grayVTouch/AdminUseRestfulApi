(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{368:function(t,i,n){"use strict";n.r(i);var s=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"module-container"},[n("module-nav",{attrs:{topRoute:t.topRoute,pos:t.pos}}),t._v(" "),n("div",{staticClass:"module-content"},[n("div",{staticClass:"in"},[n("form",{on:{submit:function(i){return i.preventDefault(),t.submit(i)}}},[n("table",{staticClass:"input-tb"},[n("tbody",[n("tr",{class:t.getClass(t.error.name),attrs:{id:"name"}},[n("td",[t._v("名称")]),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-text",attrs:{type:"text"},domProps:{value:t.form.name},on:{input:function(i){i.target.composing||t.$set(t.form,"name",i.target.value)}}}),t._v(" "),n("span",{staticClass:"necessary"},[t._v("*")]),t._v(" "),n("span",{staticClass:"tip"}),t._v(" "),n("span",{staticClass:"msg"},[t._v(t._s(t.error.name))])])]),t._v(" "),n("tr",{class:t.getClass(t.error.weight),attrs:{id:"weight"}},[n("td",[t._v("权重")]),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.weight,expression:"form.weight"}],staticClass:"form-text",attrs:{type:"number",step:"0"},domProps:{value:t.form.weight},on:{input:function(i){i.target.composing||t.$set(t.form,"weight",i.target.value)}}}),t._v(" "),n("span",{staticClass:"necessary"}),t._v(" "),n("span",{staticClass:"tip"},[t._v("默认：0，仅允许输入整数")]),t._v(" "),n("span",{staticClass:"msg"},[t._v(t._s(t.error.weight))])])]),t._v(" "),t._m(0)])])])])]),t._v(" "),n("v-loading",{ref:"loading"})],1)};s._withStripped=!0;var e={name:"v-brand",data:function(){return{form:{name:"",letter:"",hot:"n",weight:0},error:{},ajax:{get:null,submit:null},dom:{},ins:{loading:null},pending:{submit:null},data:{},callback:{},api:detectionGroupApi}},created:function(){},mounted:function(){this.initDom(),this.initInstance(),this.getData()},mixins:[mixins.state,mixins.loading,mixins.form.get,mixins.form.confirm],methods:{initDom:function(){},initInstance:function(){},check:function(t){return{status:!0,field:"",msg:""}},submit:function(){var t=this;new Promise(function(i){if(t.pending.submit)t.$info("请求中...请耐心等待");else{var n=t.check();if(!n.status)return t.error[n.field]=n.msg,void vScroll(n.field);t.pending.submit=!0,t.ins.loading.show(),t.ajax.submit=t.api[t.param.mode](t.form,function(n,s){if(t.error={},200!=s)return t.initialState("loading","submit","submit"),400==s?(t.error=n,void vScroll(G.firstKey(n))):void t.$error(n);t.form.id=n,i()}),t.ins.loading.setArgs(t.ajax.submit,"submit")}}).then(function(){t.confirm("位置分组","/detectionGroup/list")}).finally(function(){t.initialState("loading","submit","submit")})}}},a=(n(379),n(544),n(545),n(14)),o=Object(a.a)(e,s,[function(){var t=this.$createElement,i=this._self._c||t;return i("tr",[i("td",{attrs:{colspan:"2"}},[i("button",{staticClass:"run-button run-button-submit",attrs:{type:"submit"}},[this._v("提交")])])])}],!1,null,"4818ab98",null);o.options.__file="source/vue/view/DetectionGroup/thing.vue";i.default=o.exports},378:function(t,i,n){},379:function(t,i,n){"use strict";var s=n(378);n.n(s).a},446:function(t,i,n){},447:function(t,i,n){},544:function(t,i,n){"use strict";var s=n(446);n.n(s).a},545:function(t,i,n){"use strict";var s=n(447);n.n(s).a}}]);