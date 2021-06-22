`
const links = document.querySelectorAll(".fusion-mobile-nav-holder .fusion-bottombar-highlight");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).getBoundingClientRect().top + scrollTop
    
    console.log("offsetTop:",offsetTop)

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}
`
