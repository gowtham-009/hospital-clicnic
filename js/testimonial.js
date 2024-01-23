let setpositiont=0;
const sliderst=document.querySelectorAll('.t-slider-item');
const totalt=sliderst.length;
const prevbtnt=document.querySelector('#prevbtn-t') ;
const nextbtnt=document.querySelector('#nextbtn-t') ;
nextbtnt.addEventListener('click',function(){
    nextslidet()
})
prevbtnt.addEventListener('click',function(){
  prevslidet()
})
function sliderupdation(){
    sliderst.forEach(slide =>{
        slide.classList.remove('active-t')
    })
    sliderst[setpositiont].classList.add('active-t')
}

function nextslidet(){
    if(setpositiont===totalt-1){
        setpositiont=0;
    }
    else{
        setpositiont++
      
    }
    sliderupdation()
}
function prevslidet(){
    if(setpositiont===0){
        setpositiont=totalt-1;
    }
    else{
        setpositiont--
      
    }
    sliderupdation()
}