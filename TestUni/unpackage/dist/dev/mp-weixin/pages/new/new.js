require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],{17:function(e,t,i){"use strict";var s=a(i(1)),n=a(i(18));function a(e){return e&&e.__esModule?e:{default:e}}i(0).default;new s.default(n.default).$mount()},18:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(20),n=i.n(s),a=i(21),o=!1;var r=function(e){o||i(19)},c=i(2)(n.a,a.a,r,null,null);c.options.__file="..\\..\\..\\..\\c_project\\TestUni\\pages\\new\\new.vue",c.esModule&&Object.keys(c.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] new.vue: functional components are not supported with templates, they should use render functions."),t.default=c.exports},19:function(e,t){},20:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(0).default;t.default={data:function(){return{refreshing:!1,providerList:[],list:[],fetchPageNum:1}},onLoad:function(){var e=this;this.getData(),s.getProvider({service:"share",success:function(t){for(var i=[],s=0;s<t.provider.length;s++)switch(t.provider[s]){case"weixin":i.push({name:"分享到微信好友",id:"weixin"}),i.push({name:"分享到微信朋友圈",id:"weixin",type:"WXSenceTimeline"});break;case"qq":i.push({name:"分享到QQ",id:"qq"})}e.providerList=i},fail:function(e){console.log("获取登录通道失败",e)}})},onReachBottom:function(){this.getData()},onPullDownRefresh:function(){console.log("下拉刷新"),this.refreshing=!0,this.getData()},methods:{getData:function(){var e=this;s.request({url:"https://uniapp.dcloud.io/tuku/posts.php?page="+(this.refreshing?1:this.fetchPageNum)+"&per_page=5",success:function(t){if(console.log("data",t),200!==t.statusCode)console.log("失败!");else{if(e.refreshing&&t.data[0].id===e.list[0].id)return s.showToast({title:"已经最新",icon:"none"}),e.refreshing=!1,void s.stopPullDownRefresh();e.refreshing?(e.refreshing=!1,s.stopPullDownRefresh(),e.list=t.data,e.fetchPageNum=2):(e.list=e.list.concat(t.data),e.fetchPageNum+=1)}}})},goDetail:function(e){s.navigateTo({url:"../detail/detail?data="+JSON.stringify(e)})},share:function(e){var t=this;if(0!==this.providerList.length){var i=this.providerList.map(function(e){return e.name});s.showActionSheet({itemList:i,success:function(i){s.share({provider:t.providerList[i.tapIndex].id,scene:t.providerList[i.tapIndex].type&&"WXSenceTimeline"===t.providerList[i.tapIndex].type?"WXSenceTimeline":"WXSceneSession",type:0,title:"uni-app模版",summary:e.title,imageUrl:e.img_src,href:"https://uniapp.dcloud.io",success:function(e){console.log("success:"+JSON.stringify(e))},fail:function(e){s.showModal({content:e.errMsg,showCancel:!1})}})}})}else s.showModal({title:"当前环境无分享渠道!",showCancel:!1})}}}},21:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("view",{staticClass:"index"},[e._l(e.list,function(t,s){return i("block",{key:s},[i("view",{staticClass:"card",attrs:{eventid:"1-"+s},on:{click:function(i){e.goDetail(t)}}},[i("image",{staticClass:"card-img",attrs:{src:t.img_src,mode:"aspectFill"}}),e._v(" "),i("view",{staticClass:"card-num-view"},[i("text",{staticClass:"card-num"},[e._v(e._s(t.img_num)+"P")])]),e._v(" "),i("view",{staticClass:"card-bottm row"},[i("view",{staticClass:"car-title-view row"},[i("text",{staticClass:"card-title"},[e._v(e._s(t.title))])]),e._v(" "),i("view",{staticClass:"card-share-view",attrs:{eventid:"0-"+s},on:{click:function(i){i.stopPropagation(),e.share(t)}}})])])])}),e._v(" "),i("text",{staticClass:"loadMore"},[e._v("加载中...")])],2)};s._withStripped=!0;var n={render:s,staticRenderFns:[]};t.a=n}},[17]);
//# sourceMappingURL=../../.sourcemap/pages/new/new.js.map