export default function RemoveCard() {
  return (
    <>
      <button
        aria-label="Excluir cartão"
        className="card__delete-button"
        type="button"
      ></button>
      <div className="popup" id="confirmation-popup">
        <div className="popup__content popup__content_content_confirmation">
          <button
            aria-label="Fechar pop-up"
            className="popup__close"
            type="button"
          ></button>
          <h3 className="popup__title">Tem certeza?</h3>
          <button
            className="button popup__button popup__button_type_confirm"
            type="submit"
          >
            Sim
          </button>
        </div>
      </div>
    </>
  );
}
