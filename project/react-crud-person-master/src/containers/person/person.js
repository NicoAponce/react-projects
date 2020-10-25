import React, {memo} from 'react';
import {Link} from 'react-router-dom';
import TablePagination from '@material-ui/core/TablePagination';
import DetailPerson from './containers/detail-person';
import usePersonSelect from './hooks/use-person-select';

const Person = () => {
    const {
        onChangeName,
        persons,
        page,
        personsPerPage,
        emptyPersons,
        handleChangePage,
        handleChangePersonsPage,
    } = usePersonSelect();
    return (
        <div className="container">
            <div className="row justify-content-md-center mt-5">
                <div className="col-lg-10">
                    <div className="card border-dark">
                        <h3 className="card-header text-center">LISTA DE PERSONAS</h3>
                        <div className="card-body">
                            <form className="form-inline">
                                <Link
                                    to="/person/new"
                                    className="btn btn-outline-dark mb-2 mr-4"
                                >
                                    Nueva Persona
                                </Link>
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
                                <thead className="text-center _color_bg_dark _color_text_white">
                                    <tr>
                                        <th>NOMBRES</th>
                                        <th>EDAD</th>
                                        <th>TELEFONO</th>
                                        <th>DOCUMENTO</th>
                                        <th>DIRECCION</th>
                                        <th>ACCIONES</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {persons
                                        .slice(
                                            page * personsPerPage,
                                            page * personsPerPage + personsPerPage
                                        )
                                        .map((item) => {
                                            return (
                                                <DetailPerson
                                                    key={item.id}
                                                    person={item}
                                                />
                                            );
                                        })}
                                    {emptyPersons > 0 && (
                                        <tr style={{height: 53 * emptyPersons}}>
                                            <td colSpan={6} />
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <TablePagination
                                rowsPerPageOptions={[]}
                                component="div"
                                count={persons.length}
                                rowsPerPage={personsPerPage}
                                page={page}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangePersonsPage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Person);
