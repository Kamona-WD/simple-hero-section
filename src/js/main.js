import '../css/style.css'
import Alpine from 'alpinejs'
import GSAP from './gsap'
import navbarState, { navbarLinksState } from './navbarState'
import introSectionState from './introSectionState'

Alpine.data('mainState', () => {
  const init = () => {
    GSAP.to('.loading .logo', { opacity: 0, duration: 0.5 })
    GSAP.to('.loading .left', { x: '-110%', duration: 1, delay: 0.6 })
    GSAP.to('.loading .right', {
      x: '110%',
      duration: 1,
      delay: 0.6,
      onComplete: () => {
        document.querySelector('.loading').remove()
      },
    })
  }

  const getTheme = () => {
    if (window.localStorage.getItem('dark')) {
      return JSON.parse(window.localStorage.getItem('dark'))
    }

    return !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  const setTheme = (value) => {
    window.localStorage.setItem('dark', value)
  }

  return {
    init,
    isDark: getTheme(),
    toggleTheme() {
      this.isDark = !this.isDark
      setTheme(this.isDark)
    },
  }
})

Alpine.data('navbarState', navbarState)

Alpine.data('navbarLinksState', navbarLinksState)

Alpine.data('introSectionState', introSectionState)

window.Alpine = Alpine

window.Alpine.start()
