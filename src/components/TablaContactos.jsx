const TablaContactos = ({ contactos, dispatch }) => {
  const handleDelete = (id) => {
    const actionDelete = {
      type: "DELETE",
      payload: id,
    };

    dispatch(actionDelete);
  };

  const handleEdit = (contacto) => {
    const actionEdit = {
      type: "EDIT",
      payload: {
        id: contacto.id,
        nombre: contacto.nombre,
        apellido: contacto.apellido,
        numero: contacto.numero
      }
    }
    dispatch(actionEdit)
  }

  return (
    <div className="container">
      <table className="table table-striped table-hover my-5">
        <thead>
          <tr className="table-dark">
            <th scope="col">#ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Número</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {contactos.map((contacto) => {
            const finalId = contacto.id.split("-");
            return (
              <tr key={contacto.id}>
                <th scope="row">{finalId[0]}</th>
                <td>{contacto.nombre}</td>
                <td>{contacto.apellido}</td>
                <td>{contacto.numero}</td>
                <td>
                  <button
                    onClick={() => handleDelete(contacto.id)}
                    className="btn btn-danger"
                  >
                    Eliminar
                  </button>
                  <button 
                  onClick={() => handleEdit(contacto)}
                  className="btn btn-primary">Editar</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TablaContactos;
