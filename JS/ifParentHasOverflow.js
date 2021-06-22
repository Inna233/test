let parent = document.querySelector('#about').parentElement;
		
	while (parent) {
		const hasOverflow = getComputedStyle(parent).overflow;
		if (hasOverflow !== 'visible') {
			console.log(hasOverflow, parent);
		}
		parent = parent.parentElement;
	}	
