import React from 'react'
import { Link } from 'react-router-dom'

function DetailPerson({person}) {
    return (
        <tr>
            <td>{person.name + " " + person.lastName}</td>
            <td>{person.phone}</td>
            <td>{person.age}</td>
            <td>{person.documentNumber}</td>
            <td>{person.address}</td>
            <td>
                <Link to={`/person/edit/${person.id}`} className="btn btn-outline-success btn-sm mr-2">editar</Link>
                <button className="btn btn-outline-danger btn-sm">eliminar</button>
            </td>
        </tr>
    )
}

export default DetailPerson
