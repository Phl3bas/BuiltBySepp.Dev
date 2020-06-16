import React from "react"
import { Canvas } from "react-three-fiber"
import { Scene } from "../components/Scene"
import { Content } from "../Layout/Content"

import { useSpringAnimation } from "../hooks/useSpringAnimation"

export default () => {
  const [springs, animate] = useSpringAnimation(20)

  React.useLayoutEffect(() => {
    window.addEventListener("wheel", animate, 2000)
    window.addEventListener("touchmove", animate, 2000)
  }, [animate])

  return (
    <>
      <Content />
      <Canvas shadowMap camera={{ position: [0, 10, 100], fov: 10 }}>
        <Scene springs={springs} />
      </Canvas>
    </>
  )
}
