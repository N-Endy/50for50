
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
const image = document.getElementById('img')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
    changeImages()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
    changeImages()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}

function changeImages() {
    let images = [
        'url(img/image1.jpeg)',
        'url(img/image2.jpeg)',
        'url(img/image3.jpeg)',
        'url(img/image4.jpeg)'
    ]

    circles.forEach((circle, idx) => {
        if(currentActive > 1) {
            image.style.background = images[currentActive - 1] + 'no-repeat center center/cover';
        } else if(currentActive === 1) {
            image.style.background = 'url(img/image1.jpeg)';
        }
    })
}
