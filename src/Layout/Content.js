import React from "react"
import Section from "../components/Section"
import Icon from "../components/ScrollIcon"
import SocialLinks from "../components/SocialLinks"

export const Content = () => {
  return (
    <div style={{ position: "absolute" }}>
      <h1>BUILTBYSEPP.DEV</h1>
      <Section />
      <Section />
      <Section />
      <Section />
      <Section />
      <div>
        <Icon />
        <SocialLinks />
      </div>
    </div>
  )
}

export default Content
