(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var n=a(0),r=a.n(n),i=a(67),c=a(277),o=a(439),l=a(437),s=c.a.Content,u=function(e){var t=e.posts;return r.a.createElement(o.a,{itemLayout:"vertical",size:"large",pagination:{onChange:function(e){console.log(e)},pageSize:4},dataSource:t,renderItem:function(e){return r.a.createElement(o.a.Item,{key:e.title,extra:r.a.createElement(l.a,{size:150,src:e.image,shape:"square"})},r.a.createElement(o.a.Item.Meta,{title:r.a.createElement("a",{target:"_blank",href:e.link},e.title),description:e.subTitle}),e.description)}})};function m(){var e=Object(i.useRouteData)().posts;return r.a.createElement(s,null,r.a.createElement("div",{style:{margin:"1.5em 20%"}},r.a.createElement(u,{posts:e})))}}}]);