import GSAP from './gsap'

export const navbarLinksState = () => {
  const navigationLinks = [
    {
      label: 'Platform',
      link: '#',
    },
    {
      label: 'Pricing',
      link: '#',
    },
    {
      label: 'Contents',
      link: '#',
    },
    {
      label: 'About',
      link: '#',
    },
  ]
  const handelMouseEnter = (el) => {
    GSAP.to(el.querySelector('.underline-link'), {
      opacity: 1,
      translateX: 0,
      duration: 1.5,
      ease: 'elastic',
    })
  }

  const handelMouseLeave = (el) => {
    GSAP.to(el.querySelector('.underline-link'), {
      opacity: 0,
      translateX: '102%',
      duration: 1.5,
      ease: 'elastic',
    })
  }
  return {
    navigationLinks,
    handelMouseEnter,
    handelMouseLeave,
  }
}

export default () => {
  let lastScrollTop = 0

  const init = function () {
    window.addEventListener('scroll', () => {
      let st = window.pageYOffset || document.documentElement.scrollTop
      if (st > lastScrollTop) {
        // downscroll
        this.scrollingDown = true
        this.scrollingUp = false
      } else {
        // upscroll
        this.scrollingDown = false
        this.scrollingUp = true
        if (st == 0) {
          //  reset
          this.scrollingDown = false
          this.scrollingUp = false
        }
      }
      lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
    })
  }
  return {
    init,
    scrollingDown: false,
    scrollingUp: false,
    isMobileMenuOpen: false,
    toggleMobileMenu() {
      let el = document.getElementById('mobileMenu')
      if (!this.isMobileMenuOpen) {
        this.isMobileMenuOpen = true
        GSAP.fromTo(el, { height: 0 }, { height: el.scrollHeight, duration: 2, ease: 'elastic' })
      } else {
        this.isMobileMenuOpen = false
        GSAP.to(el, { height: 0, duration: 0.4 })
      }
    },
  }
}
