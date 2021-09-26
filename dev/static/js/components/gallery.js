export default function gallery() {
    const $btn = this,
          $btns = document.querySelectorAll('[js-gallery]'),
          $mainImage = document.querySelector('.p-product__main-image img'),
          clearActive = () => $btns.forEach(btn => btn.classList.remove('active'));

    if ($btn.classList.contains('active')) return

    clearActive()
    $btn.classList.add('active')
    $mainImage.src = $btn.querySelector('img').getAttribute('src')
} 