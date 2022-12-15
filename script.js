const btn = document.querySelector('button')
const menu = document.querySelector('.nav-mobile')

btn.addEventListener('click', function () {
    menu.classList.toggle('-mr-[100%]')
})
