const buyBtns = document.querySelectorAll('.js-modal-ticket')
const modal = document.querySelector('.js-modal')
const closeModal = document.querySelector('.js-close-modal')
const modalContainer = document.querySelector('.js-modal-container')
var menu = document.getElementById('js-menubar')
var header = document.getElementById('js-header')
var heightMenu = header.clientHeight;
function addOpenModal() {
    modal.classList.add('open-modal')
}

function hideOpenModal() {
    modal.classList.remove('open-modal')
}


for(const buyBtn of buyBtns){
    buyBtn.addEventListener("click",addOpenModal)
}

closeModal.addEventListener("click",hideOpenModal)
modal.addEventListener("click",hideOpenModal)
modalContainer.addEventListener("click",function (event) {
    event.stopPropagation()
}); 

menu.onclick = function() {
    
   var isOpen = header.clientHeight === heightMenu;
    if(isOpen){
        header.style.height = 'auto';
    }else{
        header.style.height = null;
    }
}
  