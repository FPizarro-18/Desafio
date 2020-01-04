import React, { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import {  Card, CardBody, CardHeader, CardFooter, Button, Container, Col, Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { findAllAsyncActionCreator } from '../../store/modules/post/actions';
import CardPostPrivate from '../../components/card-post-private/CardPostPrivate';


const TablaPostsPrivate = (props) =>{
    const dispatch = useDispatch();
    const posts = useSelector(store => store.post.posts);

    useEffect(() => {
        dispatch(findAllAsyncActionCreator())
    }, [dispatch]);

    const handlerBack = () => {
        props.history.push('/private/userlist')
    };


    // const updateAction = (data, id, toggle) => {
    //     dispatch(updateActionsAsyncCreator(data, id));
    //     toggle(props.history);
    // }

    const { data } = posts;

    return data && (<div>
        <div>

        <Row>
            <Col md={12}>
                <section className="card-columns">
                {posts.data.map(post => (
                    <CardPostPrivate post={post} key={post.id} />
                ))}
                </section>
            </Col>
            <Col md={12}>{posts.loading ? 'Cargando...' : ''}</Col>
        </Row>
            
        </div>
    </div>);
};

export default TablaPostsPrivate;