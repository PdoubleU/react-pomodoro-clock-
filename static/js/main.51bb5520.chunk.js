(this.webpackJsonppomodoroclock=this.webpackJsonppomodoroclock||[]).push([[0],{11:function(e,t,n){e.exports=n(27)},16:function(e,t,n){},17:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),s=n(9),a=n.n(s),o=(n(16),n(7)),c=n(2),l=n(3),h=n(1),d=n(5),m=n(4),u=(n(17),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"length-control"},r.a.createElement("div",{id:this.props.idTitle},this.props.title),r.a.createElement("button",{id:this.props.decrementId,className:"control-btn",value:"-",onClick:this.props.onClick},"Down"),r.a.createElement("div",{id:this.props.idLength},this.props.length),r.a.createElement("button",{id:this.props.incrementId,className:"control-btn",value:"+",onClick:this.props.onClick},"Up"))}}]),n}(r.a.Component)),p={brkLength:5,sesLength:25,timerState:"stopped",timerType:"Session",timer:1500,intervalID:"",alarmColor:{color:"white"}},k=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).state=p,i.setBreak=i.setBreak.bind(Object(h.a)(i)),i.setSession=i.setSession.bind(Object(h.a)(i)),i}return Object(l.a)(n,[{key:"setBreak",value:function(e){this.lengthModifier("brkLength",e.currentTarget.value,this.state.brkLength,"Break")}},{key:"setSession",value:function(e){this.lengthModifier("sesLength",e.currentTarget.value,this.state.sesLength,"Session")}},{key:"lengthModifier",value:function(e,t,n,i){"+"===t&&n<60?this.setState(Object(o.a)({},e,n+1)):"-"===t&&n>1&&this.setState(Object(o.a)({},e,n-1))}},{key:"render",value:function(){return r.a.createElement("div",{className:"timer"},r.a.createElement(u,{idTitle:"break-length",decrementId:"break-decrement",incrementId:"break-increment",title:"Break Length",length:this.state.brkLength,onClick:this.setBreak}),r.a.createElement(u,{idTitle:"session-length",decrementId:"session-decrement",incrementId:"session-increment",title:"Session Length",length:this.state.sesLength,onClick:this.setSession}))}}]),n}(r.a.Component),b=n(10),g=n.n(b);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null),r.a.createElement(g.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.51bb5520.chunk.js.map