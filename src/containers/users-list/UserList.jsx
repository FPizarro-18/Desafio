import React, { useEffect, useState } from 'react';
import Menu from '../../components/menu/Menu';
import { useDispatch, useSelector } from 'react-redux'; 
import { Alert, Table, Input, Container } from 'reactstrap';
import { findAllAsyncActionCreator,saveAsyncActionCreator } from '../../store/modules/user/actions';
import { Link } from 'react-router-dom';

const UserList = () =>{

    const dispatch = useDispatch();
    const users = useSelector(store => store.user.users);

    const [idSelected, setIdSelected] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    useEffect(() => {
        dispatch(findAllAsyncActionCreator());
    }, [dispatch]);

   

    
    return(
        <div>
            <Container>
                
            <Menu></Menu>
        Listado de Usuarios
        <Table hover> <thead>
        <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Acciones</th>
        </thead>
                <tbody>
                    {users.data.map(user => user.id === idSelected ? (() => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td><Input value={name} onChange={(event) => setName(event.target.value)} /></td>
                                <td><Input value={email} type={'email'} onChange={(event) => setEmail(event.target.value)} /></td>
                                <td>
                
                
                </td>
                                {/* <td><Button
                                    color="success"
                                    onClick={() => {
                                        setIdSelected(0);
                                        console.log(user.id, name, email);
                                    }}
                                    disabled={name === '' || email === ''}
                                >Guardar</Button></td> */}
                            </tr>
                        )
                    })() : (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><Link to={`/private/users/view/${user.id}`}>Editar</Link> </td>
                                
                            </tr>
                        ))}
                </tbody>
            </Table>
            {users.error && (
                <Alert className="mt-4" color="danger">
                    {users.errorMessage}
                </Alert>
            )}
            </Container>
        </div>

    );
}

export default UserList;
