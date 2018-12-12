let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let selectPlanButtons = document.querySelectorAll('.plan button');
let modalNo = document.querySelector('.modal__action--negative');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');


for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', () => {
    modal.classList.add('open');
    backdrop.classList.add('open');
  })
}

backdrop.addEventListener('click', function () {
  mobileNav.classList.remove('open');
  closeModal();
});

if (modalNo) {
  modalNo.addEventListener('click', closeModal);
}

function closeModal() {
 if (modal) {
    modal.classList.remove('open');
  }
  backdrop.classList.remove('open');
}

function showModal() {
  modal.style.display = 'block';
  backdrop.style.display = 'block';
}

toggleButton.addEventListener('click', function() {
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
})