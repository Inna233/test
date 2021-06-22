# 点击a标签后跳转
## 1.  js scroll()
```
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
```
## 2. js scrollIntoView()
```
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
```
## 3. jquery
```
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
```
