
const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const io=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      io.unobserve(entry.target);
    }
  });
},{threshold:.12,rootMargin:'0px 0px -40px'});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

let last=window.scrollY;
const header=document.querySelector('.site-header');
window.addEventListener('scroll',()=>{
  const y=window.scrollY;
  if(y>last && y>170) header?.classList.add('hidden');
  else header?.classList.remove('hidden');
  last=y;
},{passive:true});
