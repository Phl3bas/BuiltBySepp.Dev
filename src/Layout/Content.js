import React from "react"
import SocialLinks from "../components/SocialLinks"

export const Content = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>BUILTBYSEPP.DEV</h1>
      <p>...more website coming soon</p>
      <SocialLinks />
    </div>
  )
}

export default Content
