const section = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('main-content');

const pageTransition = function(){
    // button click active
    for(let i=0;i<secBtn.length;i++){
        secBtn[i].addEventListener('click',function(){
            let currentBtn=document.querySelectorAll('.active-btn');
            currentBtn[0].className=currentBtn[0].className.replace('active-btn','');
            this.className+='active-btn'
        })
    }
}
pageTransition();