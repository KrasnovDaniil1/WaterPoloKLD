import{_ as d,v as p,u as l,j as g,a as u,b as c,c as n,F as f,f as h,d as e,t as o,e as m}from"../js/site.js";const v={components:{BtnSignTraining:p},props:{category:{typeof:String,default:"children"}},setup(a){const s=l();return{store:s,price:g(()=>s.getters.getPrice(a.category))}}},y={class:"price"},k={class:"card__title"},B={class:"card__block"},S={class:"block__info"},b={class:"block__price"};function x(a,s,P,r,T,$){const _=u("BtnSignTraining");return c(),n("main",y,[(c(!0),n(f,null,h(r.price,(t,i)=>(c(),n("div",{class:"card",key:i},[e("h1",k,o(t.title),1),e("nav",B,[e("p",S,o(t.info),1),e("p",b,o(t.cost)+" ₽",1)]),m(_,{class:"btn"})]))),128))])}const N=d(v,[["render",x],["__scopeId","data-v-4d300002"]]);export{N as P};
