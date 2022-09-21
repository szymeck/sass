const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

const pageTransition = function(){
    // button click active
    for(let i=0;i<sectBtn.length;i++){
        sectBtn[i].addEventListener('click',function(){
            let currentBtn=document.querySelectorAll('.active-btn');
            currentBtn[0].className=currentBtn[0].className.replace('active-btn', '');
            this.className+=' active-btn'
        })
    }
};



// sections active
allSections.addEventListener('click', (e) =>{
    const id = e.target.dataset.id;
    if(id){
        
        sections.forEach((section)=>{
            section.classList.remove('active')
        })
        const element = document.getElementById(id);
        element.classList.add('active');
    }
});
pageTransition();

// toggle theme
const themeBtn=document.querySelector('.theme-btn');
themeBtn.addEventListener('click',()=>{
    let element=document.body;
    element.classList.toggle('light-mode');
})

document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        type  : 'loop',
        rewind: true,
        drag: 'free',
        snap:'true',
      } );
      
      splide.mount();
    
} );
// import Splide from '@splidejs/splide';
