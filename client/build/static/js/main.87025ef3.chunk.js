(this["webpackJsonpreact-ui"]=this["webpackJsonpreact-ui"]||[]).push([[0],{100:function(e,s,c){},102:function(e,s,c){},103:function(e,s,c){},104:function(e,s,c){},105:function(e,s,c){},106:function(e,s,c){},107:function(e,s,c){},108:function(e,s,c){"use strict";c.r(s);var t=c(0),i=c.n(t),a=c(24),n=c.n(a),r=c(16),l=function(e,s){switch(s.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:s.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:s.payload};case"LOGOUT_START":return{user:null,isFetching:!0,error:!1};case"LOGOUT_SUCCESS":return{user:s.payload,isFetching:!1,error:!1};default:return e}},j=c(1),o={user:null,isFetching:!1,error:!1},d=Object(t.createContext)(o),A=function(e){var s=e.children,c=Object(t.useReducer)(l,o),i=Object(r.a)(c,2),a=i[0],n=i[1];return Object(j.jsx)(d.Provider,{value:{user:a.user,isFetching:a.isFetching,error:a.error,dispatch:n},children:s})},O=c(17),b=c(6),x=c.p+"static/media/furniture_cover.dc9b0f38.jpg";c(70);function m(){return Object(j.jsx)("div",{className:"landingContainer",children:Object(j.jsxs)("div",{className:"landingWrapper",style:{backgroundImage:"url(".concat(x,")")},children:[Object(j.jsx)("div",{className:"landingTop",children:Object(j.jsx)("span",{className:"landingHeader",children:"Premier Furniture"})}),Object(j.jsx)("div",{className:"landingCenter",children:Object(j.jsx)("span",{className:"tagLine",children:"Designed for the modern homeowner."})}),Object(j.jsx)("div",{className:"landingBottom",children:Object(j.jsx)(O.b,{to:"/shop",children:Object(j.jsx)("span",{className:"tagButton",children:"Browse Catalog"})})})]})})}function h(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"homeContainer",children:Object(j.jsx)(m,{})})})}c(79),c(80);var u=c(130),g=c(132),p=c(131),E=c(128);function I(){var e=Object(t.useState)(!0),s=Object(r.a)(e,2);s[0],s[1];return Object(j.jsx)("div",{className:"sidebar",children:Object(j.jsxs)("div",{className:"sidebarWrapper",children:[Object(j.jsx)("h2",{className:"sidebarTitle",children:"Filters"}),Object(j.jsxs)("form",{className:"filtersForm",children:[Object(j.jsx)("div",{className:"formRow",children:Object(j.jsx)("input",{type:"text",placeholder:"Search"})}),Object(j.jsxs)("div",{className:"formRow",children:[Object(j.jsx)("h4",{children:"Category"}),Object(j.jsxs)(p.a,{component:"fieldset",children:[Object(j.jsx)(g.a,{value:"end",control:Object(j.jsx)(u.a,{color:"primary"}),label:"Appliances",labelPlacement:"end"}),Object(j.jsx)(g.a,{value:"end",control:Object(j.jsx)(u.a,{color:"primary"}),label:"Chairs",labelPlacement:"end"}),Object(j.jsx)(g.a,{value:"end",control:Object(j.jsx)(u.a,{color:"primary"}),label:"Couches",labelPlacement:"end"}),Object(j.jsx)(g.a,{value:"end",control:Object(j.jsx)(u.a,{color:"primary"}),label:"Sofas",labelPlacement:"end"}),Object(j.jsx)(g.a,{value:"end",control:Object(j.jsx)(u.a,{color:"primary"}),label:"Tables",labelPlacement:"end"})]})]}),Object(j.jsxs)("div",{className:"formRow",children:[Object(j.jsx)("h4",{children:"Price"}),Object(j.jsxs)(p.a,{component:"fieldset",children:[Object(j.jsx)(g.a,{value:"end",control:Object(j.jsx)(u.a,{color:"primary"}),label:"Under $25",labelPlacement:"end"}),Object(j.jsx)(g.a,{value:"end",control:Object(j.jsx)(u.a,{color:"primary"}),label:"$25 to $50",labelPlacement:"end"}),Object(j.jsx)(g.a,{value:"end",control:Object(j.jsx)(u.a,{color:"primary"}),label:"$50 to $150",labelPlacement:"end"}),Object(j.jsx)(g.a,{value:"end",control:Object(j.jsx)(u.a,{color:"primary"}),label:"$150 to $300",labelPlacement:"end"}),Object(j.jsx)(g.a,{value:"end",control:Object(j.jsx)(u.a,{color:"primary"}),label:"$300+",labelPlacement:"end"})]})]}),Object(j.jsx)(E.a,{variant:"contained",className:"filterBtn",children:"Apply Filters"})]})]})})}var C=c(12),f=c.n(C),w=c(19),R=c(23),S=c.n(R),v=(c(100),c(58)),N=c.n(v);function Y(e){var s=e.item;return Object(j.jsx)("div",{className:"itemCard",children:Object(j.jsxs)("div",{className:"itemCardWrapper",children:[Object(j.jsx)("div",{className:"itemCardHeader",children:Object(j.jsx)("span",{className:"saveBtn",children:Object(j.jsx)(N.a,{})})}),Object(j.jsx)("div",{className:"itemCardPicture",children:Object(j.jsx)("img",{src:s.image?s.image:"data:image/png;base64,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",alt:"chair",className:"itemPicture"})}),Object(j.jsxs)("div",{className:"itemCardDesc",children:[Object(j.jsx)("h4",{children:s.itemName}),Object(j.jsx)("p",{className:"desc",children:s.desc}),Object(j.jsx)("p",{className:"price",children:"$".concat(s.price)})]}),Object(j.jsx)("div",{className:"itemCardCart",children:Object(j.jsx)("button",{className:"cartBtn",children:"Add to Cart"})})]})})}c(102);function F(){var e=Object(t.useState)([]),s=Object(r.a)(e,2),c=s[0],i=s[1];Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).HEROKU_URL;return Object(t.useEffect)((function(){(function(){var e=Object(w.a)(f.a.mark((function e(){var s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("https://ecommerce-furniture-shop.herokuapp.com/items/getall");case 3:s=e.sent,i(s.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(j.jsx)("div",{className:"itemsCatalog fadeInBottom",children:Object(j.jsxs)("div",{className:"itemsWrapper",children:[Object(j.jsx)("h2",{className:"itemsTitle",children:"Catalog"}),Object(j.jsx)("div",{className:"itemsCardBox",children:c.map((function(e){return Object(j.jsx)(Y,{item:e},"item-".concat(e._id))}))})]})})}function k(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"shopWrapper",children:[Object(j.jsx)(I,{}),Object(j.jsx)(F,{})]})})}c(103);var B=c(44),T=c.n(B),J=c(45),L=c.n(J),K=c(129),Q=function(){var e=Object(w.a)(f.a.mark((function e(s,c){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:"LOGIN_START"}),e.prev=1,e.next=4,S.a.post("auth/login",s);case 4:t=e.sent,c({type:"LOGIN_SUCCESS",payload:t.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),c({type:"LOGIN_FAILURE",payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(s,c){return e.apply(this,arguments)}}(),U=function(){var e=Object(w.a)(f.a.mark((function e(s){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s({type:"LOGOUT_START"});try{s({type:"LOGOUT_SUCCESS",payload:null})}catch(c){console.log(c)}case 2:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();function G(){var e=Object(t.useContext)(d),s=e.user,c=e.isFetching,i=e.dispatch,a=function(){U(i),console.log(s)},n=function(){return Object(j.jsxs)("ul",{className:"userLinks",children:[Object(j.jsx)("li",{children:"Welcome, ".concat(s.name)}),Object(j.jsx)("li",{children:Object(j.jsx)(O.b,{to:"/profile",children:Object(j.jsx)(T.a,{})})}),Object(j.jsx)("li",{children:Object(j.jsx)(O.b,{to:"/cart",children:Object(j.jsx)(L.a,{})})}),Object(j.jsx)("li",{children:Object(j.jsx)("button",{className:"logOutBtn",onClick:a,children:"Log Out"})})]})},r=function(){return Object(j.jsxs)("ul",{className:"userLinks",children:[Object(j.jsx)("li",{children:Object(j.jsx)(O.b,{to:"/login",children:"Log In"})}),Object(j.jsx)("li",{children:Object(j.jsx)(O.b,{to:"/profile",children:Object(j.jsx)(T.a,{})})}),Object(j.jsx)("li",{children:Object(j.jsx)(O.b,{to:"/cart",children:Object(j.jsx)(L.a,{})})})]})};return Object(j.jsxs)("header",{className:"headerContainer",children:[Object(j.jsx)("div",{className:"headerLeft",children:Object(j.jsx)(O.b,{to:"/",children:Object(j.jsxs)("span",{className:"logo",children:[Object(j.jsx)("img",{src:"data:image/png;base64,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",alt:"logo"}),"Pieces"]})})}),Object(j.jsx)("div",{className:"headerCenter",children:Object(j.jsx)("ul",{className:"mainLinks",children:Object(j.jsx)("li",{children:Object(j.jsx)(O.b,{to:"/shop",children:"Shop"})})})}),Object(j.jsx)("div",{className:"headerRight",children:s?c?Object(j.jsx)(K.a,{size:"20px"}):Object(j.jsx)(n,{}):Object(j.jsx)(r,{})})]})}c(104);function W(){var e=Object(t.useRef)(),s=Object(t.useRef)(),c=Object(t.useRef)(),i=Object(t.useRef)(),a=Object(b.g)(),n=function(){var t=Object(w.a)(f.a.mark((function t(n){var r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),i.current.value===c.current.value){t.next=5;break}c.current.setCustomValidity("Passwords do not match!"),t.next=15;break;case 5:return r={name:e.current.value,email:s.current.value,password:c.current.value},t.prev=6,t.next=9,S.a.post("/auth/register",r);case 9:a.push("/"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(6),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[6,12]])})));return function(e){return t.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"register",children:Object(j.jsxs)("div",{className:"registerWrapper",children:[Object(j.jsxs)("div",{className:"registerLeft",children:[Object(j.jsx)("h3",{className:"registerTitle",children:"Pieces"}),Object(j.jsxs)("span",{className:"registerDesc",children:["Register with Pieces for easy 1-click checkout.",Object(j.jsx)("br",{}),"Save items to your wishlist for later.",Object(j.jsx)("br",{}),"Get access to exclusive discounts.",Object(j.jsx)("br",{}),"And more..."]})]}),Object(j.jsx)("div",{className:"registerRight",children:Object(j.jsxs)("form",{className:"registerBox",onSubmit:n,children:[Object(j.jsxs)("div",{className:"formRow",children:[Object(j.jsx)("label",{htmlFor:"name",children:"Name"}),Object(j.jsx)("input",{placeholder:"Name",type:"text",name:"name",required:!0,className:"loginInput",ref:e})]}),Object(j.jsxs)("div",{className:"formRow",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{placeholder:"Email",type:"email",name:"email",required:!0,className:"loginInput",ref:s})]}),Object(j.jsxs)("div",{className:"formRow",children:[Object(j.jsx)("label",{htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{placeholder:"Password",type:"password",name:"password",required:!0,className:"loginInput",ref:c})]}),Object(j.jsxs)("div",{className:"formRow",children:[Object(j.jsx)("label",{htmlFor:"cpassword",children:"Confirm Password"}),Object(j.jsx)("input",{placeholder:"Confirm Password",type:"password",name:"cpassword",required:!0,className:"loginInput",ref:i})]}),Object(j.jsx)("button",{className:"registerButton",type:"submit",children:"Sign Up"})]})})]})})}c(105);function y(){var e=Object(t.useRef)(),s=Object(t.useRef)(),c=Object(t.useContext)(d),i=(c.user,c.isFetching),a=(c.error,c.dispatch),n=function(){var c=Object(w.a)(f.a.mark((function c(t){return f.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:t.preventDefault(),Q({email:e.current.value,password:s.current.value},a);case 2:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"login",children:Object(j.jsxs)("div",{className:"loginWrapper",children:[Object(j.jsxs)("div",{className:"loginLeft",children:[Object(j.jsx)("h3",{className:"loginTitle",children:"Pieces"}),Object(j.jsxs)("span",{className:"loginDesc",children:["Login and start shopping.",Object(j.jsx)("br",{})]})]}),Object(j.jsx)("div",{className:"loginRight",children:Object(j.jsxs)("form",{className:"loginBox",onSubmit:n,children:[Object(j.jsxs)("div",{className:"formRow",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{placeholder:"Email",type:"email",name:"email",required:!0,className:"loginInput",ref:e})]}),Object(j.jsxs)("div",{className:"formRow",children:[Object(j.jsx)("label",{htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{placeholder:"Password",type:"password",name:"password",required:!0,className:"loginInput",ref:s})]}),Object(j.jsx)("button",{className:"loginButton",type:"submit",disabled:i,children:i?Object(j.jsx)(K.a,{size:"20px"}):"Login"})]})})]})})}c(106);var D=c.p+"static/media/cabinet.90cdad27.jpg",P=c(59),z=c.n(P);function H(){var e=Object(t.useContext)(d).user,s=Object(t.useRef)(),c=Object(t.useRef)(),i=Object(t.useRef)(),a=Object(t.useState)(null),n=Object(r.a)(a,2),l=(n[0],n[1]);console.log(e);var o=function(){var e=Object(w.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={itemName:s.current.value,desc:c.current.value,price:i.current.value},e.prev=2,e.next=5,S.a.post("/items/new",a);case 5:window.location.reload(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(s){return e.apply(this,arguments)}}(),A=function(){return Object(j.jsxs)("div",{className:"profileWrapper",children:[Object(j.jsx)("div",{className:"profileTop",children:Object(j.jsx)("h2",{children:"Dashboard"})}),Object(j.jsxs)("div",{className:"profileCenter",children:[Object(j.jsx)("h3",{children:"Add New Item"}),Object(j.jsxs)("form",{className:"newItemForm",onSubmit:o,children:[Object(j.jsxs)("div",{className:"formRow",children:[Object(j.jsx)("label",{htmlFor:"itemName",children:"Item Name"}),Object(j.jsx)("input",{type:"text",name:"itemName",className:"adminInput",ref:s,placeholder:"Item Name"})]}),Object(j.jsxs)("div",{className:"formRow",children:[Object(j.jsx)("label",{htmlFor:"itemDesc",children:"Item Description"}),Object(j.jsx)("input",{type:"text",name:"itemDes",className:"adminInput",ref:c,placeholder:"Item Description"})]}),Object(j.jsx)("div",{className:"formRow",children:Object(j.jsxs)("label",{htmlFor:"itemPicture",children:[Object(j.jsx)("span",{className:"uploadText",children:"Item Picture"}),Object(j.jsx)(z.a,{className:"uploadIcon"}),Object(j.jsx)("input",{style:{display:"none"},type:"file",name:"itemPicture",accept:".png, .jpeg, .jpg",onChange:function(e){return l(e.target.files[0])},placeholder:"Item Description"})]})}),Object(j.jsxs)("div",{className:"formRow",children:[Object(j.jsx)("label",{htmlFor:"itemPrice",children:"Item Price"}),Object(j.jsx)("input",{type:"number",name:"itemPrice",className:"adminInput",ref:i,placeholder:"Item Price"})]}),Object(j.jsx)("input",{type:"submit",className:"adminBtn"})]})]}),Object(j.jsxs)("div",{className:"profileBottom",children:[Object(j.jsx)("h2",{children:"Transactions"}),Object(j.jsxs)("div",{className:"transactionItem",children:[Object(j.jsx)("img",{className:"transactionItemPicture",src:D,alt:"item"}),Object(j.jsx)("span",{className:"transactionItemName",children:"Cabinet"}),Object(j.jsx)("span",{className:"transactionItemTime"}),Object(j.jsx)("span",{className:"transactionItemPrice",children:"$150.63"}),Object(j.jsx)("span",{className:"transactionItemStatus",children:"Completed"})]})]})]})},O=function(){return Object(j.jsxs)("div",{className:"profileWrapper",children:[Object(j.jsxs)("div",{className:"profileTop",children:[Object(j.jsx)("h2",{children:"Overview"}),Object(j.jsx)("div",{className:"userProfileName",children:e.name})]}),Object(j.jsx)("div",{className:"profileCenter",children:Object(j.jsxs)("div",{className:"userSavedItems",children:[Object(j.jsx)("h3",{children:"Saved Items"}),Object(j.jsx)("p",{children:"You have no saved items"})]})}),Object(j.jsx)("div",{className:"profileBottom",children:Object(j.jsxs)("div",{className:"userTransactionHistory",children:[Object(j.jsx)("h3",{children:"Previous Purchases"}),Object(j.jsxs)("div",{className:"transactionItem",children:[Object(j.jsx)("img",{className:"transactionItemPicture",src:D,alt:"item"}),Object(j.jsx)("span",{className:"transactionItemName",children:"Cabinet"}),Object(j.jsx)("span",{className:"transactionItemTime"}),Object(j.jsx)("span",{className:"transactionItemPrice",children:"$150.63"}),Object(j.jsx)("span",{className:"transactionItemStatus",children:"Completed"})]})]})})]})};return Object(j.jsx)("div",{className:"profile",children:!0===e.isAdmin?Object(j.jsx)(A,{}):Object(j.jsx)(O,{})})}function M(){var e=Object(t.useContext)(d).user;return Object(j.jsxs)(O.a,{children:[Object(j.jsx)(G,{}),Object(j.jsx)("div",{className:"appContainer",children:Object(j.jsxs)(b.d,{children:[Object(j.jsx)(b.b,{exact:!0,path:"/",children:Object(j.jsx)(h,{})}),Object(j.jsx)(b.b,{path:"/shop",children:Object(j.jsx)(k,{})}),Object(j.jsx)(b.b,{path:"/register",children:e?Object(j.jsx)(b.a,{to:"/"}):Object(j.jsx)(W,{})}),Object(j.jsx)(b.b,{path:"/login",children:e?Object(j.jsx)(b.a,{to:"/"}):Object(j.jsx)(y,{})}),Object(j.jsx)(b.b,{path:"/profile",children:Object(j.jsx)(H,{})})]})})]})}c(107);n.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(A,{children:Object(j.jsx)(M,{})})}),document.getElementById("root"))},70:function(e,s,c){},79:function(e,s,c){},80:function(e,s,c){}},[[108,1,2]]]);
//# sourceMappingURL=main.87025ef3.chunk.js.map