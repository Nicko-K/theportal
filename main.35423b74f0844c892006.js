"use strict";(self.webpackChunkpwa_simpe=self.webpackChunkpwa_simpe||[]).push([[179],{69:(e,t,i)=>{var n=i(745),o=i(5998),a=i(7294),r=i(9711),l=i(6974),s=i(5671),d=i(3144),f=i(9340),u=i(3930),c=i(1120);var p=function(e){(0,f.Z)(o,e);var t,i,n=(t=o,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,c.Z)(t);if(i){var o=(0,c.Z)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return(0,u.Z)(this,e)});function o(e){var t;return(0,s.Z)(this,o),(t=n.call(this,e)).state={error:null,errorInfo:null},t}return(0,d.Z)(o,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.errorInfo?a.createElement("div",null,"Something went wrong"):this.props.children}}]),o}(a.Component),h={index:"/",main:"/main",detail:"/detail/:id"},m=i(4942),w=i(3379),x=i.n(w),g=i(7795),b=i.n(g),v=i(569),y=i.n(v),M=i(3565),E=i.n(M),Z=i(9216),R=i.n(Z),U=i(4589),T=i.n(U),k=i(5668),_={};_.styleTagTransform=T(),_.setAttributes=E(),_.insert=y().bind(null,"head"),_.domAPI=b(),_.insertStyleElement=R(),x()(k.Z,_);const L=k.Z&&k.Z.locals?k.Z.locals:void 0;var N=i(4184),P=i.n(N),B=function(){var e,t,i,n=(0,l.s0)(),o=(0,l.UO)().id,r=function(e){var t=e.target.dataset.id;t&&n(h.detail.replace(":id",t))};return a.createElement("div",{className:L.wrapper},a.createElement("p",{className:L.title,onClick:function(){n(h.main)}},"Doge app"),a.createElement("div",{className:L.nav},a.createElement("p",{"data-id":1,className:P()((e={},(0,m.Z)(e,L.nav__item,!0),(0,m.Z)(e,L.nav__item_active,"1"===o),e)),onClick:r},"1"),a.createElement("p",{"data-id":2,className:P()((t={},(0,m.Z)(t,L.nav__item,!0),(0,m.Z)(t,L.nav__item_active,"2"===o),t)),onClick:r},"2"),a.createElement("p",{"data-id":3,className:P()((i={},(0,m.Z)(i,L.nav__item,!0),(0,m.Z)(i,L.nav__item_active,"3"===o),i)),onClick:r},"3")))},Y=i(575);var A={data:JSON.parse('{"1":{"name":"uno","value":10},"2":{"name":"dos","value":20},"3":{"name":"tres","value":30}}'),selected:null},z=(0,Y.oM)({name:"dataState",initialState:A,reducers:{setSelected:function(e,t){e.selected=t.payload}}}),S=z.actions.setSelected;const H=z.reducer;var I=function(e){return e.data.data},G=i(4374),q={};q.styleTagTransform=T(),q.setAttributes=E(),q.insert=y().bind(null,"head"),q.domAPI=b(),q.insertStyleElement=R(),x()(G.Z,q);const Q=G.Z&&G.Z.locals?G.Z.locals:void 0;var j=i(7294),D=function(){var e=(0,l.UO)().id,t=(0,l.s0)(),i=(0,o.I0)(),n=(0,o.v9)(I);return(0,a.useEffect)((function(){"1"!==e&&"2"!==e&&"3"!==e||void 0===e?t(h.main):i(S(e||null))}),[e]),j.createElement("div",{className:Q.page},j.createElement(B,null),e&&n[e]&&j.createElement(j.Fragment,null,j.createElement("div",{className:Q.content},j.createElement("p",null,"Name:"),j.createElement("p",{className:Q.value},n[e].name)),j.createElement("div",{className:Q.content},j.createElement("p",null,"Value:"),j.createElement("p",{className:Q.value},n[e].value))))},K=i(4082),C={};C.styleTagTransform=T(),C.setAttributes=E(),C.insert=y().bind(null,"head"),C.domAPI=b(),C.insertStyleElement=R(),x()(K.Z,C);const F=K.Z&&K.Z.locals?K.Z.locals:void 0;var O=i(7294),J=function(){var e=(0,l.s0)(),t=function(t){var i=t.target.dataset.id;i&&e(h.detail.replace(":id",i))};return O.createElement("div",{className:F.page},O.createElement(B,null),O.createElement("div",{className:F.grid},O.createElement("div",{className:P()([F.one,F.item]),"data-id":1,onClick:t},"One"),O.createElement("div",{className:P()([F.two,F.item]),"data-id":2,onClick:t},"Two"),O.createElement("div",{className:P()([F.three,F.item]),"data-id":3,onClick:t},"Three")))},V=i(7294),X=function(){return V.createElement(a.StrictMode,null,V.createElement(p,null,V.createElement(r.UT,null,V.createElement(l.Z5,null,V.createElement(l.AW,{path:h.detail,element:V.createElement(D,null)}),V.createElement(l.AW,{path:h.main,element:V.createElement(J,null)}),V.createElement(l.AW,{path:"*",element:V.createElement(l.Fg,{to:h.main})})))))},W=(0,Y.xC)({reducer:{data:H},middleware:function(e){return e({serializableCheck:!1})}}),$=i(1550),ee={};ee.styleTagTransform=T(),ee.setAttributes=E(),ee.insert=y().bind(null,"head"),ee.domAPI=b(),ee.insertStyleElement=R(),x()($.Z,ee),$.Z&&$.Z.locals&&$.Z.locals;var te=i(7294),ie=document.getElementById("root");ie?(0,n.s)(ie).render(te.createElement(o.zt,{store:W},te.createElement(X,null))):console.error("ERROR: mount container with id #root not found, shuting down app")},5668:(e,t,i)=>{i.d(t,{Z:()=>c});var n=i(8081),o=i.n(n),a=i(3645),r=i.n(a),l=i(1667),s=i.n(l),d=new URL(i(7802),i.b),f=r()(o()),u=s()(d);f.push([e.id,".kmoMZMB_xx3FYUPIkHH7{width:100vw;height:120px;background:url("+u+") no-repeat;background-size:cover;padding:24px 32px;display:flex;justify-content:space-between;align-items:center;position:fixed;top:0;left:0}@media all and (max-width: 800px){.kmoMZMB_xx3FYUPIkHH7{padding:20px 28px;height:100px}}@media all and (max-width: 500px){.kmoMZMB_xx3FYUPIkHH7{padding:16px 24px;height:80px}}.ZeUTyoxY1vYlp1P0pzfj{flex:0 0 auto;font-size:36px;line-height:48px;font-weight:900;color:#f8f8ff;background:#daa520;padding:6px 16px;border-radius:16px;cursor:pointer}.ZeUTyoxY1vYlp1P0pzfj:hover{background:gold;color:#000}@media all and (max-width: 800px){.ZeUTyoxY1vYlp1P0pzfj{font-size:24px;line-height:36px;padding:4px 12px;font-weight:600;border-radius:12px}}@media all and (max-width: 500px){.ZeUTyoxY1vYlp1P0pzfj{font-size:18px;line-height:24px;padding:2px 8px;font-weight:600;border-radius:8px}}.EvE0VulDnTsWyKweUnJF{flex:0 0 auto;display:flex;align-items:center}.dhBDuxPrsY4Z9tPqYGrQ{flex:0 0 auto;font-size:36px;line-height:48px;font-weight:900;color:#f8f8ff;padding:6px 16px;background:#daa520;border-radius:16px;cursor:pointer}.dhBDuxPrsY4Z9tPqYGrQ:hover{background:gold;color:#000}.dhBDuxPrsY4Z9tPqYGrQ+.dhBDuxPrsY4Z9tPqYGrQ{margin-left:16px}.flpfXkCjApD_pcw7UATr{outline:4px solid #000}@media all and (max-width: 800px){.flpfXkCjApD_pcw7UATr{outline:3px solid #000}}@media all and (max-width: 500px){.flpfXkCjApD_pcw7UATr{outline:2px solid #000}}@media all and (max-width: 800px){.dhBDuxPrsY4Z9tPqYGrQ{font-size:24px;line-height:36px;padding:4px 12px;font-weight:600;border-radius:12px}}@media all and (max-width: 500px){.dhBDuxPrsY4Z9tPqYGrQ{font-size:18px;line-height:24px;padding:2px 8px;font-weight:600;border-radius:8px}}",""]),f.locals={wrapper:"kmoMZMB_xx3FYUPIkHH7",title:"ZeUTyoxY1vYlp1P0pzfj",nav:"EvE0VulDnTsWyKweUnJF",nav__item:"dhBDuxPrsY4Z9tPqYGrQ",nav__item_active:"flpfXkCjApD_pcw7UATr"};const c=f},1550:(e,t,i)=>{i.d(t,{Z:()=>ce});var n=i(8081),o=i.n(n),a=i(3645),r=i.n(a),l=i(1667),s=i.n(l),d=new URL(i(3927),i.b),f=new URL(i(1986),i.b),u=new URL(i(2375),i.b),c=new URL(i(1647),i.b),p=new URL(i(4666),i.b),h=new URL(i(4234),i.b),m=new URL(i(761),i.b),w=new URL(i(9533),i.b),x=new URL(i(8494),i.b),g=new URL(i(5540),i.b),b=new URL(i(3336),i.b),v=new URL(i(7935),i.b),y=new URL(i(5228),i.b),M=new URL(i(1862),i.b),E=new URL(i(6756),i.b),Z=new URL(i(1259),i.b),R=new URL(i(6164),i.b),U=new URL(i(5267),i.b),T=new URL(i(3575),i.b),k=new URL(i(5562),i.b),_=new URL(i(1770),i.b),L=new URL(i(4595),i.b),N=new URL(i(1531),i.b),P=new URL(i(8678),i.b),B=new URL(i(4479),i.b),Y=new URL(i(9090),i.b),A=new URL(i(1204),i.b),z=new URL(i(4475),i.b),S=r()(o()),H=s()(d),I=s()(f),G=s()(u),q=s()(c),Q=s()(p),j=s()(h),D=s()(m),K=s()(w),C=s()(x),F=s()(g),O=s()(b),J=s()(v),V=s()(y),X=s()(M),W=s()(E),$=s()(Z),ee=s()(R),te=s()(U),ie=s()(T),ne=s()(k),oe=s()(_),ae=s()(L),re=s()(N),le=s()(P),se=s()(B),de=s()(Y),fe=s()(A),ue=s()(z);S.push([e.id,'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video,input,textarea,button,span{margin:0;padding:0;border:none;font-family:inherit;vertical-align:baseline;box-sizing:border-box;outline:none}html:focus-within,body:focus-within,div:focus-within,span:focus-within,applet:focus-within,object:focus-within,iframe:focus-within,h1:focus-within,h2:focus-within,h3:focus-within,h4:focus-within,h5:focus-within,h6:focus-within,p:focus-within,blockquote:focus-within,pre:focus-within,a:focus-within,abbr:focus-within,acronym:focus-within,address:focus-within,big:focus-within,cite:focus-within,code:focus-within,del:focus-within,dfn:focus-within,em:focus-within,img:focus-within,ins:focus-within,kbd:focus-within,q:focus-within,s:focus-within,samp:focus-within,small:focus-within,strike:focus-within,strong:focus-within,sub:focus-within,sup:focus-within,tt:focus-within,var:focus-within,b:focus-within,u:focus-within,i:focus-within,center:focus-within,dl:focus-within,dt:focus-within,dd:focus-within,ol:focus-within,ul:focus-within,li:focus-within,fieldset:focus-within,form:focus-within,label:focus-within,legend:focus-within,table:focus-within,caption:focus-within,tbody:focus-within,tfoot:focus-within,thead:focus-within,tr:focus-within,th:focus-within,td:focus-within,article:focus-within,aside:focus-within,canvas:focus-within,details:focus-within,embed:focus-within,figure:focus-within,figcaption:focus-within,footer:focus-within,header:focus-within,hgroup:focus-within,menu:focus-within,nav:focus-within,output:focus-within,ruby:focus-within,section:focus-within,summary:focus-within,time:focus-within,mark:focus-within,audio:focus-within,video:focus-within,input:focus-within,textarea:focus-within,button:focus-within,span:focus-within{outline:none}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{overflow-x:hidden;font-family:"Mulish"}@font-face{font-family:"Mulish";src:url('+H+");src:url("+H+') format("embedded-opentype"),url('+I+') format("woff2"),url('+G+') format("woff"),url('+q+') format("truetype");font-weight:100;font-style:normal}@font-face{font-family:"Mulish";src:url('+Q+");src:url("+Q+') format("embedded-opentype"),url('+j+') format("woff2"),url('+D+') format("woff"),url('+K+') format("truetype");font-weight:300;font-style:normal}@font-face{font-family:"Mulish";src:url('+C+");src:url("+C+') format("embedded-opentype"),url('+F+') format("woff2"),url('+O+') format("woff"),url('+J+') format("truetype");font-weight:400;font-style:normal}@font-face{font-family:"Mulish";src:url('+V+");src:url("+V+') format("embedded-opentype"),url('+X+') format("woff2"),url('+W+') format("woff"),url('+$+') format("truetype");font-weight:500;font-style:normal}@font-face{font-family:"Mulish";src:url('+ee+");src:url("+ee+') format("embedded-opentype"),url('+te+') format("woff2"),url('+ie+') format("woff"),url('+ne+') format("truetype");font-weight:600;font-style:normal}@font-face{font-family:"Mulish";src:url('+oe+");src:url("+oe+') format("embedded-opentype"),url('+ae+') format("woff2"),url('+re+') format("woff"),url('+le+') format("truetype");font-weight:700;font-style:normal}@font-face{font-family:"Mulish";src:url('+se+");src:url("+se+') format("embedded-opentype"),url('+de+') format("woff2"),url('+fe+') format("woff"),url('+ue+') format("truetype");font-weight:800;font-style:normal}',""]);const ce=S},4374:(e,t,i)=>{i.d(t,{Z:()=>l});var n=i(8081),o=i.n(n),a=i(3645),r=i.n(a)()(o());r.push([e.id,".EuBVxelr1B0vMOMQrv7d{width:100vw;height:100vh;overflow-x:hidden;overflow-y:auto;padding:136px 32px}@media all and (max-width: 800px){.EuBVxelr1B0vMOMQrv7d{padding:124px 28px}}@media all and (max-width: 500px){.EuBVxelr1B0vMOMQrv7d{padding:96px 24px}}.PII8_N_xramtTm1nx06D{display:flex;align-items:center}.PII8_N_xramtTm1nx06D>p{flex:0 0 auto;font-size:24px;line-height:36px}.kONl48KFUoAKEcAbPY9k{margin-left:16px}",""]),r.locals={page:"EuBVxelr1B0vMOMQrv7d",content:"PII8_N_xramtTm1nx06D",value:"kONl48KFUoAKEcAbPY9k"};const l=r},4082:(e,t,i)=>{i.d(t,{Z:()=>l});var n=i(8081),o=i.n(n),a=i(3645),r=i.n(a)()(o());r.push([e.id,".e52ILfH8_gLcbivJjZKJ{width:100vw;height:100vh;overflow-x:hidden;overflow-y:auto;padding:136px 32px}@media all and (max-width: 800px){.e52ILfH8_gLcbivJjZKJ{padding:124px 28px}}@media all and (max-width: 500px){.e52ILfH8_gLcbivJjZKJ{padding:96px 24px}}.ztfE3v4ZoK8o3rV6578_{display:grid;grid-template-columns:33% 33% 34%;grid-template-rows:100px}@media all and (max-width: 800px){.ztfE3v4ZoK8o3rV6578_{grid-template-columns:50% 50%;grid-template-rows:100px 100px}}@media all and (max-width: 500px){.ztfE3v4ZoK8o3rV6578_{grid-template-columns:100%;grid-template-rows:100px 100px 100px}}.oMHdnqrT2AsTNTRGNlN0{display:flex;justify-content:center;align-items:center;font-size:24px;line-height:36px;font-weight:600;border:4px solid rgba(0,0,0,0);cursor:pointer}@media all and (max-width: 800px){.oMHdnqrT2AsTNTRGNlN0{border:3px solid rgba(0,0,0,0)}}@media all and (max-width: 500px){.oMHdnqrT2AsTNTRGNlN0{border:2px solid rgba(0,0,0,0)}}.oMHdnqrT2AsTNTRGNlN0:hover{border:4px solid #000}@media all and (max-width: 800px){.oMHdnqrT2AsTNTRGNlN0:hover{border:3px solid #000}}@media all and (max-width: 500px){.oMHdnqrT2AsTNTRGNlN0:hover{border:2px solid #000}}.zycdSPx42aBirF0RUqYY{background:orange}@media all and (max-width: 800px){.zycdSPx42aBirF0RUqYY{grid-column:1;grid-row:1}}@media all and (max-width: 500px){.zycdSPx42aBirF0RUqYY{grid-column:1;grid-row:1}}.PdwUKXGzmSephZmISRs2{background:#daa520}@media all and (max-width: 800px){.PdwUKXGzmSephZmISRs2{grid-column:2;grid-row:1}}@media all and (max-width: 500px){.PdwUKXGzmSephZmISRs2{grid-column:1;grid-row:2}}.c_sHGtrG3BHclrTgRoQQ{background:gold}@media all and (max-width: 800px){.c_sHGtrG3BHclrTgRoQQ{grid-column:1/3;grid-row:2}}@media all and (max-width: 500px){.c_sHGtrG3BHclrTgRoQQ{grid-column:1;grid-row:3}}",""]),r.locals={page:"e52ILfH8_gLcbivJjZKJ",grid:"ztfE3v4ZoK8o3rV6578_",item:"oMHdnqrT2AsTNTRGNlN0",one:"zycdSPx42aBirF0RUqYY",two:"PdwUKXGzmSephZmISRs2",three:"c_sHGtrG3BHclrTgRoQQ"};const l=r},7802:(e,t,i)=>{e.exports=i.p+"assets/header.jpeg"},1770:(e,t,i)=>{e.exports=i.p+"fonts/Mulish-Bold.eot"},8678:(e,t,i)=>{e.exports=i.p+"fonts/Mulish-Bold.ttf"},1531:(e,t,i)=>{e.exports=i.p+"fonts/Mulish-Bold.woff"},4595:(e,t,i)=>{e.exports=i.p+"fonts/Mulish-Bold.woff2"},4479:(e,t,i)=>{e.exports=i.p+"fonts/Mulish-ExtraBold.eot"},4475:(e,t,i)=>{e.exports=i.p+"fonts/Mulish-ExtraBold.ttf"},1204:(e,t,i)=>{e.exports=i.p+"fonts/Mulish-ExtraBold.woff"},9090:(e,t,i)=>{e.exports=i.p+"fonts/Mulish-ExtraBold.woff2"},3927:(e,t,i)=>{e.exports=i.p+"fonts/Mulish-ExtraLight.eot"},1647:(e,t,i)=>{e.exports=i.p+"fonts/Mulish-ExtraLight.ttf"},2375:(e,t,i)=>{e.exports=i.p+"fonts/Mulish-ExtraLight.woff"},1986:(e,t,i)=>{e.exports=i.p+"fonts/Mulish-ExtraLight.woff2"},4666:(e,t,i)=>{e.exports=i.p+"fonts/Mulish-Light.eot"},9533:(e,t,i)=>{e.exports=i.p+"fonts/Mulish-Light.ttf"},761:(e,t,i)=>{e.exports=i.p+"fonts/Mulish-Light.woff"},4234:(e,t,i)=>{e.exports=i.p+"fonts/Mulish-Light.woff2"},5228:(e,t,i)=>{e.exports=i.p+"fonts/Mulish-Medium.eot"},1259:(e,t,i)=>{e.exports=i.p+"fonts/Mulish-Medium.ttf"},6756:(e,t,i)=>{e.exports=i.p+"fonts/Mulish-Medium.woff"},1862:(e,t,i)=>{e.exports=i.p+"fonts/Mulish-Medium.woff2"},8494:(e,t,i)=>{e.exports=i.p+"fonts/Mulish-Regular.eot"},7935:(e,t,i)=>{e.exports=i.p+"fonts/Mulish-Regular.ttf"},3336:(e,t,i)=>{e.exports=i.p+"fonts/Mulish-Regular.woff"},5540:(e,t,i)=>{e.exports=i.p+"fonts/Mulish-Regular.woff2"},6164:(e,t,i)=>{e.exports=i.p+"fonts/Mulish-Semibold.eot"},5562:(e,t,i)=>{e.exports=i.p+"fonts/Mulish-Semibold.ttf"},3575:(e,t,i)=>{e.exports=i.p+"fonts/Mulish-Semibold.woff"},5267:(e,t,i)=>{e.exports=i.p+"fonts/Mulish-Semibold.woff2"}},e=>{e.O(0,[449],(()=>(69,e(e.s=69)))),e.O()}]);