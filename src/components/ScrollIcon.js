import ScrollIcon from "../assets/scrollicon.svg"
import React from "react"

const Icon = () => {
  return (
    <ScrollIcon
      id="scrollicon"
      style={{
        position: "fixed",
        zIndex: 4,
        bottom: 20,
        width: "61px",
        left: 20,
      }}
    />
  )
}

export default Icon
