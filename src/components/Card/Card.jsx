export default function Card(props) {
  const { name, link, isLiked } = props.card;
  const { handleRemove } = props;

  return (
    <li className="card">
      <img className="card__image" src={link} alt={name} />
      <button
        aria-label="Excluir cartão"
        className="card__delete-button"
        type="button"
        onClick={() => handleRemove(props.card._id)}
      ></button>
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Botão de curtir"
          className="card__like-button"
          type="button"
        ></button>
      </div>
    </li>
  );
}
