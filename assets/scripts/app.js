const add = document.querySelector('#add-modal')
const button = document.querySelector('header').lastElementChild

button.addEventListener('click', e => {
add.classList.toggle('visible')
})
