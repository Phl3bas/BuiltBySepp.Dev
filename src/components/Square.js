import React from "react"
import { a } from "react-spring/three"

export const Square = ({ args, color, key, ...props }) => {
  return (
    <a.mesh key={key} {...props}>
      <boxBufferGeometry attach="geometry" args={args} />
      <a.meshBasicMaterial
        attach="material"
        color={color}
        roughness={0.75}
        metalness={0.5}
      />
    </a.mesh>
  )
}
