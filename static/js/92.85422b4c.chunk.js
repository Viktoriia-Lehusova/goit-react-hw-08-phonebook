(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[92],{1092:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return B}});var r=t(9434),o="NOT_FOUND";var i=function(n,e){return n===e};function u(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,u=void 0===r?i:r,a=t.maxSize,c=void 0===a?1:a,s=t.resultEqualityCheck,l=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(u),f=1===c?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:o},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var i=t[r];return r>0&&(t.splice(r,1),t.unshift(i)),i.value}return o}return{get:r,put:function(e,i){r(e)===o&&(t.unshift({key:e,value:i}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(c,l);function p(){var e=f.get(arguments);if(e===o){if(e=n.apply(null,arguments),s){var t=f.getEntries(),r=t.find((function(n){return s(n.value,e)}));r&&(e=r.value)}f.put(arguments,e)}return e}return p.clearCache=function(){return f.clear()},p}function a(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function c(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i,u=0,c={memoizeOptions:void 0},s=r.pop();if("object"===typeof s&&(c=s,s=r.pop()),"function"!==typeof s)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof s+"]");var l=c,f=l.memoizeOptions,p=void 0===f?t:f,d=Array.isArray(p)?p:[p],h=a(r),x=n.apply(void 0,[function(){return u++,s.apply(null,arguments)}].concat(d)),v=n((function(){for(var n=[],e=h.length,t=0;t<e;t++)n.push(h[t].apply(null,arguments));return i=x.apply(null,n)}));return Object.assign(v,{resultFunc:s,memoizedResultFunc:x,dependencies:h,lastResult:function(){return i},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),v};return o}var s,l,f,p,d,h,x,v,g,m=c(u),b=function(n){return n.contacts.items},w=function(n){return n.contacts.isLoading},y=function(n){return n.contacts.error},j=function(n){return n.filter},k=(m([b,j],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),t(9439)),C=t(2791),Z=t(6429),z=t.n(Z),A=t(168),E=t(225),q=E.Z.form(s||(s=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  padding: 15px;\n\n  width: 400px;\n\n  border: 2px solid black;\n"]))),L=E.Z.label(l||(l=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  width: 50px;\n\n  margin-bottom: 10px;\n\n  font-weight: 600;\n  font-size: 18px;\n"]))),M=E.Z.input(f||(f=(0,A.Z)(["\n  margin-top: 5px;\n\n  width: 200px;\n  height: 20px;\n"]))),R=E.Z.button(p||(p=(0,A.Z)(["\n  margin-top: 5px;\n\n  width: 150px;\n  height: 30px;\n\n  border: 1px solid violet;\n\n  font-weight: 600;\n  font-size: 14px;\n\n  color: white;\n\n  cursor: pointer;\n  background-color: blueviolet;\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    border: 1px solid black;\n    background-color: blue;\n    color: yellow;\n  }\n"]))),S=t(3634),F=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",t=crypto.getRandomValues(new Uint8Array(n));n--;){var r=63&t[n];e+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return e},N=t(184),V=function(){var n=(0,r.I0)(),e=(0,r.v9)(b),t=(0,C.useState)(""),o=(0,k.Z)(t,2),i=o[0],u=o[1],a=(0,C.useState)(""),c=(0,k.Z)(a,2),s=c[0],l=c[1],f=z().generate(),p=z().generate(),d=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":u(r);break;case"number":l(r);break;default:return}},h=function(){u(""),l("")};return(0,N.jsxs)(q,{onSubmit:function(t){t.preventDefault();var r={id:F(),name:i,number:s};e.filter((function(n){return n.name.toLowerCase()===i.toLowerCase()})).length?alert("".concat(r.name," is already in contacts")):n((0,S.uK)(r)),h()},children:[(0,N.jsxs)(L,{children:["Name",(0,N.jsx)(M,{type:"text",value:i,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:d,id:f})]}),(0,N.jsxs)(L,{children:["Number",(0,N.jsx)(M,{type:"tel",value:s,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:d,id:p})]}),(0,N.jsx)(R,{type:"submit",children:"Add contact"})]})},I=t(4808),O=E.Z.label(d||(d=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  margin-bottom: 10px;\n\n  font-weight: 600;\n  font-size: 18px;\n"]))),_=E.Z.input(h||(h=(0,A.Z)(["\n  margin-top: 5px;\n\n  width: 200px;\n  height: 20px;\n"]))),D=function(){var n=(0,r.v9)(j),e=(0,r.I0)();return(0,N.jsx)("div",{children:(0,N.jsxs)(O,{children:["Find contacts by name",(0,N.jsx)(_,{type:"text",value:n,onChange:function(n){e((0,I.T)(n.target.value))}})]})})},U=E.Z.li(x||(x=(0,A.Z)(["\n  display: flex;\n\n  align-items: center;\n\n  font-size: 18px;\n"]))),T=E.Z.ul(v||(v=(0,A.Z)(["\n  padding-left: 10px;\n"]))),Y=E.Z.button(g||(g=(0,A.Z)(["\n  margin-left: 10px;\n\n  width: 150px;\n  height: 30px;\n\n  border: 1px solid violet;\n\n  font-weight: 600;\n  font-size: 14px;\n\n  color: white;\n\n  cursor: pointer;\n  background-color: blueviolet;\n\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    border: 1px solid black;\n    background-color: blue;\n    color: yellow;\n  }\n"]))),$=function(){var n=(0,r.v9)(j),e=(0,r.v9)(b),t=(0,r.I0)(),o=n?e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase().trim())})):e;return(0,N.jsx)("div",{children:(0,N.jsx)(T,{children:o.map((function(n){return(0,N.jsxs)(U,{children:[(0,N.jsxs)("p",{children:[n.name,": ",n.number]}),(0,N.jsx)(Y,{type:"button",onClick:function(){return e=n.id,void t((0,S.zY)(e));var e},children:"Delete"})]},n.id)}))})})},B=function(){var n=(0,r.I0)(),e=(0,r.v9)(b),t=(0,r.v9)(w),o=(0,r.v9)(y);return(0,C.useEffect)((function(){n((0,S.yF)())}),[n]),(0,N.jsx)("div",{children:(0,N.jsxs)("div",{children:[(0,N.jsx)("p",{children:"Add new contact"}),(0,N.jsx)(V,{}),(0,N.jsx)("p",{children:"Contacts"}),e.length>0?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(D,{}),(0,N.jsx)($,{})]}):(0,N.jsx)("p",{children:"No any contacts in phonebook"}),t&&!o&&(0,N.jsx)("p",{children:"Request in progress..."})]})})}},6429:function(n,e,t){"use strict";n.exports=t(5274)},8857:function(n,e,t){"use strict";var r,o,i,u=t(5408),a="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function c(){i=!1}function s(n){if(n){if(n!==r){if(n.length!==a.length)throw new Error("Custom alphabet for shortid must be "+a.length+" unique characters. You submitted "+n.length+" characters: "+n);var e=n.split("").filter((function(n,e,t){return e!==t.lastIndexOf(n)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+a.length+" unique characters. These characters were not unique: "+e.join(", "));r=n,c()}}else r!==a&&(r=a,c())}function l(){return i||(i=function(){r||s(a);for(var n,e=r.split(""),t=[],o=u.nextValue();e.length>0;)o=u.nextValue(),n=Math.floor(o*e.length),t.push(e.splice(n,1)[0]);return t.join("")}())}n.exports={get:function(){return r||a},characters:function(n){return s(n),r},seed:function(n){u.seed(n),o!==n&&(c(),o=n)},lookup:function(n){return l()[n]},shuffled:l}},7098:function(n,e,t){"use strict";var r,o,i=t(2226);t(8857);n.exports=function(n){var e="",t=Math.floor(.001*(Date.now()-1567752802062));return t===o?r++:(r=0,o=t),e+=i(7),e+=i(n),r>0&&(e+=i(r)),e+=i(t)}},2226:function(n,e,t){"use strict";var r=t(8857),o=t(9139),i=t(2483);n.exports=function(n){for(var e,t=0,u="";!e;)u+=i(o,r.get(),1),e=n<Math.pow(16,t+1),t++;return u}},5274:function(n,e,t){"use strict";var r=t(8857),o=t(7098),i=t(6046),u=t(5347)||0;function a(){return o(u)}n.exports=a,n.exports.generate=a,n.exports.seed=function(e){return r.seed(e),n.exports},n.exports.worker=function(e){return u=e,n.exports},n.exports.characters=function(n){return void 0!==n&&r.characters(n),r.shuffled()},n.exports.isValid=i},6046:function(n,e,t){"use strict";var r=t(8857);n.exports=function(n){return!(!n||"string"!==typeof n||n.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(n)}},9139:function(n){"use strict";var e,t="object"===typeof window&&(window.crypto||window.msCrypto);e=t&&t.getRandomValues?function(n){return t.getRandomValues(new Uint8Array(n))}:function(n){for(var e=[],t=0;t<n;t++)e.push(Math.floor(256*Math.random()));return e},n.exports=e},5408:function(n){"use strict";var e=1;n.exports={nextValue:function(){return(e=(9301*e+49297)%233280)/233280},seed:function(n){e=n}}},5347:function(n){"use strict";n.exports=0},2483:function(n){n.exports=function(n,e,t){for(var r=(2<<Math.log(e.length-1)/Math.LN2)-1,o=-~(1.6*r*t/e.length),i="";;)for(var u=n(o),a=o;a--;)if((i+=e[u[a]&r]||"").length===+t)return i}}}]);
//# sourceMappingURL=92.85422b4c.chunk.js.map