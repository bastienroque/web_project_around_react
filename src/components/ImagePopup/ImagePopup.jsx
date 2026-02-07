export default function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_type_image ${card !== null ? 'popup_opened' : ''}`}>
      <div className="popup__content popup__content_content_image">
        <button
          type="button"
          className="popup__close"
          onClick={onClose}
        ></button>

        {card && (
          <>
            <img
              src={card.link}
              alt={card.name}
              id={card.id}
              className="popup__image"
            />
            <p className="popup__caption">{card.name}</p>
          </>
        )}
      </div>
    </div>
  );
}