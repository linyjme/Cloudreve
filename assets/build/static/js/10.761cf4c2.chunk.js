(this["webpackJsonpcloudreve-frontend"]=this["webpackJsonpcloudreve-frontend"]||[]).push([[10],{7024:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return H}));var l=t(6),n=t(10),c=t(9),r=t(0),i=t.n(r),o=t(102),m=t(36),s=t(7050),u=t(7070),p=t(7071),d=t(7055),f=t(7052),g=t(6995),b=t(4),E=t(73),h=t(8),O=t(11),v=t(6978),x=t(7102),C=t(7087),N=t(7075),j=t(51),y=t(6993),S=t(7110),k=t(7096),F=t(31),T=Object(o.a)((function(e){return{contentFix:{padding:"10px 24px 0px 24px"},wrapper:{margin:e.spacing(1),position:"relative"},buttonProgress:{color:e.palette.secondary.light,position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},content:{padding:0,marginTop:0},marginTop:{marginTop:e.spacing(2),display:"block"},textField:{marginTop:e.spacing(1)},scroll:{overflowX:"auto"},dialogContent:{marginTop:e.spacing(2)},pathSelect:{marginTop:e.spacing(2),display:"flex"}}})),w={Circle:i.a.createElement(F.e,null),CircleOutline:i.a.createElement(F.f,null),Heart:i.a.createElement(F.n,null),HeartOutline:i.a.createElement(F.o,null),Hexagon:i.a.createElement(F.p,null),HexagonOutline:i.a.createElement(F.q,null),Hexagram:i.a.createElement(F.r,null),HexagramOutline:i.a.createElement(F.s,null),Rhombus:i.a.createElement(F.C,null),RhombusOutline:i.a.createElement(F.D,null),Square:i.a.createElement(F.F,null),SquareOutline:i.a.createElement(F.G,null),Triangle:i.a.createElement(F.I,null)};function H(e){var a=Object(m.a)(),t=i.a.useState(0),o=Object(c.a)(t,2),H=o[0],W=o[1],q=i.a.useState(!1),z=Object(c.a)(q,2),P=z[0],J=z[1],L=i.a.useState("Circle"),R=Object(c.a)(L,2),D=R[0],G=R[1],I=i.a.useState(a.palette.text.secondary),Q=Object(c.a)(I,2),X=Q[0],A=Q[1],B=i.a.useState({filename:"",tagName:"",path:"/"}),K=Object(c.a)(B,2),M=K[0],U=K[1],V=i.a.useState(!1),Y=Object(c.a)(V,2),Z=Y[0],$=Y[1],_=Object(r.useState)(""),ee=Object(c.a)(_,2),ae=ee[0],te=ee[1],le=Object(r.useState)(""),ne=Object(c.a)(le,2),ce=(ne[0],ne[1]),re=function(e){return function(a){U(Object(n.a)(Object(n.a)({},M),{},Object(l.a)({},e,a.target.value)))}},ie=Object(h.d)(),oe=Object(r.useCallback)((function(e,a,t,l){return ie(Object(b.Q)(e,a,t,l))}),[ie]),me=T();return i.a.createElement(s.a,{open:e.open,onClose:e.onClose,"aria-labelledby":"form-dialog-title",fullWidth:!0},i.a.createElement(s.a,{open:Z,onClose:function(){return $(!1)},"aria-labelledby":"form-dialog-title"},i.a.createElement(u.a,{id:"form-dialog-title"},"\u9009\u62e9\u76ee\u5f55"),i.a.createElement(E.a,{presentPath:"/",selected:[],onSelect:function(e){var a="/"===e.path?e.path+e.name:e.path+"/"+e.name;te(a),ce(e.name)}}),i.a.createElement(p.a,null,i.a.createElement(d.a,{onClick:function(){return $(!1)}},"\u53d6\u6d88"),i.a.createElement(d.a,{onClick:function(){U(Object(n.a)(Object(n.a)({},M),{},{path:"//"===ae?"/":ae})),$(!1)},color:"primary",disabled:""===ae},"\u786e\u5b9a"))),i.a.createElement(v.a,{position:"static"},i.a.createElement(x.a,{value:H,onChange:function(e,a){W(a)},variant:"fullWidth","aria-label":"full width tabs example"},i.a.createElement(C.a,{label:"\u6587\u4ef6\u5206\u7c7b"}),i.a.createElement(C.a,{label:"\u76ee\u5f55\u5feb\u6377\u65b9\u5f0f"}))),0===H&&i.a.createElement(f.a,{className:me.dialogContent},i.a.createElement(N.a,{label:"\u6807\u7b7e\u540d",id:"filled-name",value:M.tagName,onChange:re("tagName"),fullWidth:!0,className:me.textField}),i.a.createElement(N.a,{id:"filled-name",label:"\u6587\u4ef6\u540d\u5339\u914d\u89c4\u5219",value:M.filename,onChange:re("filename"),fullWidth:!0,rows:"4",multiline:!0,variant:"filled",className:me.textField}),i.a.createElement(j.a,{variant:"caption",color:"textSecondary"},"\u4f60\u53ef\u4ee5\u4f7f\u7528",i.a.createElement("code",null,"*"),"\u4f5c\u4e3a\u901a\u914d\u7b26\u3002\u6bd4\u5982",i.a.createElement("code",null,"*.png"),"\u8868\u793a\u5339\u914dpng\u683c\u5f0f\u56fe\u50cf\u3002\u591a\u884c\u89c4\u5219\u95f4\u4f1a\u4ee5\u201c\u6216\u201d\u7684\u5173\u7cfb\u8fdb\u884c\u8fd0\u7b97\u3002"),i.a.createElement(y.a,{className:me.marginTop},"\u56fe\u6807\uff1a"),i.a.createElement("div",{className:me.scroll},i.a.createElement(S.a,{size:"small",value:D,exclusive:!0,onChange:function(e,a){a&&G(a)},className:me.textField},Object.keys(w).map((function(e,a){return i.a.createElement(k.a,{key:a,value:e},w[e])})))),i.a.createElement(y.a,{className:me.marginTop},"\u989c\u8272\uff1a"),i.a.createElement("div",{className:me.scroll},i.a.createElement(S.a,{size:"small",value:X,exclusive:!0,onChange:function(e,a){a&&A(a)},className:me.textField},[a.palette.text.secondary,"#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#9e9e9e","#607d8b"].map((function(e,a){return i.a.createElement(k.a,{key:a,value:e},i.a.createElement(F.e,{style:{color:e}}))}))))),1===H&&i.a.createElement(f.a,{className:me.dialogContent},i.a.createElement(N.a,{label:"\u6807\u7b7e\u540d",id:"filled-name",value:M.tagName,onChange:re("tagName"),fullWidth:!0,className:me.textField}),i.a.createElement("div",{className:me.pathSelect},i.a.createElement(N.a,{label:"\u76ee\u5f55\u8def\u5f84",id:"filled-name",value:M.path,onChange:re("path"),fullWidth:!0,className:me.textField}),i.a.createElement(d.a,{onClick:function(){return $(!0)},style:{marginLeft:a.spacing(1),alignSelf:"flex-end"},color:"primary",variant:"outlined"},"\u9009\u62e9"))),i.a.createElement(p.a,null,i.a.createElement(d.a,{onClick:e.onClose},"\u53d6\u6d88"),i.a.createElement("div",{className:me.wrapper},i.a.createElement(d.a,{onClick:function(){0===H?(J(!0),O.b.post("/tag/filter",{expression:M.filename,name:M.tagName,color:X,icon:D}).then((function(a){J(!1),e.onClose(),e.onSuccess({type:0,name:M.tagName,color:X,icon:D,id:a.data})})).catch((function(e){oe("top","right",e.message,"error")})).then((function(){J(!1)}))):(J(!0),O.b.post("/tag/link",{path:M.path,name:M.tagName}).then((function(t){J(!1),e.onClose(),e.onSuccess({type:1,name:M.tagName,expression:M.path,color:a.palette.text.secondary,icon:"FolderHeartOutline",id:t.data})})).catch((function(e){oe("top","right",e.message,"error")})).then((function(){J(!1)})))},color:"primary",disabled:P||0===H&&(""===M.filename||""===M.tagName)||1===H&&(""===M.tagName||""===M.path)},"\u786e\u5b9a",P&&i.a.createElement(g.a,{size:24,className:me.buttonProgress})))))}}}]);
//# sourceMappingURL=10.761cf4c2.chunk.js.map