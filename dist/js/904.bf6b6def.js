"use strict";(self["webpackChunkfinalproject"]=self["webpackChunkfinalproject"]||[]).push([[904],{2307:function(t,e,a){a.d(e,{Z:function(){return k}});var n=a(3396),i=a(9242),s=a(7139);const o={"aria-label":"Page navigation example",class:"mt-4"},r={class:"pagination justify-content-center pagination-sm"},c={class:"page-item"},l=(0,n._)("span",{"aria-hidden":"true"},"«",-1),u=[l],p=["onClick"],g={class:"page-item"},d=(0,n._)("span",{"aria-hidden":"true"},"»",-1),h=[d];function m(t,e,a,l,d,m){return(0,n.wg)(),(0,n.iD)("nav",o,[(0,n._)("ul",r,[(0,n._)("li",c,[(0,n._)("a",{class:"page-link",href:"#",onClick:e[0]||(e[0]=(0,i.iM)((t=>m.updatePage(d.currentPage-1)),["prevent"])),"aria-label":"Previous"},u)]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.pages.total_pages,(t=>((0,n.wg)(),(0,n.iD)("li",{class:(0,s.C_)(["page-item",{active:t===a.pages.current_page}]),key:t},[(0,n._)("a",{class:"page-link",href:"#",onClick:(0,i.iM)((e=>m.updatePage(t)),["prevent"])},(0,s.zw)(t),9,p)],2)))),128)),(0,n._)("li",g,[(0,n._)("a",{class:"page-link",href:"#",onClick:e[1]||(e[1]=(0,i.iM)((t=>m.updatePage(d.currentPage+1)),["prevent"])),"aria-label":"Next"},h)])])])}var v={data(){return{currentPage:1}},props:["pages"],methods:{updatePage(t){t>0&&t<=this.pages.total_pages&&(this.$emit("update-page",t),document.documentElement.scrollTop=0,this.currentPage=t)}}},P=a(89);const f=(0,P.Z)(v,[["render",m]]);var k=f},2904:function(t,e,a){a.r(e),a.d(e,{default:function(){return v}});var n=a(3396),i=a(9242),s=a(7139);const o={class:"my-4"},r={class:"row row-cols-2 row-cols-md-4 gx-3 gy-5"},c=["onClick"],l=["onClick"],u={class:"card-text fw-bold text-secondary mt-2"};function p(t,e,a,p,g,d){const h=(0,n.up)("LoadingCom"),m=(0,n.up)("PaginationCom");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(h,{active:g.isLoading},null,8,["active"]),(0,n._)("main",null,[(0,n._)("section",o,[(0,n._)("div",r,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(d.searchData,(e=>((0,n.wg)(),(0,n.iD)("div",{class:"col",key:e.id},[(0,n._)("a",{href:"javascript:;",onClick:(0,i.iM)((t=>d.getProduct(e.id)),["prevent"])},[(0,n._)("div",{style:(0,s.j5)([{backgroundImage:`url(${e.imageUrl})`},{height:"350px"}]),class:"bg-center rounded mb-3"},null,4)],8,c),(0,n._)("a",{href:"javascript:;",onClick:(0,i.iM)((t=>d.getProduct(e.id)),["prevent"]),class:"h5 link-dark text-decoration-none"},(0,s.zw)(e.title),9,l),(0,n._)("p",u,(0,s.zw)(t.$filters.currency(e.price)),1)])))),128))])])]),(0,n.Wm)(m,{pages:g.pagination,onUpdatePage:d.getProducts},null,8,["pages","onUpdatePage"])],64)}a(7658);var g=a(2307),d={data(){return{products:[],pagination:{total_pages:""},isLoading:!1,searchInput:""}},mounted(){this.getProducts(),this.emitter.on("searchData",(t=>{this.searchInput=t,console.log("1",this.searchInput)}))},methods:{getProducts(t=1){this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/api/alisonhu-api/products?page=${t}`;this.axios.get(e).then((t=>{console.log("getProducts",t),this.isLoading=!1,this.products=t.data.products,this.pagination=t.data.pagination,console.log("2",this.searchInput)}))},getProduct(t){this.$router.push(`/user/product/${t}`)}},computed:{searchData(){return console.log("3",this.searchInput),this.products.filter((t=>t.title.match(this.searchInput)))}},components:{PaginationCom:g.Z},inject:["emitter"]},h=a(89);const m=(0,h.Z)(d,[["render",p]]);var v=m}}]);
//# sourceMappingURL=904.bf6b6def.js.map