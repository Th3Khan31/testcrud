(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20866e"],{a548:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},s=[],i=n("5530"),r=n("2f62"),u={name:"me",data:function(){return{token:null}},created:function(){var e=this;this.token=this.$route.query.token,""!=this.token&&null!=this.token||this.$router.push({name:"dashboard"}),this.destroyToken().then((function(){e.getUserLogin(e.token).then((function(){e.$router.push({name:"dashboard"})})).catch((function(t){console.log(t.response.data),e.$Toast.fire({icon:"success",title:"¡Token Inválido, debe iniciar sesión nuevamente!"}),e.$router.push({name:"auth-login"})}))}))},methods:Object(i["a"])(Object(i["a"])({},Object(r["b"])(["destroyToken","getUserLogin"])),{},{formSubmit:function(){var e=this;this.destroyToken().then((function(){e.$router.push("/auth/login")}))}}),computed:Object(i["a"])({},Object(r["c"])({tokenUser:"tokenUser"}))},a=u,c=n("2877"),h=Object(c["a"])(a,o,s,!1,null,null,null);t["default"]=h.exports}}]);