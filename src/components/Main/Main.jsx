import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import Card from "./components/Card/Card";
import Popup from "./components/popup/Popup";
import EditProfile from "./components/popup/EditProfile/EditProfile";
import EditAvatar from "./components/popup/EditAvatar/EditAvatar";
import NewCard from "./components/popup/NewCard/NewCard";

export default function Main({
  cards,
  onCardLike,
  onCardDelete,
  onCardAdd,
  onOpenPopup,
  onClosePopup,
  popup,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };

  const editAvatarPopup = {
    title: "Alterar a foto do perfil",
    children: <EditAvatar />,
  };

  const newCardPopup = {
    title: "Novo local",
    children: <NewCard />,
  };

  return (
    <main className="content">
      <section className="profile page__section">
        <div
          className="profile__image"
          onClick={() => onOpenPopup(editAvatarPopup)}
        >
          <img
            alt="Avatar do usuário"
            className="profile__avatar"
            src={currentUser.avatar}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button
            aria-label="Edit profile"
            className="profile__edit-button"
            type="button"
            onClick={() => onOpenPopup(editProfilePopup)}
          />
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button
          aria-label="Add card"
          className="profile__add-button"
          type="button"
          onClick={() => onOpenPopup(newCardPopup)}
        />
      </section>

      <section className="places page__section">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
              onCardAdd={onCardAdd}
            />
          ))}
        </ul>
      </section>

      {popup && (
        <Popup onClose={onClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
