import React from "react"
import { useSprings } from "react-spring/three"
import { RandomizedData } from "../utils/RandomizeData"

export const useSpringAnimation = number => {
  const [springs, set] = useSprings(number, i => ({
    from: RandomizedData(i),
    ...RandomizedData(i),
    config: { mass: 70, tension: 80, friction: 120 },
  }))
  const animate = React.useCallback(
    () => set(i => ({ ...RandomizedData(i) })),
    [set]
  )

  return [springs, animate]
}
