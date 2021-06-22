# 点击a标签后平滑滚动至锚点
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
似乎在ios Safari上无法平滑滚动
## 2. js scrollIntoView()
```
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
```
visit [How to scroll an element into view with vanilla JS ](https://gomakethings.com/how-to-scroll-an-element-into-view-with-vanilla-js/)    
scrollIntoViewOptions不兼容ios Safari
## 3. jquery
```
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
```

