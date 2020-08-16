const bubble = document.querySelectorAll('.bubble');
const firstBlock = document.getElementById('scene');

const animItems = document.querySelectorAll('.anim-items');


if (animItems.length > 0) {
    anim()
    function anim(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            animItem.classList.add("active");
        }
    }
}