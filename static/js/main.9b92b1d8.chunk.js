(this["webpackJsonpcoditor-dyte"]=this["webpackJsonpcoditor-dyte"]||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(33),r=n.n(i),s=(n(42),n(7)),o=n(8),d=n(10),u=n(9),l=n(37),p=(n(43),n(14)),j=n.n(p),v=n(18),b=n(2),h=n(19),f=n.n(h),O=n(34),m=(n(62),n(63),n(64),n(65),n(66),n(67),n(1)),x=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"View",children:[Object(m.jsx)("div",{className:"View--Title",children:"Live View"}),Object(m.jsx)("iframe",{srcDoc:this.props.code,title:"liveview",frameBorder:"0",className:"View--Frame"})]})}}]),n}(c.a.Component),y=(n(69),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={code:"",data:{0:"",1:"",2:""},active:0,url:""},e.onEditCode=function(t,n){var a=e.state,c=a.data,i=a.code;c[n]=t.target.value,i="<style>"+c[2]+"</style>"+c[0]+"<script>"+c[1]+"<\/script>",e.setState({data:c}),setTimeout((function(){e.setState({code:i})}),2e3)},e.onClickFile=function(t){e.setState({active:t})},e.onSaveCode=Object(v.a)(j.a.mark((function t(){var n,a,c,i,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new URLSearchParams).append("api_dev_key","M5DdG_pG8S-0tckZ_R7Pav67v7UyG4jI"),n.append("api_option","paste"),n.append("api_paste_code",e.state.code),"https://pastebin.com/api/api_post.php",t.prev=5,t.next=8,f.a.post("https://pastebin.com/api/api_post.php",n);case 8:a=t.sent,console.log(a),c=a.data,i=c.substring(c.lastIndexOf("/")+1),r="https://advaitva.github.io/edit/"+i,e.setState({url:r}),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(5),console.log(t.t0),e.setState({url:"Error occured!"});case 20:case"end":return t.stop()}}),t,null,[[5,16]])}))),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(v.a)(j.a.mark((function e(){var t,n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===(t=this.props.match.params.id)){e.next=13;break}return n="https://pastebin.com/raw/"+t,e.prev=3,e.next=6,f.a.get(n);case 6:a=e.sent,this.setState({code:a.data}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.code,a=t.active,c=t.data,i=t.url;return Object(m.jsxs)("div",{className:"Editor",children:[Object(m.jsxs)("div",{className:"Editor--Explorer",children:[["Index.html","Index.js","Index.css"].map((function(t,n){return Object(m.jsx)("div",{className:n===a?"Editor--FileActive":"Editor--File",onClick:function(){return e.onClickFile(n)},children:t},n)})),Object(m.jsx)("div",{className:"Editor--SaveBtn",onClick:function(){return e.onSaveCode()},children:"Save Code"}),i]}),Object(m.jsx)("div",{className:"Editor--Main",children:Object(m.jsx)("div",{className:"Editor--EditArea",children:Object(m.jsx)(O.Controlled,{height:"100px",value:c[a],options:{mode:["xml","javascript","css"][a],theme:"material-ocean",lineNumbers:!0,lineWrapping:!0,lint:!0},className:"Editor--EditCode",onBeforeChange:function(t,n,c){var i=e.state,r=i.data,s=i.code;r[a]=c,s="<style>"+r[2]+"</style>"+r[0]+"<script>"+r[1]+"<\/script>",e.setState({data:r}),setTimeout((function(){e.setState({code:s})}),2e3)}})})}),Object(m.jsx)("div",{className:"Editor--View",children:Object(m.jsx)(x,{code:n})})]})}}]),n}(c.a.Component)),C=Object(b.d)(y),k=(n(74),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"Navbar",children:Object(m.jsx)("div",{className:"Navbar--Title",children:"Coditor"})})}}]),n}(c.a.Component)),N=(n(75),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"Home",children:[Object(m.jsx)(k,{}),Object(m.jsx)(C,{})]})}}]),n}(c.a.Component)),g=n(36),S=n.n(g),w=(n(76),c.a.Component,function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsx)(l.a,{children:Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(N,{})})})}}]),n}(c.a.Component)),E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(w,{})}),document.getElementById("root")),E()}},[[77,1,2]]]);
//# sourceMappingURL=main.9b92b1d8.chunk.js.map