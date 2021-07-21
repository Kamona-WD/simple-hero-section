import GSAP from './gsap'

export default () => {
  const init = function () {
    this.$refs.showCase.style.transform = `perspective(${this.windowWidth}px) rotateX(45deg)`
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
      this.$refs.showCase.style.transform = `perspective(${this.windowWidth}px) rotateX(45deg)`
    })
    GSAP.timeline({
      scrollTrigger: {
        trigger: '.dashboard-showcase',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        pin: true,
        // markers: true,
      },
    }).to('.dashboard-showcase', {
      opacity: 1,
      rotateX: 0,
      // y: -40,
      duration: 2,
      ease: 'circ.out',
    })
  }
  return {
    init,
    windowWidth: window.innerWidth,
  }
}
