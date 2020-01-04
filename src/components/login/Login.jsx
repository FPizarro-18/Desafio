import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginAsyncActionCreator } from '../../store/modules/auth/actions';
import { Link, Redirect } from 'react-router-dom';
import { push } from 'react-router-redux'
import './Login.css';
import { Button, Form, FormGroup, Label, Input, Col, FormText } from 'reactstrap';
import { browserHistory } from 'history'
/**
 * Login
 * @version v1.1.0
 * 
 * @param {*} props 
 */

const Login = (props) => {
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
        //  props.toggle();
         //dispatch(push('/private/home')); // navigate to some route

           //redirectToHome();
           //this.setRedirect("/private/home/");

           props.history.push('/private/home');
      }
    }, [store.auth.isLogin, props]);


    const redirectToHome = () => {
      return <Redirect to='/private/home/'/>
      // const { history } = props;
      // if(history) history.push('/private/home');
      // return <Redirect  to="/private/home" />
     };

    return (
      <div>
        <Form onSubmit={handlerSubmit}>
           <legend>Login</legend>
          <FormGroup>
            <FormText>Esto iba a quedar dentro de un modal pero me la ganó</FormText>
          </FormGroup>
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
      </div>
    );
};

export default Login;