const imagenes = document.querySelectorAll('img');

anime({
    targets: 'h1',
    scale: [0.9, 1],
    duration: 1000,
})
/*
imagenes.forEach((e) =>{
    e.addEventListener('mouseover', () => {
        anime({
            targets: 'img',
            rotate: 15,
        })
    })

    e.addEventListener('mouseout', () => {
        anime({
            targets: 'img',
            rotate: 0,
        })
    })
}) */
