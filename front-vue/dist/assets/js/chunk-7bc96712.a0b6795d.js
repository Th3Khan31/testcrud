(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bc96712"],{1148:function(e,t,a){"use strict";var s=a("a691"),i=a("1d80");e.exports="".repeat||function(e){var t=String(i(this)),a="",r=s(e);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(t+=t))1&r&&(a+=t);return a}},1276:function(e,t,a){"use strict";var s=a("d784"),i=a("44e7"),r=a("825a"),o=a("1d80"),n=a("4840"),l=a("8aa5"),c=a("50c4"),d=a("14c3"),u=a("9263"),v=a("d039"),m=[].push,p=Math.min,f=4294967295,_=!v((function(){return!RegExp(f,"y")}));s("split",2,(function(e,t,a){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,a){var s=String(o(this)),r=void 0===a?f:a>>>0;if(0===r)return[];if(void 0===e)return[s];if(!i(e))return t.call(s,e,r);var n,l,c,d=[],v=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,_=new RegExp(e.source,v+"g");while(n=u.call(_,s)){if(l=_.lastIndex,l>p&&(d.push(s.slice(p,n.index)),n.length>1&&n.index<s.length&&m.apply(d,n.slice(1)),c=n[0].length,p=l,d.length>=r))break;_.lastIndex===n.index&&_.lastIndex++}return p===s.length?!c&&_.test("")||d.push(""):d.push(s.slice(p)),d.length>r?d.slice(0,r):d}:"0".split(void 0,0).length?function(e,a){return void 0===e&&0===a?[]:t.call(this,e,a)}:t,[function(t,a){var i=o(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,i,a):s.call(String(i),t,a)},function(e,i){var o=a(s,e,this,i,s!==t);if(o.done)return o.value;var u=r(e),v=String(this),m=n(u,RegExp),g=u.unicode,h=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(_?"y":"g"),b=new m(_?u:"^(?:"+u.source+")",h),$=void 0===i?f:i>>>0;if(0===$)return[];if(0===v.length)return null===d(b,v)?[v]:[];var C=0,w=0,x=[];while(w<v.length){b.lastIndex=_?w:0;var y,E=d(b,_?v:v.slice(w));if(null===E||(y=p(c(b.lastIndex+(_?0:w)),v.length))===C)w=l(v,w,g);else{if(x.push(v.slice(C,w)),x.length===$)return x;for(var q=1;q<=E.length-1;q++)if(x.push(E[q]),x.length===$)return x;w=C=y}}return x.push(v.slice(C)),x}]}),!_)},"25f0":function(e,t,a){"use strict";var s=a("6eeb"),i=a("825a"),r=a("d039"),o=a("ad6d"),n="toString",l=RegExp.prototype,c=l[n],d=r((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),u=c.name!=n;(d||u)&&s(RegExp.prototype,n,(function(){var e=i(this),t=String(e.source),a=e.flags,s=String(void 0===a&&e instanceof RegExp&&!("flags"in l)?o.call(e):a);return"/"+t+"/"+s}),{unsafe:!0})},"408a":function(e,t,a){var s=a("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=s(e))throw TypeError("Incorrect invocation");return+e}},"44e7":function(e,t,a){var s=a("861d"),i=a("c6b6"),r=a("b622"),o=r("match");e.exports=function(e){var t;return s(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==i(e))}},"99af":function(e,t,a){"use strict";var s=a("23e7"),i=a("d039"),r=a("e8b5"),o=a("861d"),n=a("7b0b"),l=a("50c4"),c=a("8418"),d=a("65f0"),u=a("1dde"),v=a("b622"),m=a("2d00"),p=v("isConcatSpreadable"),f=9007199254740991,_="Maximum allowed index exceeded",g=m>=51||!i((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),h=u("concat"),b=function(e){if(!o(e))return!1;var t=e[p];return void 0!==t?!!t:r(e)},$=!g||!h;s({target:"Array",proto:!0,forced:$},{concat:function(e){var t,a,s,i,r,o=n(this),u=d(o,0),v=0;for(t=-1,s=arguments.length;t<s;t++)if(r=-1===t?o:arguments[t],b(r)){if(i=l(r.length),v+i>f)throw TypeError(_);for(a=0;a<i;a++,v++)a in r&&c(u,v,r[a])}else{if(v>=f)throw TypeError(_);c(u,v++,r)}return u.length=v,u}})},a15b:function(e,t,a){"use strict";var s=a("23e7"),i=a("44ad"),r=a("fc6a"),o=a("a640"),n=[].join,l=i!=Object,c=o("join",",");s({target:"Array",proto:!0,forced:l||!c},{join:function(e){return n.call(r(this),void 0===e?",":e)}})},b680:function(e,t,a){"use strict";var s=a("23e7"),i=a("a691"),r=a("408a"),o=a("1148"),n=a("d039"),l=1..toFixed,c=Math.floor,d=function(e,t,a){return 0===t?a:t%2===1?d(e,t-1,a*e):d(e*e,t/2,a)},u=function(e){var t=0,a=e;while(a>=4096)t+=12,a/=4096;while(a>=2)t+=1,a/=2;return t},v=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!n((function(){l.call({})}));s({target:"Number",proto:!0,forced:v},{toFixed:function(e){var t,a,s,n,l=r(this),v=i(e),m=[0,0,0,0,0,0],p="",f="0",_=function(e,t){var a=-1,s=t;while(++a<6)s+=e*m[a],m[a]=s%1e7,s=c(s/1e7)},g=function(e){var t=6,a=0;while(--t>=0)a+=m[t],m[t]=c(a/e),a=a%e*1e7},h=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==m[e]){var a=String(m[e]);t=""===t?a:t+o.call("0",7-a.length)+a}return t};if(v<0||v>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(p="-",l=-l),l>1e-21)if(t=u(l*d(2,69,1))-69,a=t<0?l*d(2,-t,1):l/d(2,t,1),a*=4503599627370496,t=52-t,t>0){_(0,a),s=v;while(s>=7)_(1e7,0),s-=7;_(d(10,s,1),0),s=t-1;while(s>=23)g(1<<23),s-=23;g(1<<s),_(1,1),g(2),f=h()}else _(0,a),_(1<<-t,0),f=h()+o.call("0",v);return v>0?(n=f.length,f=p+(n<=v?"0."+o.call("0",v-n)+f:f.slice(0,n-v)+"."+f.slice(n-v))):f=p+f,f}})},c975:function(e,t,a){"use strict";var s=a("23e7"),i=a("4d64").indexOf,r=a("a640"),o=a("ae40"),n=[].indexOf,l=!!n&&1/[1].indexOf(1,-0)<0,c=r("indexOf"),d=o("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:l||!c||!d},{indexOf:function(e){return l?n.apply(this,arguments)||0:i(this,e,arguments.length>1?arguments[1]:void 0)}})},d0d8:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a("c975"),a("a15b"),a("d81d"),a("b680"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("1276");var s=a("1157"),i=a.n(s);window.$=window.jQuery=i.a;var r=function(e){for(var t="",a=i.a.map(e,(function(e){var t="";return i.a.map(e,(function(e){t=e})),[t]})),s=0;s<a.length;s++)t+="<b>"+(s+1)+". "+a[s]+"</b><br/>";return t}},d81d:function(e,t,a){"use strict";var s=a("23e7"),i=a("b727").map,r=a("1dde"),o=a("ae40"),n=r("map"),l=o("map");s({target:"Array",proto:!0,forced:!n||!l},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},dc61:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[1==e.is_active?a("span",{staticClass:"badge badge-success badge-pill"},[e._v("ACTIVO")]):a("span",{staticClass:"badge badge-warning badge-pill"},[e._v("INACTIVO")])])},i=[],r={name:"StatusItem",props:["is_active"]},o=r,n=a("2877"),l=Object(n["a"])(o,s,i,!1,null,null,null);t["a"]=l.exports},fe1c:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("section",{staticClass:"content-header"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row mb-2"},[e._m(0),e._v(" "),a("div",{staticClass:"col-sm-6"},[a("ol",{staticClass:"breadcrumb float-sm-right"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:{name:"dashboard"}}},[e._v("Dashboard")])],1),e._v(" "),a("li",{staticClass:"breadcrumb-item active"},[e._v("Listado de Clientes")])])])])])]),e._v(" "),a("loading",{attrs:{active:e.processing,"can-cancel":!1,color:"#007bff"},on:{"update:active":function(t){e.processing=t}}}),e._v(" "),a("section",{staticClass:"content"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h3",{staticClass:"card-title"},[e._v("Listados de Clientes")]),e._v(" "),a("div",{staticClass:"card-tools"},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-form-client",modifiers:{"modal-form-client":!0}}],ref:"botton-new",staticClass:"btn btn-primary mr-1 mb-1",attrs:{variant:"primary",size:"sm"},on:{click:function(t){return e.addNew()}}},[a("i",{staticClass:"fa fa-plus-square"}),e._v(" Agregar")])],1)]),e._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row mb-3"},[a("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"}),e._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-9"},[e._m(1),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.filter,expression:"filter"}],staticClass:"form-control",attrs:{type:"text",name:"filter",placeholder:"Escriba para filtrar los resultados"},domProps:{value:e.filter},on:{input:function(t){t.target.composing||(e.filter=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"col-12 col-md-3"},[e._m(2),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.pagination.per_page,expression:"pagination.per_page"}],staticClass:"form-control",on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.pagination,"per_page",t.target.multiple?a:a[0])},function(t){e.pagination.current_page=1,e.loadItems()}]}},[a("option",{attrs:{value:"10"}},[e._v("10")]),e._v(" "),a("option",{attrs:{value:"15"}},[e._v("15")]),e._v(" "),a("option",{attrs:{value:"20"}},[e._v("20")]),e._v(" "),a("option",{attrs:{value:"50"}},[e._v("50")]),e._v(" "),a("option",{attrs:{value:"75"}},[e._v("75")]),e._v(" "),a("option",{attrs:{value:"100"}},[e._v("100")]),e._v(" "),a("option",{attrs:{value:"150"}},[e._v("150")]),e._v(" "),a("option",{attrs:{value:"300"}},[e._v("300")]),e._v(" "),a("option",{attrs:{value:"500"}},[e._v("500")]),e._v(" "),a("option",{attrs:{value:"1000"}},[e._v("1000")]),e._v(" "),a("option",{domProps:{value:e.pagination.total+1}},[e._v("Todo")])])])])])]),e._v(" "),a("div",{staticClass:"row mt-1"},[a("div",{staticClass:"table-responsive col-12 col-sm-12 col-md-12 col-lg-12"},[a("datatable",{staticClass:"table table-hover table-hover-animation mb-0",attrs:{columns:e.columns,data:e.clients,filter:e.filter},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("tr",[a("td",{staticClass:"text-center"},[a("img",{attrs:{src:s.image,width:"100"}})]),e._v(" "),a("td",{staticClass:"text-center"},[e._v(e._s(s.name)+" "+e._s(s.last_name))]),e._v(" "),a("td",{staticClass:"text-center"},[e._v(e._s(s.email))]),e._v(" "),a("td",{staticClass:"text-center"},[e._v(e._s(s.phone))]),e._v(" "),a("td",{staticClass:"text-center"},[e._v(e._s(s.whatsapp))]),e._v(" "),a("td",{staticClass:"text-center"},[e._v("\n\t\t\t\t\t\t\t\t\t\t"+e._s(s.country.name)),a("br"),e._v("\n\t\t\t\t\t\t\t\t\t\t"+e._s(s.city.name)),a("br"),e._v("\n\t\t\t\t\t\t\t\t\t\t"+e._s(s.address)+"\n\t\t\t\t\t\t\t\t\t")]),e._v(" "),a("td",{staticClass:"text-center"},[a("is-active",{attrs:{is_active:s.is_active}})],1),e._v(" "),a("td",{staticClass:"text-right",staticStyle:{width:"10%","white-space":"nowrap"}},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-form-client",modifiers:{"modal-form-client":!0}}],ref:"botton-edit",staticClass:"mr-1 mb-1",attrs:{variant:"outline-warning",size:"sm"},on:{click:function(t){return e.viewItem(s)}}},[a("i",{staticClass:"fa fa-edit"})]),e._v(" "),a("b-button",{ref:"botton-delete",staticClass:"mr-1 mb-1",attrs:{variant:"outline-danger",size:"sm"},on:{click:function(t){return e.deleteItem(s)}}},[a("i",{staticClass:"fa fa-trash"})])],1)])]}}])})],1)])]),e._v(" "),a("div",{staticClass:"card-footer"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[a("span",{staticClass:"text-muted text-small mr-1 mb-2"},[e._v("Mostrando "+e._s(e.pagination.from)+" a "+e._s(e.pagination.to)+" de "+e._s(e.pagination.total)+" registros")])]),e._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[a("b-pagination",{attrs:{"total-rows":e.pagination.total,"per-page":e.pagination.per_page,size:"sm",align:"right"},on:{input:function(t){return e.loadItems()}},model:{value:e.pagination.current_page,callback:function(t){e.$set(e.pagination,"current_page",t)},expression:"pagination.current_page"}},[a("template",{slot:"page"})],2)],1)])])]),e._v(" "),a("modal-form-client",{attrs:{user:e.client,countries:e.countries},on:{"save-success":function(t){return e.loadItems()}}})],1)],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-sm-6"},[a("h1",[e._v("Listado de Clientes")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-12 col-md-12"},[e._v("\n\t\t\t\t\t\t\t\t\t\tFiltrar: \n\t\t\t\t\t\t\t\t\t")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-12 col-md-12"},[e._v("\n\t\t\t\t\t\t\t\t\t\tMostrar: \n\t\t\t\t\t\t\t\t\t")])])}],r=(a("99af"),a("b0c0"),a("5530")),o=a("2f62"),n=a("dc61"),l=a("9062"),c=a.n(l),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-modal",{ref:"modal-form-client",attrs:{id:"modal-form-client",title:"Nuevo/Editar Cliente","modal-class":"modal",size:"lg"}},[a("form",{staticClass:"form form-vertical",on:{submit:function(t){return t.preventDefault(),e.saveItem(t)}}},[a("div",{staticClass:"form-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Imagén de perfil (*)")]),e._v(" "),a("div",{staticClass:"input-group mb-3"},[a("vue-dropzone",{ref:"main_image",class:[e.$v.user.main_image.$anyError?"is-invalid":"",e.$v.user.main_image.$anyError&&""!=e.$v.user.main_image.$model?"is-valid":""],staticStyle:{width:"100%",margin:"0 auto","text-align":"center",height:"214px"},attrs:{id:"main_image",name:"main_image",options:e.dropzoneOptions},on:{"vdropzone-error":e.mainImageError,"vdropzone-success":e.mainImageAddSuccess,"vdropzone-removed-file":e.removeMainImage}}),e._v(" "),e.$v.user.main_image.required?e._e():a("b-form-invalid-feedback",[e._v("Debe completar la imagén principal del producto")])],1)])]),e._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Nombre (*)")]),e._v(" "),a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.user.name.$model,expression:"$v.user.name.$model"}],staticClass:"form-control",class:[e.$v.user.name.$anyError?"is-invalid":"",e.$v.user.name.$anyError&&""!=e.$v.user.name.$model?"is-valid":""],attrs:{type:"text",name:"name",placeholder:"Ingrese su nombre",state:!e.$v.user.name.$error},domProps:{value:e.$v.user.name.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.user.name,"$model",t.target.value)}}}),e._v(" "),a("div",{staticClass:"input-group-append"},[a("div",{staticClass:"input-group-text"},[a("span",{staticClass:"fas fa-font"})])]),e._v(" "),e.$v.user.name.required?e._e():a("b-form-invalid-feedback",[e._v("El campo debe ser completado")]),e._v(" "),e.$v.user.name.maxLength?e._e():a("b-form-invalid-feedback",[e._v("El campo debe ser menor a 50 carácteres")])],1)]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",[e._v("Apellido (*)")]),e._v(" "),a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.user.last_name.$model,expression:"$v.user.last_name.$model"}],staticClass:"form-control",class:[e.$v.user.last_name.$anyError?"is-invalid":"",e.$v.user.last_name.$anyError&&""!=e.$v.user.last_name.$model?"is-valid":""],attrs:{type:"text",name:"last_name",placeholder:"Ingrese su apellido",state:!e.$v.user.last_name.$error},domProps:{value:e.$v.user.last_name.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.user.last_name,"$model",t.target.value)}}}),e._v(" "),a("div",{staticClass:"input-group-append"},[a("div",{staticClass:"input-group-text"},[a("span",{staticClass:"fas fa-font"})])]),e._v(" "),e.$v.user.last_name.required?e._e():a("b-form-invalid-feedback",[e._v("El campo debe ser completado")]),e._v(" "),e.$v.user.last_name.maxLength?e._e():a("b-form-invalid-feedback",[e._v("El campo debe ser menor a 50 carácteres")])],1)]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",[e._v("Email (*)")]),e._v(" "),a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.user.email.$model,expression:"$v.user.email.$model"}],staticClass:"form-control",class:[e.$v.user.email.$anyError?"is-invalid":"",e.$v.user.email.$anyError&&""!=e.$v.user.email.$model?"is-valid":""],attrs:{type:"email",name:"email",placeholder:"Ingrese su email",state:!e.$v.user.email.$error},domProps:{value:e.$v.user.email.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.user.email,"$model",t.target.value)}}}),e._v(" "),a("div",{staticClass:"input-group-append"},[a("div",{staticClass:"input-group-text"},[a("span",{staticClass:"fas fa-envelope-open-text"})])]),e._v(" "),e.$v.user.email.required?e._e():a("b-form-invalid-feedback",[e._v("El campo debe ser completado")]),e._v(" "),e.$v.user.email.email?e._e():a("b-form-invalid-feedback",[e._v("El correo electrónico es válido")])],1)])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Teléfono (*)")]),e._v(" "),a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.user.phone.$model,expression:"$v.user.phone.$model"}],staticClass:"form-control",class:[e.$v.user.phone.$anyError?"is-invalid":"",e.$v.user.phone.$anyError&&""!=e.$v.user.phone.$model?"is-valid":""],attrs:{type:"text",name:"phone",placeholder:"Ingrese su Número de teléfono",state:!e.$v.user.phone.$error},domProps:{value:e.$v.user.phone.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.user.phone,"$model",t.target.value)}}}),e._v(" "),a("div",{staticClass:"input-group-append"},[a("div",{staticClass:"input-group-text"},[a("span",{staticClass:"fas fa-phone"})])]),e._v(" "),e.$v.user.phone.required?e._e():a("b-form-invalid-feedback",[e._v("El campo debe ser completado")])],1)])]),e._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Whatsapp (*)")]),e._v(" "),a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.user.whatsapp.$model,expression:"$v.user.whatsapp.$model"}],staticClass:"form-control",class:[e.$v.user.whatsapp.$anyError?"is-invalid":"",e.$v.user.whatsapp.$anyError&&""!=e.$v.user.whatsapp.$model?"is-valid":""],attrs:{type:"text",name:"whatsapp",placeholder:"Ingrese su Número de Whatsapp",state:!e.$v.user.whatsapp.$error},domProps:{value:e.$v.user.whatsapp.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.user.whatsapp,"$model",t.target.value)}}}),e._v(" "),a("div",{staticClass:"input-group-append"},[a("div",{staticClass:"input-group-text"},[a("span",{staticClass:"fas fa-phone"})])]),e._v(" "),e.$v.user.whatsapp.required?e._e():a("b-form-invalid-feedback",[e._v("El campo debe ser completado")])],1)])]),e._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Pais (*)")]),e._v(" "),a("div",{staticClass:"input-group mb-3"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.$v.user.countries_id.$model,expression:"$v.user.countries_id.$model"}],staticClass:"form-control",class:[e.$v.user.countries_id.$anyError?"is-invalid":"",e.$v.user.countries_id.$anyError&&""!=e.$v.user.countries_id.$model?"is-valid":""],attrs:{type:"text",name:"countries_id",placeholder:"Seleccione el pais de residencia",state:!e.$v.user.countries_id.$error},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.$v.user.countries_id,"$model",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("-- Seleccionar --")]),e._v(" "),e._l(e.countries,(function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])}))],2),e._v(" "),a("div",{staticClass:"input-group-append"},[a("div",{staticClass:"input-group-text"},[a("span",{staticClass:"fas fa-map-marker-alt"})])]),e._v(" "),e.$v.user.countries_id.required?e._e():a("b-form-invalid-feedback",[e._v("El campo debe ser completado")])],1)])]),e._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Departamento (*)")]),e._v(" "),a("div",{staticClass:"input-group mb-3"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.$v.user.cities_id.$model,expression:"$v.user.cities_id.$model"}],staticClass:"form-control",class:[e.$v.user.cities_id.$anyError?"is-invalid":"",e.$v.user.cities_id.$anyError&&""!=e.$v.user.cities_id.$model?"is-valid":""],attrs:{type:"text",name:"cities_id",placeholder:"Seleccione su departamento de residencia",state:!e.$v.user.cities_id.$error},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.$v.user.cities_id,"$model",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("-- Seleccionar --")]),e._v(" "),e._l(e.cities,(function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])}))],2),e._v(" "),a("div",{staticClass:"input-group-append"},[a("div",{staticClass:"input-group-text"},[a("span",{staticClass:"fas fa-map-pin"})])]),e._v(" "),e.$v.user.cities_id.required?e._e():a("b-form-invalid-feedback",[e._v("El campo debe ser completado")])],1)])]),e._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Dirección (*) ")]),e._v(" "),a("div",{staticClass:"input-group mb-3"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.$v.user.address.$model,expression:"$v.user.address.$model"}],staticClass:"form-control",class:[e.$v.user.address.$anyError?"is-invalid":"",e.$v.user.address.$anyError&&""!=e.$v.user.address.$model?"is-valid":""],attrs:{name:"description",rows:"3",placeholder:"Describa de forma detallada su dirección",state:!e.$v.user.address.$error},domProps:{value:e.$v.user.address.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.user.address,"$model",t.target.value)}}}),e._v(" "),e.$v.user.address.required?e._e():a("b-form-invalid-feedback",[e._v("El campo debe ser completado")])],1)])]),e._v(" "),a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"icheck-primary"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.change_password,expression:"change_password"}],attrs:{type:"checkbox",id:"change_password",name:"change_password",disabled:"save"==e.user.actionForm},domProps:{checked:Array.isArray(e.change_password)?e._i(e.change_password,null)>-1:e.change_password},on:{change:function(t){var a=e.change_password,s=t.target,i=!!s.checked;if(Array.isArray(a)){var r=null,o=e._i(a,r);s.checked?o<0&&(e.change_password=a.concat([r])):o>-1&&(e.change_password=a.slice(0,o).concat(a.slice(o+1)))}else e.change_password=i}}}),e._v(" "),"save"==e.user.actionForm?[a("label",{attrs:{for:"change_password"}},[e._v("\n\t\t\t\t\t\t\t\tEstablecer Contraseña\n\t\t\t\t\t\t\t")])]:e._e(),e._v(" "),"update"==e.user.actionForm?[a("label",{attrs:{for:"change_password"}},[e._v("\n\t\t\t\t\t\t\t\tCambiar Contraseña\n\t\t\t\t\t\t\t")])]:e._e()],2)]),e._v(" "),e.change_password?[a("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Nueva contraseña (*)")]),e._v(" "),a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.user.password.$model,expression:"$v.user.password.$model"}],staticClass:"form-control",class:[e.$v.user.password.$anyError?"is-invalid":"",e.$v.user.password.$anyError&&""!=e.$v.user.password.$model?"is-valid":""],attrs:{type:"password",name:"password",placeholder:"Ingrese su nueva contraseña",state:!e.$v.user.password.$error},domProps:{value:e.$v.user.password.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.user.password,"$model",t.target.value)}}}),e._v(" "),a("div",{staticClass:"input-group-append"},[a("div",{staticClass:"input-group-text"},[a("span",{staticClass:"fas fa-lock"})])]),e._v(" "),e.$v.user.password.required?e._e():a("b-form-invalid-feedback",[e._v("El campo debe ser completado")]),e._v(" "),e.$v.user.password.minLength?e._e():a("b-form-invalid-feedback",[e._v("La contraseña debe tener un mínimo de 6 carácteres")]),e._v(" "),e.$v.user.password.maxLength?e._e():a("b-form-invalid-feedback",[e._v("La contraseña debe tener un máximo de 10 carácteres")])],1)])]),e._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Confirmar contraseña (*)")]),e._v(" "),a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.user.password2.$model,expression:"$v.user.password2.$model"}],staticClass:"form-control",class:[e.$v.user.password2.$anyError?"is-invalid":"",e.$v.user.password2.$anyError&&""!=e.$v.user.password2.$model?"is-valid":""],attrs:{type:"password",name:"whatsapp",placeholder:"Confirme su nueva contraseña",state:!e.$v.user.password2.$error},domProps:{value:e.$v.user.password2.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.user.password2,"$model",t.target.value)}}}),e._v(" "),a("div",{staticClass:"input-group-append"},[a("div",{staticClass:"input-group-text"},[a("span",{staticClass:"fas fa-lock"})])]),e._v(" "),e.$v.user.password2.required?e._e():a("b-form-invalid-feedback",[e._v("El campo debe ser completado")]),e._v(" "),e.$v.user.password2.sameAsPassword?e._e():a("b-form-invalid-feedback",[e._v("La contraseña no coinciden")])],1)])])]:e._e(),e._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Status (*)")]),e._v(" "),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.is_active,expression:"user.is_active"}],staticClass:"form-check-input",attrs:{id:"is_active_1",type:"radio",name:"is_active"},domProps:{value:1,checked:e._q(e.user.is_active,1)},on:{change:function(t){return e.$set(e.user,"is_active",1)}}}),e._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_active_1"}},[e._v("Activo")])]),e._v(" "),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.is_active,expression:"user.is_active"}],staticClass:"form-check-input",attrs:{id:"is_active_2",type:"radio",name:"is_active"},domProps:{value:0,checked:e._q(e.user.is_active,0)},on:{change:function(t){return e.$set(e.user,"is_active",0)}}}),e._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_active_2"}},[e._v("Inactivo")])])])]),e._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[a("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[a("h4",{staticClass:"alert-heading"},[e._v("IMPORTANTE: ")]),e._v(" "),a("p",{staticClass:"mb-0"},[e._v("\n\t\t\t\t\t\t\tTodos los campos con (*) deben ser completados\n\t\t\t\t\t\t")])])])],2)]),e._v(" "),a("b-button",{staticStyle:{display:"none"},attrs:{type:"submit"}})],1),e._v(" "),a("template",{slot:"modal-footer"},[a("b-button",{attrs:{variant:"outline-secondary"},on:{click:function(t){return e.hideModal("modal-form-client")}}},[e._v("Cancelar")]),e._v(" "),a("b-button",{attrs:{type:"submit",variant:"outline-primary",disabled:1==e.processing},on:{click:function(t){return e.saveItem()}}},[e.processing?e._e():[e._v("\n\t\t\t\tGuardar\n\t\t\t")],e._v(" "),e.processing?[a("i",{staticClass:"fa fa-spinner fa-spin"})]:e._e()],2)],1)],2)},u=[],v=a("1157"),m=a.n(v),p=a("1dce"),f=a("b5ae"),_=a("92c3"),g=a.n(_),h=(a("1e3f"),a("5c25")),b=a("d0d8"),$={name:"ModalFormClient",props:["user","countries"],data:function(){return{change_password:0,dropzoneOptions:{url:h["b"]+"/upload-image",thumbnailWidth:200,maxFilesize:2,acceptedFiles:"image/png, image/jpg, image/jpeg, image/svg, image/webp",dictDefaultMessage:"<i class='fas fa-upload'></i> Seleccionar Imagén principal",addRemoveLinks:!0,maxFiles:1,paramName:"main_image",dictFileTooBig:"La imagén seleccionada pesa ({{filesize}}MiB). el max. permitido es de: {{maxFilesize}}MiB.",dictInvalidFileType:"Solo se acepta imagenes PNG, JPEG, JPG, SVG",dictRemoveFile:"Eliminar Imagén"}}},mixins:[p["validationMixin"]],validations:function(){return this.change_password?{user:{name:{required:f["required"],maxLength:Object(f["maxLength"])(50)},last_name:{required:f["required"],maxLength:Object(f["maxLength"])(50)},email:{required:f["required"],email:f["email"]},phone:{required:f["required"],numeric:f["numeric"]},whatsapp:{required:f["required"],numeric:f["numeric"]},address:{required:f["required"]},main_image:{required:f["required"]},countries_id:{required:f["required"]},cities_id:{required:f["required"]},password:{required:f["required"],minLength:Object(f["minLength"])(6),maxLength:Object(f["maxLength"])(10)},password2:{required:f["required"],sameAsPassword:Object(f["sameAs"])("password")}}}:{user:{name:{required:f["required"],maxLength:Object(f["maxLength"])(50)},last_name:{required:f["required"],maxLength:Object(f["maxLength"])(50)},email:{required:f["required"],email:f["email"]},phone:{required:f["required"],numeric:f["numeric"]},whatsapp:{required:f["required"],numeric:f["numeric"]},address:{required:f["required"]},main_image:{required:f["required"]},countries_id:{required:f["required"]},cities_id:{required:f["required"]}}}},components:{vueDropzone:g.a},created:function(){},methods:Object(r["a"])(Object(r["a"])({},Object(o["b"])(["saveData","updateData"])),{},{hideModal:function(e){this.$refs[e].hide()},mainImageError:function(){return this.$Toast.fire({icon:"error",html:"Error al subir imagén del producto."})},mainImageAddSuccess:function(e){this.$v.user.main_image.$model=e,this.$v.user.main_image.$model.type_image=e.type,this.$v.user.main_image.$model.size_image=e.size,m()("div.dz-default.dz-message").attr("style","display:none;")},removeMainImage:function(){this.user.main_image=null,m()("div.dz-default.dz-message").removeAttr("style")},saveItem:function(){var e=this;if(this.$v.$touch(),this.$v.$anyError)return this.formError=!0,this.$Toast.fire({icon:"error",title:"Todos los campo (*) deben ser completados para continuar."});"update"==this.user.actionForm?(this.user.change_password=this.change_password,this.updateData({url:"/users/update-profile/"+this.user.id,formData:this.user}).then((function(t){console.log(t.data),e.hideModal("modal-form-client"),e.$Toast.fire({icon:"success",title:"¡Actualizado con éxito!"}),e.$emit("save-success",t.data.item)}))):this.saveData({url:"/users/save",formData:this.user}).then((function(t){e.hideModal("modal-form-client"),e.$Toast.fire({icon:"success",title:"¡Guardado con éxito!"}),e.$emit("save-success",t.data.item)})).catch((function(t){if(console.log(t),"undefined"!=typeof t.response){var a=Object(b["a"])(t.response.data.errors);e.$Toast.fire({icon:"error",html:a})}else e.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}))},showImage:function(){var e=this.user.image,t={size:this.user.size_image,name:this.user.name,type:this.user.type_image,id:this.user.id},a=e;this.$refs.main_image.manuallyAddFile(t,a),this.$v.user.main_image.$model=e}}),computed:Object(r["a"])(Object(r["a"])({},Object(o["c"])({processing:"processingData"})),{},{cities:function(){for(var e=0;e<this.countries.length;e++)if(this.countries[e].id==this.user.countries_id)return this.countries[e].cities;return[]}}),watch:{user:function(){var e=this;null==this.user.main_image&&"update"==this.user.actionForm?setTimeout((function(){e.change_password=0,e.showImage()}),500):this.change_password=1}}},C=$,w=a("2877"),x=Object(w["a"])(C,d,u,!1,null,null,null),y=x.exports,E={name:"ListClients",components:{"is-active":n["a"],"modal-form-client":y,Loading:c.a},data:function(){return{loginError:!1,clients:[],client:{},columns:[{label:"Imagén",field:""},{label:"Nombres y Apellidos",field:"name"},{label:"Correo",field:"email"},{label:"Teléfono",field:"phone"},{label:"Whatsapp",field:"whatsapp"},{label:"Dirección",representedAs:function(e){var t=e.address,a=e.city,s=e.country;return"".concat(s.name," <br/>").concat(a.name," <br />").concat(t)},interpolate:!0},{label:"Status",field:"is_active"},{label:"",field:""}],offset:3,filter:"",current_page:1,countries:[]}},created:function(){this.getAllCountriesActivated()},methods:Object(r["a"])(Object(r["a"])({},Object(o["b"])(["getAllWithPagination","deleteData","getData"])),{},{loadItems:function(){var e=this,t="/users/get-all-clients-with-pagination";t+="?page=".concat(this.pagination.current_page,"&per_page=").concat(this.pagination.per_page);var a={url:t};this.getAllWithPagination(a).then((function(t){console.log(t.data.data),e.clients=[];for(var a=0;a<t.data.data.length;a++){var s=t.data.data[a];s["password"]="",s["password2"]="",e.clients.push(s)}})).catch((function(e){console.log(e)}))},addNew:function(){this.client={id:"",name:"",last_name:"",email:"",phone:"",whatsapp:"",address:"",main_image:"",countries_id:"",cities_id:"",password:"",password2:"",is_active:1,actionForm:"save"}},viewItem:function(e){this.client=e,this.client.actionForm="update"},deleteItem:function(e){var t=this,a=this;this.$swal.fire({title:"¿Está seguro de eliminar el cliente?",text:"Se eliminará el cliente seleccionado de forma permanente.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, eliminar!"}).then((function(s){s.value&&t.deleteData({url:"/users/delete/"+e.id}).then((function(){a.$Toast.fire({icon:"success",title:"¡Eliminado con éxito!"}),a.loadItems()})).catch((function(e){a.processing=!1,console.log(e)}))}))},getAllCountriesActivated:function(){var e=this,t="/generals/countries/getAllActivated";this.getData({url:t}).then((function(t){e.countries=t.data}))}}),mounted:function(){this.loadItems()},computed:Object(r["a"])({},Object(o["c"])({processing:"processingData",pagination:"pagination"}))},q=E,k=Object(w["a"])(q,s,i,!1,null,null,null);t["default"]=k.exports}}]);