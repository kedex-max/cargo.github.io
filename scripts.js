const bannerElement = document.querySelector('[data-js-banner]')
const bannerTitleElement = document.querySelector('[data-js-banner-title]')
const bannerSubtitleElement = document.querySelector('[data-js-banner-subtitle]')
const bannerArrowLeftElement = document.querySelector('[data-js-arrow-left]')
const bannerArrowRightElement = document.querySelector('[data-js-arrow-right]')
const bannerCircleElement = document.querySelectorAll('[data-js-banner-circle]')

let backgroundChange = [
    "linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url('images/banner_1.jpg')", 
    "linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url('images/banner_2.jpg')",
    "linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url('images/banner_3.jpg')",
    "linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url('images/banner_4.jpg')",
]
let titleChang = [
    "ПРЯМОЕ КАРГО ИЗ КИТАЯ",
    "ГАРАНТИРУЕМ СРОКИ!",
    "ВЫКУП ТОВАРА С ТАОБАО, 1688",
    "ЭКСПРЕСС АВТО ДОСТАВКА",
]
let subtitleChang = [
    'Доставляем любые грузы из Китая по честной цене',
    'Если мы не уложимся в обозначенные сроки, доставка груза со скидкой до 90%',
    'Выкуп и доставка товаров с китайских торговых площадок. ',
    'Доставка автотранспортом из Китая в Россию от 15 дней, от $0,5/кг',
]
let idActive = 0

const banner = () => {
    bannerElement.style.backgroundImage = backgroundChange[idActive]
    bannerTitleElement.textContent = titleChang[idActive]
    bannerSubtitleElement.textContent = subtitleChang[idActive]
    bannerCircleElement[idActive].classList.add('active')
}

banner()


bannerArrowRightElement.addEventListener('click', () => {
    if (idActive < 3) {
        bannerCircleElement[idActive].classList.remove('active')
        ++idActive
        banner()
    } else {
        bannerCircleElement[idActive].classList.remove('active')
        idActive = 0
        banner()
    }
})

bannerArrowLeftElement.addEventListener('click', () => {
    if (idActive > 0) {
        bannerCircleElement[idActive].classList.remove('active')
        --idActive
        banner()
    } else {
        bannerCircleElement[idActive].classList.remove('active')
        idActive = 3
        banner()
    }
})



const deliverySlide1Element = document.querySelector('[data-js-delivery-slide1]')
const deliverySlide2Element = document.querySelector('[data-js-delivery-slide2]')
const deliverySlide3Element = document.querySelector('[data-js-delivery-slide3]')
const deliveryTitle1Element = document.querySelector('[data-js-delivery-title1]')
const deliveryTitle2Element = document.querySelector('[data-js-delivery-title2]')
const deliveryTitle3Element = document.querySelector('[data-js-delivery-title3]')
const deliveryArrowLeftElement = document.querySelector('[data-js-delivery-arrow-left]')
const deliveryArrowRightElement = document.querySelector('[data-js-delivery-arrow-right]')

let imgChange = [
    "images/delivery_1.jpg", 
    "images/delivery_2.jpg", 
    "images/delivery_3.jpg", 
    "images/delivery_4.jpg", 
    "images/delivery_5.jpg", 
]

let deliveryTitleChange = [
    "Авто - обычная",
    "Авто - ускоренная",
    "Авиа",
    "Ж/д",
    "Море",
]

let deliveryIdActive1 = 0
let deliveryIdActive2 = 1
let deliveryIdActive3 = 2

const delivery = () => {
    deliverySlide1Element.src = imgChange[deliveryIdActive1]
    deliverySlide2Element.src = imgChange[deliveryIdActive2]
    deliverySlide3Element.src = imgChange[deliveryIdActive3]
    deliveryTitle1Element.textContent = deliveryTitleChange[deliveryIdActive1]
    deliveryTitle2Element.textContent = deliveryTitleChange[deliveryIdActive2]
    deliveryTitle3Element.textContent = deliveryTitleChange[deliveryIdActive3]
}
delivery()

deliveryArrowLeftElement.addEventListener('click', () => {
    ++deliveryIdActive1
    ++deliveryIdActive2
    ++deliveryIdActive3
    if (deliveryIdActive1 === 5) deliveryIdActive1 = 0;
    if (deliveryIdActive2 === 5) deliveryIdActive2 = 0;
    if (deliveryIdActive3 === 5) deliveryIdActive3 = 0;
    delivery()
})

deliveryArrowRightElement.addEventListener('click', () => {
    --deliveryIdActive1
    --deliveryIdActive2
    --deliveryIdActive3
    if (deliveryIdActive1 === -1) deliveryIdActive1 = 4;
    if (deliveryIdActive2 === -1) deliveryIdActive2 = 4;
    if (deliveryIdActive3 === -1) deliveryIdActive3 = 4;
    console.log(deliveryIdActive1, deliveryIdActive2, deliveryIdActive3)
    delivery()
})