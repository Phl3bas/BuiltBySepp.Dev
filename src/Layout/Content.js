import React from "react"
import Section from "../components/Section"
import Icon from "../components/ScrollIcon"
import SocialLinks from "../components/SocialLinks"

export const Content = () => {
  return (
    <div style={{ position: "absolute" }}>
      <h1>BUILTBYSEPP.DEV</h1>

      <Section>
        <h2 className="box">
          Sepp <br /> Wikramaratna-Clarke
        </h2>

        <h3 className="box">Full Stack Developer</h3>

        <p className="box">I make the web look good and stuff..</p>
      </Section>
      <Section>
        <h2 className="box">A Heading</h2>
        <p className="box">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          dignissimos quas officiis error impedit autem similique quia, ad illo
          accusantium nihil consequuntur aliquid nemo necessitatibus, quidem aut
          placeat delectus optio!
        </p>
      </Section>
      <Section>
        <h2 className="box">A Heading</h2>
        <p className="box">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          dignissimos quas officiis error impedit autem similique quia, ad illo
          accusantium nihil consequuntur aliquid nemo necessitatibus, quidem aut
          placeat delectus optio!
        </p>
      </Section>
      <Section>
        <h2 className="box">A Heading</h2>
        <p className="box">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          dignissimos quas officiis error impedit autem similique quia, ad illo
          accusantium nihil consequuntur aliquid nemo necessitatibus, quidem aut
          placeat delectus optio!
        </p>
      </Section>

      <Icon />
      <SocialLinks />
    </div>
  )
}

export default Content
