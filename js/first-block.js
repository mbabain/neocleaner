const bubble = document.querySelectorAll('.bubble');
const firstBlock = document.getElementById('scene')

document.addEventListener('mousemove' , parralax);

function parralax(e){
    this.querySelectorAll('.bubble').forEach(layer => {
        const speed = layer.getAttribute('data-speed');

        const x = (window.innerWidth - e.pageX * speed)/300;
        const y = (window.innerHeight - e.pageY * speed)/300;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}