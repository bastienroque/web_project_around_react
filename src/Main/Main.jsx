import { useContext } from "react";
import "../index.css";
import NewCard from "../components/popup/NewCard/NewCard.jsx";
import EditProfile from "../components/popup/EditProfile/EditProfile.jsx";
import EditAvatar from "../components/popup/EditAvatar/EditAvatar.jsx";
import Card from "../Card/Card.jsx";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function Main({ onOpenPopup, cards, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);

  const newCardPopup = { title: "Novo cartão", children: <NewCard /> };

  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  const editAvatarPopup = { title: "Editar avatar", children: <EditAvatar /> };

  return (
    <div className="page__content">
      <main className="content">
        <section className="profile page__section">
          <img
            className="profile__image"
            src={currentUser.avatar}
            alt="Foto de perfil do utilizador"
          />
          <button
            aria-label="Editar avatar"
            className="profile__avatar-button"
            type="button"
            onClick={() => onOpenPopup(editAvatarPopup)}
          ></button>
          <div className="profile__info">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button
              aria-label="Editar perfil"
              className="profile__edit-button"
              type="button"
              onClick={() => onOpenPopup(editProfilePopup)}
            ></button>
            <p className="profile__description">{currentUser.about}</p>
          </div>
          <button
            aria-label="Adicionar cartão"
            className="profile__add-button"
            type="button"
            onClick={() => onOpenPopup(newCardPopup)}
          ></button>
        </section>
        <section className="cards page__section">
          <ul className="cards__list">
            {cards.map((card) => (
              <Card
                key={card._id}
                card={card}
                onCardLike={onCardLike}
                handleRemove={onCardDelete}
              />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Main;
