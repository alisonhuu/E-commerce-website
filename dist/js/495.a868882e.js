"use strict";(self["webpackChunkfinalproject"]=self["webpackChunkfinalproject"]||[]).push([[495],{8495:function(t,e,i){i.r(e),i.d(e,{default:function(){return y}});var s=i(3396),o=i(9242),r=i(7139);const c={class:"my-4"},a={key:0,class:"mb-4"},n={key:1,class:"mb-4"},l={class:"row row-cols-2 row-cols-md-4 gx-3 gy-5"},d=["onClick"],h=["onClick"],u={class:"card-text fw-bold text-secondary mt-2"},g={class:"text-end mb-4"},p=["onClick"],m=["onClick"],k=(0,s._)("i",{class:"bi bi-cart me-1"},null,-1);function b(t,e,i,b,v,f){const w=(0,s.up)("LoadingCom");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(w,{active:v.isLoading},null,8,["active"]),(0,s._)("section",c,[v.id.length>0?((0,s.wg)(),(0,s.iD)("h4",a,"我的最愛")):((0,s.wg)(),(0,s.iD)("h4",n,"目前我的最愛是空的，請選擇商品加入！")),(0,s._)("div",l,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(v.product,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"col",key:e.id},[(0,s._)("a",{href:"javascript:;",onClick:(0,o.iM)((t=>f.getProduct(e.id)),["prevent"])},[(0,s._)("div",{style:(0,r.j5)([{backgroundImage:`url(${e.imageUrl})`},{height:"300px"}]),class:"bg-center rounded mb-3"},null,4)],8,d),(0,s._)("a",{href:"javascript:;",onClick:(0,o.iM)((t=>f.getProduct(e.id)),["prevent"]),class:"h5 link-dark text-decoration-none"},(0,r.zw)(e.title),9,h),(0,s._)("p",u,(0,r.zw)(t.$filters.currency(e.price)),1),(0,s._)("div",g,[(0,s._)("button",{class:"btn btn-success btn-sm link-light",onClick:(0,o.iM)((t=>f.removeWishList(e.id)),["prevent"])}," 移除",8,p),(0,s._)("button",{class:"btn btn-primary btn-sm link-light ms-3",onClick:(0,o.iM)((t=>f.addToCart(e)),["prevent"])},[k,(0,s.Uk)("加入購物車")],8,m)])])))),128))])])],64)}i(7658);var v={data(){return{product:[],isLoading:!1,id:[]}},created(){this.getId()},methods:{getProduct(t){this.$router.push(`/user/product/${t}`)},addToCart(t){this.isLoading=!0;const e="https://vue3-course-api.hexschool.io/api/alisonhu-api/cart",i={product_id:t.id,qty:1};this.axios.post(e,{data:i}).then((t=>{this.isLoading=!1,this.PushMessageState(t,"加入購物車"),this.emitter.emit("cart-qty")}))},removeWishList(t){localStorage.removeItem(t),this.getId(),this.emitter.emit("wished-qty")},getId(){this.id=[];for(let t=0;t<localStorage.length;t++)this.id.push(localStorage.key(t));this.getWishProduct()},getWishProduct(){this.product=[],this.id.forEach((t=>{const e=JSON.parse(localStorage.getItem(t));this.product.push(e)}))}},inject:["emitter","PushMessageState"]},f=i(89);const w=(0,f.Z)(v,[["render",b]]);var y=w}}]);
//# sourceMappingURL=495.a868882e.js.map