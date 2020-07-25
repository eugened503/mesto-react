
import React from 'react';

function Card(props) { 
    function handleClick() {
        props.onCardClick(props.card);
    }
    return (
            <div className="card">
                <img className="card__image" alt="ваше фото" id="myImg" src={props.card.link} onClick={handleClick} />
                <h2 className="card__title">{props.card.name}</h2>
                <button type="button" className="card__trash-button" aria-label="корзина"></button>
                <button type="button" className="card__like-button" aria-label="лайк"></button>
                <h2 className="card__like-sum">{props.card.likes.length > 0 ? `${props.card.likes.length}` : 0} </h2>
            </div>
    )
}

export default Card;