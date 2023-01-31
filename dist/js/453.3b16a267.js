"use strict";(self["webpackChunkfinalproject"]=self["webpackChunkfinalproject"]||[]).push([[453],{2453:function(t,e,l){l.r(e),l.d(e,{default:function(){return Et}});var s=l(3396),a=l(7139),r=l(9242);const d={class:"d-flex justify-content-between"},o=(0,s._)("h3",null,"訂單",-1),i={class:"me-3"},n={class:"input-group"},c=["value"],p=(0,s._)("button",{class:"btn btn-secondary input-group-text",type:"submit"},[(0,s._)("i",{class:"bi bi-search"})],-1),u={class:"bg-light border rounded mt-3 shadow"},m={class:"table table-sm mt-3"},h=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"訂單編號"),(0,s._)("th",null,"購買時間"),(0,s._)("th",null,"購買人"),(0,s._)("th",null,[(0,s._)("div",null,"購買品項")]),(0,s._)("th",null,"應付金額"),(0,s._)("th",{class:"text-nowrap"},[(0,s._)("div",{class:"d-none d-md-block"},"是否付款")]),(0,s._)("th",null,"編輯")])],-1),_={class:"form-check form-switch d-none d-md-block"},b=["onUpdate:modelValue"],g={class:"form-check-label",for:"flexSwitchCheckChecked"},f={class:"btn-group"},w=["onClick"],y=["onClick"];function O(t,e,l,O,v,P){const k=(0,s.up)("LoadingCom"),M=(0,s.up)("PaginationCom"),x=(0,s.up)("OrdersModal"),D=(0,s.up)("DelOrdersModal");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(k,{active:v.isLoading},null,8,["active"]),(0,s._)("div",d,[o,(0,s._)("form",i,[(0,s._)("div",n,[(0,s._)("input",{class:"form-control form-control-sm",type:"search",placeholder:"請輸入訂單編號",value:v.searchInput,onChange:e[0]||(e[0]=t=>v.searchInput=t.target.value),"aria-label":"Search"},null,40,c),p])])]),(0,s._)("div",u,[(0,s._)("table",m,[h,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(P.searchData,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e.id,class:"fs-7"},[(0,s._)("td",null,(0,a.zw)(e.id.substring(1,8)),1),(0,s._)("td",null,(0,a.zw)(t.$filters.date(e.create_at)),1),(0,s._)("td",null,(0,a.zw)(e.user.name),1),(0,s._)("td",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.products,(t=>((0,s.wg)(),(0,s.iD)("div",{key:t.id},(0,a.zw)(t.product.title)+" x "+(0,a.zw)(t.qty),1)))),128))]),(0,s._)("td",null,(0,a.zw)(t.$filters.currency(e.total)),1),(0,s._)("td",null,[(0,s._)("div",_,[(0,s.wy)((0,s._)("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckChecked","onUpdate:modelValue":t=>e.is_paid=t},null,8,b),[[r.e8,e.is_paid]]),(0,s._)("label",g,(0,a.zw)(e.is_paid?"已付款":"未付款"),1)])]),(0,s._)("td",null,[(0,s._)("div",f,[(0,s._)("button",{class:"btn btn-outline-primary btn-sm",onClick:(0,r.iM)((t=>P.openModal(e)),["prevent"])},"編輯",8,w),(0,s._)("button",{class:"btn btn-outline-danger btn-sm",onClick:(0,r.iM)((t=>P.delOrdersModal(e)),["prevent"])},"刪除",8,y)])])])))),128))])])]),v.searchInput?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(M,{key:0,pages:v.pagination,onUpdatePage:P.getOrders},null,8,["pages","onUpdatePage"])),(0,s.Wm)(x,{ref:"ordersModal",order:v.tempOrder,onUpdateOrder:P.updateOrder},null,8,["order","onUpdateOrder"]),(0,s.Wm)(D,{ref:"delOrdersModal",item:v.tempOrder,onDelItem:P.delOrders},null,8,["item","onDelItem"])],64)}var v=l(2307);const P={class:"modal",tabindex:"-1",ref:"modal"},k={class:"modal-dialog modal-xl"},M={class:"modal-content border-0"},x=(0,s._)("div",{class:"modal-header bg-primary text-white"},[(0,s._)("h4",{class:"modal-title"},"訂單"),(0,s._)("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),D={class:"modal-body"},C={class:"row g-3"},U=(0,s._)("h5",{class:"fw-bold"},"訂單細節",-1),q={class:"col-sm-6"},$=(0,s._)("label",{for:"orderId",class:"form-label"},"訂單編號",-1),z={class:"col-sm-4"},I=(0,s._)("label",{for:"orderMsg",class:"form-label"},"備註",-1),V={class:"col-sm-2"},L={class:"form-check pt-4"},S=(0,s._)("label",{class:"form-check-label",for:"is_paid"},"是否付款",-1),j={class:"col-sm-6"},Z=(0,s._)("label",{for:"create_at",class:"form-label"},"下單時間",-1),A={class:"col-sm-6"},H=(0,s._)("label",{for:"paid_date",class:"form-label"},"付款時間",-1),K=(0,s._)("h5",{class:"fw-bold mt-5"},"用戶資料",-1),Y={class:"col-sm-6"},E=(0,s._)("label",{for:"name",class:"form-label"},"姓名",-1),W={class:"col-sm-6"},T=(0,s._)("label",{for:"email",class:"form-label"},"Email",-1),N={class:"col-sm-6"},R=(0,s._)("label",{for:"tel",class:"form-label"},"電話",-1),B={class:"col-sm-6"},F=(0,s._)("label",{for:"address",class:"form-label"},"地址",-1),G=(0,s._)("h5",{class:"fw-bold mt-5"},"選購商品",-1),J={class:"table align-middle"},Q={class:"pb-5"},X={class:"pb-5"},tt=(0,s._)("label",{for:"product_title",class:"form-label"},"商品名稱",-1),et=(0,s._)("option",{disabled:"",value:""},"請選擇商品",-1),lt={key:0,class:"text-danger d-block"},st={class:"pb-5"},at=(0,s._)("label",{for:"qty",class:"form-label"},"商品數量",-1),rt={class:"pb-5"},dt={key:0},ot=(0,s._)("p",null,"商品小計",-1),it={class:"mt-1 text-end pe-2"},nt={class:"col-sm-2"},ct=["onClick"],pt=(0,s._)("i",{class:"bi bi-x-lg fw-bold"},null,-1),ut=[pt],mt={key:0},ht={class:"text-end"},_t={colspan:"4",class:"text-end fw-bold"},bt={key:0},gt=(0,s._)("span",null,"折扣",-1),ft={class:"ps-4"},wt=(0,s._)("span",null,"總金額",-1),yt={class:"ps-4"},Ot={class:"modal-footer"},vt=(0,s._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function Pt(t,e,l,d,o,i){return(0,s.wg)(),(0,s.iD)("div",P,[(0,s._)("div",k,[(0,s._)("div",M,[x,(0,s._)("div",D,[(0,s._)("form",C,[U,(0,s._)("div",q,[$,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>o.tempOrder.id=t),placeholder:"請輸入訂單編號",type:"text",class:"form-control",id:"orderId"},null,512),[[r.nr,o.tempOrder.id]])]),(0,s._)("div",z,[I,(0,s.wy)((0,s._)("textarea",{"onUpdate:modelValue":e[1]||(e[1]=t=>o.tempOrder.message=t),class:"form-control",id:"orderMsg"},null,512),[[r.nr,o.tempOrder.message]])]),(0,s._)("div",V,[(0,s._)("div",L,[(0,s.wy)((0,s._)("input",{class:"form-check-input",type:"checkbox","true-value":!0,"false-value":!1,id:"is_paid","onUpdate:modelValue":e[2]||(e[2]=t=>o.tempOrder.is_paid=t)},null,512),[[r.e8,o.tempOrder.is_paid]]),S])]),(0,s._)("div",j,[Z,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>o.create_at=t),placeholder:"請輸入下單時間",type:"date",class:"form-control",id:"create_at"},null,512),[[r.nr,o.create_at]])]),(0,s._)("div",A,[H,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[4]||(e[4]=t=>o.paid_date=t),placeholder:"請輸入付款時間",type:"date",class:"form-control",id:"paid_date"},null,512),[[r.nr,o.paid_date]])]),K,(0,s._)("div",Y,[E,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[5]||(e[5]=t=>o.tempOrder.user.name=t),placeholder:"請輸入姓名",type:"text",class:"form-control",id:"name"},null,512),[[r.nr,o.tempOrder.user.name]])]),(0,s._)("div",W,[T,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[6]||(e[6]=t=>o.tempOrder.user.email=t),placeholder:"請輸入Email",type:"email",class:"form-control",id:"email"},null,512),[[r.nr,o.tempOrder.user.email]])]),(0,s._)("div",N,[R,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[7]||(e[7]=t=>o.tempOrder.user.tel=t),placeholder:"請輸入電話",type:"text",class:"form-control",id:"tel"},null,512),[[r.nr,o.tempOrder.user.tel]])]),(0,s._)("div",B,[F,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[8]||(e[8]=t=>o.tempOrder.user.address=t),placeholder:"請輸入地址",type:"address",class:"form-control",id:"address"},null,512),[[r.nr,o.tempOrder.user.address]])]),G,(0,s._)("table",J,[(0,s._)("tbody",null,[(0,s._)("tr",null,[(0,s._)("td",Q,[(0,s._)("div",null,[(0,s._)("button",{type:"button",class:"btn btn-success btn-sm",onClick:e[9]||(e[9]=(0,r.iM)(((...t)=>i.addProduct&&i.addProduct(...t)),["prevent"]))},"新增")])]),(0,s._)("td",X,[tt,(0,s.wy)((0,s._)("select",{"onUpdate:modelValue":e[10]||(e[10]=t=>o.tempProduct.product.title=t),id:"product_title",onChange:e[11]||(e[11]=(...t)=>i.updatePrice&&i.updatePrice(...t)),class:"form-select"},[et,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.allProducts,(t=>((0,s.wg)(),(0,s.iD)("option",{key:t.id},(0,a.zw)(t.title),1)))),128))],544),[[r.bM,o.tempProduct.product.title]]),o.wrongMsg?((0,s.wg)(),(0,s.iD)("small",lt,(0,a.zw)(o.wrongMsg),1)):(0,s.kq)("",!0)]),(0,s._)("td",st,[at,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[12]||(e[12]=t=>o.tempProduct.qty=t),placeholder:"請輸入商品數量",onChange:e[13]||(e[13]=(...t)=>i.updatePrice&&i.updatePrice(...t)),type:"number",min:"1",class:"form-control",id:"qty"},null,544),[[r.nr,o.tempProduct.qty,void 0,{number:!0}]])]),(0,s._)("td",rt,[o.tempProduct.product.title&&o.tempProduct.qty?((0,s.wg)(),(0,s.iD)("div",dt,[ot,(0,s._)("p",it,(0,a.zw)(t.$filters.currency(o.tempProduct.total)),1)])):(0,s.kq)("",!0)])]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.tempOrder.products,((e,l)=>((0,s.wg)(),(0,s.iD)("tr",{key:e.id},[(0,s._)("td",null,[(0,s._)("div",nt,[(0,s._)("button",{type:"button",class:"btn btn-danger btn-sm",onClick:(0,r.iM)((t=>i.delProduct(l)),["prevent"])},ut,8,ct)])]),e.product?((0,s.wg)(),(0,s.iD)("td",mt,(0,a.zw)(e.product.title),1)):(0,s.kq)("",!0),(0,s._)("td",null,"x "+(0,a.zw)(e.qty),1),(0,s._)("td",ht,(0,a.zw)(t.$filters.currency(e.total)),1)])))),128))]),(0,s._)("tr",null,[(0,s._)("td",_t,[0!==i.discount?((0,s.wg)(),(0,s.iD)("div",bt,[gt,(0,s._)("span",ft,"- "+(0,a.zw)(t.$filters.currency(i.discount)),1)])):(0,s.kq)("",!0),(0,s._)("div",null,[wt,(0,s._)("span",yt,(0,a.zw)(t.$filters.currency(o.tempOrder.total)),1)])])])])]),(0,s._)("div",Ot,[vt,(0,s._)("button",{type:"button",class:"btn btn-outline-primary",onClick:e[14]||(e[14]=e=>t.$emit("update-order",o.tempOrder))},"確認")])])])])],512)}var kt=l(5741),Mt={data(){return{tempOrder:{user:{},id:"",products:{},total:0},create_at:"",paid_date:"",tempProductId:"",tempProduct:{product:{title:"",price:0},qty:1,total:0,final_total:0},allProducts:[],wrongMsg:""}},created(){this.getAllProducts()},props:{order:{}},methods:{getAllProducts(){const t="https://vue3-course-api.hexschool.io/api/alisonhu-api/admin/products/all";this.axios.get(t).then((t=>{console.log("getAllProducts",t),this.allProducts=Object.values(t.data.products)}))},updatePrice(){const t=this.allProducts.filter((t=>t.title===this.tempProduct.product.title));this.tempProduct.product=t[0],this.tempProduct.total=this.tempProduct.product.price*this.tempProduct.qty,this.tempProduct.final_total=this.tempProduct.total},addProduct(){if(this.tempProduct.product.title&&this.tempProduct.qty){const t=Math.floor(1e4*Math.random());this.tempProductId=`-NMdbK3PnewOrder${t}`,this.tempOrder.products[this.tempProductId]=this.tempProduct,this.tempOrder.total+=this.tempProduct.product.price,this.tempProduct={product:{title:""},qty:1},this.wrongMsg=""}else!this.tempProduct.product.title&&this.tempProduct.qty?this.wrongMsg="新增失敗，請選擇商品名稱":this.tempProduct.product.title&&!this.tempProduct.qty?this.wrongMsg="新增失敗，請選擇商品數量":this.wrongMsg="新增失敗，請選擇商品名稱及數量"},delProduct(t){console.log(this.tempOrder.products[t]),this.tempOrder.total-=this.tempOrder.products[t].final_total,delete this.tempOrder.products[t],console.log(t,this.tempOrder.products)}},computed:{discount(){let t=0;const e=Object.values(this.tempOrder.products);return e.forEach((e=>{t+=e.total-e.final_total})),t}},watch:{order(){if(this.tempOrder=this.order,this.tempOrder.create_at){const t=new Date(1e3*this.tempOrder.create_at).toISOString().split("T");[this.create_at]=t}if(this.tempOrder.paid_date){const t=new Date(1e3*this.tempOrder.paid_date).toISOString().split("T");[this.paid_date]=t}},create_at(){this.tempOrder.create_at=Math.floor(new Date(this.create_at)/1e3)},paid_date(){this.tempOrder.paid_date=Math.floor(new Date(this.paid_date)/1e3)}},emits:["update-order"],mixins:[kt.Z]},xt=l(89);const Dt=(0,xt.Z)(Mt,[["render",Pt]]);var Ct=Dt;const Ut={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},qt={class:"modal-dialog"},$t={class:"modal-content"},zt=(0,s._)("div",{class:"modal-header bg-primary text-white"},[(0,s._)("h5",{class:"modal-title",id:"exampleModalLabel"},"刪除訂單"),(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),It={class:"modal-body"},Vt={class:"text-danger"},Lt={class:"modal-footer"},St=(0,s._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function jt(t,e,l,r,d,o){return(0,s.wg)(),(0,s.iD)("div",Ut,[(0,s._)("div",qt,[(0,s._)("div",$t,[zt,(0,s._)("div",It,[(0,s.Uk)(" 請確認是否刪除訂單編號 "),(0,s._)("span",Vt,(0,a.zw)(l.item.id),1),(0,s.Uk)("，刪除後將無法復原。 ")]),(0,s._)("div",Lt,[St,(0,s._)("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=e=>t.$emit("del-item",l.item))},"確認")])])])],512)}var Zt={props:{item:{}},emits:["del-item"],mixins:[kt.Z]};const At=(0,xt.Z)(Zt,[["render",jt]]);var Ht=At,Kt={data(){return{orders:[],pagination:{total_pages:""},tempOrder:{},isLoading:!1,searchInput:""}},created(){this.getOrders(),this.searchInput=""},methods:{getOrders(t=1){this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/api/alisonhu-api/admin/orders?page=${t}`;this.axios.get(e).then((t=>{console.log("getOrders",t),this.isLoading=!1,this.orders=t.data.orders,this.pagination=t.data.pagination;const e=t.data.pagination.total_pages;if(t.data.pagination.has_next)for(let l=2;l<=e;l++)this.getAllOrders(l)}))},getAllOrders(t){const e=`https://vue3-course-api.hexschool.io/api/alisonhu-api/admin/orders?page=${t}`;this.axios.get(e).then((t=>{this.orders=this.orders.concat(t.data.orders)}))},openModal(t){this.tempOrder={...t},this.$refs.ordersModal.showModal()},delOrdersModal(t){this.tempOrder={...t},this.$refs.delOrdersModal.showModal()},delOrders(t){console.log("del",t),this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/api/alisonhu-api/admin/order/${t.id}`;this.axios.delete(e).then((t=>{this.isLoading=!1,console.log("delOrders",t),this.$refs.delOrdersModal.hideModal(),this.getOrders(this.pagination.current_page),this.PushMessageState(t,"刪除")}))},updateOrder(t){this.isLoading=!0,this.tempOrder=t;const e=`https://vue3-course-api.hexschool.io/api/alisonhu-api/admin/order/${t.id}`;this.axios.put(e,{data:this.tempOrder}).then((t=>{this.isLoading=!1,console.log("updateOrders",t),this.$refs.ordersModal.hideModal(),this.getOrders(this.pagination.current_page),this.PushMessageState(t,"更新")}))}},computed:{searchData(){const t=new RegExp(this.searchInput,"gi");return this.orders.filter((e=>e.id.match(t)))}},components:{PaginationCom:v.Z,OrdersModal:Ct,DelOrdersModal:Ht},inject:["emitter","PushMessageState"]};const Yt=(0,xt.Z)(Kt,[["render",O]]);var Et=Yt}}]);
//# sourceMappingURL=453.3b16a267.js.map