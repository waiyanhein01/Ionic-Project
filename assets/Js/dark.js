// Dark Mode

const darkSwitchIcon = document.querySelector("#dark-switch-icon");
const darkSwitch = document.querySelector("#dark-switch")
const darkText = document.querySelector("#dark-text")
const darkChangeText = document.querySelector("#dark-text-change")
const html = document.documentElement;
let isDarkMode = false;

// Switch theme function
const toggleTheme = () => {
  isDarkMode = !isDarkMode;
  switchTheme()
}

const toDark = () => {
  darkSwitchIcon.classList.add('translate-x-full', 'rotate-[360deg]', 'bg-neutral-900')
  darkSwitchIcon.innerHTML = `<i class="fa-solid fa-moon bg-neutral-100"></i>`
  // darkChangeText.innerText = 'Dark'
  darkSwitch.classList.remove('bg-neutral-800')
  darkSwitch.classList.add('bg-neutral-100')
  localStorage.setItem('data-theme', 'dark')
  html.classList.add('dark')
  darkText.classList.add('-translate-x-7')
  darkText.innerText = 'ON'
}

const toLight = () => {
  darkSwitchIcon.classList.remove('translate-x-full', 'bg-neutral-900')
  // darkChangeText.innerText = 'Light'
  darkSwitch.classList.remove('bg-neutral-100')
  darkSwitch.classList.add('bg-neutral-800')
  localStorage.removeItem('data-theme')
  html.classList.remove('dark')
  darkText.classList.remove('-translate-x-7')
  darkText.innerText = 'FF'
  darkSwitchIcon.innerHTML = `<i class="fa-regular fa-sun"></i>`
  setTimeout(() => {
    darkSwitchIcon.classList.remove('rotate-[360deg]')
  }, 200)
}

const switchTheme = () => {
  isDarkMode ? toDark() : toLight()
}

const dataTheme = localStorage.getItem('data-theme')

dataTheme === 'dark' ? toDark() : toLight();