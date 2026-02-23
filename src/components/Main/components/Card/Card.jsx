export default function Card(props) {
  const { name, link, isLiked } = props.card;
  const { card, onCardDelete, onCardLike } = props;

  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_is-active" : ""
  }`;

  function handleRemoveClick() {
    onCardDelete(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  return (
    <li className="card">
      <img className="card__image" src={link} alt={name} />
      <button
        aria-label="Excluir cartão"
        className="card__delete-button"
        type="button"
        onClick={handleRemoveClick}
      ></button>
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Botão de curtir"
          className={cardLikeButtonClassName}
          type="button"
          onClick={handleLikeClick}
        ></button>
      </div>
    </li>
  );
}
