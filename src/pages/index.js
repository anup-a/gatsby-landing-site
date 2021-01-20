import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./../styles/index.scss"
import Card from "./../components/card"
import Section from "../components/section"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Learn to <br /> Design and Code <br />
          <span>React Apps</span>
        </h1>
        <p>
          Complete courses about best tools and design system. Prototype and
          build apps with React.{" "}
        </p>
        <a>Watch the Video</a>
      </div>
    </div>
    <div className="Cards">
      <h1>11 courses for free. </h1>
      <div className="CardGroup">
        <Card
          image={require("../images/wall2.png")}
          title="React for Designers"
          text="11 Courses"
        />
        <Card
          image={require("../images/wall3.png")}
          title="Vue for Developers"
          text="9 Courses"
        />
        <Card
          image={require("../images/wall4.png")}
          title="ARKit for Swift"
          text="10 Courses"
        />
        <Card
          image={require("../images/wall5.png")}
          title="Design System"
          text="8 Courses"
        />
        <Card
          image={require("../images/wall6.png")}
          title="UI Design for Developers"
          text="11 Courses"
        />
        <Card
          image={require("../images/wall7.png")}
          title="React Native for Designers"
          text="7 Courses"
        />
      </div>
    </div>
    <div className="section">
      <Section
        title="Gatsby for Designers"
        text="Reprehenderit velit sint Lorem qui proident laboris occaecat in. Ut duis
        commodo occaecat tempor magna ut sunt. Aute Lorem occaecat deserunt
        laborum culpa.Nulla in ea minim esse. Enim fugiat voluptate ea sunt
        dolore officia non magna aliqua. Eu pariatur nostrud ut ex nostrud et
        est ullamco do ipsum exercitation. Do adipisicing adipisicing fugiat
        minim sit elit et eu tempor. "
        logo={require("../images/gatsby-icon.png")}
        bg={require("../images/wall4.png")}
      />
    </div>
  </Layout>
)

export default IndexPage
