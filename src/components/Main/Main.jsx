import { useState } from 'react'
import '../../index.css'
import avatar from "../../../images/avatar.jpg"
import Popup from '../Popup.jsx'
import NewCard from '../NewCard/NewCard.jsx'
import EditProfile from '../EditProfile/EditProfile.jsx'
import EditAvatar from '../EditAvatar/EditAvatar.jsx'
import Card from '../Card/Card.jsx'

const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
];

console.log(cards);

function Main() {
  const [popup, setPopup] = useState(null);
  const [count, setCount] = useState(0);

  const newCardPopup = { title: "Novo cartão", children: <NewCard /> };
  const editProfilePopup = { title: "Editar perfil", children: <EditProfile /> };
  const editAvatarPopup = { title: "Editar avatar", children: <EditAvatar /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <>
      <div className="page__content">
        <main className="content">
          <section className="profile page__section">
            <img className="profile__image" src={avatar} alt="Avatar" />
            <button aria-label="Editar avatar" className="profile__avatar-button" type="button" onClick={() => handleOpenPopup(editAvatarPopup)}></button>
            <div className="profile__info">
              <h1 className="profile__title">Jacques Cousteau</h1>
              <button
              aria-label="Editar perfil"
              className="profile__edit-button"
              type="button"
              onClick={() => handleOpenPopup(editProfilePopup)}
              ></button>
              <p className="profile__description">Explorador</p>
            </div>
            <button
            aria-label="Adicionar cartão"
            className="profile__add-button"
            type="button"
            onClick={() => handleOpenPopup(newCardPopup)}
            ></button>
        </section>
        <section className="cards page__section">
            <ul className="cards__list">
              {cards.map((card) => (
                <Card key={card._id} card={card} />
              ))}
            </ul>
        </section>
        </main>
        {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
        )}
      </div>
    </>
  )
}

export default Main