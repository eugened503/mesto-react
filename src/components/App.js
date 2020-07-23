import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';

function App() {

  const [isEditProfilePopupOpen, SetIsEditProfilePopupOpen] = React.useState(false); // Хук, управляющий внутренним состоянием поп-апа "Данные пользователя"
  const [isAddPlacePopupOpen, SetIsAddPlacePopupOpen] = React.useState(false); // Хук, управляющий внутренним состоянием поп-апа "Добавление карточки"
  const [isEditAvatarPopupOpen, SetIsEditAvatarPopupOpen] = React.useState(false); // Хук, управляющий внутренним состоянием поп-апа "Изменение аватара"
  const [selectedCard, setSelectedCard] = React.useState(false); //Хук для определения наличия CSS-класса видимости
  const [showImage, setShowImage] = React.useState({}); //Хук для захвата данных при клике на карточку

  function handleCardClick(data) { 
    setSelectedCard(true);
    setShowImage(data);
  }
  function handleEditProfileClick() { //обработчик для открытия поп-апа "Данные пользователя"
    SetIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() { //обработчик для открытия поп-апа "Добавление карточки"
    SetIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() { //обработчик для открытия поп-апа "Изменение аватара"
    SetIsEditAvatarPopupOpen(true);
  }
  function closeAllPopups() {  //обработчик для закрытия поп-апов
    SetIsEditProfilePopupOpen(false);
    SetIsAddPlacePopupOpen(false);
    SetIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} name="avatar" title="Обновить аватар" children={
          <> <input type="url" id="link-input" placeholder="Ссылка на картинку" required defaultValue="" name="avatar"
            className="popup__text popup__text_work-margin popup__link popup__input popup__text_avatar"
            pattern="^(https?:\/\/)?([\w-]{1,32}\.[\w-]{1,32})[^\s@]*$" />
            <span id="link-input-error" className="popup__input-error"></span>
          </>
        } />
        <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} name="profile" title="Редактировать профиль" children={
          <><input id="name-input" type="text" required placeholder="Ваше имя" defaultValue="Жак-Ив Кусто" name="name" className="popup__text popup__text_text-margin popup__input" minLength="2" maxLength="40" pattern="[А-Яа-яA-Za-z -]{2,40}" />
            <span id="name-input-error" className="popup__input-error"></span>
            <input id="work-input" type="text" required placeholder="Род деятельности" defaultValue="Исследователь океана" name="about" className="popup__text popup__text_work-margin popup__input" minLength="2" maxLength="200"></input>
            <span id="work-input-error" className="popup__input-error"></span>
          </>
        } />
        <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} name="foto" title="Новое место" children={
          <><input type="text" id="title-input" placeholder="Название" required defaultValue="" name="title" className="popup__text popup__text_text-margin popup__name popup__input" minLength="1" maxLength="30" />
            <span id="title-input-error" className="popup__input-error"></span>
            <input type="url" id="link-input" placeholder="Ссылка на картинку" required defaultValue="" name="link" className="popup__text popup__text_work-margin popup__link popup__input" pattern="^(https?:\/\/)?([\w-]{1,32}\.[\w-]{1,32})[^\s@]*$" />
            <span id="link-input-error" className="popup__input-error"></span>
          </>
        } />
        <PopupWithForm name="deleting-card" title="Вы уверены?" />
        <ImagePopup card={showImage} isOpen={selectedCard} onClose={closeAllPopups} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
