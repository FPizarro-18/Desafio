
import React, { useEffect } from 'react';

import { FaArrowLeft } from 'react-icons/fa';

import {  Card, CardBody, CardHeader, CardFooter, Button, Container, Col, Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { findByIdAsyncActionCreator, updateActionsAsyncCreator } from '../../store/modules/user/actions';

import ModalUpdateUser from '../../components/modal-update-user/ModalUpdateUser';

const UserDetail = (props) => {
    const dispatch = useDispatch();
    const userData = useSelector(store => store.user.userById);

    debugger;
    useEffect(() => {
        dispatch(findByIdAsyncActionCreator(props.match.params.id))
    }, [props, dispatch]);

    const handlerBack = () => {
        props.history.push('/private/users')
    };


    const updateAction = (data, id, toggle) => {
        dispatch(updateActionsAsyncCreator(data, id));
        toggle(props.history);
        window.location.reload();

    }

    const { data } = userData;
    return data && (<div>
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>Detalle Usuario
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs="12" sm="4">{data.id}</Col>
                                    <Col xs="12" sm="4">{data.name}</Col>
                                    <Col xs="12" sm="4">{data.email}</Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <Button onClick={handlerBack}><FaArrowLeft /> Volver</Button>
                                <ModalUpdateUser updateAction={updateAction} user={data} buttonLabel="actualizar" className="" />
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    </div>);
};

export default UserDetail;