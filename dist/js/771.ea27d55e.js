"use strict";(self["webpackChunkfinalproject"]=self["webpackChunkfinalproject"]||[]).push([[771],{5424:function(t,i,e){e.d(i,{Z:function(){return _}});var s=e(3396),o=e(9242),r=e(7139);const a={class:"my-4"},n={class:"row row-cols-2 row-cols-md-4 gx-3 gy-5"},c=["onClick"],d={class:"position-absolute bottom-0 end-0 p-1"},l=["onClick"],u=["onClick","disabled"],g=(0,s._)("i",{class:"bi bi-cart"},null,-1),p=[g],h={key:0,class:"position-absolute top-0 start-0 px-2 py-1"},m=(0,s._)("i",{class:"bi bi-gift text-danger"},null,-1),b=[m],f=["onClick"],v={class:"card-text fw-bold text-secondary mt-2"};function w(t,i,e,g,m,w){const y=(0,s.up)("LoadingCom");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(y,{active:m.isLoading},null,8,["active"]),(0,s._)("main",null,[(0,s._)("section",a,[(0,s._)("div",n,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.products,(i=>((0,s.wg)(),(0,s.iD)("div",{class:"col",key:i.id},[(0,s._)("a",{href:"javascript:;",onClick:(0,o.iM)((t=>w.getProduct(i.id)),["prevent"])},[(0,s._)("div",{style:(0,r.j5)({backgroundImage:`url(${i.imageUrl})`}),class:"product-img bg-center rounded mb-3 position-relative"},[(0,s._)("div",d,[(0,s._)("button",{class:"btn btn-sm btn-light rounded-4",type:"button",onClick:(0,o.iM)((t=>w.addToWishList(i)),["stop"])},[(0,s._)("i",{class:(0,r.C_)(["bi",w.heart(i)])},null,2)],8,l),(0,s._)("button",{class:"btn btn-sm btn-light rounded-4 ms-1",type:"button",onClick:(0,o.iM)((t=>w.addToCart(i)),["stop"]),disabled:m.loadingItem===i.id},p,8,u)]),i.is_gift?((0,s.wg)(),(0,s.iD)("div",h,b)):(0,s.kq)("",!0)],4)],8,c),(0,s._)("a",{href:"javascript:;",onClick:(0,o.iM)((t=>w.getProduct(i.id)),["prevent"]),class:"h6 link-dark-h"},(0,r.zw)(i.title),9,f),(0,s._)("p",v,(0,r.zw)(t.$filters.currency(i.price)),1)])))),128))])])])],64)}e(7658);var y={data(){return{isLoading:!1,loadingItem:""}},props:{products:{type:Array,default(){return[]}}},methods:{getProduct(t){this.$router.push(`/user/product/${t}`)},addToCart(t){this.loadingItem=t.id,this.isLoading=!0;const i="https://vue3-course-api.hexschool.io/api/alisonhu-api/cart",e={product_id:t.id,qty:1};this.axios.post(i,{data:e}).then((t=>{this.loadingItem="",this.isLoading=!1,this.PushMessageState(t,"加入購物車"),this.emitter.emit("cart-qty")}))},addToWishList(t){localStorage.getItem(t.id)?(localStorage.removeItem(t.id),this.emitter.emit("wished-qty")):(localStorage.setItem(t.id,JSON.stringify(t)),this.emitter.emit("wished-qty")),this.$emit("get-products")},heart(t){return localStorage.getItem(t.id)?"bi-heart-fill":"bi-heart"}},emits:["get-products"],inject:["emitter","PushMessageState"]},k=e(89);const C=(0,k.Z)(y,[["render",w]]);var _=C},7771:function(t,i,e){e.r(i),e.d(i,{default:function(){return d}});var s=e(3396);function o(t,i,e,o,r,a){const n=(0,s.up)("LoadingCom"),c=(0,s.up)("ProductCategory");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(n,{active:r.isLoading},null,8,["active"]),(0,s.Wm)(c,{products:r.flowers,onGetProducts:i[0]||(i[0]=t=>a.getProducts())},null,8,["products"])],64)}var r=e(5424),a={data(){return{products:[],flowers:[],isLoading:!1}},created(){this.getProducts()},methods:{getProducts(){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/alisonhu-api/products/all";this.axios.get(t).then((t=>{this.isLoading=!1,this.products=t.data.products,this.getFlowers()}))},getFlowers(){this.flowers=this.products.filter((t=>"flowers"===t.category))}},components:{ProductCategory:r.Z}},n=e(89);const c=(0,n.Z)(a,[["render",o]]);var d=c}}]);
//# sourceMappingURL=771.ea27d55e.js.map