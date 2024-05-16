document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.getElementById("hamburger");
    var menu = document.querySelector(".menu");
    var close = document.getElementById("close");

    hamburger.addEventListener("click", function() {
        menu.classList.toggle("top-[0%]")
    })

    close.addEventListener("click", function() {
        menu.classList.remove("top-[0%]");
    })
});
  