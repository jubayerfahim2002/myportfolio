
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
