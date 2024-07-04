import React from "react";
import "./card.css";

const Card = ({ color }) => {
  const clickChange = (event) => {
    const cardElement = event.currentTarget;
    const textElements = cardElement.querySelectorAll("h3, p");

    
    let clickCount = parseInt(cardElement.getAttribute("data-count")) || 0; 
    clickCount += 1;

    if (clickCount === 1) {
      
      cardElement.style.backgroundColor = "red";
      textElements.forEach((textCard) => {
        textCard.innerText = textCard.innerText.toUpperCase();
      });
    } else if (clickCount === 0) {
      
      cardElement.style.backgroundColor = color;
      textElements.forEach((textCard) => {
        textCard.innerText = textCard.innerText.toLowerCase();
      });
    } else {
      
      cardElement.style.backgroundColor = color;
      textElements.forEach((textCard) => {
        textCard.innerText = textCard.innerText === textCard.innerText.toUpperCase()
          ? textCard.innerText.toLowerCase()
          : textCard.innerText;
      });
      clickCount = 0;
    }


    cardElement.setAttribute("data-count", clickCount);
  };

  return (
    <div
      className="card"
      onClick={clickChange}
      style={{ backgroundColor: color }}
      data-count="0"
    >
      <h3>Clique no card</h3>
      <p>para alterar a cor e transformar o texto</p>
    </div>
  );
};

Card.defaultProps = {
  color: 'orange',
};

export default Card;
