"use strict";(self["webpackChunkfinalproject"]=self["webpackChunkfinalproject"]||[]).push([[6],{5741:function(t,e,a){var l=a(7972),s=a.n(l);e["Z"]={data(){return{modal:{}}},mounted(){this.modal=new(s())(this.$refs.modal)},methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}}}},9227:function(t,e,a){a.d(e,{Z:function(){return w}});var l=a(3396),s=a(9242),r=a(7139);const d={"aria-label":"Page navigation",class:"mt-4"},o={class:"pagination justify-content-center pagination-sm"},i={class:"page-item"},n=(0,l._)("span",{"aria-hidden":"true"},"«",-1),c=[n],p=["onClick"],u={class:"page-item"},m=(0,l._)("span",{"aria-hidden":"true"},"»",-1),h=[m];function _(t,e,a,n,m,_){return(0,l.wg)(),(0,l.iD)("nav",d,[(0,l._)("ul",o,[(0,l._)("li",i,[(0,l._)("a",{class:"page-link",href:"#",onClick:e[0]||(e[0]=(0,s.iM)((t=>_.updatePage(m.currentPage-1)),["prevent"])),"aria-label":"Previous"},c)]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.pages.total_pages,(t=>((0,l.wg)(),(0,l.iD)("li",{class:(0,r.C_)(["page-item",{active:t===a.pages.current_page}]),key:t},[(0,l._)("a",{class:"page-link",href:"#",onClick:(0,s.iM)((e=>_.updatePage(t)),["prevent"])},(0,r.zw)(t),9,p)],2)))),128)),(0,l._)("li",u,[(0,l._)("a",{class:"page-link",href:"#",onClick:e[1]||(e[1]=(0,s.iM)((t=>_.updatePage(m.currentPage+1)),["prevent"])),"aria-label":"Next"},h)])])])}var g={data(){return{currentPage:1}},props:["pages"],methods:{updatePage(t){t>0&&t<=this.pages.total_pages&&(this.$emit("update-page",t),document.documentElement.scrollTop=0,this.currentPage=t)}}},b=a(89);const f=(0,b.Z)(g,[["render",_]]);var w=f},6006:function(t,e,a){a.r(e),a.d(e,{default:function(){return Wt}});var l=a(3396),s=a(7139),r=a(9242);const d={class:"d-flex justify-content-between align-items-center"},o=(0,l._)("h5",null,"訂單",-1),i={class:"me-3"},n={class:"input-group"},c=["value"],p=(0,l._)("button",{class:"btn btn-secondary input-group-text",type:"submit"},[(0,l._)("i",{class:"bi bi-search"})],-1),u={class:"bg-light border rounded mt-3 shadow"},m={class:"table table-sm mt-3 align-middle"},h=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",null,"訂單編號"),(0,l._)("th",{class:"d-none d-md-table-cell"},"購買時間"),(0,l._)("th",null,"購買人"),(0,l._)("th",null,[(0,l._)("div",null,"購買品項")]),(0,l._)("th",{class:"text-nowrap"},"應付金額"),(0,l._)("th",{class:"text-nowrap d-none d-md-table-cell"},"是否付款"),(0,l._)("th",null,"編輯")])],-1),_={class:"d-none d-md-table-cell"},g={class:"d-none d-md-table-cell"},b={class:"form-check form-switch"},f=["onUpdate:modelValue"],w={class:"form-check-label",for:"flexSwitchCheckChecked"},y={class:"btn-group btn-group-sm"},v=["onClick"],O=["onClick"];function P(t,e,a,P,k,M){const x=(0,l.up)("LoadingCom"),C=(0,l.up)("PaginationCom"),D=(0,l.up)("OrdersModal"),q=(0,l.up)("DelOrdersModal");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(x,{active:k.isLoading},null,8,["active"]),(0,l._)("div",d,[o,(0,l._)("form",i,[(0,l._)("div",n,[(0,l._)("input",{class:"form-control form-control-sm",type:"search",placeholder:"請輸入訂單編號",value:k.searchInput,onChange:e[0]||(e[0]=t=>k.searchInput=t.target.value),"aria-label":"Search"},null,40,c),p])])]),(0,l._)("div",u,[(0,l._)("table",m,[h,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(M.searchData,(e=>((0,l.wg)(),(0,l.iD)("tr",{key:e.id,class:"fs-7"},[(0,l._)("td",null,(0,s.zw)(e.id.substring(1,8)),1),(0,l._)("td",_,(0,s.zw)(t.$filters.date(e.create_at)),1),(0,l._)("td",null,(0,s.zw)(e.user.name),1),(0,l._)("td",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.products,(t=>((0,l.wg)(),(0,l.iD)("div",{key:t.id},(0,s.zw)(t.product.title)+" x "+(0,s.zw)(t.qty),1)))),128))]),(0,l._)("td",null,(0,s.zw)(t.$filters.currency(e.total)),1),(0,l._)("td",g,[(0,l._)("div",b,[(0,l.wy)((0,l._)("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckChecked","onUpdate:modelValue":t=>e.is_paid=t},null,8,f),[[r.e8,e.is_paid]]),(0,l._)("label",w,(0,s.zw)(e.is_paid?"已付款":"未付款"),1)])]),(0,l._)("td",null,[(0,l._)("div",y,[(0,l._)("button",{class:"btn btn-outline-primary p-1 p-md-2",onClick:(0,r.iM)((t=>M.openModal(e)),["prevent"])},"編輯",8,v),(0,l._)("button",{class:"btn btn-outline-danger p-1 p-md-2",onClick:(0,r.iM)((t=>M.delOrdersModal(e)),["prevent"])},"刪除",8,O)])])])))),128))])])]),k.searchInput?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(C,{key:0,pages:k.pagination,onUpdatePage:M.getOrders},null,8,["pages","onUpdatePage"])),(0,l.Wm)(D,{ref:"ordersModal",order:k.tempOrder,onUpdateOrder:M.updateOrder},null,8,["order","onUpdateOrder"]),(0,l.Wm)(q,{ref:"delOrdersModal",item:k.tempOrder,onDelItem:M.delOrders},null,8,["item","onDelItem"])],64)}var k=a(9227);const M={class:"modal",tabindex:"-1",ref:"modal"},x={class:"modal-dialog modal-xl"},C={class:"modal-content border-0"},D=(0,l._)("div",{class:"modal-header bg-primary text-white"},[(0,l._)("h4",{class:"modal-title"},"訂單"),(0,l._)("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),q={class:"modal-body"},U={class:"row g-3"},$=(0,l._)("h5",{class:"fw-bold"},"訂單細節",-1),z={class:"col-sm-6"},I=(0,l._)("label",{for:"orderId",class:"form-label"},"訂單編號",-1),V={class:"col-sm-4"},L=(0,l._)("label",{for:"orderMsg",class:"form-label"},"備註",-1),S={class:"col-sm-2"},Z={class:"form-check pt-4"},j=(0,l._)("label",{class:"form-check-label",for:"is_paid"},"是否付款",-1),H={class:"col-sm-6"},K=(0,l._)("label",{for:"create_at",class:"form-label"},"下單時間",-1),Y={class:"col-sm-6"},E=(0,l._)("label",{for:"paid_date",class:"form-label"},"付款時間",-1),A=(0,l._)("h5",{class:"fw-bold mt-5"},"用戶資料",-1),T={class:"col-sm-6"},W=(0,l._)("label",{for:"name",class:"form-label"},"姓名",-1),N={class:"col-sm-6"},R=(0,l._)("label",{for:"email",class:"form-label"},"Email",-1),B={class:"col-sm-6"},F=(0,l._)("label",{for:"tel",class:"form-label"},"電話",-1),G={class:"col-sm-6"},J=(0,l._)("label",{for:"address",class:"form-label"},"地址",-1),Q=(0,l._)("h5",{class:"fw-bold mt-5"},"選購商品",-1),X={class:"table align-middle"},tt={class:"pb-5"},et={class:"pb-5"},at=(0,l._)("label",{for:"product_title",class:"form-label"},"商品名稱",-1),lt=(0,l._)("option",{disabled:"",value:""},"請選擇商品",-1),st={key:0,class:"text-danger d-block"},rt={class:"pb-5"},dt=(0,l._)("label",{for:"qty",class:"form-label"},"商品數量",-1),ot={class:"pb-5"},it={key:0},nt=(0,l._)("p",null,"商品小計",-1),ct={class:"mt-1 text-end pe-2"},pt={class:"col-sm-2"},ut=["onClick"],mt=(0,l._)("i",{class:"bi bi-x-lg fw-bold"},null,-1),ht=[mt],_t={key:0},gt={class:"text-end"},bt={colspan:"4",class:"text-end fw-bold"},ft={key:0},wt=(0,l._)("span",null,"折扣",-1),yt={class:"ps-4"},vt=(0,l._)("span",null,"總金額",-1),Ot={class:"ps-4"},Pt={class:"modal-footer"},kt=(0,l._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function Mt(t,e,a,d,o,i){return(0,l.wg)(),(0,l.iD)("div",M,[(0,l._)("div",x,[(0,l._)("div",C,[D,(0,l._)("div",q,[(0,l._)("form",U,[$,(0,l._)("div",z,[I,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>o.tempOrder.id=t),placeholder:"請輸入訂單編號",type:"text",class:"form-control",id:"orderId"},null,512),[[r.nr,o.tempOrder.id]])]),(0,l._)("div",V,[L,(0,l.wy)((0,l._)("textarea",{"onUpdate:modelValue":e[1]||(e[1]=t=>o.tempOrder.message=t),class:"form-control",id:"orderMsg"},null,512),[[r.nr,o.tempOrder.message]])]),(0,l._)("div",S,[(0,l._)("div",Z,[(0,l.wy)((0,l._)("input",{class:"form-check-input",type:"checkbox","true-value":!0,"false-value":!1,id:"is_paid","onUpdate:modelValue":e[2]||(e[2]=t=>o.tempOrder.is_paid=t)},null,512),[[r.e8,o.tempOrder.is_paid]]),j])]),(0,l._)("div",H,[K,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>o.create_at=t),placeholder:"請輸入下單時間",type:"date",class:"form-control",id:"create_at"},null,512),[[r.nr,o.create_at]])]),(0,l._)("div",Y,[E,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":e[4]||(e[4]=t=>o.paid_date=t),placeholder:"請輸入付款時間",type:"date",class:"form-control",id:"paid_date"},null,512),[[r.nr,o.paid_date]])]),A,(0,l._)("div",T,[W,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":e[5]||(e[5]=t=>o.tempOrder.user.name=t),placeholder:"請輸入姓名",type:"text",class:"form-control",id:"name"},null,512),[[r.nr,o.tempOrder.user.name]])]),(0,l._)("div",N,[R,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":e[6]||(e[6]=t=>o.tempOrder.user.email=t),placeholder:"請輸入Email",type:"email",class:"form-control",id:"email"},null,512),[[r.nr,o.tempOrder.user.email]])]),(0,l._)("div",B,[F,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":e[7]||(e[7]=t=>o.tempOrder.user.tel=t),placeholder:"請輸入電話",type:"text",class:"form-control",id:"tel"},null,512),[[r.nr,o.tempOrder.user.tel]])]),(0,l._)("div",G,[J,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":e[8]||(e[8]=t=>o.tempOrder.user.address=t),placeholder:"請輸入地址",type:"address",class:"form-control",id:"address"},null,512),[[r.nr,o.tempOrder.user.address]])]),Q,(0,l._)("table",X,[(0,l._)("tbody",null,[(0,l._)("tr",null,[(0,l._)("td",tt,[(0,l._)("div",null,[(0,l._)("button",{type:"button",class:"btn btn-success btn-sm",onClick:e[9]||(e[9]=(0,r.iM)(((...t)=>i.addProduct&&i.addProduct(...t)),["prevent"]))},"新增")])]),(0,l._)("td",et,[at,(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":e[10]||(e[10]=t=>o.tempProduct.product.title=t),id:"product_title",onChange:e[11]||(e[11]=(...t)=>i.updatePrice&&i.updatePrice(...t)),class:"form-select"},[lt,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.allProducts,(t=>((0,l.wg)(),(0,l.iD)("option",{key:t.id},(0,s.zw)(t.title),1)))),128))],544),[[r.bM,o.tempProduct.product.title]]),o.wrongMsg?((0,l.wg)(),(0,l.iD)("small",st,(0,s.zw)(o.wrongMsg),1)):(0,l.kq)("",!0)]),(0,l._)("td",rt,[dt,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":e[12]||(e[12]=t=>o.tempProduct.qty=t),placeholder:"請輸入商品數量",onChange:e[13]||(e[13]=(...t)=>i.updatePrice&&i.updatePrice(...t)),type:"number",min:"1",class:"form-control",id:"qty"},null,544),[[r.nr,o.tempProduct.qty,void 0,{number:!0}]])]),(0,l._)("td",ot,[o.tempProduct.product.title&&o.tempProduct.qty?((0,l.wg)(),(0,l.iD)("div",it,[nt,(0,l._)("p",ct,(0,s.zw)(t.$filters.currency(o.tempProduct.total)),1)])):(0,l.kq)("",!0)])]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.tempOrder.products,((e,a)=>((0,l.wg)(),(0,l.iD)("tr",{key:e.id},[(0,l._)("td",null,[(0,l._)("div",pt,[(0,l._)("button",{type:"button",class:"btn btn-danger btn-sm",onClick:(0,r.iM)((t=>i.delProduct(a)),["prevent"])},ht,8,ut)])]),e.product?((0,l.wg)(),(0,l.iD)("td",_t,(0,s.zw)(e.product.title),1)):(0,l.kq)("",!0),(0,l._)("td",null,"x "+(0,s.zw)(e.qty),1),(0,l._)("td",gt,(0,s.zw)(t.$filters.currency(e.total)),1)])))),128))]),(0,l._)("tr",null,[(0,l._)("td",bt,[0!==i.discount?((0,l.wg)(),(0,l.iD)("div",ft,[wt,(0,l._)("span",yt,"- "+(0,s.zw)(t.$filters.currency(i.discount)),1)])):(0,l.kq)("",!0),(0,l._)("div",null,[vt,(0,l._)("span",Ot,(0,s.zw)(t.$filters.currency(o.tempOrder.total)),1)])])])])]),(0,l._)("div",Pt,[kt,(0,l._)("button",{type:"button",class:"btn btn-outline-primary",onClick:e[14]||(e[14]=e=>t.$emit("update-order",o.tempOrder))},"確認")])])])])],512)}var xt=a(5741),Ct={data(){return{tempOrder:{user:{},id:"",products:{},total:0},create_at:"",paid_date:"",tempProductId:"",tempProduct:{product:{title:"",price:0},qty:1,total:0,final_total:0},allProducts:[],wrongMsg:""}},created(){this.getAllProducts()},props:{order:{}},methods:{getAllProducts(){const t="https://vue3-course-api.hexschool.io/api/alisonhu-api/admin/products/all";this.axios.get(t).then((t=>{this.allProducts=Object.values(t.data.products)}))},updatePrice(){const t=this.allProducts.filter((t=>t.title===this.tempProduct.product.title));this.tempProduct.product=t[0],this.tempProduct.total=this.tempProduct.product.price*this.tempProduct.qty,this.tempProduct.final_total=this.tempProduct.total},addProduct(){if(this.tempProduct.product.title&&this.tempProduct.qty){const t=Math.floor(1e4*Math.random());this.tempProductId=`-NMdbK3PnewOrder${t}`,this.tempOrder.products[this.tempProductId]=this.tempProduct,this.tempOrder.total+=this.tempProduct.product.price*this.tempProduct.qty,this.tempProduct={product:{title:""},qty:1},this.wrongMsg=""}else!this.tempProduct.product.title&&this.tempProduct.qty?this.wrongMsg="新增失敗，請選擇商品名稱":this.tempProduct.product.title&&!this.tempProduct.qty?this.wrongMsg="新增失敗，請選擇商品數量":this.wrongMsg="新增失敗，請選擇商品名稱及數量"},delProduct(t){this.tempOrder.total-=this.tempOrder.products[t].final_total,delete this.tempOrder.products[t]}},computed:{discount(){let t=0;const e=Object.values(this.tempOrder.products);return e.forEach((e=>{t+=e.total-e.final_total})),t}},watch:{order(){if(this.tempOrder=this.order,this.tempOrder.create_at){const t=new Date(1e3*this.tempOrder.create_at).toISOString().split("T");[this.create_at]=t}if(this.tempOrder.paid_date){const t=new Date(1e3*this.tempOrder.paid_date).toISOString().split("T");[this.paid_date]=t}},create_at(){this.tempOrder.create_at=Math.floor(new Date(this.create_at)/1e3)},paid_date(){this.tempOrder.paid_date=Math.floor(new Date(this.paid_date)/1e3)}},emits:["update-order"],mixins:[xt.Z]},Dt=a(89);const qt=(0,Dt.Z)(Ct,[["render",Mt]]);var Ut=qt;const $t={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},zt={class:"modal-dialog"},It={class:"modal-content"},Vt=(0,l._)("div",{class:"modal-header bg-primary text-white"},[(0,l._)("h5",{class:"modal-title",id:"exampleModalLabel"},"刪除訂單"),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Lt={class:"modal-body"},St={class:"text-danger"},Zt={class:"modal-footer"},jt=(0,l._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function Ht(t,e,a,r,d,o){return(0,l.wg)(),(0,l.iD)("div",$t,[(0,l._)("div",zt,[(0,l._)("div",It,[Vt,(0,l._)("div",Lt,[(0,l.Uk)(" 請確認是否刪除訂單編號 "),(0,l._)("span",St,(0,s.zw)(a.item.id),1),(0,l.Uk)("，刪除後將無法復原。 ")]),(0,l._)("div",Zt,[jt,(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=e=>t.$emit("del-item",a.item))},"確認")])])])],512)}var Kt={props:{item:{}},emits:["del-item"],mixins:[xt.Z]};const Yt=(0,Dt.Z)(Kt,[["render",Ht]]);var Et=Yt,At={data(){return{orders:[],pagination:{total_pages:""},tempOrder:{},isLoading:!1,searchInput:""}},created(){this.getOrders(),this.searchInput=""},methods:{getOrders(t=1){this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/api/alisonhu-api/admin/orders?page=${t}`;this.axios.get(e).then((t=>{this.isLoading=!1,this.orders=t.data.orders,this.pagination=t.data.pagination;const e=t.data.pagination.total_pages;if(t.data.pagination.has_next)for(let a=2;a<=e;a++)this.getAllOrders(a)}))},getAllOrders(t){const e=`https://vue3-course-api.hexschool.io/api/alisonhu-api/admin/orders?page=${t}`;this.axios.get(e).then((t=>{this.orders=this.orders.concat(t.data.orders)}))},openModal(t){this.tempOrder={...t},this.$refs.ordersModal.showModal()},delOrdersModal(t){this.tempOrder={...t},this.$refs.delOrdersModal.showModal()},delOrders(t){this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/api/alisonhu-api/admin/order/${t.id}`;this.axios.delete(e).then((t=>{this.isLoading=!1,this.$refs.delOrdersModal.hideModal(),this.getOrders(this.pagination.current_page),this.PushMessageState(t,"刪除")}))},updateOrder(t){this.isLoading=!0,this.tempOrder=t;const e=`https://vue3-course-api.hexschool.io/api/alisonhu-api/admin/order/${t.id}`;this.axios.put(e,{data:this.tempOrder}).then((t=>{this.isLoading=!1,this.$refs.ordersModal.hideModal(),this.getOrders(this.pagination.current_page),this.PushMessageState(t,"更新")}))}},computed:{searchData(){const t=new RegExp(this.searchInput,"gi");return this.orders.filter((e=>e.id.match(t)))}},components:{PaginationCom:k.Z,OrdersModal:Ut,DelOrdersModal:Et},inject:["emitter","PushMessageState"]};const Tt=(0,Dt.Z)(At,[["render",P]]);var Wt=Tt}}]);
//# sourceMappingURL=6.fd44ecfc.js.map