export default function templateDescription(options) {
    return `
        <div class="p-product__description">
            <div class="p-product__description-top">
                <h1 class="p-product__title">${options.title}</h1>
                <p class="p-product__text">${options.descr}</p>
                <div class="p-product__counter">${(options.quantity > 0) ? `In stock ${options.quantity}` : `Out of stock`}</div>
            </div>
            <div class="p-product__description-bottom">
                <div class="p-product__wrap-price">
                    <div class="p-product__new-price">${options.price}</div>
                    <strike class="p-product__old-price">${options.priceold}</strike>
                </div>
                <div class="p-product__add-basket">
                    <button class="btn btn--green" type="button" js-add-basket="">add basket</button>
                </div>
            </div>
        </div>
    `
}