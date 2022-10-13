import { useEffect, useState } from "react";
import uuid from "react-uuid";


const initialState = { nombre: "", apellido: "", numero: "" }

const FormAgregar = ({ contactos, dispatch }) => {
  const [data, setData] = useState(initialState);

  const { nombre, apellido, numero } = data;

  const actionAdd = {
    type: "ADD",
    payload: {
      id: uuid(),
      nombre,
      apellido,
      numero,
    },
  };

  const handleAdd = () => {
    if (data.nombre && data.numero !== "") {
      dispatch(actionAdd);
      setData({ nombre: "", apellido: "", numero: "" });
    } else {
      alert("ERROR, el contacto tiene que tener nombre y numero telefonico.");
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(()=>{
    if ( contactos ){
      setData(contactos)
    }else{
      setData(initialState)
    }
  },[contactos])

  return (
    <div className="container d-grid gap-2 col-6 mx-auto">
      <label className="mx-3 d-grid gap-2">
        Nombre:{" "}
        <input
          type="text"
          onChange={handleChange}
          name="nombre"
          value={nombre}
          autoComplete="off"
          className="form-control"
        />
      </label>
      <label className="mx-3 d-grid gap-2">
        Apellido:{" "}
        <input
          type="text"
          onChange={handleChange}
          name="apellido"
          value={apellido}
          autoComplete="off"
          className="form-control"
        />
      </label>
      <label className="mx-3 d-grid gap-2">
        Número:{" "}
        <input
          type="text"
          onChange={handleChange}
          name="numero"
          value={numero}
          autoComplete="off"
          className="form-control"
        />
      </label>
      <div className="mx-3 d-grid gap-2">
        <button onClick={handleAdd} className="btn btn-success mt-3">
          Agregar
        </button>
      </div>
    </div>
  );
};

export default FormAgregar;
