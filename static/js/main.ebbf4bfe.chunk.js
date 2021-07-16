(this["webpackJsonpresistor-calculator"]=this["webpackJsonpresistor-calculator"]||[]).push([[0],{25:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);n(0);var o=n(15),c=n.n(o),i=n(9),a=n(6),r=n(27),l=n(7);var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{colors:{},loading:!1,loaded:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCHING_COLORS":return console.log("Fetching Colors..."),Object.assign({},Object(l.a)({},e),{loading:!0});case"COLOR_FETCHED":var n={};n[t.payload.name.toUpperCase()]=t.payload;var o=Object.assign({},Object(l.a)({},e.colors),n);return Object.assign({},Object(l.a)({},e),{colors:o});case"ALL_COLORS_FETCHED":return console.log("All colors added!"),Object.assign({},Object(l.a)({},e),{loading:!1,loaded:!0});default:return e}},d=Object(i.b)({resistor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{colorCode:["yellow","violet","black","gold"],bandCount:4,value:47,digit1:4,digit2:7,digit3:null,multiplier:1,tolerance:5,tempCoefficient:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BAND_COUNT":return Object.assign({},Object(l.a)({},e),{bandCount:t.payload});case"SET_COLOR_CODE":console.log("color code: ".concat(t.payload));var n=t.payload;return Object.assign({},Object(l.a)({},e),{colorCode:n});case"UPDATE_VALUE":var o=t.payload;return Object.assign({},Object(l.a)({},e),{value:o});case"SET_VALUE":return console.log(t.payload),Object.assign({},Object(l.a)({},e),t.payload);default:return e;case"SET_DIGIT":console.log(t.payload);var c={};return c[t.payload.digitName]=t.payload.value,console.log(c),Object.assign({},Object(l.a)({},e),c)}},colors:s}),u=(n(37),n(38),n(39),n(16)),b=n(8),O=n(2),p=function(){var e=Object(b.b)().loginWithRedirect;return Object(O.jsx)("button",{onClick:function(){return e()},children:"Log In"})},j=function(){var e=Object(b.b)().logout;return Object(O.jsx)("button",{onClick:function(){return e({returnTo:window.location.origin})},children:"Log Out"})},g=(n(25),function(e){var t=e.color,n=e.pos;return"first"===n?Object(O.jsx)("div",{className:"color-band-first ".concat(t)}):"last"===n?Object(O.jsx)("div",{className:"color-band-last ".concat(t)}):Object(O.jsx)("div",{className:"color-band ".concat(t)})}),f=function(e){var t=Object(a.c)((function(e){return e.resistor.colorCode})),n=function(e){switch(e){case 0:return"first";case t.length-1:return"last";default:return"mid"}};return Object(O.jsx)(O.Fragment,{children:t.map((function(e,t){return Object(O.jsx)(g,{color:e,pos:n(t)},t)}))})},m=function(e){var t=e.resistor;return Object(O.jsx)("span",{id:"component-value",children:null!=t.tempCoefficient?"".concat(t.value," \u03a9 (Ohms)  +/- ").concat(t.tolerance,"%  ").concat(t.tempCoefficient,"ppm/K"):null==t.tolerance?"".concat(t.value," \u03a9 (Ohms) "):"".concat(t.value," \u03a9 (Ohms)  +/- ").concat(t.tolerance,"%")})},h=function(e){var t=e.resistor;return Object(O.jsxs)(u.a,{children:[Object(O.jsxs)("div",{id:"component-container",children:[Object(O.jsx)("div",{id:"left-top",children:Object(O.jsx)("span",{className:"title-text",children:"Resistor"})}),Object(O.jsx)("div",{id:"left-bottom"}),Object(O.jsx)("div",{id:"component",children:Object(O.jsx)(f,{colorCode:t.colorCode})}),Object(O.jsxs)("div",{id:"right-top",children:[Object(O.jsx)("button",{id:"signout-button",children:"Sign Out"}),Object(O.jsx)("span",{className:"title-text",children:"Calculator"})]}),Object(O.jsx)("div",{id:"right-bottom"})]}),Object(O.jsx)(m,{resistor:t})]})},C=n(22),v=n(11),x=n(29);function y(e,t){return function(n,o){console.log(e),console.log(t);var c,i=o().colors.colors;console.log(t.toUpperCase()),console.log(i[t.toUpperCase()].digit),c=["digit1","digit2","digit3"].includes(e)?i[t.toUpperCase()].digit:i[t.toUpperCase()][e],n({type:"SET_DIGIT",payload:{digitName:e,value:c}}),n(E())}}function E(){return function(e,t){var n,o=t().resistor;n=null!=o.tempCoefficient?parseInt("".concat(o.digit1)+"".concat(o.digit2)+"".concat(o.digit3))*o.multiplier:null===o.tolerance||null===o.digit3?parseInt("".concat(o.digit1).concat(o.digit2))*o.multiplier:parseInt("".concat(o.digit1)+"".concat(o.digit2)+"".concat(o.digit3))*o.multiplier,console.log(n),e({type:"UPDATE_VALUE",payload:n})}}function T(e){return function(t,n){var o=e.length,c=n().colors.colors;switch(console.log(c),t({type:"SET_DIGIT",payload:{digitName:"digit3",value:null}}),t({type:"SET_DIGIT",payload:{digitName:"tolerance",value:null}}),t({type:"SET_DIGIT",payload:{digitName:"tempCoefficient",value:null}}),o){case 3:t(y("digit1",e[0])),t(y("digit2",e[1])),t(y("multiplier",e[2]));break;case 4:t(y("digit1",e[0])),t(y("digit2",e[1])),t(y("multiplier",e[2])),t(y("tolerance",e[3]));break;case 5:t(y("digit1",e[0])),t(y("digit2",e[1])),t(y("digit3",e[2])),t(y("multiplier",e[3])),t(y("tolerance",e[4]));break;case 6:t(y("digit1",e[0])),t(y("digit2",e[1])),t(y("digit3",e[2])),t(y("multiplier",e[3])),t(y("tolerance",e[4])),t(y("tempCoefficient",e[5]))}t(E())}}var _=function(e){var t=Object(a.b)(),n=e.bandCount;function o(e){t(function(e){var t;switch(e){case 3:t=["yellow","violet","gold"];break;case 4:t=["yellow","violet","black","gold"];break;case 5:t=["yellow","violet","green","red","gold"];break;case 6:t=["yellow","violet","black","green","gold","red"];break;default:t=["yellow","violet","green","gold"]}return function(n){n({type:"SET_BAND_COUNT",payload:e}),n({type:"SET_COLOR_CODE",payload:t}),n(T(t))}}(e))}return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("br",{}),Object(O.jsx)(C.a,{type:"radio",name:"band-count",defaultValue:n,variant:"primary",onChange:function(e){return o(e)},children:[3,4,5,6].map((function(e,t){return Object(O.jsx)(v.a,{value:e,checked:n===e,variant:"primary",children:e},t)}))})]})},L=n(24),N=function(e){var t=e.columnName[0],n=e.columnName[1],o=e.pos,c=Object(a.c)((function(e){return e.resistor.colorCode})),i=Object(a.b)(),r=Object(a.c)((function(e){return e.resistor.colorCode[o]})),l=function(e){i(function(e,t){return function(n,o){var c=Object(x.a)(o().resistor.colorCode);c[t]=e,n({type:"SET_COLOR_CODE",payload:c}),T(c)}}(e,o)),i(T(c)),i(y(t,e)),i(E())},s=["BLACK","BROWN","RED","ORANGE","YELLOW","GREEN","BLUE","VIOLET","GREY","WHITE","GOLD","SILVER"];switch(t){case"digit1":case"digit2":case"digit3":s.pop(),s.pop();break;case"tempCoefficient":s.pop(),s.pop(),s.pop();break;case"tolerance":s.splice(9,1),s.shift()}return Object(O.jsxs)("div",{id:"".concat(t,"-col"),className:"color-picker-column",children:[Object(O.jsx)("span",{className:"column-title",children:n}),Object(O.jsx)(L.a,{children:s.map((function(t,n){return Object(O.jsx)(L.a.Check,{size:"lg",type:"radio",label:e.COLORS[t].name,className:e.COLORS[t].name,value:e.COLORS[t].name,onChange:function(e){return l(e.target.value)},checked:r===e.COLORS[t].name},n)}))})]})},k=function(e){var t,n=Object(a.c)((function(e){return e.resistor.bandCount})),o=Object(a.c)((function(e){return e.resistor.colorCode})),c=Object(a.c)((function(e){return e.colors.colors}));switch(n){case 3:t=[["digit1","Band 1",o[0],0],["digit2","Band 2",o[1],1],["multiplier","Multiplier",o[2],2]];break;case 4:t=[["digit1","Band 1",o[0],0],["digit2","Band 2",o[1],1],["multiplier","Multiplier",o[2],2],["tolerance","Tolerance",o[3],3]];break;case 5:t=[["digit1","Band 1",o[0],0],["digit2","Band 2",o[1],1],["digit3","Band 3",o[2],2],["multiplier","Multiplier",o[3],3],["tolerance","Tolerance",o[4],4]];break;case 6:t=[["digit1","Band 1",o[0],0],["digit2","Band 2",o[1],1],["digit3","Band 3",o[2],2],["multiplier","Multiplier",o[3],3],["tolerance","Tolerance",o[4],4],["tempCoefficient","Temperature Coefficient",o[5],5]]}return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{id:"color-picker-title",className:"centered",children:"Choose the colors of the bands:"}),Object(O.jsx)("div",{id:"color-picker-container",className:"centered",children:t.map((function(e,n){return Object(O.jsx)(N,{columnName:e,COLORS:c,colorCode:o,pos:t.indexOf(e)},n)}))}),Object(O.jsx)("footer",{id:"footer",children:"\xa92021 Seth Near"})]})};var S=function(){var e=Object(a.c)((function(e){return e.colors.loaded})),t=Object(a.c)((function(e){return e.resistor}));return e?Object(O.jsxs)(u.a,{id:"page-container",children:[Object(O.jsx)(p,{}),Object(O.jsx)(j,{}),Object(O.jsx)(h,{resistor:t}),Object(O.jsx)("div",{id:"band-count-picker-text",className:"centered",children:"Choose the number of bands on the resistor: "}),Object(O.jsx)("div",{id:"band-count-picker-container",children:Object(O.jsx)(_,{bandCount:t.bandCount})}),Object(O.jsx)(k,{bandCount:t.bandCount,colorCode:t.colorCode})]}):null},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),o(e),c(e),i(e),a(e)}))},R=n(28);var w=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,D=Object(i.d)(d,w(Object(i.a)(r.a)));D.dispatch((function(e){console.log("dispatching"),e({type:"FETCHING_COLORS"}),fetch("https://glacial-savannah-70189.herokuapp.com/colors").then((function(e){return e.json()})).then((function(t){var n,o=Object(R.a)(t.data);try{for(o.s();!(n=o.n()).done;){var c=n.value,i={name:c.attributes.name,digit:c.attributes.digit,multiplier:c.attributes.multiplier,tolerance:c.attributes.tolerance,tempCoefficient:c.attributes.temp_coefficient};e({type:"COLOR_FETCHED",payload:i})}}catch(a){o.e(a)}finally{o.f()}e({type:"ALL_COLORS_FETCHED"})}))})),c.a.render(Object(O.jsx)(b.a,{domain:"near-net.us.auth0.com",clientId:"QoNmTgdo3zWNPxxFoeGc6p3Cu9aZhks4",redirectUri:window.location.origin,children:Object(O.jsx)(a.a,{store:D,children:Object(O.jsx)(S,{})})}),document.getElementById("root")),I()}},[[49,1,2]]]);
//# sourceMappingURL=main.ebbf4bfe.chunk.js.map