# to check if en element has class "bbtclass"
* you could use `className` and `match`
```
if (element.className.match(/\bbtclass\b/)) {
    ....
}
```
* else you  could use `classList.contains()`
```
if (element.classList.contains('bttclass'){
    ....
}
```
Since IE8 is dead. IE in general is dead. This should be the way moving forward.
