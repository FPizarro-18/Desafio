import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, FormGroup } from 'reactstrap';
import useInput from '../../hooks/userInput';

/**
 * 
 * @param {*} props 
 * @param {string} props.buttonLabel
 * @param {string} props.className
 * @param {*} props.user
 * @param {Function} props.updateAction
 */
const ModalUpdateUser = (props) => {

    const [modal, setModal] = useState(false);
    const title = useInput(props.post.title);
    const description = useInput(props.post.description, 'textarea');
    const password = useInput('', 'text');

    const toggle = (history) =>  {
      setModal(!modal);
    };

    const update = () => {
      const userId = props.post.id;
      const userUpdate = {
        title: title.value,
        description: description.value
      }
      props.updateAction(userUpdate, userId, toggle);
    }
  
    return (
      <div>
        <Button color="warning" onClick={toggle}>{props.buttonLabel}</Button>
        <Modal isOpen={modal} toggle={toggle} className={props.className}>
          <ModalHeader toggle={toggle}>Actualizar</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label>Nombre</Label>
              <Input {...title} />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input {...description} />
            </FormGroup>
          
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