export default function EditProfile() {
  return (
    <>
        <div className="popup" id="edit-popup">
        <div className="popup__content">
          <button
            aria-label="Fechar pop-up"
            className="popup__close"
            type="button"
          ></button>
          <h3 className="popup__title">Editar perfil</h3>
          <form className="popup__form" id="edit-profile-form" name="profileForm">
            <input
              className="popup__input popup__input_type_name"
              name="name"
              id="name"
              placeholder="Nome"
              type="text"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="name-input-error popup__input-error"
              >Este campo é obrigatório.</span
            >
            <input
              className="popup__input popup__input_type_description"
              name="description"
              id="description"
              placeholder="Sobre mim"
              type="text"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="description-input-error popup__input-error"
              >Este campo é obrigatório.</span
            >
            <button className="button popup__button" type="submit">Salvar</button>
          </form>
        </div>
      </div>
    </>
  );
}