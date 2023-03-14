// active
const iosIcon = document.querySelector('#ios-icon')
const andriodIcon = document.querySelector('#andriod-icon')
const customIcon = document.querySelector('#custom-icon')
const card1 = document.querySelector('#card-1')
const card2 = document.querySelector('#card-2')
const card3 = document.querySelector('#card-3')

iosIcon.style.background = '#0f172a'
card1.style.display = 'inherit'

iosIcon.addEventListener('click', () => {
  card2.style.display = 'none'
  card3.style.display = 'none'
  card1.style.display = 'inherit'
  iosIcon.style.background = '#0f172a'
  andriodIcon.style.background = '#cbd5e1'
  customIcon.style.background = '#cbd5e1'
})

andriodIcon.addEventListener('click', () => {
  card1.style.display = 'none'
  card3.style.display = 'none'
  card2.style.display = 'inherit'
  iosIcon.style.background = '#cbd5e1'
  andriodIcon.style.background = '#0f172a'
  customIcon.style.background = '#cbd5e1'
})

customIcon.addEventListener('click', () => {
  card1.style.display = 'none'
  card2.style.display = 'none'
  card3.style.display = 'inherit'
  iosIcon.style.background = '#cbd5e1'
  andriodIcon.style.background = '#cbd5e1'
  customIcon.style.background = '#0f172a'
})

// react,angular,vue and js control code
const reactIcon = document.querySelector('#react-icon')
const angularIcon = document.querySelector('#angular-icon')
const vueIcon = document.querySelector('#vue-icon')
const jsIcon = document.querySelector('#js-icon')

const reactCode = document.querySelector('#react-code')
const angularCode = document.querySelector('#angular-code')
const vueCode = document.querySelector('#vue-code')
const jsCode = document.querySelector('#js-code')


angularCode.style.display = 'none'
vueCode.style.display = 'none'
jsCode.style.display = 'none'

reactIcon.style.background = '#475569'

reactIcon.addEventListener('click', () => {
  reactIcon.style.background = '#475569'
  angularIcon.style.background = '#0f172a'
  vueIcon.style.background = '#0f172a'
  jsIcon.style.background = '#0f172a'

  reactCode.style.display = 'inherit'
  angularCode.style.display = 'none'
  vueCode.style.display = 'none'
  jsCode.style.display = 'none'
})

angularIcon.addEventListener('click', () => {
  angularIcon.style.background = '#475569'
  reactIcon.style.background = '#0f172a'
  vueIcon.style.background = '#0f172a'
  jsIcon.style.background = '#0f172a'

  reactCode.style.display = 'none'
  angularCode.style.display = 'inherit'
  vueCode.style.display = 'none'
  jsCode.style.display = 'none'
})

vueIcon.addEventListener('click', () => {
  vueIcon.style.background = '#475569'
  angularIcon.style.background = '#0f172a'
  reactIcon.style.background = '#0f172a'
  jsIcon.style.background = '#0f172a'

  reactCode.style.display = 'none'
  angularCode.style.display = 'none'
  vueCode.style.display = 'inherit'
  jsCode.style.display = 'none'
})

jsIcon.addEventListener('click', () => {
  jsIcon.style.background = '#475569'
  angularIcon.style.background = '#0f172a'
  reactIcon.style.background = '#0f172a'
  vueIcon.style.background = '#0f172a'

  reactCode.style.display = 'none'
  angularCode.style.display = 'none'
  vueCode.style.display = 'none'
  jsCode.style.display = 'inherit'
})

// demo code
const codeIcon = document.querySelector('#code-icon')
const demoIcon = document.querySelector('#demo-icon')

const code = document.querySelector('#code')
const demo = document.querySelector('#demo')

codeIcon.style.background = '#64748b'

demo.style.display = 'none'

codeIcon.addEventListener('click', () => {
  code.style.display = 'inherit'
  demo.style.display = 'none'

  codeIcon.style.background = '#64748b'
  demoIcon.style.background = '#1e293b'

})

demoIcon.addEventListener('click', () => {
  code.style.display = 'none'
  demo.style.display = 'inherit'

  codeIcon.style.background = '#1e293b'
  demoIcon.style.background = '#64748b'
})

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,


  effect: 'cube',
  cubeEffect: {
    slideShadows: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // autoplay: {
  //   delay: 3000,
  // }
});

// way point
const navBarSlide = document.getElementById('nav-bar-slide')
 var waypoint = new Waypoint({
     element: document.getElementById('companies'),
     handler: function (direction) {
         if (direction === 'down') {
             navBarSlide.classList.add('fixed', 'w-full', 'animate__fadeInDown', 'shadow')
         } else {
             navBarSlide.classList.remove('fixed', 'w-full', 'animate__fadeInDown', 'shadow')
         }
     },
     offset: '50%'
 })

 // slide menu bar

const mobileContent = document.querySelector('#mobile-content')
const openIconBtn = document.querySelector('#open-icon-btn')
const closeIconBtn = document.querySelector('#close-icon-btn')

openIconBtn.addEventListener('click', () => {
    mobileContent.style.top = '0px'
})

closeIconBtn.addEventListener('click', () => {
    mobileContent.style.top = '-100%'
})

const amazing = document.querySelectorAll('.amazing')
const amazingItem = document.querySelectorAll(".amazing-item");
const icons = document.querySelectorAll(".icon");
const showMmobildMenuBox = document.querySelector('.show-mobild-menu-box')
// const menuIcon = document.querySelector(".menu-icon");

amazing.forEach((ee,index) => {
  ee.addEventListener("click", () => {
    amazingItem[index].classList.toggle("hidden");
    amazingItem[index].classList.toggle("opacity-0");
    ee.classList.toggle('bg-slate-100')
    icons[index].classList.toggle("rotate-180");
  });
})

const menuIcon = () => {
  showMmobildMenuBox.classList.toggle("hidden");
}

// scroll reveal
ScrollReveal().reveal('.scroll', {
  delay: 200,
  origin: 'left',
  interval: 200,
  distance: '3px',
  reset: 'true'
});