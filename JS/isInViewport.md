# 判断元素是否完全进入视口
```
var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

var findMe = document.querySelector('#find-me');

window.addEventListener('scroll', function (event) {
	if (isInViewport(findMe)) {
		console.log('In viewport!');
	} else {
    console.log('Nope...');
  }
}, false);
```
链接[vanlilla javascript](https://vanillajstoolkit.com/helpers/isinviewport/)
