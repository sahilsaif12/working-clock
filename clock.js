const deg=6;
const hour=document.getElementById('hour')
const minute=document.getElementById('minute')
const second=document.getElementById('second')
const date=document.getElementById('date')
const time=document.getElementById('time')
setInterval(() => {
  const options = {year: 'numeric', month: 'short', day: 'numeric' };
    const d=new Date();
    const hh=d.getHours() * 30;
    const mm=d.getMinutes() * deg;
    const ss=d.getSeconds() * deg;

    hour.style.transform= `rotateZ(${(hh)+(mm/12)}deg)`;
    minute.style.transform= `rotateZ(${mm}deg)`;
    second.style.transform= `rotateZ(${ss}deg)`;
   
    date.innerHTML=`${d.toLocaleDateString(undefined,options)}`
    time.innerHTML=`${d.toLocaleTimeString()}`
});