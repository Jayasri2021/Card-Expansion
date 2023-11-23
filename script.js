const image = document.querySelectorAll('.image')

image.forEach(image => {
    image.addEventListener('click', () => {
        removeActiveClasses()
        image.classList.add('active')
    })
})

function removeActiveClasses() {
    image.forEach(image => {
        image.classList.remove('active')
    })
}