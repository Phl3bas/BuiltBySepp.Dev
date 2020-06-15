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
      <Email id="email" style={{ width: "30px" }} />
      <Twitter id="twitter" style={{ width: "30px" }} />
      <Github id="github" style={{ width: "30px" }} />
      <LinkedIn id="linkedin" style={{ width: "30px" }} />
    </div>
  )
}

export default SocialLinks
