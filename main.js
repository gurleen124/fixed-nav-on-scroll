let menu = document.getElementById('menu');
document.getElementById('toggle-btn').addEventListener("click", function () {
    toggleButton();
})

function toggleButton() {
    menu.classList.toggle('hidden');
}

let about = document.getElementById("about");
let nav = document.getElementById("nav");
window.addEventListener('scroll', function(){
    const scrollHeight = window.scrollY;
    const navHeight = nav.getBoundingClientRect().height;
    if (scrollHeight>navHeight) {
        nav.classList.add("fixed");
    }else(
        nav.classList.remove("fixed")
    )
})