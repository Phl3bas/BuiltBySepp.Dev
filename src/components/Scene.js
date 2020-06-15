import React from "react"
import * as THREE from "three"
import { Square } from "./Square"
import { colors } from "../utils/Colors"

const number = 15

const data = new Array(number).fill().map(() => {
  return {
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    args: [0.1 + Math.random() * 9, 0.1 + Math.random() * 9, 10],
    rotation: [0, 0, THREE.Math.degToRad(Math.round(Math.random()) * 45)],
    position: [10 - Math.random() * 15, 10 - Math.random() * 15, 0],
  }
})

export const Scene = ({ springs }) => {
  return data.map((d, i) => (
    <Square
      key={i}
      args={d.args}
      color={springs[i].color}
      {...springs[i]}
      castShadow
      receiveShadow
    />
  ))
}

export default Scene
