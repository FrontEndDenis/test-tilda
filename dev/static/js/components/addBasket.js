import { animateCSS } from "./animation";

export default function addBasket(title) {
	const $btn = this,
		  $basket = document.querySelector('.header__basket'),
		  showBage = () => $basket.insertAdjacentHTML('beforeend', createBage(title));

	function animation() {
		const $bage = document.querySelector('.basket-bage')

		$bage.classList.add('active')
		$btn.disabled = true
		
		animateCSS($bage, 'fade-in-basket')
		setTimeout(() => {
			animateCSS($bage, 'fade-out-basket').then(r => {
				$bage.remove()
				$btn.disabled = false
			})
		}, 2000)
	}

	function createBage(title) {
		return `
			<div class='basket-bage'>
				<div class='basket-bage__subtitle'>Add:</div>
				<div class='basket-bage__title'>${title}</div>
			</div>
		`
	}

	showBage()
	animation()
}