import{A as S}from"./AllWindow-af4bf8ec.js";import{_ as y,I,B as V,r as p,o as $,a as r,b as _,c as d,d as a,t as v,e as l,n as T,F as C,f as x,g as f,p as G,h as W,m as D,u as j,G as q,T as A,D as F,i as P,j as R,k as N}from"../js/site.js";import{P as E}from"./Price-bdf6cb11.js";const M={components:{Icons:I,BtnLearnMoreDark:V},setup(){const s=p(0),t=["https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/9f/8c/79f00daba1e3401fba2a3e91d7c1cd7c5d3ad36ad25c2616834560.jpg","https://upload.wikimedia.org/wikipedia/commons/1/1d/DFC_Sete_v_FNC_Douai_Coupe_de_la_Ligue_2014_t144334.jpg","https://ru.sport-wiki.org/wp-content/themes/sportwiki/img/water-polo.jpg"],o=e=>{t.length-1<s.value+e?s.value=0:s.value+e<0?s.value=t.length+e:s.value+=e};return $(()=>{window.setInterval(()=>{o(1)},1500)}),{currentImage:s,imagesGalery:t,slideImage:o}}},b=s=>(G("data-v-c9448ada"),s=s(),W(),s),X={class:"galery"},z=b(()=>a("h2",{class:"galery__title"},"Что же такое Водное поло?",-1)),Q=b(()=>a("p",{class:"galery__info"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum. Phasellus eu nibh lobortis, tincidunt nisi in, ornare leo. Donec hendrerit interdum mollis. Vestibulum consequat erat sapien, a pellentesque quam accumsan nec. Mauris ex ex, placerat sollicitudin nisi sed, pharetra cursus mauris. Ut pretium eros eget mauris tempor dictum. Aenean non lorem erat. Quisque a tristique lorem. ",-1)),U={class:"galery__check"},H={class:"check__block"},J={class:"block__num"},K={class:"num_btn"},O={class:"galery__indicator"},Y=b(()=>a("div",{class:"indicator__bg"},null,-1)),Z={class:"galery__visible-image"},ee=["src"],se=b(()=>a("img",{class:"visible__image",src:D},null,-1));function te(s,t,o,e,u,m){const i=r("Icons");return _(),d("div",X,[z,Q,a("nav",U,[a("div",H,[a("p",J,v(e.currentImage+1)+"/"+v(e.imagesGalery.length),1),a("div",K,[l(i,{icons:"arrow",style:{transform:"rotate(180deg)"},class:"btn__arrow",onClick:t[0]||(t[0]=n=>e.slideImage(-1))}),l(i,{icons:"arrow",class:"btn__arrow",onClick:t[1]||(t[1]=n=>e.slideImage(1))})])]),a("div",O,[Y,a("div",{class:"indicator__going",style:T({width:(e.currentImage+1)*(100/e.imagesGalery.length)+"%"})},null,4)])]),a("nav",Z,[(_(!0),d(C,null,x(e.imagesGalery,(n,c)=>(_(),d("img",{class:f(["visible__image",{visible__image__active:e.currentImage==c}]),src:n,key:c},null,10,ee))),128)),se])])}const ae=y(M,[["render",te],["__scopeId","data-v-c9448ada"]]);const oe={components:{Icons:I},setup(){const s=j(),t=p(1),o=p(),e=p(s.getters.getReviews),u=p(1600),m=p(0),i=p(0),n=p(window.innerWidth),c=w=>{t.value-1==w?h():t.value==w&&g()},g=()=>{t.value+=1,t.value>=e.value.length-1&&(t.value=1),o.value.style.transform=`translateX(-${i.value*(t.value-1)+m.value}px)`},h=()=>{t.value-=1,t.value<1&&(t.value=e.value.length-2),o.value.style.transform=`translateX(-${i.value*(t.value-1)+m.value}px)`};return $(()=>{e.value.push(e.value[e.value.length-1]),e.value.unshift(e.value[0]),i.value=o.value.children[0].clientWidth,window.innerWidth<=834&&(u.value=801),window.innerWidth<=390&&(u.value=480),u.value>=window.innerWidth&&(m.value=(u.value-window.innerWidth)/2,o.value.style.transform=`translateX(-${m.value}px)`)}),{store:s,reviews:e,activeElem:t,scrolCard:c,cardBlock:o,widthBlock:u,transformTranslate:i,scrolAdaptive:m,scrolLeft:h,windowWidth:n}}},ie=s=>(G("data-v-d4567f96"),s=s(),W(),s),ne={class:"reviews"},ce=ie(()=>a("h2",{class:"reviews__title"},"Отзывы",-1)),le={class:"reviews__block"},re={class:"block__card",ref:"cardBlock"},_e={class:"card__content"},de={class:"content__text"},ue={class:"content__name"},me=["onClick"];function pe(s,t,o,e,u,m){const i=r("Icons");return _(),d("main",ne,[ce,a("nav",le,[a("div",re,[(_(!0),d(C,null,x(e.reviews,(n,c)=>(_(),d("nav",{class:f(["card",{card__active:c==e.activeElem}]),key:c},[a("div",_e,[l(i,{icons:"quote",class:"content__icon"}),a("p",de,v(n.text),1),a("h3",ue,v(n.name),1)]),a("div",{class:f(["card__arrow__block",{card__arrow__previews:c==e.activeElem-1}]),onClick:g=>e.scrolCard(c)},[l(i,{icons:"arrow",class:"card__arrow"})],10,me)],2))),128))],512)])])}const ve=y(oe,[["render",pe],["__scopeId","data-v-d4567f96"]]);const ge={components:{Icons:I},setup(){const s=p(0),t=["https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/9f/8c/79f00daba1e3401fba2a3e91d7c1cd7c5d3ad36ad25c2616834560.jpg","https://upload.wikimedia.org/wikipedia/commons/1/1d/DFC_Sete_v_FNC_Douai_Coupe_de_la_Ligue_2014_t144334.jpg","https://ru.sport-wiki.org/wp-content/themes/sportwiki/img/water-polo.jpg"],o=e=>{t.length-1<s.value+e?s.value=0:s.value+e<0?s.value=t.length+e:s.value+=e};return $(()=>{window.setInterval(()=>{o(1)},1500)}),{currentImage:s,imagesGalery:t,slideImage:o}}},k=s=>(G("data-v-032ac5f4"),s=s(),W(),s),he={class:"carusel"},we=k(()=>a("h2",{class:"carusel__title"},"Наши юные звезды",-1)),fe={class:"carusel__check"},ye={class:"check__num"},be={class:"check_btn"},ke={class:"galery__indicator"},Ie=k(()=>a("div",{class:"indicator__bg"},null,-1)),$e={class:"galery__visible-image"},Ce=["src"],xe=k(()=>a("h3",{class:"carusel__title-info"},"Первая победа",-1)),Ge=k(()=>a("p",{class:"carusel__info"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum. Phasellus eu nibh lobortis, tincidunt nisi in, ornare leo. Donec hendrerit interdum mollis. Vestibulum consequat erat sapien, a pellentesque quam accumsan nec. ",-1));function We(s,t,o,e,u,m){const i=r("Icons");return _(),d("main",he,[we,a("nav",fe,[a("p",ye,v(e.currentImage+1)+"/"+v(e.imagesGalery.length),1),a("div",be,[l(i,{icons:"arrow",style:{transform:"rotate(180deg)"},class:"btn__arrow",onClick:t[0]||(t[0]=n=>e.slideImage(-1))}),l(i,{icons:"arrow",class:"btn__arrow",onClick:t[1]||(t[1]=n=>e.slideImage(1))})])]),a("nav",ke,[Ie,a("div",{class:"indicator__going",style:T({width:(e.currentImage+1)*(100/e.imagesGalery.length)+"%"})},null,4)]),a("nav",$e,[(_(!0),d(C,null,x(e.imagesGalery,(n,c)=>(_(),d("img",{class:f(["visible__image",{visible__image__active:e.currentImage==c}]),src:n,key:c},null,10,Ce))),128))]),xe,Ge])}const Te=y(ge,[["render",We],["__scopeId","data-v-032ac5f4"]]);const De={components:{AllWindow:S,Goals:q,TimeTable:A,DecorTrainerBlock:F,Gallery:ae,Reviews:ve,Carusel:Te,Trainers:P,Price:E},setup(){const s=j();return{store:s,allWindow:{title:"Детям",info:"Дорогие дети и родители, представляем вам захватывающий мир водного поло, где вашему ребенку откроются удивительные возможности развития и веселья в водной среде.",image:D},goals:{title:"Почему Мы?",cards:[{img:"https://ss.sport-express.ru/userfiles/materials/169/1699153/volga.jpg",title:"Пункт 1",des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum."},{img:"https://ss.sport-express.ru/userfiles/materials/169/1699153/volga.jpg",title:"Пункт 1",des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum."},{img:"https://ss.sport-express.ru/userfiles/materials/169/1699153/volga.jpg",title:"Пункт 1",des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit metus sit amet nisi lacinia condimentum."}]},trainers:R(()=>s.getters.getTrainers("children"))}}},je={class:"block__bg"},Be={class:"block__bg"};function Le(s,t,o,e,u,m){const i=r("AllWindow"),n=r("Gallery"),c=r("Goals"),g=r("Reviews"),h=r("Trainers"),w=r("TimeTable"),B=r("Price");r("DecorTrainerBlock");const L=r("Carusel");return _(),d("section",null,[l(i,{allWindow:e.allWindow},null,8,["allWindow"]),a("main",je,[l(n)]),l(c,{goals:e.goals},null,8,["goals"]),l(g),l(h,{trainers:e.trainers},null,8,["trainers"]),l(w,{category:"children"}),l(B,{category:"children"}),N("",!0),a("main",Be,[l(L)])])}const Ae=y(De,[["render",Le],["__scopeId","data-v-2067be78"]]);export{Ae as default};
