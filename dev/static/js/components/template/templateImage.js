export default function templateImage(options) {
    const imageArray = JSON.parse(options.images)
    return `
        <div class="p-product__image">
            <div class="p-product__main-image"><img src="${imageArray[0].img}" alt=""></div>
            <div class="p-product__gallery">
                ${imageArray.map(({img}, index) => {
                    return `<button type="button" class="p-product__item" js-gallery>
                                <img src="${img}" alt="image-${index}">
                            </button>`
                }).join('')}
            </div>
        </div>
    `
}