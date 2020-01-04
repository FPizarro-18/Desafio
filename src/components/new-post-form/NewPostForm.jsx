import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginAsyncActionCreator } from '../../store/modules/auth/actions';
import {saveAsyncActionCreator} from '../../store/modules/post/actions'
import { Link, Redirect } from 'react-router-dom';
import { push } from 'react-router-redux'

import { Container, Row, Col } from 'reactstrap';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
/**
 * Login
 * @version v1.1.0
 * 
 * @param {*} props 
 */

const NewPostForm = (props) => {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [image,setImage] = useState('');
    const postSaveModule = useSelector(store => store.post.postSave);

    const dispatch = useDispatch();
    var imageText;
    

    const getBase64 = (file) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
        console.log(reader.result);
        imageText = reader.result;
        return reader.result;
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
     }
     
     const handlerSubmit = async (event) => {
        event.preventDefault();
        dispatch(saveAsyncActionCreator({
            title,description,image
        }));
      };

      
    //Dps de registrar redirige al Login
    useEffect(() => {
        if(postSaveModule.data.id) {
            props.history.push('/private/home');
            dispatch({
                type: 'POST_SAVE_VOID',
                payload: null,

            })
        }
    }, [postSaveModule.data.id], [image])

  


    return (
        <Container className="themed-container">
        <Row>
            <br></br>
      </Row>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}> 
        <Form onSubmit={handlerSubmit}>
        <FormGroup row>
        <Label for="" sm={2}>Titulo</Label>
        <Col sm={10}>
          <Input    type="text"
                    value={title} 
                    onChange={({ target }) => setTitle(target.value) }
                    placeholder="Ingrese Titulo" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="" sm={2}>Descripción</Label>
        <Col sm={10}>
          <Input    type="text"
                    value={description} 
                    onChange={({ target }) => setDescription(target.value) }
                    placeholder="Ingrese el texto de su preferencia" />
        </Col>
      </FormGroup>
      {/* <FormGroup row>
        <Label for="exampleFile" sm={2}>File</Label>
        <Col sm={10}>
          <Input type="file" name="files" id="file" onChange={handleLoadLocalFile}/>
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </Col>
      </FormGroup> */}
        <Button>Guardar</Button>
      </Form>
      </Col>
      </Row>
       
        </Container>
      
    );
};

export default NewPostForm;