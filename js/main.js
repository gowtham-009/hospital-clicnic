const locat=document.querySelector('#map');
const canva=document.querySelector('#maping-canva');
const dispose=document.querySelector('#close');
locat.addEventListener('click',()=>{
    canva.classList.add('show')
}
 )
dispose.addEventListener('click',()=>{
    canva.classList.remove('show')
})


//navlinks
const menu=document.querySelector('#menu-bar');
const navlinks=document.querySelector('#nav');
menu.addEventListener('click',()=>{
    navlinks.classList.toggle('show')
})
//numbers running
let count=0;
let end=123;

function myfunction1(){
    if(count<=end){
        document.getElementById('fs-value-1').innerHTML=count;
        count++;
    }
}
setInterval(myfunction1,10)

let count2=0;
let sec_end=1234;
function myfunction2(){
    if(count2<=sec_end){
        document.getElementById('fs-value-2').innerHTML=count2;
        count2++;
    }
}
setInterval(myfunction2,10)

let count3=0;
let third_end=1234;
function myfunction3(){
    if(count3<=third_end){
        document.getElementById('fs-value-3').innerHTML=count2;
        count3++;
    }
}
setInterval(myfunction3,10)

//carsoule
let setposition=0;
const slider=document.querySelectorAll('.slider-item');
const total_slider=slider.length;
const prevbtn=document.querySelector('#prev');
const nextbtn=document.querySelector('#next');

prevbtn.addEventListener('click',function(){
 prevslide()
})
nextbtn.addEventListener('click',function(){
    nextslide()
})
function updateslider(){
 slider.forEach(slide=>{
    slide.classList.remove('active')
 } )
 slider[setposition].classList.add('active')
 points.forEach(dash=>{
    dash.classList.remove('dot-active')
 })
 points[setposition].classList.add('dot-active')

}
function nextslide(){
    if(setposition===total_slider-1){
        setposition=0;
    }
    else{
        setposition++
    }
    updateslider()
}
function prevslide(){
    if(setposition===0){
        setposition=total_slider-1
    }
    else{
        setposition--
    }
    updateslider()
}
const dotcontainers=document.querySelector('.dot-navigator');
slider.forEach(dot=>{
  const dots=document.createElement('div');
  dots.classList.add('doting');
  dotcontainers.appendChild(dots);

})
const points=document.querySelectorAll('.doting');
points[setposition].classList.add('dot-active')
points.forEach((das,index)=>{
    das.addEventListener('click',function(){
        setposition=index
        updateslider()
    })
})
//readmore
const read_more=document.querySelector('#read');
const show=document.querySelector('#shw');
const close=document.querySelector('#dispose')
read_more.addEventListener('click',function(){
show.classList.toggle('sh-show')
})
close.addEventListener('click',function(){
    show.classList.remove('sh-show')
})


