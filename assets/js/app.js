window.addEventListener("scroll", function () {
    const header = document.querySelector(".sticky-header");
    header.classList.toggle("sticky", window.scrollY > 100);
});
