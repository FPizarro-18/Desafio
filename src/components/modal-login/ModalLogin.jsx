import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, FormGroup,Col, Form } from 'reactstrap';
import useInput from '../../hooks/userInput';
import { loginAsyncActionCreator } from '../../store/modules/auth/actions';
import { Link } from 'react-router-dom';

import './Login.css';


/**
 * 
 * @param {*} props 
 * @param {string} props.buttonLabel
 * @param {string} props.className
 * @param {*} props.user
 * @param {Function} props.updateAction
 */
const ModalUpdateUser = (props) => {
    const [email,setEmail] = useState('');
    const [password,setPass] = useState('');
    const store = useSelector(store => store);
    const dispatch = useDispatch();
        
    const handlerSubmit = (event) => {
      event.preventDefault();
      // client
      dispatch(loginAsyncActionCreator({
          email,
          password,
      }));
    };

    useEffect(() => {
      if(store.auth.isLogin) {
         debugger;
         redirectToHome();
          //  props.history.push('/private/home');
      }
    }, [store.auth.isLogin, props]);


    const redirectToHome = () => {
      const { history } = props;
      if(history) history.push('/private/home');
     };
    const [modal, setModal] = useState(false);
    const name = useInput(props.user.name);
    
   

    const toggle = (history) =>  {
      setModal(!modal);
    };

    const update = () => {
      const userId = props.user.id;
      const userUpdate = {
        name: name.value,
        email: email.value,
        password: password.value,
      }
      props.updateAction(userUpdate, userId, toggle);
    }
  
    return (
      <div>
        <Button color="warning" onClick={toggle}>{props.buttonLabel}</Button>
        <Modal isOpen={modal} toggle={toggle} className={props.className}>
          <ModalHeader toggle={toggle}>Actualizar</ModalHeader>
          <ModalBody>
          <Form onSubmit={handlerSubmit}>
        <h2>Login</h2>
        <FormGroup row>
        <Label for="" sm={2}>Email</Label>
        <Col sm={10}>
          <Input    type="email"
                    value={email} 
                    onChange={({ target }) => setEmail(target.value) }
                    placeholder="Ingrese Mail" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="" sm={2}>Password</Label>
        <Col sm={10}>
          <Input    type="password"
                    value={password} 
                    onChange={({ target }) => setPass(target.value) }
                    placeholder="Ingrese Password" />
        </Col>
      </FormGroup>
        <Button>Login</Button>
        <Link to="/registro" className="btn btn-link">Registrate</Link>
      </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>Cancelar</Button>{' '}
            <Button color="primary" onClick={update}>Guardar</Button>
          </ModalFooter>
        </Modal>
      </div>
    );

}

export default ModalUpdateUser;