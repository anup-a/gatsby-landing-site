import React from "react"
import styled from "styled-components"

const FooterGroup = styled.div`
  background-color: #f1f3f5;
  padding: 50px 0;
  display: grid;
  grid-gap: 40px;
`
const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
`
const LinkGroup = styled.div`
  width: 500px;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`
const Button = styled.button`
  box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
  border-radius: 30px;
  color: white;
  border: none;
  padding: 12px 40px;
  font-weight: 600;
  font-size: 24px;
  justify-self: center;
  background: linear-gradient(102.24deg, #9851e0 0%, #3436e7 100%);
`

function Footer({ data }) {
  return (
    <FooterGroup>
      <Text>
        Tweet "Prototype and Build apps with React & Swift UI. @anup-a"
      </Text>
      <Button>Tweet</Button>
      <LinkGroup>
        {data.allContentfulLink.edges.map(edge => {
          return <a href={edge.node.url}>{edge.node.title} </a>
        })}
      </LinkGroup>
    </FooterGroup>
  )
}

export default Footer
