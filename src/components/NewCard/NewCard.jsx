export default function NewCard() {
  return (
    <>
    <div className="popup" id="new-card-popup">
        <div className="popup__content">
          <button
            aria-label="Fechar pop-up"
            className="popup__close"
            type="button"
          ></button>
          <h3 className="popup__title">Novo local</h3>
          <form className="popup__form" id="new-card-form" name="cardForm">
            <input
              className="popup__input popup__input_type_card-name"
              name="place-name"
              id="place-name"
              placeholder="Título"
              minlength="2"
              maxlength="30"
              required
              type="text"
            />
            <span className="place-name-input-error popup__input-error"
              >Este campo é obrigatório.</span
            >
            <input
              className="popup__input popup__input_type_url"
              name="link"
              id="link"
              placeholder="Link de Imagem"
              required
              type="url"
            />
            <span className="link-input-error popup__input-error"
              >Este campo é obrigatório.</span
            >
            <button className="button popup__button" type="submit">Criar</button>
          </form>
        </div>
      </div>
    </>
  );
}