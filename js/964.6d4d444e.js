"use strict";(self["webpackChunkfinalproject"]=self["webpackChunkfinalproject"]||[]).push([[964],{9390:function(t,s,a){a.d(s,{Z:function(){return b}});var e=a(3396),o=a(7139);const i={"aria-label":"breadcrumb"},n={class:"breadcrumb"},c={class:"breadcrumb-item"},r={class:"breadcrumb-item active","aria-current":"page"},l={class:"my-5 text-center"},u={class:"h4"},d={class:"h4 font-mirza ms-2"};function p(t,s){const a=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("nav",i,[(0,e._)("ol",n,[(0,e._)("li",c,[(0,e.Wm)(a,{to:"/"},{default:(0,e.w5)((()=>[(0,e.Uk)("首頁")])),_:1})]),(0,e._)("li",r,(0,o.zw)(t.$route.name),1)])]),(0,e._)("div",l,[(0,e._)("span",u,(0,o.zw)(t.$route.name),1),(0,e._)("span",d,(0,o.zw)(this.$route.meta.name),1)])],64)}var h=a(89);const g={},m=(0,h.Z)(g,[["render",p]]);var b=m},1964:function(t,s,a){a.r(s),a.d(s,{default:function(){return Y}});var e=a(3396),o=a(9242),i=a(7139);const n={class:"container"},c={key:0,class:"row"},r={class:"bg-light shadow p-3 p-md-4 col-11 col-md-8 mx-auto"},l={class:"table align-middle"},u={class:"p-0"},d=["onClick"],p=(0,e._)("i",{class:"bi bi-trash3"},null,-1),h=[p],g={class:"col-3"},m=["onClick"],b={class:"fw-bold"},_={class:"input-group input-group-sm",style:{width:"100px"}},w=["disabled","onChange","onUpdate:modelValue"],f={class:"input-group-text"},x={class:"fw-bold mt-2 mb-0 text-end text-nowrap"},v={colspan:"3"},C=(0,e._)("p",{class:"text-end"},"小計",-1),y={key:0,class:"text-end"},k={class:"bg-success text-light py-1 px-2 rounded"},$={class:"fw-bold"},z=(0,e._)("span",{class:"fw-bold ms-2 text-success"},"折抵",-1),D=(0,e._)("p",{class:"fw-bold text-end"},"總額",-1),L={class:"text-end text-nowrap"},q={key:0,class:"fw-bold text-end text-success text-nowrap"},j={class:"fw-bold text-end text-nowrap"},U={class:"input-group input-group-sm pb-3 px-2 p-mb-0"},I={class:"input-group-text"},M={class:"text-end mt-5"},P={key:1,class:"mb-4 fs-5"};function Z(t,s,a,p,Z,H){const S=(0,e.up)("LoadingCom"),V=(0,e.up)("BreadcrumbCom");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(S,{active:Z.isLoading},null,8,["active"]),(0,e._)("div",n,[(0,e.Wm)(V),Z.carts.length>0?((0,e.wg)(),(0,e.iD)("div",c,[(0,e._)("div",r,[(0,e._)("table",l,[(0,e._)("tbody",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(Z.carts,(s=>((0,e.wg)(),(0,e.iD)("tr",{key:s.id},[(0,e._)("td",u,[(0,e._)("a",{href:"javascript:;",class:"btn btn-sm btn-outline-danger rounded-5",onClick:(0,o.iM)((t=>H.delCart(s)),["prevent"])},h,8,d)]),(0,e._)("td",g,[(0,e._)("a",{href:"javascript:;",onClick:(0,o.iM)((t=>H.getProduct(s.product.id)),["prevent"])},[(0,e._)("div",{style:(0,i.j5)({backgroundImage:`url(${s.product.imageUrl})`}),class:"sm-imgs bg-center"},null,4)],8,m)]),(0,e._)("td",null,[(0,e._)("p",b,(0,i.zw)(s.product.title),1),(0,e._)("div",_,[(0,e.wy)((0,e._)("input",{type:"number",class:"form-control",min:"1",disabled:s.id===Z.loadingItem,onChange:t=>H.updateCart(s),"onUpdate:modelValue":t=>s.qty=t},null,40,w),[[o.nr,s.qty,void 0,{number:!0}]]),(0,e._)("div",f,"/ "+(0,i.zw)(s.product.unit),1)])]),(0,e._)("td",x,(0,i.zw)(t.$filters.currency(s.product.price)),1)])))),128))]),(0,e._)("tfoot",null,[(0,e._)("tr",null,[(0,e._)("td",v,[C,Z.cart.final_total!==Z.cart.total?((0,e.wg)(),(0,e.iD)("p",y,[(0,e._)("span",k,[(0,e.Uk)("優惠券: "),(0,e._)("span",$,(0,i.zw)(Z.carts[0].coupon.title),1)]),z])):(0,e.kq)("",!0),D]),(0,e._)("td",null,[(0,e._)("p",L,(0,i.zw)(t.$filters.currency(Z.cart.total)),1),Z.cart.final_total!==Z.cart.total?((0,e.wg)(),(0,e.iD)("p",q,"- "+(0,i.zw)(t.$filters.currency(Z.cart.total-Z.cart.final_total)),1)):(0,e.kq)("",!0),(0,e._)("p",j,(0,i.zw)(t.$filters.currency(Z.cart.final_total)),1)])])])]),(0,e._)("div",U,[(0,e.wy)((0,e._)("input",{type:"text",class:"form-control",placeholder:"請輸入優惠碼","onUpdate:modelValue":s[0]||(s[0]=t=>Z.code=t),onKeyup:s[1]||(s[1]=(0,o.D2)(((...t)=>H.useCoupon&&H.useCoupon(...t)),["enter"]))},null,544),[[o.nr,Z.code,void 0,{lazy:!0}]]),(0,e._)("div",I,[(0,e._)("button",{class:"btn btn-sm btn-outline-secondary",type:"button",onClick:s[2]||(s[2]=(...t)=>H.useCoupon&&H.useCoupon(...t))}," 套用優惠碼 ")])]),(0,e._)("div",M,[(0,e._)("button",{class:"btn-shadow btn btn-primary text-light",type:"button",onClick:s[3]||(s[3]=(...t)=>H.goCheckout&&H.goCheckout(...t))},"前往結帳")])])])):((0,e.wg)(),(0,e.iD)("p",P,"目前購物車是空的，請選擇商品加入。"))])],64)}a(7658);var H=a(9390),S={data(){return{carts:[],cart:{},isLoading:!1,loadingItem:"",code:""}},created(){this.getCarts()},methods:{getCarts(){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/alisonhu-api/cart";this.axios.get(t).then((t=>{this.isLoading=!1,this.carts=t.data.data.carts,this.cart=t.data.data}))},getProduct(t){this.$router.push(`/user/product/${t}`)},delCart(t){this.isLoading=!0;const s=`https://vue3-course-api.hexschool.io/api/alisonhu-api/cart/${t.id}`;this.axios.delete(s).then((t=>{this.isLoading=!1,this.getCarts(),this.PushMessageState(t,"刪除"),this.emitter.emit("cart-qty")}))},updateCart(t){this.loadingItem=t.id;const s=`https://vue3-course-api.hexschool.io/api/alisonhu-api/cart/${t.id}`,a={product_id:t.id,qty:t.qty};this.axios.put(s,{data:a}).then((t=>{this.loadingItem="",this.getCarts()}))},useCoupon(){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/alisonhu-api/coupon",s={code:this.code};this.axios.post(t,{data:s}).then((t=>{this.isLoading=!1,this.getCarts(),this.PushMessageState(t,"套用優惠券")}))},goCheckout(){this.$router.push("/user/info")}},components:{BreadcrumbCom:H.Z},inject:["emitter","PushMessageState"]},V=a(89);const W=(0,V.Z)(S,[["render",Z]]);var Y=W}}]);
//# sourceMappingURL=964.6d4d444e.js.map