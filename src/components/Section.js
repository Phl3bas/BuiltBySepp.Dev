import React from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

const Section = () => {
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
        trigger: ref.current.children[0],
        scrub: 3,
        end: "top center",
      },
    })
  }, [ref])

  return (
    <section ref={ref}>
      <h2>A Heading</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex eius
        eveniet, distinctio praesentium inventore illo nostrum nesciunt
        incidunt. Dolor sed beatae est voluptas inventore, temporibus eveniet
        officiis ad aperiam excepturi?
      </p>
    </section>
  )
}

export default Section
