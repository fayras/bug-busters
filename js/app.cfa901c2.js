(function(t){function e(e){for(var n,a,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)a=s[u],r[a]&&d.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,a=1;a<o.length;a++){var s=o[a];0!==r[s]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},a={app:0},r={app:0},i=[];function s(t){return c.p+"js/"+({about:"about",room:"room"}[t]||t)+"."+{about:"691d396e",room:"82a362a7"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(t){var e=[],o={room:1};a[t]?e.push(a[t]):0!==a[t]&&o[t]&&e.push(a[t]=new Promise(function(e,o){for(var n="css/"+({about:"about",room:"room"}[t]||t)+"."+{about:"31d6cfe0",room:"7a90a648"}[t]+".css",r=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===r))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===n||u===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.request=n,delete a[t],f.parentNode.removeChild(f),o(i)},f.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(f)}).then(function(){a[t]=0}));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,o){n=r[t]=[e,o]});e.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t),l=function(e){u.onerror=u.onload=null,clearTimeout(d);var o=r[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+a+")");i.type=n,i.request=a,o[1](i)}r[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/bug-busters/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("64a9"),a=o.n(n);a.a},"0d17":function(t,e,o){},4678:function(t,e,o){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=r(t);return o(e)}function r(t){var e=n[t];if(!(e+1)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return e}a.keys=function(){return Object.keys(n)},a.resolve=r,t.exports=a,a.id="4678"},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("097d");var n,a=o("2b0e"),r=o("ce5b"),i=o.n(r),s=o("5cd9"),c=o.n(s),l=(o("bf40"),o("458e")),u=(o("6cc5"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{dark:""}},[o("v-navigation-drawer",{attrs:{app:"",right:"",stateless:!0},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("portal-target",{attrs:{name:"drawer"}})],1),"login"!==t.$route.name?o("v-toolbar",{attrs:{dark:"",app:""}},[o("v-toolbar-side-icon"),o("v-toolbar-title",[t._v("BugBusters")]),o("v-btn",{attrs:{flat:""},on:{click:function(e){t.$router.push({name:"login"})}}},[t._v("\n      Login\n    ")]),o("div",[t._v(t._s(t.loggedInAs))]),o("v-spacer"),o("v-autocomplete",{staticClass:"mx-3",staticStyle:{"max-width":"200px"},attrs:{items:t.floorItems,flat:"",solo:"",dense:"","hide-no-data":"","hide-details":"",label:"Ebene auswählen..."},model:{value:t.floor,callback:function(e){t.floor=e},expression:"floor"}}),o("v-btn",{attrs:{flat:"",icon:""}},[o("v-icon",[t._v("aspect_ratio")])],1)],1):t._e(),o("v-content",[o("router-view")],1)],1)}),d=[],f=(o("7f7f"),{data:function(){return{floorItems:[{text:"NB 02",value:"nb02"},{text:"NB 01",value:"nb01"},{text:"NB 1",value:"nb1"},{text:"IB 02",value:"ib02"}]}},computed:{drawer:{get:function(){return this.$store.state.ui.showDrawer},set:function(t){this.$store.commit("ui/showDrawer",t)}},floor:{get:function(){return this.$store.state.currentFloor},set:function(t){this.$store.commit("setFloor",t)}},loggedInAs:function(){var t="";return"vip"===this.$store.state.currentUser.type?t="VIP Melder":"standard"===this.$store.state.currentUser.type?t="Melder":"worker"===this.$store.state.currentUser.type&&(t="Bearbeiter"),"Eingeloggt als ".concat(this.$store.state.currentUser.name," (").concat(t,")")}}}),m=f,p=(o("034f"),o("2877")),v=Object(p["a"])(m,u,d,!1,null,null,null),g=v.exports,b=o("8c4f"),h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home",staticStyle:{height:"100%"}},[o("portal",{attrs:{to:"drawer"}},[o("v-tabs",{attrs:{grow:""}},[o("v-tab",[t._v("Offen")]),o("v-tab",[t._v("Erledigt")]),o("v-tab-item",[o("v-list",{attrs:{"three-line":""}},t._l(t.annotations,function(e){return o("v-list-tile",{key:e.id,class:e.priority?"vip":"",on:{click:function(){return t.selectAnnotation(e.id)}}},[o("v-list-tile-content",[o("v-list-tile-title",[t._v(t._s(e.description))]),o("v-list-tile-sub-title",[t._v(t._s(t.formatDate(e.created_at)))])],1),o("v-list-tile-action",[o("v-btn",{attrs:{flat:"",icon:"",color:e.liked?"primary":""},on:{click:function(o){o.stopPropagation(),t.toggleLike(e)}}},[o("v-icon",[t._v("thumb_up")])],1)],1),o("v-list-tile-action",{staticStyle:{"min-width":"32px"}},[o("v-btn",{attrs:{flat:"",icon:"",color:e.favorite?"primary":""},on:{click:function(o){o.stopPropagation(),t.toggleFav(e)}}},[o("v-icon",[t._v(t._s(e.favorite?"notifications_active":"notifications"))])],1)],1)],1)}),1)],1),o("v-tab-item",[o("v-list",{attrs:{"three-line":""}},t._l(t.annotationsDone,function(e){return o("v-list-tile",{key:e.id,class:e.priority?"vip":"",on:{click:function(){return t.selectAnnotation(e.id)}}},[o("v-list-tile-content",[o("v-list-tile-title",[t._v(t._s(e.description))]),o("v-list-tile-sub-title",[t._v(t._s(t.formatDate(e.created_at)))])],1),o("v-list-tile-action",[o("v-btn",{attrs:{flat:"",icon:"",color:e.liked?"primary":""}},[o("v-icon",[t._v("thumb_up")])],1)],1),o("v-list-tile-action",{staticStyle:{"min-width":"32px"}},[o("v-btn",{attrs:{flat:"",icon:"",color:e.favorite?"primary":""}},[o("v-icon",[t._v(t._s(e.favorite?"notifications_active":"notifications"))])],1)],1)],1)}),1)],1)],1)],1),o("annotation-card"),o("v-dialog",{attrs:{"max-width":"600px"},model:{value:t.showDialogNew,callback:function(e){t.showDialogNew=e},expression:"showDialogNew"}},[o("new-annotation-card",{on:{save:t.newAnnotation}})],1),1===t.state?o("v-btn",{attrs:{fixed:"",dark:"",fab:"",bottom:"",right:""},on:{click:function(e){t.showDialogNew=!0}}},[o("v-icon",[t._v("add")])],1):t._e(),o("l-map",{ref:"map",staticStyle:{"z-index":"0"},attrs:{crs:t.crs,zoom:t.zoom,center:t.center,minZoom:-2,options:{zoomControl:!1,attributionControl:!1}},on:{"update:zoom":t.zoomUpdated,"update:center":t.centerUpdated,"update:bounds":t.boundsUpdated}},[o("l-control-zoom",{ref:"zoomControl",attrs:{position:"bottomleft"}}),o("l-img-overlay",{attrs:{url:"./img/IB.png",bounds:[[0,0],[4034,3026]]}}),o("l-geo-json",{ref:"geojson",attrs:{geojson:t.geoData,optionsStyle:t.style,options:{onEachFeature:t.onEachFeature}}}),t._l(t.geoData.features,function(e){return o("l-marker",{key:e.properties.id,attrs:{"lat-lng":e.properties.badge}},[o("l-icon",{attrs:{"class-name":"someExtraClass"}},[o("v-badge",{attrs:{left:"",color:t.getColor(t.getCountForBadge(e.properties.floor,e.properties.room))}},[o("span",{style:{color:t.getCountForBadge(e.properties.floor,e.properties.room)>6?"white":"black"},attrs:{slot:"badge"},slot:"badge"},[t._v("\n            "+t._s(t.getCountForBadge(e.properties.floor,e.properties.room))+"\n          ")])])],1)],1)})],2)],1)},y=[],j=o("75fc"),w=(o("55dd"),o("c1df")),_=o.n(w),x={type:"FeatureCollection",features:[{type:"Feature",properties:{id:"ib02_608",floor:"ib02",room:"608",badge:[1491,1099]},geometry:{type:"Polygon",coordinates:[[[895,1508],[1113,1509],[1113,1351],[895,1351]]]}},{type:"Feature",properties:{id:"ib02_610",floor:"ib02",room:"610",badge:[1491,1323]},geometry:{type:"Polygon",coordinates:[[[1119,1509],[1336,1509],[1336,1351],[1119,1351]]]}},{type:"Feature",properties:{id:"ib02_674",floor:"ib02",room:"674",badge:[1329,1323]},geometry:{type:"Polygon",coordinates:[[[895,1346],[1336,1346],[1336,1188],[895,1188]]]}},{type:"Feature",properties:{id:"ib02_hib",floor:"ib02",room:"hib",badge:[1381,1896]},geometry:{type:"Polygon",coordinates:[[[1432,1404],[1918,1404],[1918,694],[1432,694]]]}}]},k=o("8a26"),D=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",[o("v-layout",{attrs:{row:""}},[o("v-flex",{staticStyle:{"min-width":"43%"},attrs:{xs5:""}},[o("v-layout",{staticStyle:{padding:"4px"},attrs:{column:"","justify-space-around":"","fill-height":""}},[o("div",{staticClass:"upload fill-height d-flex text-xs-center"},[o("div",[o("v-btn",{attrs:{icon:""}},[o("v-icon",{attrs:{"x-large":""}},[t._v("cloud_upload")])],1),o("br"),o("span",{staticClass:"font-weight-regular title"},[t._v("Foto hochladen")])],1)])])],1),o("v-flex",[o("v-card-text",{staticClass:"text-xs-left fill-height"},[o("v-layout",{attrs:{column:"","justify-space-between":"","fill-height":""}},[o("v-flex",{staticStyle:{"flex-basis":"auto"},attrs:{"d-flex":"",xs12:""}},[o("v-textarea",{attrs:{box:"",autofocus:"",label:"Beschreibung"},model:{value:t.desc,callback:function(e){t.desc=e},expression:"desc"}})],1),o("v-flex",{staticStyle:{"flex-basis":"auto"},attrs:{xs12:""}}),o("v-flex",{staticStyle:{"flex-basis":"auto"},attrs:{"d-flex":"",xs12:""}},[o("v-layout",{attrs:{column:""}},[o("v-flex",{attrs:{xs12:""}},[o("v-text-field",{attrs:{box:"",label:"Tags",hint:"Es können mehrere Tags kommasepariert eingetragen werden"},model:{value:t.tags,callback:function(e){t.tags=e},expression:"tags"}})],1),t.$store.getters.userIsVip?o("v-flex",{attrs:{xs12:""}},[o("v-checkbox",{attrs:{label:"In der Priorität hochstufen"},model:{value:t.priority,callback:function(e){t.priority=e},expression:"priority"}})],1):t._e()],1)],1)],1)],1)],1)],1),o("v-divider"),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{flat:"",color:"primary"},on:{click:t.emit}},[t._v("Speichern")])],1)],1)},S=[],$={name:"NewAnnotationCard",data:function(){return{desc:"",tags:"",priority:!1}},methods:{emit:function(){this.$emit("save",{description:this.desc,tags:this.tags,priority:this.priority}),this.desc="",this.tags="",this.priority=!1}}},C=$,L=(o("d1b1"),Object(p["a"])(C,D,S,!1,null,"299ce614",null)),z=L.exports,A={SCROLL:0,ZOOM:1},O={name:"home",components:{AnnotationCard:k["a"],NewAnnotationCard:z},data:function(){return{activeItem:0,url:"../assets/logo.png",zoom:-1,center:[1200,1513],bounds:null,crs:l["L"].CRS.Simple,geoData:x,state:A.SCROLL,showDialogNew:!1,zooming:!1}},mounted:function(){this.$refs.map.mapObject.on("movestart",this.handleState)},computed:{annotations:function(){return Object(j["a"])(this.$store.getters.currentAnnotations).sort(function(t,e){return t.priority>e.priority?-1:t.priority<e.priority?1:e.upvotes-t.upvotes})},annotationsClaimed:function(){return this.$store.getters.claimedAnnotations},annotationsDone:function(){return this.$store.getters.doneAnnotations}},methods:{selectAnnotation:function(t){this.$store.commit("selectAnnotation",t)},newAnnotation:function(t){this.$store.commit("addAnnotation",{description:t.description,priority:t.priority,tags:t.tags}),this.showDialogNew=!1},toggleLike:function(t){this.$store.commit("like",t.id)},toggleFav:function(t){this.$store.commit("fav",t.id)},handleState:function(){this.zooming||this.resetState(),this.zooming=!1},resetState:function(){this.state=A.SCROLL,this.$store.commit("ui/showDrawer",!1),this.$store.commit("setRoom",void 0)},zoomUpdated:function(t){this.zoom=t},centerUpdated:function(t){this.center=t},boundsUpdated:function(t){this.bounds=t},getColor:function(t){return t>1e3?"#800026":t>500?"#BD0026":t>9?"#E31A1C":t>8?"#FC4E2A":t>6?"#FD8D3C":t>3?"#FEB24C":t>1?"#FED976":"#cce187"},getCountForBadge:function(t,e){return this.$store.getters.byRoom(t,e).length},style:function(t){var e,o;return t.properties.floor===this.$store.state.currentFloor&&t.properties.room===this.$store.state.currentRoom?(e="#B8E6FF",o=.5):(e="#83AF9B",o=.1),{fillColor:e,weight:0,opacity:1,color:"white",fillOpacity:o}},highlightFeature:function(t){var e=t.target;e.setStyle({weight:2,color:"#fff",dashArray:"6",fillOpacity:.4}),l["L"].Browser.ie||l["L"].Browser.opera||l["L"].Browser.edge||e.bringToFront()},resetHighlight:function(t){this.$refs.geojson.mapObject.resetStyle(t.target)},zoomToFeature:function(t){var e=this;this.state=A.ZOOM,this.zooming=!0,this.$store.commit("ui/showDrawer",!0),this.$store.commit("setRoom",t.target.feature.properties.room),setTimeout(function(){var o=t.target.getBounds();e.$refs.map.mapObject.fitBounds(o)},310)},onEachFeature:function(t,e){e.on({mouseover:this.highlightFeature,mouseout:this.resetHighlight,click:this.handleClick})},handleClick:function(t){this.state===A.SCROLL?this.zoomToFeature(t):this.state===A.ZOOM?this.loadRoom(t):this.resetState()},loadRoom:function(t){var e=this,o=t.target.feature.properties.room;this.$store.commit("ui/showDrawer",!1),setTimeout(function(){e.$router.push({name:"room",params:{id:o}})},300)},formatDate:function(t){return _()(t).locale("de").format("L LT")}}},I=O,F=(o("dc88"),Object(p["a"])(I,h,y,!1,null,"5b4d1af9",null)),E=F.exports,U=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{"fill-height":""}},[o("v-layout",{attrs:{"align-center":"","justify-center":""}},[o("v-flex",{staticClass:"login-form text-xs-center"},[o("div",{staticClass:"display-1 mb-3"},[t._v("BugBusters")]),o("v-card",{attrs:{light:""}},[o("v-card-text",[o("div",{staticClass:"subheading"},[t.options.isLoggingIn?t._e():[t._v("Neuen Account erstellen")]],2),o("v-form",[t.options.isLoggingIn?t._e():o("v-text-field",{attrs:{light:"","prepend-icon":"person",label:"Name"},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}}),o("v-text-field",{attrs:{light:"","prepend-icon":"email",label:"Email",type:"email"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),o("v-text-field",{attrs:{light:"","prepend-icon":"lock",label:"Passwort",type:"password"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),t.options.isLoggingIn?o("v-checkbox",{attrs:{light:"",label:"Eingeloggt bleiben?","hide-details":""},model:{value:t.options.shouldStayLoggedIn,callback:function(e){t.$set(t.options,"shouldStayLoggedIn",e)},expression:"options.shouldStayLoggedIn"}}):t._e(),t.options.isLoggingIn?o("v-btn",{attrs:{dark:"",block:"",type:"submit"},on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v("\n                    Einloggen\n                  ")]):o("v-btn",{attrs:{dark:"",block:"",type:"submit"},on:{click:function(e){e.preventDefault(),t.options.isLoggingIn=!0}}},[t._v("\n                    Registrieren\n                  ")])],1)],1)],1),t.options.isLoggingIn?o("div",[t._v("Noch kein Account?\n          "),o("v-btn",{attrs:{light:""},on:{click:function(e){t.options.isLoggingIn=!1}}},[t._v("Registrieren")])],1):t._e()],1)],1)],1)},B=[],N={data:function(){return{user:{email:"admin",password:"",name:""},options:{isLoggingIn:!0,shouldStayLoggedIn:!1}}},methods:{login:function(){switch(this.user.email){case"admin":this.$store.commit("setUser",{name:"Admin",type:"vip"});break;case"hans":this.$store.commit("setUser",{name:"Hans",type:"standard"});break;case"Hausmeister":this.$store.commit("setUser",{name:"Hausmeister",type:"worker"});break;default:this.$store.commit("setUser",{name:this.user.email,type:"standard"});break}this.$router.push({name:"home"})}}},P=N,T=(o("d6db"),Object(p["a"])(P,U,B,!1,null,null,null)),R=T.exports,M=(o("20d6"),o("7514"),o("2f62")),W=o("b054"),Z=o.n(W),q=o("2ef0"),K=o("bd86"),H={WINDOW_UPDATE_SIZE:"WINDOW_UPDATE_SIZE"},J={namespaced:!0,state:{showDrawer:!1,window:{width:1,height:1}},mutations:(n={},Object(K["a"])(n,H.WINDOW_UPDATE_SIZE,function(t,e){var o=e.size,n=t;n.window.width=o.width||n.window.width,n.window.height=o.height||n.window.height}),Object(K["a"])(n,"showDrawer",function(t,e){var o=t;o.showDrawer=e}),n),actions:{windowUpdateSize:function(t,e){var o=t.commit;o(H.WINDOW_UPDATE_SIZE,{size:e})}}},V=!1;a["default"].use(M["a"]);var G=new M["a"].Store({state:{currentUser:{name:"Dimitri",type:"standard"},currentFloor:"ib02",currentRoom:void 0,selectedAnnotationId:void 0,annotations:[{id:1,description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",upvotes:14,liked:!1,favorite:!1,floor:"ib02",room:"hib",priority:!1,created_at:new Date(2019,0,10,12,50),created_by:"Klaus",status:"open",tags:"test,asd,asd",img:"",assigned_to:"Klaus",comments:[{id:1,user:"test",message:"Testtesttest",date:new Date(2019,0,10,12,50)}],object:"Cube180"},{id:2,description:"Auf dem Stuhl zu sitzen ist wirklich anstrengend. Der wackelt ständig und man fällt eigentlich fast um. Das ist aber mein Lieblingsstuhl, ich hätte den wirklich gerne repariert.",upvotes:319,liked:!0,favorite:!1,floor:"ib02",room:"hib",priority:!0,created_at:new Date,created_by:"Klaus",status:"open",tags:"kaputt,stuhl,fehlendes bein",img:"/bug-busters/img/chair.jpg",assigned_to:void 0,comments:[],object:"Cube180"},{id:3,description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",upvotes:4,liked:!0,favorite:!0,floor:"ib02",room:"hib",priority:!1,created_at:new Date,created_by:"Klaus",status:"open",tags:"",img:"/bug-busters/img/chair.jpg",assigned_to:void 0,comments:[],object:void 0},{id:4,description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",upvotes:4,liked:!0,favorite:!0,floor:"ib02",room:"hib",priority:!1,created_at:new Date,created_by:"Klaus",status:"open",tags:"",img:"/bug-busters/img/chair.jpg",coords:[.07192592322826385,.3394669005943769,-.9322350293923343],assigned_to:void 0,comments:[],object:void 0},{id:5,description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",upvotes:4,liked:!0,favorite:!0,floor:"ib02",room:"610",priority:!1,created_at:new Date,created_by:"Klaus",status:"open",tags:"",img:"/bug-busters/img/chair.jpg",coords:[.07192592322826385,.3394669005943769,-.9322350293923343],assigned_to:void 0,comments:[],object:void 0}]},mutations:{setUser:function(t,e){var o=t;o.currentUser=e},like:function(t,e){var o=t.annotations.find(function(t){return t.id===e});o&&(o.liked=!o.liked,o.upvotes+=o.liked?1:-1)},fav:function(t,e){var o=t.annotations.find(function(t){return t.id===e});o&&(o.favorite=!o.favorite)},addComment:function(t,e){var o=t.annotations.find(function(t){return t.id===e.id});o&&o.comments.push({id:(new Date).valueOf(),user:t.currentUser.name,message:e.message,date:new Date})},addAnnotation:function(t,e){t.annotations.push({id:(new Date).valueOf(),description:e.description,upvotes:0,liked:!1,favorite:!1,floor:t.currentFloor,room:t.currentRoom,priority:e.priority,created_at:new Date,status:"open",created_by:t.currentUser.name,coords:e.coords,tags:e.tags,comments:[],object:e.object})},deleteAnnotation:function(t,e){var o=t.annotations.findIndex(function(t){return t.id===e});-1!==o&&t.annotations.splice(o,1)},setFloor:function(t,e){var o=t;o.currentFloor=e},setRoom:function(t,e){var o=t;o.currentRoom=e},selectAnnotation:function(t,e){var o=t;o.selectedAnnotationId=e},assign:function(t,e){var o=t.annotations.find(function(t){return t.id===e});o&&(o.assigned_to=t.currentUser.name,o.status="claimed")}},getters:{selectedAnnotation:function(t){return t.annotations.find(function(e){return e.id===t.selectedAnnotationId})},currentAnnotations:function(t){return t.annotations.filter(function(e){return e.floor===t.currentFloor&&e.room===t.currentRoom&&("open"===e.status||"claimed"===e.status)})},claimedAnnotations:function(t){return t.annotations.filter(function(e){return e.floor===t.currentFloor&&e.room===t.currentRoom&&"claimed"===e.status})},doneAnnotations:function(t){return t.annotations.filter(function(e){return e.floor===t.currentFloor&&e.room===t.currentRoom&&"done"===e.status})},byFloor:function(t){return function(e){return t.annotations.filter(function(t){return t.floor===e})}},byRoom:function(t){return function(e,o){return t.annotations.filter(function(t){return t.floor===e&&t.room===o})}},userIsWorker:function(t){return"worker"===t.currentUser.type},userIsVip:function(t){return"vip"===t.currentUser.type},userIsStandard:function(t){return"standard"===t.currentUser.type}},actions:{},modules:{ui:J},strict:V,plugins:V?[Z()()]:[]}),Q=Object(q["throttle"])(function(){var t={width:window.innerWidth,height:window.innerHeight};G.dispatch("ui/windowUpdateSize",t)},150);Q(),window.addEventListener("resize",Q);var X=G;a["default"].use(b["a"]);var Y=new b["a"]({mode:"history",base:"/bug-busters/",routes:[{path:"/",name:"home",component:E},{path:"/login",name:"login",component:R},{path:"/about",name:"about",component:function(){return o.e("about").then(o.bind(null,"f820"))}},{path:"/room/:id",name:"room",props:!0,component:function(){return o.e("room").then(o.bind(null,"3ab1"))}}]});Y.beforeEach(function(t,e,o){return X.state.currentUser?o():Y.push({name:"login"})});var tt=Y;a["default"].component("l-map",l["LMap"]),a["default"].component("l-tile-layer",l["LTileLayer"]),a["default"].component("l-img-overlay",l["LImageOverlay"]),a["default"].component("l-marker",l["LMarker"]),a["default"].component("l-geo-json",l["LGeoJson"]),a["default"].component("l-control",l["LControl"]),a["default"].component("l-control-zoom",l["LControlZoom"]),a["default"].component("l-icon",l["LIcon"]),a["default"].use(i.a,{theme:{primary:"#FF9800",secondary:"#33691E"}}),a["default"].use(c.a),delete l["L"].Icon.Default.prototype._getIconUrl,l["L"].Icon.Default.mergeOptions({iconRetinaUrl:o("584d"),iconUrl:o("6397"),shadowUrl:o("e2b9")}),a["default"].config.productionTip=!1,new a["default"]({router:tt,store:X,render:function(t){return t(g)}}).$mount("#app")},"64a9":function(t,e,o){},"8a26":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{"max-width":"600px"},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[o("v-card",[o("v-layout",{attrs:{row:""}},[o("v-flex",{staticStyle:{"min-width":"43%"},attrs:{xs5:""}},[o("v-img",{attrs:{src:t.annotation.img,"aspect-ratio":"0.6"}})],1),o("v-flex",[o("v-tabs",{attrs:{grow:""}},[o("v-tab",[t._v("Meldung")]),o("v-tab",[t._v("Kommentare")]),o("v-tab-item",{staticClass:"tab-item-wrapper"},[o("v-card-text",{staticClass:"text-xs-left fill-height"},[o("v-layout",{attrs:{column:"","justify-space-between":"","fill-height":""}},[o("v-flex",{staticStyle:{"flex-basis":"auto"},attrs:{"d-flex":"",xs12:""}},[t.edit?o("v-textarea",{attrs:{box:"",autofocus:"",label:"Beschreibung","append-icon":"keyboard_return"},on:{"click:append":function(e){t.edit=!1}},model:{value:t.annotation.description,callback:function(e){t.$set(t.annotation,"description",e)},expression:"annotation.description"}}):o("div",{staticStyle:{"overflow-y":"auto"}},[t._v(t._s(t.annotation.description))])],1),o("v-flex",{staticStyle:{"flex-basis":"auto"},attrs:{xs12:""}}),o("v-flex",{staticStyle:{"flex-basis":"auto"},attrs:{"d-flex":"",xs12:""}},[o("v-layout",{attrs:{column:""}},[t.annotation.priority?o("v-flex",{staticStyle:{"text-align":"justify",flex:"0 1 auto","padding-bottom":"5px"},attrs:{xs12:"","d-flex":""}},[o("v-icon",{staticStyle:{"flex-grow":"0 !important","padding-right":"4px"},attrs:{color:"amber"}},[t._v("star")]),o("div",{staticStyle:{"line-height":"12px"}},[t._v("Hohe Priorität!")])],1):t._e(),o("v-flex",{attrs:{xs12:""}},[o("span",{staticClass:"body-1 grey--text text--lighten-1"},[t._v("\n                        Eingestellt"+t._s(t.$store.getters.userIsWorker?" von "+t.annotation.created_by:"")+" "+t._s(t.formatedDate)+"\n                      ")])]),t.annotation.tags?o("v-flex",{attrs:{xs12:""}},t._l(t.annotation.tags.split(","),function(e,n){return o("span",{key:n,staticClass:"body-1 grey--text text--lighten-1"},[o("a",{staticStyle:{"margin-right":"10px"}},[t._v(t._s("#"+e.trim()))])])}),0):t._e()],1)],1)],1)],1)],1),o("v-tab-item",[o("v-card-text",{staticClass:"text-xs-left"},[t._l(t.comments,function(e){return o("v-card",{key:e.id,attrs:{flat:""}},[o("v-card-title",{staticClass:"zero-padding",staticStyle:{"margin-bottom":"5px"},attrs:{"primary-title":""}},[o("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[o("v-avatar",{attrs:{size:"36",color:"indigo"}},[o("v-icon",{attrs:{dark:""}},[t._v("account_circle")])],1),o("div",{staticStyle:{"margin-left":"15px"}},[o("h3",{staticStyle:{"margin-bottom":"-5px"}},[t._v(t._s(e.user))]),o("span",{staticClass:"caption grey--text text--darken-1"},[t._v("vor 19 Stunden")])])],1)],1),o("v-card-text",{staticClass:"zero-padding"},[t._v("\n                  "+t._s(e.message)+"\n                ")]),o("v-divider")],1)}),o("v-text-field",{attrs:{box:"",placeholder:"Kommentar verfassen...","append-icon":"send"},on:{"click:append":t.addComment},model:{value:t.commentMessage,callback:function(e){t.commentMessage=e},expression:"commentMessage"}})],2)],1)],1)],1)],1),o("v-divider"),o("v-card-actions",[o("v-btn",{attrs:{flat:"",color:t.annotation.liked?"primary":""},on:{click:function(e){return e.stopPropagation(),t.toggleLike(e)}}},[t._v("\n        "+t._s(t.annotation.upvotes)+"\n        "),o("v-icon",{attrs:{right:""}},[t._v("thumb_up")])],1),o("v-btn",{attrs:{flat:"",icon:"",color:t.annotation.favorite?"primary":""},on:{click:function(e){return e.stopPropagation(),t.toggleFav(e)}}},[o("v-icon",[t._v(t._s(t.annotation.favorite?"notifications_active":"notifications"))])],1),o("v-btn",{attrs:{flat:"",icon:""}},[o("v-icon",[t._v("share")])],1),o("v-spacer"),"done"!==t.annotation.status?o("div",[t.$store.getters.userIsWorker?o("div",[t.annotation.assigned_to?o("div",[o("v-btn",{attrs:{flat:"",disabled:""}},[t._v("Zugewiesen an "+t._s(t.annotation.assigned_to))]),o("v-btn",{attrs:{flat:""},on:{click:t.done}},[t._v("Behoben")])],1):o("v-btn",{attrs:{flat:""},on:{click:function(e){t.$store.commit("assign",t.annotation.id)}}},[t._v("Sich selbst zuweisen")])],1):t.$store.state.currentUser.name===t.annotation.created_by?o("div",[o("v-btn",{attrs:{flat:""},on:{click:function(e){t.edit=!0}}},[t._v("Bearbeiten")]),o("v-btn",{attrs:{flat:""},on:{click:t.deleteAnnotation}},[t._v("Löschen")])],1):t._e()]):t._e()],1)],1)],1)},a=[],r=o("c1df"),i=o.n(r),s={name:"AnnotationCard",data:function(){return{commentMessage:"",edit:!1}},computed:{showDialog:{get:function(){return!!this.$store.getters.selectedAnnotation},set:function(t){t||this.$store.commit("selectAnnotation")}},annotation:function(){return this.$store.getters.selectedAnnotation||{}},comments:function(){return this.annotation.comments||[]},formatedDate:function(){return i()(this.annotation.created_at).locale("de").fromNow()}},methods:{addComment:function(){this.$store.commit("addComment",{id:this.annotation.id,message:this.commentMessage}),this.commentMessage=""},deleteAnnotation:function(){this.$store.commit("deleteAnnotation",this.annotation.id)},toggleLike:function(){this.$store.commit("like",this.annotation.id)},toggleFav:function(){this.$store.commit("fav",this.annotation.id)},done:function(){this.annotation.status="done",this.showDialog=!1}}},c=s,l=(o("c0c6"),o("2877")),u=Object(l["a"])(c,n,a,!1,null,"30202e92",null);e["a"]=u.exports},a9e7:function(t,e,o){},acae:function(t,e,o){},c0c6:function(t,e,o){"use strict";var n=o("db11"),a=o.n(n);a.a},d1b1:function(t,e,o){"use strict";var n=o("acae"),a=o.n(n);a.a},d6db:function(t,e,o){"use strict";var n=o("a9e7"),a=o.n(n);a.a},db11:function(t,e,o){},dc88:function(t,e,o){"use strict";var n=o("0d17"),a=o.n(n);a.a}});