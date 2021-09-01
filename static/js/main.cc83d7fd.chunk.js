(this["webpackJsonpresistor-calculator"]=this["webpackJsonpresistor-calculator"]||[]).push([[0],{48:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(12),c=n.n(i),r=n(23),o=n(6),l=n(49),s=n(9);var d=function colors_colors(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{colors:{},loading:!1,loaded:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCHING_COLORS":return Object.assign({},Object(s.a)({},e),{loading:!0});case"COLOR_FETCHED":var n={};n[t.payload.name.toUpperCase()]=t.payload;var a=Object.assign({},Object(s.a)({},e.colors),n);return Object.assign({},Object(s.a)({},e),{colors:a});case"ALL_COLORS_FETCHED":return Object.assign({},Object(s.a)({},e),{loading:!1,loaded:!0});default:return e}},u=Object(r.b)({resistor:function resistor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{colorCode:["yellow","violet","black","gold"],bandCount:4,value:47,digit1:4,digit2:7,digit3:null,multiplier:1,tolerance:5,tempCoefficient:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BAND_COUNT":return Object.assign({},Object(s.a)({},e),{bandCount:t.payload});case"SET_COLOR_CODE":var n=t.payload;return Object.assign({},Object(s.a)({},e),{colorCode:n});case"UPDATE_VALUE":var a=t.payload;return Object.assign({},Object(s.a)({},e),{value:a});case"SET_VALUE":return Object.assign({},Object(s.a)({},e),t.payload);default:return e;case"SET_DIGIT":var i={};return i[t.payload.digitName]=t.payload.value,Object.assign({},Object(s.a)({},e),i)}},colors:d}),j=(n(63),n(64),n(65),n(10)),b=n(15),O=n(1),p=n(41),g=n(42),h=n(52),C=(n(48),function ColorBand(e){var t=e.color,n=e.pos;return"first"===n?Object(O.jsx)("div",{className:"color-band-first ".concat(t)}):"last"===n?Object(O.jsx)("div",{className:"color-band-last ".concat(t)}):Object(O.jsx)("div",{className:"color-band ".concat(t)})}),f=function ColorCode(e){var t=Object(o.c)((function(e){return e.resistor.colorCode})),n=function checkPos(e){switch(e){case 0:return"first";case t.length-1:return"last";default:return"mid"}};return Object(O.jsx)(O.Fragment,{children:t.map((function(e,t){return Object(O.jsx)(C,{color:e,pos:n(t)},t)}))})},v=function ValueDisplay(e){var t=e.resistor;return Object(O.jsx)("span",{id:"component-value",children:function displayValue(){return null!=t.tempCoefficient?"".concat(t.value," \u03a9 (Ohms)  +/- ").concat(t.tolerance,"%  ").concat(t.tempCoefficient,"ppm/K"):null==t.tolerance?"".concat(t.value," \u03a9 (Ohms) "):"".concat(t.value," \u03a9 (Ohms)  +/- ").concat(t.tolerance,"%")}()})},m=function Resistor(e){var t=e.resistor;return Object(O.jsxs)(j.a,{children:[Object(O.jsxs)("div",{id:"component-container",children:[Object(O.jsx)("div",{id:"left-top",children:Object(O.jsx)("span",{className:"title-text",children:"Resistor"})}),Object(O.jsx)("div",{id:"left-bottom"}),Object(O.jsx)("div",{id:"component",children:Object(O.jsx)(f,{colorCode:t.colorCode})}),Object(O.jsx)("div",{id:"right-top",children:Object(O.jsx)("span",{className:"title-text",children:"Calculator"})}),Object(O.jsx)("div",{id:"right-bottom"})]}),Object(O.jsx)(v,{resistor:t})]})},x=n(46),y=n(27),E=n(22);function setDigit(e,t){return function(n,a){var i,c=a().colors.colors;i=["digit1","digit2","digit3"].includes(e)?c[t.toUpperCase()].digit:c[t.toUpperCase()][e],n({type:"SET_DIGIT",payload:{digitName:e,value:i}}),n(updateValue())}}function updateValue(){return function(e,t){var n=t().resistor;e({type:"UPDATE_VALUE",payload:null!=n.tempCoefficient?parseInt("".concat(n.digit1)+"".concat(n.digit2)+"".concat(n.digit3))*n.multiplier:null===n.tolerance||null===n.digit3?parseInt("".concat(n.digit1).concat(n.digit2))*n.multiplier:parseInt("".concat(n.digit1)+"".concat(n.digit2)+"".concat(n.digit3))*n.multiplier})}}function setValueFromColorCode(e){return function(t,n){var a=e.length;n().colors.colors;switch(t({type:"SET_DIGIT",payload:{digitName:"digit3",value:null}}),t({type:"SET_DIGIT",payload:{digitName:"tolerance",value:null}}),t({type:"SET_DIGIT",payload:{digitName:"tempCoefficient",value:null}}),a){case 3:t(setDigit("digit1",e[0])),t(setDigit("digit2",e[1])),t(setDigit("multiplier",e[2]));break;case 4:t(setDigit("digit1",e[0])),t(setDigit("digit2",e[1])),t(setDigit("multiplier",e[2])),t(setDigit("tolerance",e[3]));break;case 5:t(setDigit("digit1",e[0])),t(setDigit("digit2",e[1])),t(setDigit("digit3",e[2])),t(setDigit("multiplier",e[3])),t(setDigit("tolerance",e[4]));break;case 6:t(setDigit("digit1",e[0])),t(setDigit("digit2",e[1])),t(setDigit("digit3",e[2])),t(setDigit("multiplier",e[3])),t(setDigit("tolerance",e[4])),t(setDigit("tempCoefficient",e[5]))}t(updateValue())}}var T=function BandCountPicker(e){var t=Object(o.b)(),n=e.bandCount;function handleChange(e){t(function setBandCount(e){var t;switch(e){case 3:t=["yellow","violet","gold"];break;case 4:t=["yellow","violet","black","gold"];break;case 5:t=["yellow","violet","green","red","gold"];break;case 6:t=["yellow","violet","black","green","gold","red"];break;default:t=["yellow","violet","green","gold"]}return function(n){n({type:"SET_BAND_COUNT",payload:e}),n({type:"SET_COLOR_CODE",payload:t}),n(setValueFromColorCode(t))}}(e))}return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("br",{}),Object(O.jsx)(x.a,{type:"radio",name:"band-count",defaultValue:n,variant:"primary",onChange:function onChange(e){return handleChange(e)},children:[3,4,5,6].map((function(e,t){return Object(O.jsx)(y.a,{value:e,checked:n===e,variant:"primary",children:e},t)}))})]})},k=n(53),D=n(14),_=n(31),N=n(32),L=function ColorPickerColumnRadios(e){var t=e.columnName[0],n=e.columnName[1],a=e.pos,i=Object(o.c)((function(e){return e.resistor.colorCode})),c=Object(o.b)(),r=Object(o.c)((function(e){return e.resistor.colorCode[a]})),l=function handleChange(e){c(function updateColorCode(e,t){return function(n,a){var i=Object(E.a)(a().resistor.colorCode);i[t]=e,n({type:"SET_COLOR_CODE",payload:i}),setValueFromColorCode(i)}}(e,a)),c(setValueFromColorCode(i)),c(setDigit(t,e))},s=["BLACK","BROWN","RED","ORANGE","YELLOW","GREEN","BLUE","VIOLET","GREY","WHITE","GOLD","SILVER"];switch(t){case"digit1":case"digit2":case"digit3":s.pop(),s.pop();break;case"tempCoefficient":s.pop(),s.pop(),s.pop();break;case"tolerance":s.splice(9,1),s.shift()}return Object(O.jsxs)("div",{id:"".concat(t,"-col"),className:"color-picker-column",children:[Object(O.jsx)("span",{className:"column-title",children:n}),Object(O.jsx)(k.a,{children:s.map((function(t,n){return Object(O.jsx)(D.a,{size:"lg",type:"radio",className:e.COLORS[t].name,onChange:function onChange(e){return l(e.target.value)},children:Object(O.jsxs)(N.a,{children:[Object(O.jsx)(_.a,{type:"radio",value:e.COLORS[t].name,onChange:function onChange(e){return l(e.target.value)},checked:r===e.COLORS[t].name}),e.COLORS[t].name]})},n)}))})]})},S=function ColorPicker(e){var t,n=Object(o.c)((function(e){return e.resistor.bandCount})),a=Object(o.c)((function(e){return e.resistor.colorCode})),i=Object(o.c)((function(e){return e.colors.colors}));switch(n){case 3:t=[["digit1","Band 1",a[0],0],["digit2","Band 2",a[1],1],["multiplier","Multiplier",a[2],2]];break;case 4:t=[["digit1","Band 1",a[0],0],["digit2","Band 2",a[1],1],["multiplier","Multiplier",a[2],2],["tolerance","Tolerance",a[3],3]];break;case 5:t=[["digit1","Band 1",a[0],0],["digit2","Band 2",a[1],1],["digit3","Band 3",a[2],2],["multiplier","Multiplier",a[3],3],["tolerance","Tolerance",a[4],4]];break;case 6:t=[["digit1","Band 1",a[0],0],["digit2","Band 2",a[1],1],["digit3","Band 3",a[2],2],["multiplier","Multiplier",a[3],3],["tolerance","Tolerance",a[4],4],["tempCoefficient","Temperature Coefficient",a[5],5]]}return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{id:"color-picker-title",className:"centered",children:"Choose the colors of the bands:"}),Object(O.jsx)("div",{id:"color-picker-container",className:"container",children:t.map((function(e,n){return Object(O.jsx)(L,{columnName:e,COLORS:i,colorCode:a,pos:t.indexOf(e)},n)}))}),Object(O.jsx)("footer",{id:"footer",children:"\xa92021 Seth Near"})]})},R=function ColorCodeTab(){var e=Object(o.c)((function(e){return e.colors.loaded})),t=Object(o.c)((function(e){return e.resistor}));return e?Object(O.jsxs)(j.a,{id:"page-container",children:[Object(O.jsx)(m,{resistor:t}),Object(O.jsx)("div",{id:"band-count-picker-text",className:"centered",children:"Choose the number of bands on the resistor: "}),Object(O.jsx)("div",{id:"band-count-picker-container",children:Object(O.jsx)(T,{bandCount:t.bandCount})}),Object(O.jsx)(S,{bandCount:t.bandCount,colorCode:t.colorCode})]}):null},I=n(51),A=n(30),B=n(28),F=n(18),V=function AddButton(e){return Object(O.jsx)(F.a,{variant:"success",onClick:e.handleAddClick,children:"Add"})},w=n(25),P=function ValueInput(e){return Object(O.jsxs)(B.a,{children:[Object(O.jsx)(A.a,{type:"number",value:e.value,onChange:function onChange(t){return e.handleInputChange(e.index,t)}}),Object(O.jsx)(A.a.Feedback,{type:"invalid",children:"Must be a numerical value!"}),Object(O.jsx)(B.a.Text,{children:"\u03a9"}),e.isLast?Object(O.jsx)(V,{handleAddClick:e.handleAddClick}):null,e.inputCount>1?Object(O.jsx)(w.a,{onClick:function onClick(){return e.handleRemoveClick(e.index)}}):null]})},U=n(37),G=n(50),H=function ValueInputList(e){var t=e.type,n=Object(a.useState)([{value:null}]),i=Object(p.a)(n,2),c=i[0],r=i[1],o=function handleInputChange(e,t){var n=Object(E.a)(c);n[e].value=t.target.value,r(n),d()},l=function handleAddClick(){var e=Object(E.a)(c);e.push({value:null}),r(e),d()},s=function handleRemoveClick(e){var t=Object(E.a)(c);t.splice(e,1),r(t),d()},d=function calculateTotal(){var e,n=0,a=Object(U.a)(c);try{for(a.s();!(e=a.n()).done;){var i=e.value;if(null!=i.value)switch(t){case"series":n+=parseFloat(i.value);break;case"parallel":n+=1/parseFloat(i.value)}}}catch(r){a.e(r)}finally{a.f()}return"series"===t?n:1/n};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("h1",{children:["series"===t?"Series":"Parallel"," Calculator"]}),Object(O.jsxs)(G.a,{children:[Object(O.jsxs)("h3",{children:["Enter the values (in Ohms) of the resistors in"," ","series"===t?"Series":"parallel",":"]}),Object(O.jsx)(j.a,{className:"series-input-container",children:c.map((function(e,t){return Object(O.jsx)(P,{handleInputChange:o,handleAddClick:l,handleRemoveClick:s,inputCount:c.length,index:t,id:"".concat(e,"-").concat(t),value:e.value,isLast:t===c.length-1},"".concat(e,"-").concat(t))}))}),Object(O.jsx)("div",{className:"result-container",children:Object(O.jsxs)("span",{className:"result",children:["Total Resistance = ",d()," ","\u03a9"]})})]})]})},K=function SeriesTab(){return Object(O.jsx)(H,{type:"series"})},M=function ParallelTab(){return Object(O.jsx)(H,{type:"parallel"})},W=function NavTabs(){var e=Object(a.useState)("colorCode"),t=Object(p.a)(e,2),n=t[0],i=t[1],c=Object(o.c)((function(e){return e.colors.loaded}));return Object(O.jsxs)(h.a,{id:"nav-tabs",activeKey:n,onSelect:function onSelect(e){return i(e)},transition:!1,variant:"pills",children:[Object(O.jsx)(g.a,{eventKey:"colorCode",title:"Color Code",children:c?Object(O.jsx)(R,{}):Object(O.jsx)(I.a,{animation:"border"})}),Object(O.jsx)(g.a,{eventKey:"series",title:"Series",children:Object(O.jsx)(K,{})}),Object(O.jsx)(g.a,{eventKey:"parallel",title:"Parallel",children:Object(O.jsx)(M,{})})]})};var J=function App_App(){var e=Object(b.a)();return e.user,e.isAuthenticated,Object(O.jsx)(j.a,{children:Object(O.jsx)(W,{})})},X=function reportWebVitals(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};var Y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.c,z=Object(r.d)(u,Y(Object(r.a)(l.a)));z.dispatch(function fetchColors(){return function(e){e({type:"FETCHING_COLORS"}),fetch("https://glacial-savannah-70189.herokuapp.com/colors").then((function(e){return e.json()})).then((function(t){var n,a=Object(U.a)(t.data);try{for(a.s();!(n=a.n()).done;){var i=n.value,c={name:i.attributes.name,digit:i.attributes.digit,multiplier:i.attributes.multiplier,tolerance:i.attributes.tolerance,tempCoefficient:i.attributes.temp_coefficient};e({type:"COLOR_FETCHED",payload:c})}}catch(r){a.e(r)}finally{a.f()}e({type:"ALL_COLORS_FETCHED"})}))}}()),c.a.render(Object(O.jsx)(o.a,{store:z,children:Object(O.jsx)(J,{})}),document.getElementById("root")),X()}},[[76,1,2]]]);
//# sourceMappingURL=main.cc83d7fd.chunk.js.map