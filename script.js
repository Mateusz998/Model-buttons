'use strict';
const btnOpen = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');

function close() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnOpen.forEach(function (btnOpen) {
  btnOpen.addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
});
btnClose.addEventListener('click', open);
overlay.addEventListener('click', open);
