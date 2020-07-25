import React from 'react';
import Card from './Card.js';
import api from '../utils/api.js';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfoServer('/users/me') //получаем информацию о пользователе с сервера
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(`ошибка: ${err}`);
      });
    api.getInitialCards('/cards') //получаем карточки с сервера
      .then((arr) => {
        setCards(arr);
      })
      .catch((err) => {
        console.log(`ошибка: ${err}`);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <img src={userAvatar} className="profile__image" alt="Портрет автора" />
        <div className="header__pencil" onClick={props.onEditAvatar}/>
        <div className="profile-info">
          <div className="information">
            <h1 className="profile-info__title">{userName}</h1>
            <p className="profile-info__subtitle">{userDescription}</p>
          </div>
          <button type="button" className="profile-info__button" aria-label="редактировать профиль" onClick={props.onEditProfile}/>
        </div>
        <button type="button" className="profile__add-button" aria-label="добавить фото" onClick={props.onAddPlace}/>
      </section>
      <section className="cards">
        {cards.map((item, index) => {
          return (
            <Card card={item} key={index} onCardClick={props.onCardClick} /> //добавляем карточки и обработчик в разметку
          );
        })}
      </section>
    </main>
  )
}

export default Main;