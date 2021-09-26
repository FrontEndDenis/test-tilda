// Анимации
export function animateCSS(element, animation) {
	return new Promise((resolve) => {
		const animationName = animation,
			node = (element.nodeType === 1) ? element : document.querySelector(element);

		node.classList.add(...animationName.split(' '));

		function handleAnimationEnd() {
			node.classList.remove(...animationName.split(' '));
			resolve('End');
		}

		node.addEventListener('animationend', handleAnimationEnd, { once: true });
	});
}