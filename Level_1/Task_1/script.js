const menuBtn = document.querySelector(".menu-button");
const navList = document.querySelector(".nav-links");

menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navList.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if (!navList.contains(e.target) && !menuBtn.contains(e.target)) {
        navList.classList.remove("active");
    }
});
