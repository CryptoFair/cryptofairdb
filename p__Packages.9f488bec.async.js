(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"9gtD":function(e,t,a){"use strict";var l=a("tAuX"),r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("2qtc");var s=r(a("kLXV"));a("Pwec");var n=r(a("CtXQ"));a("fOrg");var c=r(a("+KLJ"));a("cWXX");var u=r(a("/ezw"));a("+L6B");var d=r(a("2/Rp"));a("/xke");var m=r(a("TeRw")),f=r(a("d6i3")),i=r(a("1l/V")),o=r(a("qIgq"));a("tU7J");var p=r(a("wFql")),x=l(a("q1tI")),g=a("y1Nh"),b=(r(a("wY1l")),a("Y2fQ"),r(a("BM65"))),E=r(a("MEt6")),y=r(a("5XPN")),v=r(a("p46w")),w=r(a("lWT4")),N=r(a("JEMT")),h=r(a("xajh")),k=r(a("kB5k")),L=new y.default(b.default.provider),C=new L.eth.Contract(E.default,b.default.contractAddress),P=b.default.prices,S=b.default.Incomes,T=[3,9,27,81,3,9,27,81],j=function(e){var t=e.children;return x.default.createElement("pre",{style:{background:"#f2f4f5",padding:"12px 20px",margin:"12px 0",fontSize:"12px"}},x.default.createElement("code",null,x.default.createElement(p.default.Text,{copyable:!0},t)))},I=function(){var e=(0,x.useState)(null),t=(0,o.default)(e,2),a=t[0],l=t[1],r=(0,x.useState)(null),p=(0,o.default)(r,2),E=p[0],I=p[1],U=(0,x.useState)(!1),B=(0,o.default)(U,2),H=B[0],R=B[1],A=(0,x.useState)(!1),z=(0,o.default)(A,2),X=(z[0],z[1]),q=(0,x.useState)(0),J=(0,o.default)(q,2),M=J[0],W=J[1],D=(0,x.useState)(!1),O=(0,o.default)(D,2),Y=O[0],F=O[1],Q=(0,x.useState)("0x0"),V=(0,o.default)(Q,2),_=V[0],G=V[1];(0,x.useEffect)(function(){var e=v.default.get("user");G(e);var t=function(){var t=(0,i.default)(f.default.mark(function t(){var a,r,s,n,c,u,d,m,i,p,x,g,b,E,y,v,w,N,h;return f.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=C.methods.viewULvExp(e,8).call(),r=C.methods.viewULvExp(e,7).call(),s=C.methods.viewULvExp(e,6).call(),n=C.methods.viewULvExp(e,5).call(),c=C.methods.viewULvExp(e,4).call(),u=C.methods.viewULvExp(e,3).call(),d=C.methods.viewULvExp(e,2).call(),m=C.methods.viewULvExp(e,1).call(),t.next=10,Promise.all([m,d,u,c,n,s,r,a]);case 10:for(i=t.sent,p=1,x=!0,g=!1,b=void 0,t.prev=15,E=i.entries()[Symbol.iterator]();!(x=(y=E.next()).done);x=!0)v=y.value,w=(0,o.default)(v,2),N=w[0],h=w[1],Number(h.toString())>0&&(p=N+1);t.next=23;break;case 19:t.prev=19,t.t0=t["catch"](15),g=!0,b=t.t0;case 23:t.prev=23,t.prev=24,x||null==E.return||E.return();case 26:if(t.prev=26,!g){t.next=29;break}throw b;case 29:return t.finish(26);case 30:return t.finish(23);case 31:l(p),I(i);case 33:case"end":return t.stop()}},t,null,[[15,19,23,31],[24,,26,30]])}));return function(){return t.apply(this,arguments)}}();t()},[null]);var K=function(e){var t=1e3*e-Date.now();return t<=0?"Expired":"".concat(Math.floor(t/1e3/60/60/24)," days")},Z=function(e){W(Number(e)),X(!0),R(!0)},$=function(){Y?m.default.error({message:"Buying!!!",description:"Please wait for complete."}):R(!1)},ee=function(){var e=(0,i.default)(f.default.mark(function e(){var t,a,l,r;return f.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(F(!0),!window.ethereum||Y){e.next=35;break}return window.web3=new y.default(ethereum,null,{transactionConfirmationBlocks:1}),e.next=5,window.web3.eth.net.getId();case 5:if(t=e.sent,t===b.default.net){e.next=10;break}return m.default.error({message:"Change network",description:b.default.noti}),F(!1),e.abrupt("return");case 10:return e.prev=10,e.next=13,ethereum.enable();case 13:if(a=e.sent,_.toLocaleLowerCase()===a[0].toLocaleLowerCase()){e.next=18;break}return F(!1),m.default.error({message:"Address Invalid",description:"Your address you using to buy did not match with login address."}),e.abrupt("return");case 18:return e.next=20,L.eth.getGasPrice();case 20:return l=e.sent,r=new k.default(l).plus(b.default.gweiPlus).toString(),e.next=24,web3.eth.sendTransaction({from:a[0],to:b.default.contractAddress,value:L.utils.toWei("".concat(P[Number(M)]),"ether"),gas:1e6,gasPrice:r});case 24:e.sent,m.default.success({message:"Success.",description:"Reload this page to see update."}),F(!1),e.next=33;break;case 29:e.prev=29,e.t0=e["catch"](10),F(!1),m.default.error({message:"Failed.",description:"Pleae try again."});case 33:e.next=37;break;case 35:F(!1),m.default.error({message:"Can't detect your provider.",description:"Please install metamask on PC or use trustwallet,coinbase app on mobile."});case 37:case"end":return e.stop()}},e,null,[[10,29]])}));return function(){return e.apply(this,arguments)}}(),te=function(){return E?x.default.createElement("div",{className:"flex md:-mx-4 flex-wrap"},P.map(function(e,t){return t+1<=a?x.default.createElement("div",{className:"w-full md:w-1/2 xl:w-1/4 md:px-4 mb-4",key:t},x.default.createElement("div",{className:"bg-white rounded px-4 py-4 text-center shadow relative"},x.default.createElement("div",{className:"absolute py-2 bg-blue-500 text-white right-0 top-0 w-20"},K(Number(E[t].toString()))),x.default.createElement("p",{className:"text-xl text-gray-800 text-center"},"Level ",t+1),x.default.createElement("div",{className:"flex justify-between py-2 px-2 bg-gray-100"},x.default.createElement("p",{className:"mb-0 text-gray-800 text-lg"},"Price:"),x.default.createElement("p",{className:"mb-0 text-gray-800 text-lg"},x.default.createElement("span",{className:"text-blue-600 font-bold"},P[t])," ETH")),x.default.createElement("div",{className:"flex justify-between py-2 px-2 bg-gray-200"},x.default.createElement("p",{className:"mb-0 text-gray-800 text-lg"},"Refs:"),x.default.createElement("p",{className:"mb-0 text-gray-800 text-lg"},T[t])),x.default.createElement("div",{className:"flex justify-between py-2 px-2 bg-gray-100 mb-4"},x.default.createElement("p",{className:"mb-0 text-gray-800 text-lg"},"Income:"),x.default.createElement("p",{className:"mb-0 text-gray-800 text-lg"},x.default.createElement("span",{className:"text-blue-600 font-bold"},S[t])," ETH")),x.default.createElement(d.default,{size:"large",shape:"round",style:{width:"120px"},onClick:function(){return Z(t)}},"Extend"))):t===a?x.default.createElement("div",{className:"w-full md:w-1/2 xl:w-1/4 md:px-4 mb-4",key:t},x.default.createElement("div",{className:"bg-white rounded px-4 py-4 text-center shadow relative"},x.default.createElement("div",{className:"absolute py-2 bg-blue-500 text-white right-0 top-0 w-20"},"Next"),x.default.createElement("p",{className:"text-xl text-gray-800 text-center"},"Level ",t+1),x.default.createElement("div",{className:"flex justify-between py-2 px-2 bg-gray-100"},x.default.createElement("p",{className:"mb-0 text-gray-800 text-lg"},"Price:"),x.default.createElement("p",{className:"mb-0 text-gray-800 text-lg"},x.default.createElement("span",{className:"text-blue-600 font-bold"},P[t])," ETH")),x.default.createElement("div",{className:"flex justify-between py-2 px-2 bg-gray-200"},x.default.createElement("p",{className:"mb-0 text-gray-800 text-lg"},"Refs:"),x.default.createElement("p",{className:"mb-0 text-gray-800 text-lg"},T[t])),x.default.createElement("div",{className:"flex justify-between py-2 px-2 bg-gray-100 mb-4"},x.default.createElement("p",{className:"mb-0 text-gray-800 text-lg"},"Income:"),x.default.createElement("p",{className:"mb-0 text-gray-800 text-lg"},x.default.createElement("span",{className:"text-blue-600 font-bold"},S[t])," ETH")),x.default.createElement(d.default,{type:"primary",size:"large",shape:"round",style:{width:"120px"},onClick:function(){return Z(t)}},"Buy"))):x.default.createElement("div",{className:"w-full md:w-1/2 xl:w-1/4 md:px-4 mb-4",key:t},x.default.createElement("div",{className:"bg-white rounded px-4 py-4 text-center shadow relative"},x.default.createElement("div",{className:"absolute py-2 bg-gray-500 text-white right-0 top-0 w-20"},"Can't buy"),x.default.createElement("p",{className:"text-xl text-gray-800 text-center"},"Level ",t+1),x.default.createElement("div",{className:"flex justify-between py-2 px-2 bg-gray-100"},x.default.createElement("p",{className:"mb-0 text-gray-800 text-lg"},"Price:"),x.default.createElement("p",{className:"mb-0 text-gray-800 text-lg"},x.default.createElement("span",{className:"text-blue-600 font-bold"},P[t])," ETH")),x.default.createElement("div",{className:"flex justify-between py-2 px-2 bg-gray-200"},x.default.createElement("p",{className:"mb-0 text-gray-800 text-lg"},"Refs:"),x.default.createElement("p",{className:"mb-0 text-gray-800 text-lg"},T[t])),x.default.createElement("div",{className:"flex justify-between py-2 px-2 bg-gray-100 mb-4"},x.default.createElement("p",{className:"mb-0 text-gray-800 text-lg"},"Income:"),x.default.createElement("p",{className:"mb-0 text-gray-800 text-lg"},x.default.createElement("span",{className:"text-blue-600 font-bold"},S[t])," ETH")),x.default.createElement(d.default,{disabled:!0,size:"large",shape:"round",style:{width:"120px"},className:""},"Buy")))})):x.default.createElement("div",{className:"flex md:-mx-4 flex-wrap"},P.map(function(e,t){return x.default.createElement("div",{className:"w-full md:w-1/2 xl:w-1/4 md:px-4 mb-4",key:t},x.default.createElement("div",{className:"bg-white rounded px-4 py-4 text-center shadow relative",style:{height:"267px"}},x.default.createElement(u.default,{active:!0,paragraph:{rows:5}})))}))};return x.default.createElement(g.PageHeaderWrapper,null,x.default.createElement("div",{className:"px-0 md:px-4"},x.default.createElement(s.default,{title:"Buy Level",visible:H,closable:!1,footer:x.default.createElement(d.default,{type:"danger",onClick:$},"Close")},x.default.createElement("div",{className:"text-lg text-gray-700"},"Send ",x.default.createElement("span",{className:"text-blue-500 font-bold"},P[M])," ETH to:"),x.default.createElement("div",{className:""},x.default.createElement(j,null,b.default.contractAddress)),x.default.createElement("div",{className:"mb-8"},x.default.createElement(c.default,{type:"info",message:"The 'Input DATA' field can be unfilled."})),x.default.createElement("div",{className:"w-full h-px bg-gray-400 mb-8 relative"},x.default.createElement("div",{className:"w-8 h-8 flex items-center justify-center border rounded-full bg-white text-gray-600 font-bold border-gray-600 absolute top-0",style:{left:"50%",transform:"translate(-50%,-50%)"}},"OR")),x.default.createElement("div",{className:"text-center mb-4"},x.default.createElement(d.default,{type:"primary",size:"large",onClick:ee,loading:Y},"Click to Checkout!")),x.default.createElement("div",{className:"mb-8 text-center"},x.default.createElement("p",{className:"text-gray-600 mb-1"},"Recommended for"),x.default.createElement("div",{className:"flex justify-center"},x.default.createElement("div",{className:"flex items-center mr-4"},x.default.createElement(n.default,{type:"desktop",className:"mr-1"}),x.default.createElement("img",{src:w.default,className:"w-4 h-4"})),x.default.createElement("div",{className:"flex items-center"},x.default.createElement(n.default,{type:"mobile",className:"mr-1"}),x.default.createElement("img",{src:N.default,className:"w-4 h-4"}),x.default.createElement("img",{src:h.default,className:"w-4 h-4"}))))),te()))};t.default=I}}]);