import{_ as $,a as b,b as I,c as L,e as h,w as W,s as V,z as U,d as l,t as x,E as w,I as Z,m as G,p as q,h as K}from"../site.js";const J={setup(){}},Q={class:"btn-to-main"};function X(e,t,o,n,a,r){const i=b("router-link");return I(),L("button",Q,[h(i,{to:"/"},{default:W(()=>[V("На главную")]),_:1})])}const Y=$(J,[["render",X],["__scopeId","data-v-91e9cd73"]]);const tt={props:{allWindow:Object},components:{BtnSignTraining:U,BtnToMainLight:Y},setup(){}},et={class:"block"},nt=["src"],ot={class:"block__title"},at={class:"block__info"},rt={class:"block__btn"};function st(e,t,o,n,a,r){const i=b("BtnSignTraining"),u=b("BtnToMainLight");return I(),L("main",et,[l("img",{class:"block__img",src:o.allWindow.image},null,8,nt),l("h1",ot,x(o.allWindow.title),1),l("p",at,x(o.allWindow.info),1),l("div",rt,[h(i,{class:"btn__left"}),h(u)])])}const it=$(tt,[["render",st],["__scopeId","data-v-8c656a34"]]);function F(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),o.push.apply(o,n)}return o}function B(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?F(Object(o),!0).forEach(function(n){lt(e,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):F(Object(o)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))})}return e}function E(e){return(E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function ct(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function lt(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function ut(e){return function(t){if(Array.isArray(t))return T(t)}(e)||function(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(e)||function(t,o){if(t){if(typeof t=="string")return T(t,o);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(t,o)}}(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function T(e,t){(t==null||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function N(e,t){var o=t.options,n=t.callbacks,a=t.map,r=t.useObjectManager,i=t.objectManagerClusterize,u=t.useHtmlInLayout?`
    <div v-html="properties.balloonContentHeader"></div>
    <div v-html="properties.balloonContentBody"></div>
    <div v-html="properties.balloonContentFooter"></div>
  `:`
    <div>{{ properties.balloonContentHeader }}</div>
    <div>{{ properties.balloonContentBody }}</div>
    <div>{{ properties.balloonContentFooter }}</div>
  `,c={},p=[];if(e.forEach(function(d){d.clusterName?c[d.clusterName]=c[d.clusterName]?[].concat(ut(c[d.clusterName]),[d]):[d]:p.push(d)}),Object.keys(c).forEach(function(d){var s=o[d]||{},f=n[d]||{},y=s.layout||u;s.clusterBalloonItemContentLayout=ymaps.templateLayoutFactory.createClass(y);var C=s.clusterBalloonLayout||s.clusterLayout;delete s.clusterBalloonLayout;var S=C?ymaps.templateLayoutFactory.createClass(C):s.clusterBalloonContentLayout||"cluster#balloonTwoColumns";s.clusterBalloonContentLayout=S;var M=s.clusterIconContentLayout;if(s.clusterIconContentLayout=M&&ymaps.templateLayoutFactory.createClass(M),r){var k=new ymaps.ObjectManager(Object.assign({clusterize:i},s));Object.keys(f).forEach(function(v){k.clusters.events.add(v,f[v])}),k.add(c[d]),a.geoObjects.add(k)}else{var j=new ymaps.Clusterer(s);Object.keys(f).forEach(function(v){j.events.add(v,f[v])}),s.createCluster&&(j.createCluster=s.createCluster),j.add(c[d]),a.geoObjects.add(j)}}),p.length){var m=r?new ymaps.ObjectManager({clusterize:!1}):new ymaps.GeoObjectCollection;p.forEach(function(d){return m.add(d)}),a.geoObjects.add(m)}}function H(e){return e.charAt(0).toUpperCase()+e.slice(1)}function dt(e){return(e.icon.color||"blue")+(e.icon.glyph?H(e.icon.glyph):e.icon.content?"Stretchy":"")}function R(e){return e.map(function(t){return Array.isArray(t)?R(t):+t})}function pt(e,t){var o=[];return function n(a,r){if(a===r)return!0;if(a instanceof Date&&r instanceof Date)return+a==+r;if(E(a)!=="object"||E(r)!=="object")return!1;if(function(c,p){for(var m=o.length;m--;)if(!(o[m][0]!==c&&o[m][0]!==p||o[m][1]!==p&&o[m][1]!==c))return!0;return!1}(a,r))return!0;o.push([a,r]);var i=Object.keys(a),u=i.length;if(Object.keys(r).length!==u)return!1;for(;u--;)if(!n(a[i[u]],r[i[u]]))return!1;return!0}(e,t)}var g=new(function(){function e(){(function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")})(this,e),this.events={},this.ymapReady=!1,this.scriptIsNotAttached=!0}var t,o;return t=e,(o=[{key:"$on",value:function(n,a){var r=this;return this.events[n]||(this.events[n]=[]),this.events[n].push(a),function(){r.events[n]=r.events[n].filter(function(i){return a!==i})}}},{key:"$emit",value:function(n,a){var r=this.events[n];r&&r.forEach(function(i){return i(a)})}}])&&ct(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}()),mt=["fullscreenControl","geolocationControl","routeEditor","rulerControl","searchControl","trafficControl","typeSelector","zoomControl","routeButtonControl","routePanelControl"];function z(e){return e.filter(function(t){return![].concat(mt,["default"]).includes(t)}).length===0}function ht(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise(function(t,o){if(window.ymaps)return t();if(document.getElementById("vue-yandex-maps"))g.$on("scriptIsLoaded",t);else{var n=document.createElement("SCRIPT"),a=e.apiKey,r=a===void 0?"":a,i=e.lang,u=i===void 0?"ru_RU":i,c=e.version,p=c===void 0?"2.1":c,m=e.coordorder,d=m===void 0?"latlong":m,s=e.debug,f=s!==void 0&&s,y=e.enterprise,C=y!==void 0&&y,S=f?"debug":"release",M="lang=".concat(u).concat(r&&"&apikey=".concat(r),"&mode=").concat(S,"&coordorder=").concat(d),k="https://".concat(C?"enterprise.":"","api-maps.yandex.ru/").concat(p,"/?").concat(M);n.setAttribute("src",k),n.setAttribute("async",""),n.setAttribute("defer",""),n.setAttribute("id","vue-yandex-maps"),document.head.appendChild(n),g.scriptIsNotAttached=!1,n.onload=function(){ymaps.ready(function(){g.ymapReady=!0,g.$emit("scriptIsLoaded"),t()})},n.onerror=o}})}var ft,P=1,A=g,yt=["actionend","balloonclose","balloonopen","click","contextmenu","dblclick","destroy","hintclose","hintopen","optionschange","sizechange","typechange"],O={pluginOptions:{},provide:function(){var e,t,o,n,a,r,i=this,u=[],c=[];return this.balloonComponent!=null&&(n=this.balloonComponent,a=null,r="vue-balloon-".concat(P),P+=1,o=function(p,m){var d=ymaps.templateLayoutFactory.createClass('<div id="'.concat(r,'"><div>'),{build:function(){d.superclass.build.call(this),(a=new ft({parent:p.$root,data:function(){return{props:p.$props,listeners:p.$listeners}},propsData:{marker:m,component:n}})).$mount("#".concat(r))},clear:function(){a.$destroy(),a=null,d.superclass.clear.call(this)}});return d}),{useObjectManager:this.useObjectManager,addMarker:this.addMarker,deleteMarker:function(p){i.myMap.geoObjects&&(u.push(p),e&&clearTimeout(e),e=setTimeout(function(){i.deleteMarkers(u),u=[]},0))},compareValues:function(p){var m=p.newVal,d=p.oldVal,s=p.marker;pt(m,d)||(c.push(s),t&&clearTimeout(t),t=setTimeout(function(){i.setMarkers(c),c=[]},0))},makeComponentBalloonTemplate:o}},data:function(){return{ymapId:"yandexMap".concat(Math.round(1e5*Math.random())),style:this.ymapClass?"":"width: 100%; height: 100%;",isReady:!1,debounce:null}},props:{coords:{type:Array,required:!0},zoom:{validator:function(e){return!Number.isNaN(e)},default:18},bounds:Array,clusterOptions:{type:Object,default:function(){return{}}},clusterCallbacks:{type:Object,default:function(){return{}}},behaviors:{type:Array,default:function(){return["default"]}},controls:{type:Array,default:function(){return["default"]},validator:function(e){return z(e)}},detailedControls:{type:Object,validator:function(e){return z(Object.keys(e))}},scrollZoom:{type:Boolean,default:!0},mapType:{type:String,default:"map",validator:function(e){return["map","satellite","hybrid"].includes(e)}},placemarks:{type:Array,default:function(){return[]}},useObjectManager:{type:Boolean,default:!1},objectManagerClusterize:{type:Boolean,default:!0},ymapClass:String,initWithoutMarkers:{type:Boolean,default:!0},debug:{type:Boolean,default:!1},settings:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}},mapEvents:{type:Array,default:function(){return[]}},showAllMarkers:Boolean,disablePan:Boolean,balloonComponent:{type:[Object,Function],default:function(){return null}},useHtmlInLayout:Boolean},computed:{coordinates:function(){return this.coords.map(function(e){return+e})}},methods:{init:function(){var e,t,o=this;this.myMap={},this.markers=[],window.ymaps&&ymaps.GeoObjectCollection&&(this.initWithoutMarkers||(e=(t=this.$slots).default)!==null&&e!==void 0&&e.call(t)||this.placemarks.length)&&document.getElementById(this.ymapId)&&(this.$emit("map-initialization-started"),this.myMap=new ymaps.Map(this.ymapId,{center:this.coordinates,zoom:+this.zoom,bounds:this.bounds,behaviors:this.behaviors,controls:this.controls,type:"yandex#".concat(this.mapType)},this.options),(this.mapEvents.length?this.mapEvents:yt).forEach(function(n){return o.myMap.events.add(n,function(a){return o.$emit(n,a)})}),this.myMap.events.add("boundschange",function(n){var a=n.originalEvent,r=a.newZoom,i=a.newCenter,u=a.newBounds;o.$emit("boundschange",n),o.$emit("update:zoom",r),o.$emit("update:coords",i),o.$emit("update:bounds",u)}),this.detailedControls&&Object.keys(this.detailedControls).forEach(function(n){o.myMap.controls.remove(n),o.myMap.controls.add(n,o.detailedControls[n])}),this.scrollZoom===!1&&this.myMap.behaviors.disable("scrollZoom"),this.isReady=!0,this.$emit("map-was-initialized",this.myMap))},addMarker:function(e){var t=this;this.markers.push(e),this.debounce&&clearTimeout(this.debounce),this.debounce=setTimeout(function(){t.setMarkers(t.markers)},0)},setMarkers:function(e){var t=this,o={options:this.clusterOptions,callbacks:this.clusterCallbacks,map:this.myMap,useObjectManager:this.useObjectManager,objectManagerClusterize:this.objectManagerClusterize,useHtmlInLayout:this.useHtmlInLayout};if(this.markers!==e){var n=e.map(function(a){return t.useObjectManager?a.id:a.properties.get("markerId")});this.deleteMarkers(n),N(e,o),this.$emit("markers-was-change",n)}else N(e,o);this.markers=[],this.showAllMarkers&&this.myMap.setBounds(this.myMap.geoObjects.getBounds())},deleteMarkers:function(e){var t=this,o=[];this.myMap.geoObjects.each(function(n){return o.push(n)}),o.forEach(function(n){var a=[];if(t.useObjectManager)n.remove(e);else{var r,i=function(c){var p=c.properties.get("markerId");e.includes(p)&&a.push(c)};if(n.each)n.each(i),r=n.getLength();else if(n.getGeoObjects){var u=n.getGeoObjects();u.forEach(i),r=u.length}r===0||r===a.length?t.myMap.geoObjects.remove(n):a.length&&a.forEach(function(c){return n.remove(c)})}}),this.$emit("markers-was-delete",e)}},watch:{coordinates:function(e){this.myMap&&(this.disablePan?this.myMap.setCenter&&this.myMap.setCenter(e):this.myMap.panTo&&this.myMap.getZoom()&&this.myMap.panTo(e,{checkZoomRange:!0}))},zoom:function(){this.myMap.setZoom(this.zoom)},bounds:function(e){this.myMap.setBounds&&this.myMap.setBounds(e)}},render:function(){var e,t;return w("section",{class:"ymap-container",ref:"mapContainer"},[w("div",{id:this.ymapId,class:this.ymapClass,style:this.style}),this.isReady&&w("div",[(e=(t=this.$slots).default)===null||e===void 0?void 0:e.call(t)])])},mounted:function(){var e=this;if(this.$attrs["map-link"]||this.$attrs.mapLink)throw new Error("Vue-yandex-maps: Attribute mapLink is not supported. Use settings.");if(this.placemarks&&this.placemarks.length)throw new Error("Vue-yandex-maps: Attribute placemarks is not supported. Use marker component.");this.mapObserver=new MutationObserver(function(){e.myMap.container&&e.myMap.container.fitToViewport()});var t=this.$refs.mapContainer;if(this.mapObserver.observe(t,{attributes:!0,childList:!0,characterData:!0,subtree:!1}),A.scriptIsNotAttached){var o=this.debug;ht(B(B(B({},this.$options.pluginOptions),this.settings),{},{debug:o}))}A.ymapReady?ymaps.ready(this.init):A.$on("scriptIsLoaded",this.init)},beforeUnmount:function(){var e;(e=this.myMap)!==null&&e!==void 0&&e.geoObjects&&this.myMap.geoObjects.removeAll()}},_t=["placemark","polyline","rectangle","polygon","circle"],bt=["balloonclose","balloonopen","click","contextmenu","dblclick","drag","dragend","dragstart","hintclose","hintopen","mouseenter","mouseleave"],D={inject:["useObjectManager","addMarker","deleteMarker","compareValues","makeComponentBalloonTemplate"],props:{coords:Array,hintContent:String,icon:Object,balloon:Object,markerType:{type:String,validator:function(e){return _t.includes(e.toLowerCase())},default:"placemark"},markerFill:Object,markerStroke:Object,clusterName:[String,Number],circleRadius:{validator:function(e){return!Number.isNaN(e)},default:1e3},balloonTemplate:String,markerId:{type:[String,Number],required:!0},properties:Object,options:Object,balloonComponentProps:{type:Object,default:function(){return{}}},markerEvents:{type:Array,default:function(){return[]}}},data:function(){return{unwatchArr:[]}},render:function(){return this.$slots.balloon&&w("div",{style:"display: none;"},[this.$slots.balloon()])},mounted:function(){var e=this;Object.keys(this.$props).forEach(function(t){t!=="balloonComponentProps"&&e.unwatchArr.push(e.$watch(t,function(o,n){return e.compareValues({newVal:o,oldVal:n,marker:e.defineMarker()})}))}),this.addMarker(this.defineMarker())},methods:{defineMarker:function(){var e=this,t={markerId:this.markerId,markerType:this.markerType||"placemark",coords:R(this.coords),hintContent:this.hintContent,markerFill:this.markerFill,circleRadius:+this.circleRadius,clusterName:this.clusterName,markerStroke:this.markerStroke,balloon:this.balloon,properties:this.properties,options:this.options,balloonOptions:{}},o=null;this.balloonTemplate&&(o=ymaps.templateLayoutFactory.createClass(this.balloonTemplate)),this.$slots.balloon&&(o=ymaps.templateLayoutFactory.createClass(this.$slots.balloon()[0].elm.outerHTML)),this.makeComponentBalloonTemplate&&(o=this.makeComponentBalloonTemplate(this,t)),o!=null&&(t.balloonOptions.balloonContentLayout=o),this.icon&&["default#image","default#imageWithContent"].includes(this.icon.layout)?(t.iconContent=this.icon.content,t.iconLayout=this.icon.layout,t.iconImageHref=this.icon.imageHref,t.iconImageSize=this.icon.imageSize,t.iconImageOffset=this.icon.imageOffset,t.iconContentOffset=this.icon.contentOffset,this.icon.contentLayout&&typeof this.icon.contentLayout=="string"&&(t.iconContentLayout=ymaps.templateLayoutFactory.createClass(this.icon.contentLayout))):t.icon=this.icon;var n=function(s,f){var y=H(s);if(!f)return y;switch(y){case"Placemark":return"Point";case"Polyline":return"LineString";default:return y}}(t.markerType,this.useObjectManager),a={hintContent:t.hintContent,iconContent:t.icon?t.icon.content:t.iconContent,markerId:t.markerId},r=t.balloon?{balloonContentHeader:t.balloon.header,balloonContentBody:t.balloon.body,balloonContentFooter:t.balloon.footer}:{},i=Object.assign(a,r,t.properties),u=t.iconLayout?{iconLayout:t.iconLayout,iconImageHref:t.iconImageHref,iconImageSize:t.iconImageSize,iconImageOffset:t.iconImageOffset,iconContentOffset:t.iconContentOffset,iconContentLayout:t.iconContentLayout}:{preset:t.icon&&"islands#".concat(dt(t),"Icon")},c=t.markerStroke?{strokeColor:t.markerStroke.color||"0066ffff",strokeOpacity:parseFloat(t.markerStroke.opacity)>=0?parseFloat(t.markerStroke.opacity):1,strokeStyle:t.markerStroke.style,strokeWidth:parseFloat(t.markerStroke.width)>=0?parseFloat(t.markerStroke.width):1}:{},p=t.markerFill?{fill:t.markerFill.enabled||!0,fillColor:t.markerFill.color||"0066ff99",fillOpacity:parseFloat(t.markerFill.opacity)>=0?parseFloat(t.markerFill.opacity):1,fillImageHref:t.markerFill.imageHref||""}:{},m=Object.assign(u,c,p,t.balloonOptions,t.options);n==="Circle"&&(t.coords=[t.coords,t.circleRadius]);var d=function(s,f){var y=f?{type:"Feature",id:s.properties.markerId,geometry:{type:s.markerType,coordinates:s.coords},properties:s.properties,options:s.options}:new ymaps[s.markerType](s.coords,s.properties,s.options);return y.clusterName=s.clusterName,y}({properties:i,options:m,markerType:n,coords:t.coords,clusterName:t.clusterName},this.useObjectManager,this.$emit);return this.useObjectManager||(this.markerEvents.length?this.markerEvents:bt).forEach(function(s){return d.events.add(s,function(f){return e.$emit(s,f)})}),d}},beforeUnmount:function(){this.unwatchArr.forEach(function(e){return e()}),this.deleteMarker(this.markerId)}};O.install=function e(t){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};e.installed||(e.installed=!0,O.pluginOptions=o,t.component("yandex-map",O),t.component("ymap-marker",D))},typeof window<"u"&&window.Vue&&window.Vue.use(O);var kt=O,vt=D;const gt={props:{coords:{type:Array}},components:{yandexMap:kt,ymapMarker:vt},setup(){return{settings:{apiKey:"",lang:"ru_RU",coordorder:"latlong",enterprise:!1,version:"2.1"}}}},Ot={class:"map"};function Ct(e,t,o,n,a,r){const i=b("ymapMarker"),u=b("yandexMap");return I(),L("div",Ot,[h(u,{coords:o.coords,zoom:12,settings:n.settings,behaviors:["drag","scrollZoom"],controls:[]},{default:W(()=>[h(i,{coords:o.coords,"marker-id":"123","hint-content":"some hint"},null,8,["coords"])]),_:1},8,["coords","settings"])])}const Mt=$(gt,[["render",Ct],["__scopeId","data-v-3b84d28d"]]);const jt={components:{Window:it,Map:Mt,Icons:Z},setup(){return{allWindow:{title:"Контакты",info:"Не стесняйтесь связаться с нами для любых вопросов, комментариев или запросов. Мы готовы делиться радостью водных приключений с вами!",image:G}}}},_=e=>(q("data-v-2b745b43"),e=e(),K(),e),wt={class:"contacts"},$t={class:"contacts__content"},It=_(()=>l("h2",{class:"content__title-sm"},"Как нас найти",-1)),Lt={class:"content__block"},St=_(()=>l("h2",{class:"block__title"},[V(" Как нас "),l("p",{class:"block__title-break"},"найти")],-1)),Bt={class:"link__block"},Tt={class:"block__item"},At=_(()=>l("h3",{class:"item__title"},"Контакты",-1)),Et={href:"#",class:"item__link"},xt=_(()=>l("span",{class:"link__text"},"+7 888 888 88 88",-1)),Ft={href:"#",class:"item__link"},Nt=_(()=>l("span",{class:"link__text"},"waterpolo@gmail.com",-1)),zt={class:"block__item"},Pt=_(()=>l("h3",{class:"item__title"},"Адрес",-1)),Wt={href:"#",class:"item__link"},Vt=_(()=>l("span",{class:"link__text"},"Тихоокеанская улица, 5",-1)),Ht={href:"#",class:"item__link"},Rt=_(()=>l("span",{class:"link__text"},"08:00 - 22:00",-1)),Dt={class:"block__item"},Ut=_(()=>l("h3",{class:"item__title"},"Социальные сети",-1)),Zt={class:"item__nav"},Gt={href:"#",class:"nav__link"},qt={href:"#",class:"nav__link"},Kt={href:"#",class:"nav__link"};function Jt(e,t,o,n,a,r){const i=b("Window"),u=b("Map"),c=b("Icons");return I(),L("section",wt,[h(i,{allWindow:n.allWindow},null,8,["allWindow"]),l("main",$t,[It,h(u,{coords:[54.720657,20.351297],class:"content__map"}),l("nav",Lt,[St,l("nav",Bt,[l("div",Tt,[At,l("a",Et,[h(c,{icons:"phone",class:"link__icon"}),xt]),l("a",Ft,[h(c,{icons:"email",class:"link__icon"}),Nt])]),l("div",zt,[Pt,l("a",Wt,[h(c,{icons:"location",class:"link__icon"}),Vt]),l("a",Ht,[h(c,{icons:"clock",class:"link__icon"}),Rt])]),l("div",Dt,[Ut,l("nav",Zt,[l("a",Gt,[h(c,{icons:"vk",class:"link__icon"})]),l("a",qt,[h(c,{icons:"telegram",class:"link__icon"})]),l("a",Kt,[h(c,{icons:"youtube",class:"link__icon"})])])])])])])])}const Xt=$(jt,[["render",Jt],["__scopeId","data-v-2b745b43"]]);export{Xt as default};