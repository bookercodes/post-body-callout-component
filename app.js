document.querySelectorAll(".callout button").forEach(button => {
    button.addEventListener("click", event => {
        const more = event.target.parentNode.querySelector(".more")
        const { display } = window.getComputedStyle(more)
        if (display === "none") {
            more.style.display = "block";
        } else {
            more.style.display = "none";
        }
    })
})