import React, { useState } from 'react';
import './modal.scss';
const Modal = ({ card, setShowModal, showModal }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [showError, setShowError] = useState(false);
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmitModal = (e) => {
    e.preventDefault();
    if (!/[0-9]/.test(name) && !/[a-zA-Zа-яА-Я]/.test(number)) {
      setShowModal(!showModal);
      console.log(name, number);
    }
  };
  return (
    <div className="modal">
      <div className="modal__content" style={{ position: 'relative' }}>
        <button
          className="modal__content-close"
          onClick={() => setShowModal(!showModal)}
        >
          +
        </button>
        <p className="card__info-category">{card.category}</p>
        <p className="card__info-name">{card.name}</p>
        <div className="card__info-price">
          <span className="currency">$</span>
          {card.price}
        </div>

        <form className="form" onSubmit={(e) => handleSubmitModal(e)}>
          <div className="form__name  form__input">
            <input
              type="text"
              placeholder="Name"
              required
              onChange={(e) => handleNameChange(e)}
              onBlur={() => setShowError(!showError)}
              style={showError ? { borderColor: 'red' } : {}}
            />
            {showError ? (
              <div className="error">
                {/[0-9]/.test(name) && showError ? (
                  <p className="error">Only letters allowed</p>
                ) : null}
                {showError ? (
                  <p className="error">
                    {name.length === 0 ? 'This field in required' : null}
                  </p>
                ) : null}
              </div>
            ) : null}
          </div>
          <div className="form__number form__input">
            <input
              type="text"
              className=" "
              placeholder="Number"
              style={showError ? { borderColor: 'red' } : {}}
              required
              onChange={(e) => handleNumberChange(e)}
              onBlur={() => setShowError(!showError)}
            />
            {showError ? (
              <div className="error">
                {/[a-zA-Zа-яА-Я]/.test(number) ? (
                  <p>Only numbers allowed</p>
                ) : null}
                {number.length === 12 ? (
                  <p>Should contain 12 characters</p>
                ) : null}
                <p>{number.length === 0 ? 'This field in required' : null}</p>
              </div>
            ) : null}
          </div>
          <input type="submit" className="form__submit" value="ORDER" />
        </form>
      </div>
    </div>
  );
};
export default Modal;
//використовуючи react form або formik можна було би все зробити набагато елегантніше
