import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Login from '../../components/login/Login';

const ModalExample = (props) => {
  

  const [modal, setModal] = useState(false);

  const toggle = () => setModal( !modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>Login</Button>
      <Modal isOpen={modal} toggle={toggle} className="">
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
         <Login {...props.children}/>
        </ModalBody>
        
      </Modal>
    </div>
  );
}

export default ModalExample;