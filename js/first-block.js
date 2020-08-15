const bubble = document.querySelectorAll('.bubble');
const firstBlock = document.getElementById('scene');

const animItems = document.querySelectorAll('.anim-items');

document.addEventListener('mousemove' , parralax);

function parralax(e){
    this.querySelectorAll('.bubble').forEach(layer => {
        const speed = layer.getAttribute('data-speed');

        const x = (window.innerWidth - e.pageX * speed)/300;
        const y = (window.innerHeight - e.pageY * speed)/300;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}


if (animItems.length > 0) {
    anim()
    function anim(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            animItem.classList.add("active");
        }
    }
}