import React, { useEffect, useState } from 'react';
import Modal from './Modal.jsx';
import './cards.scss';
const Cards = () => {
  const [cards, setCards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  useEffect(() => {
    fetch('https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e')
      .then((res) => res.json())
      .then((res) => setCards(res));
  }, []);
  const handleShowModal = (index) => {
    setShowModal(!showModal);
    setCardIndex(index);
  };

  const cheapestProduct = cards.reduce(
    (acc, curr, i) => (cards[acc].price < curr.price ? acc : i),
    0
  );
  const cheapestCard = () => {
    setShowModal(!showModal);
    setCardIndex(cheapestProduct);
  };
  console.log(cheapestProduct);
  return (
    <div className="wrapper">
      <div className="cards">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div className="card__info">
              <p className="card__info-category">{card.category}</p>
              <p className="card__info-name">{card.name}</p>
              <div className="card__info-price">
                <span className="currency">$</span>
                {card.price}
              </div>
            </div>
            <button
              className="card__buy"
              onClick={() => handleShowModal(index)}
            >
              BUY
            </button>
            {showModal && index === cardIndex ? (
              <Modal
                card={card}
                setShowModal={setShowModal}
                showModal={showModal}
              />
            ) : null}
          </div>
        ))}
      </div>
      <button className="buyCheapest" onClick={() => cheapestCard()}>
        Buy cheapest
      </button>
      {cards.map((card, index) => {
        showModal && index === cardIndex ? <Modal card={card} /> : null;
      })}
    </div>
  );
};
export default Cards;
