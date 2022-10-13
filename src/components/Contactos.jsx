import { useEffect, useReducer, useState } from "react";
import { contactosReducer } from "../reducers/contactosReducer";
import FormAgregar from "./FormAgregar";
import TablaContactos from "./TablaContactos";

const init = () => {
  const contactos = localStorage.getItem("contactos");

  return contactos ? JSON.parse(contactos) : [];
};

const Contactos = () => {
  
  const [formView, setFormView] = useState(false)

  const [state, dispatch] = useReducer(contactosReducer, [], init);

  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(state));
  }, [state]);

  return (
    <div className="d-flex flex-column">
      <div className="d-grid gap-2 col-6 mx-auto">
      <button onClick={() => setFormView(!formView)} className="btn btn-success mt-3 d-block">
      {
        !formView ? "+ Agregar Contacto" : "Cerrar"
      }
      </button>
      </div>
      
      {
        formView && <FormAgregar contactos={state} dispatch={dispatch} />
      }
      <TablaContactos contactos={state} dispatch={dispatch} />
      </div>
  );
};

export default Contactos;
