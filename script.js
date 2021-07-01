let panels = document.querySelectorAll('.panel');
console.log(panels);

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveElement();
        panel.classList.add('active');

    })
})

function removeActiveElement() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}