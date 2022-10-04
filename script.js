let wrapper = document.querySelector('.popup-wrapper');
let close = document.querySelector('.close-btn');
let started = document.getElementById('get-started');

window.addEventListener('load', () => {
    setTimeout( () => {
      wrapper.classList.add('active');
    }, 2000);
});

wrapper.addEventListener('click', () => {
     wrapper.style.visibility = 'hidden'
});
close.addEventListener('click', () => {
     wrapper.style.visibility = "hidden"
});
started.addEventListener('click', () => {
     wrapper.style.visibility = 'hidden'
});