import React from "react"
import styled from "styled-components"
import Wave from "./wave"

const SectionGroup = styled.div`
  background: url(${props => props.image});
  background-position: center;
  background-size: cover;
  height: 820px;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  position: relative;

  @media (max-width: 720px) {
    height: 920px;
    grid-gap: 0px;
  }
`
const SectionLogo = styled.img`
  align-self: end;
  margin: 50px auto;
  width: 150px;
`

const ContentGroup = styled.div`
  display: grid;
  grid-template-columns: 400px auto;
  grid-gap: 50px;
  margin: 40px 140px;
  grid-template-rows: 150px auto;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    margin: 40px;
    grid-gap: 0px;
  }
`

const SectionTitle = styled.h1`
  text-align: center;
  align-self: center;
  justify-self: center;
  color: white;
  opacity: 0.75;
`

const SectionText = styled.p`
  color: white;
  align-self: center;
  justify-self: center;
  letter-spacing: 0.2mm;

  @media (max-width: 720px) {
    font-size: 18px;
  }
`

const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -10px;
  transform: rotate(180deg);
`

const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -10px;
`

function Section({ title, text, bg, logo }) {
  return (
    <SectionGroup image={bg}>
      <WaveTop>
        <Wave />
      </WaveTop>
      <WaveBottom>
        <Wave />
      </WaveBottom>
      <SectionLogo src={logo} />
      <ContentGroup>
        <SectionTitle>{title} </SectionTitle>
        <SectionText>{text}</SectionText>
      </ContentGroup>
    </SectionGroup>
  )
}

export default Section
