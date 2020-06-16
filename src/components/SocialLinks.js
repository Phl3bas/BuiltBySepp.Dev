import React from "react"
import Github from "../assets/octocat.svg"
import Email from "../assets/email.svg"
import Twitter from "../assets/twitter.svg"
import LinkedIn from "../assets/linkedin.svg"

const styles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  position: "fixed",
  zIndex: 4,
  bottom: "40px",
  width: "200px",
  height: "40px",
  right: "20px",
}

const SocialLinks = () => {
  return (
    <div style={styles}>
      <a href="mailto:info@builtbysepp.dev" rel="noreferrer" target="_blank">
        <Email id="email" style={{ width: "30px" }} />
      </a>
      <a href="https://twitter.com/phl3bas" rel="noreferrer" target="_blank">
        <Twitter id="twitter" style={{ width: "30px" }} />
      </a>
      <a href="https://github.com/Phl3bas" rel="noreferrer" target="_blank">
        <Github id="github" style={{ width: "30px" }} />
      </a>
      <a href="/" target="_blank" rel="noreferrer">
        <LinkedIn id="linkedin" style={{ width: "30px" }} />
      </a>
    </div>
  )
}

export default SocialLinks
