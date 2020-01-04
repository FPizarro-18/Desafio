
import React, { useEffect } from 'react';

import { FaArrowLeft } from 'react-icons/fa';

import {  Card, CardBody, CardHeader, CardFooter, Button, Container, Col, Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { findByIdAsyncActionCreator, updateActionsAsyncCreator } from '../../store/modules/post/actions';

import ModalUpdatePost from '../../components/modal-update-post/ModalUpdatePost';
import Menu from '../../components/menu/Menu';

const PostDetail = (props) => {
    const dispatch = useDispatch();
    const postData = useSelector(store => store.post.postById);
    debugger;
    useEffect(() => {
        dispatch(findByIdAsyncActionCreator(props.match.params.id))
    }, [props, dispatch]);

    const handlerBack = () => {
        props.history.push('/private/home')
    };


    const updateAction = (data, id, toggle) => {
        dispatch(updateActionsAsyncCreator(data, id));
        toggle(props.history);
        window.location.reload();

    }

    const { data } = postData;
    return data && (<div>
        <div>
            <Menu></Menu>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>Post #{data.id} - {data.title}</Col>
                                
                            </CardHeader>
                            <CardBody>
                                <Row>
                                <Col sm="12" md={{ size: 6, offset: 3 }}>{data.description}</Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <Row>
                                <Col xs="6" sm="4">
                                <Button onClick={handlerBack}><FaArrowLeft /> Volver</Button></Col>
                                <Col xs="6" sm="6"></Col>
                                <Col sm="2">
                                <ModalUpdatePost updateAction={updateAction} post={data} buttonLabel="Actualizar" className="" />
                                </Col>

                                </Row>
                                
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    </div>);
};

export default PostDetail;