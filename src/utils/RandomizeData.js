import * as THREE from "three"
import { colors } from "./Colors"
export const RandomizedData = i => {
  const r = Math.random()

  return {
    position: [20 - Math.random() * 40, 10 - Math.random() * 15, i * 1.5],
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    scale: [1 + r * 0.8, 1 + r * 1.2, r * 0.7],
    rotation: [0, 0, THREE.Math.degToRad(Math.round(Math.random()) * 45)],
  }
}
