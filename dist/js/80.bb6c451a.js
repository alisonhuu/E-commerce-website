"use strict";(self["webpackChunkfinalproject"]=self["webpackChunkfinalproject"]||[]).push([[80],{9390:function(e,a,l){l.d(a,{Z:function(){return _}});var s=l(3396),r=l(7139);const o={"aria-label":"breadcrumb"},m={class:"breadcrumb"},d={class:"breadcrumb-item"},i={class:"breadcrumb-item active","aria-current":"page"},n={class:"my-5 text-center"},c={class:"h4"},t={class:"h4 font-mirza ms-2"};function u(e,a){const l=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("nav",o,[(0,s._)("ol",m,[(0,s._)("li",d,[(0,s.Wm)(l,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("首頁")])),_:1})]),(0,s._)("li",i,(0,r.zw)(e.$route.name),1)])]),(0,s._)("div",n,[(0,s._)("span",c,(0,r.zw)(e.$route.name),1),(0,s._)("span",t,(0,r.zw)(this.$route.meta.name),1)])],64)}var b=l(89);const f={},p=(0,b.Z)(f,[["render",u]]);var _=p},3080:function(e,a,l){l.r(a),l.d(a,{default:function(){return F}});var s=l(3396),r=l(7139),o=l(9242);const m={class:"container"},d={class:"row"},i={class:"mb-3"},n=(0,s._)("label",{for:"userMail",class:"form-label"},"Email",-1),c={class:"mb-3"},t=(0,s._)("label",{for:"userPassword",class:"form-label"},"密碼",-1),u={class:"mb-3"},b=(0,s._)("label",{for:"confirmation",class:"form-label"},"確認密碼",-1),f={class:"mb-3"},p=(0,s._)("label",{for:"userName",class:"form-label"},"姓名",-1),_={class:"mb-3"},v=(0,s._)("label",{for:"userTel",class:"form-label"},"電話",-1),h={class:"mb-3"},w=(0,s._)("label",{for:"userAddress",class:"form-label"},"地址",-1),k={class:"form-check mb-3"},y=(0,s._)("label",{class:"form-check-label",for:"subscribed"}," 訂閱電子報 ",-1),V=(0,s._)("div",{class:"text-center"},[(0,s._)("button",{type:"submit",class:"btn-shadow btn btn-primary link-light px-4"}," 成為會員")],-1),g={class:"modal modal-sm fade",ref:"memberModal",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},W={class:"modal-dialog modal-dialog-centered justify-content-center"},x={class:"modal-content",style:{width:"200px"}},C=(0,s._)("div",{class:"modal-body text-center"},[(0,s._)("p",{class:"display-5 text-primary"},[(0,s._)("i",{class:"bi bi-patch-check"})]),(0,s.Uk)(" 恭喜成為會員！ ")],-1),M={class:"modal-footer"};function U(e,a,l,U,N,q){const A=(0,s.up)("BreadcrumbCom"),T=(0,s.up)("Field"),$=(0,s.up)("ErrorMessage"),z=(0,s.up)("Form");return(0,s.wg)(),(0,s.iD)("div",m,[(0,s.Wm)(A),(0,s._)("div",d,[(0,s.Wm)(z,{onSubmit:q.becomeMember,class:"col-11 col-md-8 mx-auto shadow p-4 bg-light rounded"},{default:(0,s.w5)((({errors:e})=>[(0,s._)("div",i,[n,(0,s.Wm)(T,{name:"email",type:"email",class:(0,r.C_)(["form-control",{"is-invalid":e["email"]}]),id:"userMail",modelValue:N.form.user.email,"onUpdate:modelValue":a[0]||(a[0]=e=>N.form.user.email=e),placeholder:"請輸入 Email",rules:"email|required"},null,8,["modelValue","class"]),(0,s.Wm)($,{name:"email",class:"invalid-feedback"})]),(0,s._)("div",c,[t,(0,s.Wm)(T,{name:"password",type:"password",class:(0,r.C_)(["form-control",{"is-invalid":e["password"]}]),label:"密碼",id:"userPassword",modelValue:N.form.user.password,"onUpdate:modelValue":a[1]||(a[1]=e=>N.form.user.password=e),placeholder:"請輸入密碼",rules:"required|engNum",autocomplete:"off"},null,8,["modelValue","class"]),(0,s.Wm)($,{name:"password",class:"invalid-feedback"})]),(0,s._)("div",u,[b,(0,s.Wm)(T,{name:"confirmation",type:"password",class:(0,r.C_)(["form-control",{"is-invalid":e["confirmation"]}]),label:"密碼",id:"confirmation",placeholder:"請再次輸入密碼",rules:"confirmed:@password|required",autocomplete:"off"},null,8,["class"]),(0,s.Wm)($,{name:"confirmation",class:"invalid-feedback"})]),(0,s._)("div",f,[p,(0,s.Wm)(T,{name:"userName",type:"text",class:(0,r.C_)(["form-control",{"is-invalid":e["userName"]}]),label:"姓名",id:"userName",modelValue:N.form.user.name,"onUpdate:modelValue":a[2]||(a[2]=e=>N.form.user.name=e),placeholder:"請輸入姓名",rules:"required"},null,8,["modelValue","class"]),(0,s.Wm)($,{name:"userName",class:"invalid-feedback"})]),(0,s._)("div",_,[v,(0,s.Wm)(T,{name:"userTel",class:(0,r.C_)(["form-control",{"is-invalid":e["userTel"]}]),label:"電話",id:"userTel",modelValue:N.form.user.tel,"onUpdate:modelValue":a[3]||(a[3]=e=>N.form.user.tel=e),placeholder:"請輸入電話",rules:"numeric|required|min:8"},null,8,["modelValue","class"]),(0,s.Wm)($,{name:"userTel",class:"invalid-feedback"})]),(0,s._)("div",h,[w,(0,s.Wm)(T,{name:"userAddress",type:"text",class:(0,r.C_)(["form-control",{"is-invalid":e["userAddress"]}]),label:"地址",id:"userAddress",modelValue:N.form.user.address,"onUpdate:modelValue":a[4]||(a[4]=e=>N.form.user.address=e),placeholder:"請輸入地址",rules:"required"},null,8,["modelValue","class"]),(0,s.Wm)($,{name:"userAddress",class:"invalid-feedback"})]),(0,s._)("div",k,[(0,s.wy)((0,s._)("input",{class:"form-check-input",type:"checkbox",id:"subscribed","onUpdate:modelValue":a[5]||(a[5]=e=>N.form.user.subscribed=e)},null,512),[[o.e8,N.form.user.subscribed]]),y]),V])),_:1},8,["onSubmit"]),(0,s._)("div",g,[(0,s._)("div",W,[(0,s._)("div",x,[C,(0,s._)("div",M,[(0,s._)("button",{type:"button",class:"btn btn-sm btn-outline-primary rounded-4 px-2",onClick:a[6]||(a[6]=(0,o.iM)(((...e)=>q.goHome&&q.goHome(...e)),["prevent"]))},"確認")])])])],512)])])}l(7658);var N=l(9390),q=l(5708),A=(l(6084),l(7972)),T=l.n(A),$={data(){return{form:{user:{name:"",email:"",password:"",tel:"",address:"",subscribed:!1}},modal:{}}},mounted(){this.modal=new(T())(this.$refs.memberModal),this.modal.show()},methods:{becomeMember(){this.form={},this.modal.show()},goHome(){this.$router.push("/")}},components:{Field:q.gN,Form:q.l0,ErrorMessage:q.Bc,BreadcrumbCom:N.Z}},z=l(89);const E=(0,z.Z)($,[["render",U]]);var F=E}}]);
//# sourceMappingURL=80.bb6c451a.js.map