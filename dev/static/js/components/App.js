import addBasket from "./addBasket";
import gallery from "./gallery";
import GetValue from "./GetValue";
import templateDescription from "./template/templateDescription";
import templateImage from "./template/templateImage";

export default class App {
    constructor() {
        this.$main = document.querySelector('#container')
    }

    async getValue() {
        this.data = await new GetValue().getDataValue().then(response => response.json())
    }

    addTemplateImage() {
        const range = document.createRange(),
		      documentFragment = range.createContextualFragment(templateImage(this.data)),
              $btns = documentFragment.querySelectorAll('[js-gallery]');

        $btns[0].classList.add('active')
        $btns.forEach(btn => btn.addEventListener('click', gallery))

        return documentFragment
    }

    addTemplateDescription() {
        const range = document.createRange(),
		      documentFragment = range.createContextualFragment(templateDescription(this.data)),
              $addBusket = documentFragment.querySelector('[js-add-basket]');

        $addBusket.addEventListener('click', addBasket.bind($addBusket, this.data.title))

        return documentFragment
    }

    clearPage() {
        this.$main.innerHTML = ''
    }

    addPage() {
        this.clearPage()

        const $wrap =  document.createElement('div')

        $wrap.classList.add('p-product__wrap')
        $wrap.append(this.addTemplateImage(), this.addTemplateDescription())
        this.$main.appendChild($wrap)
    }

    initApp() {
        this.getValue().then(r => this.addPage())
    }
}