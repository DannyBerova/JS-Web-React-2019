(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),i=(a(17),a(2)),o=a(3),u=a(6),s=a(4),m=a(5),h=a(1),p=(a(18),a(19),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement("header",null,r.a.createElement("span",{className:"title"},"Navigation")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Catalog")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"About")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Contact Us"))))}}]),t}(n.Component)),d=(a(20),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={hasError:!1},a.handleClickFunc=a.handleClickFunc.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleClickFunc",value:function(){this.setState(function(e){e.hasError;return{hasError:!0}})}},{key:"render",value:function(){var e=this;if(this.state.hasError)throw new Error("I crashed!");return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("span",{className:"title"},"Register")),r.a.createElement("form",{onSubmit:function(t){return e.handleClickFunc(t)}},"Username:",r.a.createElement("input",{type:"text"}),r.a.createElement("br",null),"Email:",r.a.createElement("input",{type:"text"}),r.a.createElement("br",null),"Password:",r.a.createElement("input",{type:"password"}),r.a.createElement("br",null),"Repeat Password:",r.a.createElement("input",{type:"password"}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Register"}),r.a.createElement("button",{style:{background:"yellow"},onClick:this.handleClickFunc},"Test error")))}}]),t}(n.Component)),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={hasError:!1},a.handleClickFunc=a.handleClickFunc.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleClickFunc",value:function(){this.setState(function(e){e.hasError;return{hasError:!0}})}},{key:"render",value:function(){if(this.state.hasError)throw new Error("I crashed!");return r.a.createElement("article",null,r.a.createElement("header",null,r.a.createElement("span",{className:"title"}," Article Title ")),r.a.createElement("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit.Amet magni labore voluptatibus.Vel sunt voluptate fugiat et ducimus voluptates doloremque, eum illo exercitationem dignissimos sequi cum, id molestiae debitis atque. "),r.a.createElement("button",{style:{background:"yellow"},onClick:this.handleClickFunc},"Test error"))}}]),t}(n.Component);var b=function(e){return function(t){return r.a.createElement("div",{className:"alert"},r.a.createElement("span",{className:"alert-symbol"},"\u26a0"),r.a.createElement(e,t))}},f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={error:null,errorInfo:null},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.errorInfo?r.a.createElement(n.Fragment,null,r.a.createElement("img",{src:"https://cdn-images-1.medium.com/max/2000/1*xzoYpYHX1Cgb9cuUi6w-LQ.png",alt:"https://cdn-images-1.medium.com/max/2000/1*xzoYpYHX1Cgb9cuUi6w-LQ.png",class:"shrinkToFit transparent",width:"935",height:"448"}),">"):this.props.children}}]),t}(r.a.Component),g=a(10),j=a(7),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={hasError:!1},a.state={},a.handleChange=a.handleChange.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("span",{className:"title"},"Binding Form")),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.props.onSubmit(e.state)}},r.a.Children.map(this.props.children,function(t){return"input"===t.type?r.a.cloneElement(t,Object(g.a)({onChange:e.handleChange},t.props)):t})))}}]),t}(n.Component),w=b(E),v=b(d),y=b(p),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={hasWarn:!0},a.handleClick=a.handleClick.bind(Object(h.a)(Object(h.a)(a))),a.onSubmit=a.onSubmit.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"onSubmit",value:function(e){console.log(e)}},{key:"handleClick",value:function(){var e=this.state.hasWarn;this.setState({hasWarn:!e})}},{key:"render",value:function(){var e=this.state.hasWarn?r.a.createElement(n.Fragment,null,r.a.createElement(w,null),r.a.createElement(v,null),r.a.createElement(y,null)):r.a.createElement(n.Fragment,null,r.a.createElement(E,null),r.a.createElement(d,null),r.a.createElement(p,null));return r.a.createElement("section",{className:"App"},r.a.createElement(f,null,r.a.createElement("h2",null,'1.Toggle button to see diferent mode "normal/warning"!'),r.a.createElement("button",{style:{color:"white",height:"60px",width:"200px",background:"red"},onClick:this.handleClick},"Toggle Warn Test"),r.a.createElement("h2",null,"2. Test with wellow buttons to throw error - won't throw in production:"),r.a.createElement("h2",null,"Run in production to test error view!"),e,r.a.createElement("h2",null,"3. Two sets of Binding Form below (onSubmit() only logs state on console):"),r.a.createElement(O,{onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",name:"username",placeholder:"Enter username here..."}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Enter password here..."}),r.a.createElement("input",{type:"submit",value:"Login"})),r.a.createElement(O,{onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",name:"username",placeholder:"Enter username here..."}),r.a.createElement("input",{type:"email",name:"email",placeholder:"Enter email here..."}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Enter password here..."}),r.a.createElement("input",{type:"password",name:"repeatPassword",placeholder:"Repeat password here..."}),r.a.createElement("input",{type:"submit",value:"Register"}))))}}]),t}(n.Component);c.a.render(r.a.createElement(k,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.6f794736.chunk.js.map