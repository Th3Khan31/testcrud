(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21af0a"],{be3d:function(e,a,s){"use strict";s.r(a);var t=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",[s("section",{staticClass:"content-header"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row mb-2"},[e._m(0),e._v(" "),s("div",{staticClass:"col-sm-6"},[s("ol",{staticClass:"breadcrumb float-sm-right"},[s("li",{staticClass:"breadcrumb-item"},[s("router-link",{attrs:{to:{name:"dashboard"}}},[e._v("Dashboard")])],1),e._v(" "),s("li",{staticClass:"breadcrumb-item active"},[e._v("Editar Perfil")])])])])])]),e._v(" "),s("loading",{attrs:{active:e.processing,"can-cancel":!1,color:"#007bff"},on:{"update:active":function(a){e.processing=a}}}),e._v(" "),s("section",{staticClass:"content"},[s("form",{staticClass:"form form-vertical",attrs:{id:"form-create-article"},on:{submit:function(a){return a.preventDefault(),e.saveItem(a)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"mb-3"},[s("div",{staticClass:"form-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[s("div",{staticClass:"form-group"},[s("label",[e._v("Imagén de perfil (*)")]),e._v(" "),s("div",{staticClass:"input-group mb-3"},[s("vue-dropzone",{ref:"main_image",class:[e.$v.user.main_image.$anyError?"is-invalid":"",e.$v.user.main_image.$anyError&&""!=e.$v.user.main_image.$model?"is-valid":""],staticStyle:{width:"100%",margin:"0 auto","text-align":"center",height:"214px"},attrs:{id:"main_image",name:"main_image",options:e.dropzoneOptions},on:{"vdropzone-error":e.mainImageError,"vdropzone-success":e.mainImageAddSuccess,"vdropzone-removed-file":e.removeMainImage}}),e._v(" "),e.$v.user.main_image.required?e._e():s("b-form-invalid-feedback",[e._v("Debe completar la imagén principal del producto")])],1)])]),e._v(" "),s("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[s("div",{staticClass:"form-group"},[s("label",[e._v("Nombre (*)")]),e._v(" "),s("div",{staticClass:"input-group mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.user.name.$model,expression:"$v.user.name.$model"}],staticClass:"form-control",class:[e.$v.user.name.$anyError?"is-invalid":"",e.$v.user.name.$anyError&&""!=e.$v.user.name.$model?"is-valid":""],attrs:{type:"text",name:"name",placeholder:"Ingrese su nombre",state:!e.$v.user.name.$error},domProps:{value:e.$v.user.name.$model},on:{input:function(a){a.target.composing||e.$set(e.$v.user.name,"$model",a.target.value)}}}),e._v(" "),e._m(1),e._v(" "),e.$v.user.name.required?e._e():s("b-form-invalid-feedback",[e._v("El campo debe ser completado")]),e._v(" "),e.$v.user.name.maxLength?e._e():s("b-form-invalid-feedback",[e._v("El campo debe ser menor a 50 carácteres")])],1)]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",[e._v("Apellido (*)")]),e._v(" "),s("div",{staticClass:"input-group mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.user.last_name.$model,expression:"$v.user.last_name.$model"}],staticClass:"form-control",class:[e.$v.user.last_name.$anyError?"is-invalid":"",e.$v.user.last_name.$anyError&&""!=e.$v.user.last_name.$model?"is-valid":""],attrs:{type:"text",name:"last_name",placeholder:"Ingrese su apellido",state:!e.$v.user.last_name.$error},domProps:{value:e.$v.user.last_name.$model},on:{input:function(a){a.target.composing||e.$set(e.$v.user.last_name,"$model",a.target.value)}}}),e._v(" "),e._m(2),e._v(" "),e.$v.user.last_name.required?e._e():s("b-form-invalid-feedback",[e._v("El campo debe ser completado")]),e._v(" "),e.$v.user.last_name.maxLength?e._e():s("b-form-invalid-feedback",[e._v("El campo debe ser menor a 50 carácteres")])],1)]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",[e._v("Email (*)")]),e._v(" "),s("div",{staticClass:"input-group mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.user.email.$model,expression:"$v.user.email.$model"}],staticClass:"form-control",class:[e.$v.user.email.$anyError?"is-invalid":"",e.$v.user.email.$anyError&&""!=e.$v.user.email.$model?"is-valid":""],attrs:{type:"email",name:"email",placeholder:"Ingrese su email",state:!e.$v.user.email.$error},domProps:{value:e.$v.user.email.$model},on:{input:function(a){a.target.composing||e.$set(e.$v.user.email,"$model",a.target.value)}}}),e._v(" "),e._m(3),e._v(" "),e.$v.user.email.required?e._e():s("b-form-invalid-feedback",[e._v("El campo debe ser completado")]),e._v(" "),e.$v.user.email.email?e._e():s("b-form-invalid-feedback",[e._v("El correo electrónico es válido")])],1)])])]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[s("div",{staticClass:"form-group"},[s("label",[e._v("Teléfono (*)")]),e._v(" "),s("div",{staticClass:"input-group mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.user.phone.$model,expression:"$v.user.phone.$model"}],staticClass:"form-control",class:[e.$v.user.phone.$anyError?"is-invalid":"",e.$v.user.phone.$anyError&&""!=e.$v.user.phone.$model?"is-valid":""],attrs:{type:"text",name:"phone",placeholder:"Ingrese su Número de teléfono",state:!e.$v.user.phone.$error},domProps:{value:e.$v.user.phone.$model},on:{input:function(a){a.target.composing||e.$set(e.$v.user.phone,"$model",a.target.value)}}}),e._v(" "),e._m(4),e._v(" "),e.$v.user.phone.required?e._e():s("b-form-invalid-feedback",[e._v("El campo debe ser completado")])],1)])]),e._v(" "),s("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[s("div",{staticClass:"form-group"},[s("label",[e._v("Whatsapp (*)")]),e._v(" "),s("div",{staticClass:"input-group mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.user.whatsapp.$model,expression:"$v.user.whatsapp.$model"}],staticClass:"form-control",class:[e.$v.user.whatsapp.$anyError?"is-invalid":"",e.$v.user.whatsapp.$anyError&&""!=e.$v.user.whatsapp.$model?"is-valid":""],attrs:{type:"text",name:"whatsapp",placeholder:"Ingrese su Número de Whatsapp",state:!e.$v.user.whatsapp.$error},domProps:{value:e.$v.user.whatsapp.$model},on:{input:function(a){a.target.composing||e.$set(e.$v.user.whatsapp,"$model",a.target.value)}}}),e._v(" "),e._m(5),e._v(" "),e.$v.user.whatsapp.required?e._e():s("b-form-invalid-feedback",[e._v("El campo debe ser completado")])],1)])]),e._v(" "),s("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[s("div",{staticClass:"form-group"},[s("label",[e._v("Pais (*)")]),e._v(" "),s("div",{staticClass:"input-group mb-3"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.$v.user.countries_id.$model,expression:"$v.user.countries_id.$model"}],staticClass:"form-control",class:[e.$v.user.countries_id.$anyError?"is-invalid":"",e.$v.user.countries_id.$anyError&&""!=e.$v.user.countries_id.$model?"is-valid":""],attrs:{type:"text",name:"countries_id",placeholder:"Seleccione el pais de residencia",state:!e.$v.user.countries_id.$error},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.$set(e.$v.user.countries_id,"$model",a.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[e._v("-- Seleccionar --")]),e._v(" "),e._l(e.countries,(function(a){return s("option",{key:a.id,domProps:{value:a.id}},[e._v(e._s(a.name))])}))],2),e._v(" "),e._m(6),e._v(" "),e.$v.user.countries_id.required?e._e():s("b-form-invalid-feedback",[e._v("El campo debe ser completado")])],1)])]),e._v(" "),s("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[s("div",{staticClass:"form-group"},[s("label",[e._v("Departamento (*)")]),e._v(" "),s("div",{staticClass:"input-group mb-3"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.$v.user.cities_id.$model,expression:"$v.user.cities_id.$model"}],staticClass:"form-control",class:[e.$v.user.cities_id.$anyError?"is-invalid":"",e.$v.user.cities_id.$anyError&&""!=e.$v.user.cities_id.$model?"is-valid":""],attrs:{type:"text",name:"cities_id",placeholder:"Seleccione su departamento de residencia",state:!e.$v.user.cities_id.$error},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.$set(e.$v.user.cities_id,"$model",a.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[e._v("-- Seleccionar --")]),e._v(" "),e._l(e.cities,(function(a){return s("option",{key:a.id,domProps:{value:a.id}},[e._v(e._s(a.name))])}))],2),e._v(" "),e._m(7),e._v(" "),e.$v.user.cities_id.required?e._e():s("b-form-invalid-feedback",[e._v("El campo debe ser completado")])],1)])]),e._v(" "),s("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[s("div",{staticClass:"form-group"},[s("label",[e._v("Dirección (*) ")]),e._v(" "),s("div",{staticClass:"input-group mb-3"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.$v.user.address.$model,expression:"$v.user.address.$model"}],staticClass:"form-control",class:[e.$v.user.address.$anyError?"is-invalid":"",e.$v.user.address.$anyError&&""!=e.$v.user.address.$model?"is-valid":""],attrs:{name:"description",rows:"3",placeholder:"Describa de forma detallada su dirección",state:!e.$v.user.address.$error},domProps:{value:e.$v.user.address.$model},on:{input:function(a){a.target.composing||e.$set(e.$v.user.address,"$model",a.target.value)}}}),e._v(" "),e.$v.user.address.required?e._e():s("b-form-invalid-feedback",[e._v("El campo debe ser completado")])],1)])]),e._v(" "),s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"icheck-primary"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.change_password,expression:"change_password"}],attrs:{type:"checkbox",id:"change_password",name:"change_password"},domProps:{checked:Array.isArray(e.change_password)?e._i(e.change_password,null)>-1:e.change_password},on:{change:function(a){var s=e.change_password,t=a.target,r=!!t.checked;if(Array.isArray(s)){var i=null,o=e._i(s,i);t.checked?o<0&&(e.change_password=s.concat([i])):o>-1&&(e.change_password=s.slice(0,o).concat(s.slice(o+1)))}else e.change_password=r}}}),e._v(" "),s("label",{attrs:{for:"change_password"}},[e._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tCambiar Contraseña\n\t\t\t\t\t\t\t\t\t\t\t\t")])])]),e._v(" "),e.change_password?[s("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[s("div",{staticClass:"form-group"},[s("label",[e._v("Nueva contraseña (*)")]),e._v(" "),s("div",{staticClass:"input-group mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.user.password.$model,expression:"$v.user.password.$model"}],staticClass:"form-control",class:[e.$v.user.password.$anyError?"is-invalid":"",e.$v.user.password.$anyError&&""!=e.$v.user.password.$model?"is-valid":""],attrs:{type:"password",name:"password",placeholder:"Ingrese su nueva contraseña",state:!e.$v.user.password.$error},domProps:{value:e.$v.user.password.$model},on:{input:function(a){a.target.composing||e.$set(e.$v.user.password,"$model",a.target.value)}}}),e._v(" "),e._m(8),e._v(" "),e.$v.user.password.required?e._e():s("b-form-invalid-feedback",[e._v("El campo debe ser completado")]),e._v(" "),e.$v.user.password.minLength?e._e():s("b-form-invalid-feedback",[e._v("La contraseña debe tener un mínimo de 6 carácteres")]),e._v(" "),e.$v.user.password.maxLength?e._e():s("b-form-invalid-feedback",[e._v("La contraseña debe tener un máximo de 10 carácteres")])],1)])]),e._v(" "),s("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[s("div",{staticClass:"form-group"},[s("label",[e._v("Confirmar contraseña (*)")]),e._v(" "),s("div",{staticClass:"input-group mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.user.password2.$model,expression:"$v.user.password2.$model"}],staticClass:"form-control",class:[e.$v.user.password2.$anyError?"is-invalid":"",e.$v.user.password2.$anyError&&""!=e.$v.user.password2.$model?"is-valid":""],attrs:{type:"password",name:"whatsapp",placeholder:"Confirme su nueva contraseña",state:!e.$v.user.password2.$error},domProps:{value:e.$v.user.password2.$model},on:{input:function(a){a.target.composing||e.$set(e.$v.user.password2,"$model",a.target.value)}}}),e._v(" "),e._m(9),e._v(" "),e.$v.user.password2.required?e._e():s("b-form-invalid-feedback",[e._v("El campo debe ser completado")]),e._v(" "),e.$v.user.password2.sameAsPassword?e._e():s("b-form-invalid-feedback",[e._v("La contraseña no coinciden")])],1)])])]:e._e(),e._v(" "),e._m(10),e._v(" "),s("div",{staticClass:"col-md-12"},[s("b-button",{staticClass:"float-right",attrs:{type:"submit",variant:"outline-primary",disabled:1==e.processing},on:{click:function(a){return e.saveItem()}}},[e.processing?e._e():[e._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tGuardar\n\t\t\t\t\t\t\t\t\t\t\t\t")],e._v(" "),e.processing?[s("i",{staticClass:"fa fa-spinner fa-spin"})]:e._e()],2)],1)],2)])])])])])])])])],1)},r=[function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"col-sm-6"},[s("h1",[e._v("Editar Perfil")])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"input-group-append"},[s("div",{staticClass:"input-group-text"},[s("span",{staticClass:"fas fa-font"})])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"input-group-append"},[s("div",{staticClass:"input-group-text"},[s("span",{staticClass:"fas fa-font"})])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"input-group-append"},[s("div",{staticClass:"input-group-text"},[s("span",{staticClass:"fas fa-envelope-open-text"})])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"input-group-append"},[s("div",{staticClass:"input-group-text"},[s("span",{staticClass:"fas fa-phone"})])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"input-group-append"},[s("div",{staticClass:"input-group-text"},[s("span",{staticClass:"fas fa-phone"})])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"input-group-append"},[s("div",{staticClass:"input-group-text"},[s("span",{staticClass:"fas fa-map-marker-alt"})])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"input-group-append"},[s("div",{staticClass:"input-group-text"},[s("span",{staticClass:"fas fa-map-pin"})])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"input-group-append"},[s("div",{staticClass:"input-group-text"},[s("span",{staticClass:"fas fa-lock"})])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"input-group-append"},[s("div",{staticClass:"input-group-text"},[s("span",{staticClass:"fas fa-lock"})])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[s("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[s("h4",{staticClass:"alert-heading"},[e._v("IMPORTANTE: ")]),e._v(" "),s("p",{staticClass:"mb-0"},[e._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tTodos los campos con (*) deben ser completados\n\t\t\t\t\t\t\t\t\t\t\t\t")])])])}],i=(s("b0c0"),s("5530")),o=s("1157"),n=s.n(o),l=s("2f62"),d=s("9062"),c=s.n(d),m=s("1dce"),u=s("b5ae"),v=s("92c3"),p=s.n(v),_=(s("1e3f"),s("5c25")),$={name:"ProfileUser",data:function(){return{user:{id:"",name:"",last_name:"",email:"",phone:"",whatsapp:"",address:"",main_image:"",countries_id:"",cities_id:"",password:"",password2:""},change_password:0,countries:[],dropzoneOptions:{url:_["b"]+"/upload-image",thumbnailWidth:200,maxFilesize:2,acceptedFiles:"image/png, image/jpg, image/jpeg, image/svg, image/webp",dictDefaultMessage:"<i class='fas fa-upload'></i> Seleccionar Imagén principal",addRemoveLinks:!0,maxFiles:1,paramName:"main_image",dictFileTooBig:"La imagén seleccionada pesa ({{filesize}}MiB). el max. permitido es de: {{maxFilesize}}MiB.",dictInvalidFileType:"Solo se acepta imagenes PNG, JPEG, JPG, SVG",dictRemoveFile:"Eliminar Imagén"}}},mixins:[m["validationMixin"]],validations:function(){return this.change_password?{user:{name:{required:u["required"],maxLength:Object(u["maxLength"])(50)},last_name:{required:u["required"],maxLength:Object(u["maxLength"])(50)},email:{required:u["required"],email:u["email"]},phone:{required:u["required"],numeric:u["numeric"]},whatsapp:{required:u["required"],numeric:u["numeric"]},address:{required:u["required"]},main_image:{required:u["required"]},countries_id:{required:u["required"]},cities_id:{required:u["required"]},password:{required:u["required"],minLength:Object(u["minLength"])(6),maxLength:Object(u["maxLength"])(10)},password2:{required:u["required"],sameAsPassword:Object(u["sameAs"])("password")}}}:{user:{name:{required:u["required"],maxLength:Object(u["maxLength"])(50)},last_name:{required:u["required"],maxLength:Object(u["maxLength"])(50)},email:{required:u["required"],email:u["email"]},phone:{required:u["required"],numeric:u["numeric"]},whatsapp:{required:u["required"],numeric:u["numeric"]},address:{required:u["required"]},main_image:{required:u["required"]},countries_id:{required:u["required"]},cities_id:{required:u["required"]}}}},components:{Loading:c.a,vueDropzone:p.a},created:function(){this.getUserById()},methods:Object(i["a"])(Object(i["a"])({},Object(l["b"])(["getUser","getData","updateData","getUserLogin"])),{},{getUserById:function(){var e=this;this.getUser().then((function(a){e.user.id=a.data.id,e.user.name=a.data.name,e.user.last_name=a.data.last_name,e.user.email=a.data.email,e.user.phone=a.data.phone,e.user.whatsapp=a.data.whatsapp,e.user.address=a.data.address,e.user.countries_id=a.data.countries_id,e.user.cities_id=a.data.cities_id;var s={size:a.data.size_image,name:a.data.name,type:a.data.type_image};e.$refs.main_image.manuallyAddFile(s,a.data.image),e.user.main_image=s,n()("div.dz-default.dz-message").attr("style","display:none;"),e.getAllCountriesActivated()}))},getAllCountriesActivated:function(){var e=this,a="/generals/countries/getAllActivated";this.getData({url:a}).then((function(a){e.countries=a.data}))},mainImageError:function(){return this.$Toast.fire({icon:"error",html:"Error al subir imagén del producto."})},mainImageAddSuccess:function(e){this.$v.user.main_image.$model=e,this.$v.user.main_image.$model.type_image=e.type,this.$v.user.main_image.$model.size_image=e.size,n()("div.dz-default.dz-message").attr("style","display:none;")},removeMainImage:function(){this.user.main_image=null,n()("div.dz-default.dz-message").removeAttr("style")},saveItem:function(){var e=this;if(this.$v.$touch(),this.$v.$anyError)return this.$Toast.fire({icon:"error",title:"Todos los campo (*) deben ser completados para continuar."});this.user.change_password=this.change_password,this.updateData({url:"/users/update-profile/"+this.user.id,formData:this.user}).then((function(){e.getUserLogin().then((function(){e.$Toast.fire({icon:"success",title:"¡Actualizado con éxito!"})}))}))}}),computed:Object(i["a"])(Object(i["a"])({},Object(l["c"])({processing:"processingData"})),{},{cities:function(){for(var e=0;e<this.countries.length;e++)if(this.countries[e].id==this.user.countries_id)return this.countries[e].cities;return[]}})},g=$,f=s("2877"),h=Object(f["a"])(g,t,r,!1,null,null,null);a["default"]=h.exports}}]);