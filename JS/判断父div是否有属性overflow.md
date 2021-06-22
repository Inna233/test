``` 判断父div是否有属性
	let parent = document.querySelector('#about').parentElement;
		
	while (parent) {
		const hasOverflow = getComputedStyle(parent).overflow;
		if (hasOverflow !== 'visible') {
			console.log(hasOverflow, parent);
		}
		parent = parent.parentElement;
	}	
```

# 判断父div是否有属性
(```)
    function fun(){
         echo "这是一句非常牛逼的代码";
    }
    fun();
(```)
