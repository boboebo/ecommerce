import { namedQuery } from "firebase/firestore";
import { useState } from "react";

export const CheckoutForm = ({ onConfirm }) => {
  const [nombre, setName] = useState("");
  const [telefono, setPhone] = useState("");
  const [mail, setMail] = useState("");

  const handleConfirm = (e) => {
    e.preventDefault();

    const userData = {
      nombre,
      telefono,
      mail,
    };

    onConfirm(userData);
  };

  return (
    <div className="container">
      <form
        onSubmit={handleConfirm}
        className="form is-flex is-justify-content-center is-align-items-center is-flex-direction-column"
      >
        <div className="label">
          <label>
            Nombre
            <input
              className="input is-one-third"
              type="text"
              value={nombre}
              onChange={({ target }) => setName(target.value)}
            />
          </label>
        </div>
        <div className="label">
          <label>
            Telefono
            <input
              className="input is-one-third"
              type="text"
              value={telefono}
              onChange={({ target }) => setPhone(target.value)}
            />
          </label>
        </div>
        <div className="label">
          <label>
            E-Mail
            <input
              className="input is-one-third"
              type="text"
              value={mail}
              onChange={({ target }) => setMail(target.value)}
            />
          </label>
        </div>
        <div>
          <button type="submit" className="button is-link">
            Crear Orden
          </button>
        </div>
      </form>
    </div>
  );
};
