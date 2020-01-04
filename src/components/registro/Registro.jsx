import React, { useState, useEffect } from 'react';


import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Registro.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveAsyncActionCreator  } from '../../store/modules/user/actions';
import { Container, Row, Col } from 'reactstrap';


/**
 * Registro
 * @version v1.0.0
 * 
 * @param {*} props 
 */

const  Registro = (props)  => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const userSaveModule = useSelector(store => store.user.userSave);
    
    useEffect(() => {
        dispatch({
            type: 'USER_SAVE_VOID',
            payload: null,
        })
    }, []);

    //Dps de registrar redirige al Login
    useEffect(() => {
        if(userSaveModule.data.id) {
            props.history.push('/login');
            dispatch({
                type: 'USER_SAVE_VOID',
                payload: null,
            })
        }
    }, [userSaveModule.data.id])


    const handlerSave = (event) => {
        event.preventDefault();
        
        const user = {
            name,
            email,
            password,
        };
        debugger;
        dispatch(saveAsyncActionCreator(user));
    }

    const validForm = () => {
        return name === '' || email === '' || password === '';
    }
    return (
        <Container className="themed-container">
        <Row>
            <br></br>
      </Row>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}> 
        
        <Form onSubmit={handlerSave}>
            <h2>Registro Usuario</h2>
            <FormGroup>
                <Label>Nombre</Label>
                <Input type="text" name="name" id="" placeholder="Ingrese su nombre"value={name}   onChange={({ target }) => setName(target.value) }/>
            </FormGroup>
            <FormGroup>
                <Label for="">Email</Label>
                <Input type="email" name="email" id="" placeholder="Ingrese email" value={email}  onChange={({ target }) => setEmail(target.value) }/>
            </FormGroup>
            <FormGroup>
                <Label for="">Password</Label>
                <Input type="password" name="password" id="" placeholder="*******" value={password}  onChange={({ target }) => setPassword(target.value) } />
            </FormGroup>
            
            <Button disabled={validForm()} color="primary">Registrar</Button>
            <Link to="/login" className="btn btn-link">Volver</Link>
        </Form>
        </Col>
      </Row>
       
        </Container>
       
        
        
    );
}


export default Registro;