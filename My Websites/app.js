
(function (){
  let buttons = document.querySelectorAll(".btn");
  let StoreImage = document.querySelectorAll(".box-img");

  buttons.forEach((button) =>{
    button.addEventListener('click', (e) =>{
        e.preventDefault()
        let filter = e.target.dataset.filter

        StoreImage.forEach((items) =>{
            if (filter === 'all') {
                items.style.display="block" 
            } else {
                if(items.classList.contains(filter)){
                    items.style.display="block" 
                }
                else{
                    items.style.display="none" 
                }
            }
        })
    })
  })
})();

let slides = document.querySelectorAll('.slid-container');
let index = 0;

 setInterval(()=>{
     if(slides[0].classList.contains('active')){
        slides[1].classList.add('active')
         slides[0].classList.remove('active')
     }else if(slides[1].classList.contains('active')){
       slides[2].classList.add('active')
        slides[1].classList.remove('active')
     }else if(slides[2].classList.contains('active')){
        slides[3].classList.add('active')
         slides[2].classList.remove('active')
    }else if(slides[3].classList.contains('active')){
        slides[0].classList.add('active')
        slides[3].classList.remove('active')
    }
 },5000)

    function next(){
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
    }
    
    function prev(){
        slides[index].classList.remove('active');
        index = (index - 1 + slides.length) % slides.length;
        slides[index].classList.add('active');
    }
