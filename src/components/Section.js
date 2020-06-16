import React from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

const Section = ({ children }) => {
  const ref = React.useRef()

  React.useLayoutEffect(() => {
    gsap.set(ref.current.children, { transformOrigin: "left" })
    gsap.from(ref.current.children, {
      opacity: 0,
      y: 100,
      x: 20,
      rotateZ: 13,
      stagger: 0.2,
      ease: "power2. inOut",
      duration: 3,

      scrollTrigger: {
        trigger: ref.current,
        scrub: 6,
        end: "top 100",
        start: "top center",
      },
    })
  }, [ref])

  return <section ref={ref}>{children}</section>
}

export default Section
