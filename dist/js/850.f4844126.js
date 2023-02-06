"use strict";(self["webpackChunkfinalproject"]=self["webpackChunkfinalproject"]||[]).push([[850],{5850:function(t,i,s){s.r(i),s.d(i,{default:function(){return A}});var e=s(3396),l=s(7139),a=s(9242);const r={class:"container"},d={class:"mb-5","aria-label":"breadcrumb"},o={class:"breadcrumb"},c={class:"breadcrumb-item"},n={class:"breadcrumb-item active","aria-current":"page"},u={class:"mx-auto"},p={class:"row"},m={class:"col-md-6"},h={class:"col-md-6"},_={class:"mb-4 mt-4 mt-md-0"},g={class:"d-inline me-2 text-secondary"},b={class:"mt-4"},v={key:0,class:"mt-3"},y=(0,e._)("hr",null,null,-1),I=(0,e._)("p",{class:"mb-0"},"乾燥花是鮮花經由風乾處理而製成，永生花是鮮花浸泡在脫色藥水中，再染色後製成。",-1),w=(0,e._)("p",{class:"mb-0"},"花材採用當季花材，若市場短缺，將更換等價花材。",-1),f=(0,e._)("p",null,"適用於生日禮物、畢業典禮、婚禮、情人節等慶祝場合，也可居家佈置。",-1),k=(0,e._)("p",null,"配送方式｜宅配 / 自取 ",-1),q=(0,e._)("p",null,"保存期限｜約為1-2年，良好保存下可達數年",-1),L=(0,e._)("p",null,"注意事項｜請置於陰涼乾燥的通風處，勿陽光直射",-1),C=[y,I,w,f,k,q,L],x={key:1,class:"mt-3"},S=(0,e._)("hr",null,null,-1),T=(0,e._)("p",{class:"mb-0"},"植物有助於室內空氣之淨化，綠色可放鬆緊繃的雙眼，讓環境更美觀。",-1),z=(0,e._)("p",{class:"mb-0"},"每株植物生長不同，照片僅供參考，實品會有些微誤差。",-1),P=(0,e._)("p",null,"適用於生日禮物、開幕送禮、辦公或居家佈置。",-1),W=(0,e._)("p",null,"配送方式｜宅配 / 自取 ",-1),j=(0,e._)("p",null,"注意事項｜室內植物對陽光需求不太高，請避免陽光直射",-1),M=[S,T,z,P,W,j],U={class:"row mt-4"},$=(0,e._)("label",{for:"qty",class:"col-8 col-form-label text-end"},"數量",-1),D={class:"text-end mt-3"},H=["disabled"],J=["disabled"],N=(0,e._)("i",{class:"bi bi-cart me-1"},null,-1);function O(t,i,s,y,I,w){const f=(0,e.up)("LoadingCom"),k=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(f,{active:I.isLoading},null,8,["active"]),(0,e._)("div",r,[(0,e._)("nav",d,[(0,e._)("ol",o,[(0,e._)("li",c,[(0,e.Wm)(k,{to:"/"},{default:(0,e.w5)((()=>[(0,e.Uk)("首頁")])),_:1})]),(0,e._)("li",n,(0,l.zw)(I.product.title),1)])]),(0,e._)("div",u,[(0,e._)("div",p,[(0,e._)("div",m,[(0,e._)("div",{style:(0,l.j5)({backgroundImage:`url(${I.product.imageUrl})`}),class:"lg-img bg-center rounded"},null,4)]),(0,e._)("div",h,[(0,e._)("div",null,[(0,e._)("h4",_,(0,l.zw)(I.product.title),1),(0,e._)("h5",g,"售價： "+(0,l.zw)(t.$filters.currency(I.product.price)),1),(0,e._)("span",null,[(0,e._)("small",null,"（原價： "+(0,l.zw)(t.$filters.currency(I.product.origin_price))+"）",1)]),(0,e._)("p",b,(0,l.zw)(I.product.description),1),"flowers"===I.product.category?((0,e.wg)(),(0,e.iD)("div",v,C)):(0,e.kq)("",!0),"plants"===I.product.category?((0,e.wg)(),(0,e.iD)("div",x,M)):(0,e.kq)("",!0),(0,e._)("div",U,[$,(0,e.wy)((0,e._)("input",{type:"number",min:"1","onUpdate:modelValue":i[0]||(i[0]=t=>I.qty=t),class:"col form-control me-2",id:"qty"},null,512),[[a.nr,I.qty,void 0,{number:!0}]])]),(0,e._)("div",D,[(0,e._)("button",{class:"btn btn-outline-danger rounded-4 mt-1",onClick:i[1]||(i[1]=(0,a.iM)(((...t)=>w.addToWishList&&w.addToWishList(...t)),["prevent"])),disabled:I.loadingItem===s.productId},[(0,e._)("i",{class:(0,l.C_)(["bi",w.heart()])},null,2)],8,H),(0,e._)("button",{class:"btn-shadow btn btn-primary link-light ms-3",onClick:i[2]||(i[2]=(0,a.iM)(((...t)=>w.addToCart&&w.addToCart(...t)),["prevent"])),disabled:I.loadingItem===s.productId},[N,(0,e.Uk)("加入購物車 ")],8,J)])])])])])])],64)}var V={data(){return{product:{},qty:1,isLoading:!1,loadingItem:""}},props:["productId"],created(){this.getProduct()},methods:{getProduct(){this.isLoading=!0;const t=`https://vue3-course-api.hexschool.io/api/alisonhu-api/product/${this.productId}`;this.axios.get(t).then((t=>{this.isLoading=!1,this.product=t.data.product}))},addToCart(){this.loadingItem=this.productId,this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/alisonhu-api/cart",i={product_id:this.productId,qty:this.qty};this.axios.post(t,{data:i}).then((t=>{this.loadingItem="",this.isLoading=!1,this.PushMessageState(t,"加入購物車"),this.emitter.emit("cart-qty")}))},addToWishList(){localStorage.getItem(this.productId)?(localStorage.removeItem(this.productId),this.emitter.emit("wished-qty")):(localStorage.setItem(this.productId,JSON.stringify(this.product)),this.emitter.emit("wished-qty")),this.getProduct()},heart(){return localStorage.getItem(this.productId)?"bi-heart-fill":"bi-heart"}},inject:["emitter","PushMessageState"]},Y=s(89);const Z=(0,Y.Z)(V,[["render",O]]);var A=Z}}]);
//# sourceMappingURL=850.f4844126.js.map