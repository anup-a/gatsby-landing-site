import React from "react"
import "./../styles/card.scss"

const Card = ({ image, title, text }) => (
  <div className="Card">
    <img src={image} alt="" />
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
)

export default Card
