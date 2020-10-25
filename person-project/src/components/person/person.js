import React, { useEffect, useState } from "react";
import ApiAxios from "../../api/api-axios";
import DetailPerson from "./detail-person";
import { Link } from "react-router-dom";
function Person() {
  const [persons, setPersons] = useState([]);
  const [name,setName]=useState('')

  const onChangeName=({target})=>{
    setName(target.value)
  }

  useEffect(() => {
    ApiAxios.post(`/person/get`, { name }).then(({ data }) => {
      setPersons(data.result);
    });
  }, [name]);

  return (
    <div className="container">
      <div className="row justify-content-md-center mt-5">
        <div className="col-lg-10">
          <div className="card border-dark">
            <h3 className="card-header text-center">Listado de Personas</h3>
            <div className="card-body">
                <form className="form-inline">
                    <Link to={`/person/new`} className="btn btn-outline-primary mb-2 mr-4">Agregar Nueva Persona</Link>
                    <div className="form-group">
                        <input
                            className="form-control mb-2"
                            type="text"
                            placeholder="Buscar Persona"
                            onChange={onChangeName}
                        />
                    </div>
                </form>
              <table className="table table-striped table-bordered table-sm">
                <thead className="_color_bg_dark _color_text_white text-center">
                  <tr>
                    <th>Nombre</th>
                    <th>Telefono</th>
                    <th>Edad</th>
                    <th>Documento</th>
                    <th>Direccion</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {persons &&
                    persons.map((item) => {
                      return <DetailPerson key={item.id} person={item} />;
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Person;
