import{_ as g,I as m,r as l,o as k,a as d,b as _,c as p,d as e,e as i,F as w,f as y,q as I,w as b,s as x,t as v,p as C,h as $}from"../site.js";const B={components:{Icons:m},props:{progress:Array},setup(a){const t=l(a.progress),n=l(),s=l(0),o=l(3),u=()=>{s.value-=1,s.value<0&&(s.value=t.value.length-o.value),n.value.style.transform=`translateX(-${100/o.value*s.value}%)`},c=()=>{s.value+=1,s.value>t.value.length-o.value&&(s.value=0),n.value.style.transform=`translateX(-${100/o.value*s.value}%)`};return k(()=>{window.innerWidth>650?o.value=3:o.value=1}),{progress:t,carusel:n,current:s,clickLeft:u,clickRight:c,elemCarusel:o}}},S=a=>(C("data-v-f7d9f65c"),a=a(),$(),a),L={class:"progress"},N=S(()=>e("h2",{class:"progress__title"},"Наши достижения",-1)),P={class:"progress__block"},V={class:"block__carusel"},D={class:"carusel__item",ref:"carusel"},F={class:"item__content"},R=["src"],X={class:"content__about"},q={class:"item__data"},A={class:"item__title"};function E(a,t,n,s,o,u){const c=d("Icons"),f=d("router-link");return _(),p("main",L,[N,e("div",P,[i(c,{icons:"arrow",style:{transform:"rotate(180deg)"},class:"block__arrow",onClick:t[0]||(t[0]=r=>s.clickLeft())}),e("nav",V,[e("div",D,[(_(!0),p(w,null,y(s.progress,(r,h)=>(_(),I(f,{to:"/",class:"item",key:h},{default:b(()=>[e("div",F,[e("img",{src:r.src,class:"content__img"},null,8,R),e("h4",X,[x(" Подробнее "),i(c,{icons:"arrowDefault",class:"about__arrow"})])]),e("h6",q,v(r.data),1),e("h5",A,v(r.title),1)]),_:2},1024))),128))],512)]),i(c,{icons:"arrow",class:"block__arrow",onClick:t[1]||(t[1]=r=>s.clickRight())})])])}const T=g(B,[["render",E],["__scopeId","data-v-f7d9f65c"]]);export{T as P};