(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{256:function(i,e,s){},292:function(i,e,s){"use strict";var t=s(256);s.n(t).a},299:function(i,e,s){"use strict";s.r(e);s(283),s(285);var t=s(286),a=s.n(t),n={name:"InfoCard",props:["title","logo"],data:function(){return{test:"ABC",isVisible:!1}},mounted:function(){this.isVisible=!0},computed:{backgroundImageGenerated:function(){return{"background-image":a.a.generate(Math.random().toString()).toDataUrl()}}}},o=(s(292),s(41)),r=Object(o.a)(n,function(){var i=this,e=i.$createElement,s=i._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:i.isVisible,expression:"isVisible"}],staticClass:"info-card",style:i.isVisible&&i.backgroundImageGenerated},[s("div",{staticClass:"info-card-content"},[s("div",{directives:[{name:"show",rawName:"v-show",value:i.isVisible,expression:"isVisible"}],staticClass:"info-card-logo-background"},[s("div",{staticClass:"info-card-logo shadow"},[s("i",{class:[i.logo,"logoFA"]})])]),i._v(" "),s("div",{staticClass:"info-card-title"},[i._v(i._s(i.title))])])])},[],!1,null,"5dcfdd6e",null);e.default=r.exports}}]);