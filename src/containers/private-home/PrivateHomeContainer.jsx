import React, { useEffect, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Button, Table } from 'reactstrap';
//import UserModal from '../../components/user-modal/UserModal';

import { logoutActionCreator } from '../../store/modules/auth/actions';
import { findAllAsyncActionCreator, findByIdAsyncActionCreator } from '../../store/modules/user/actions';
import Menu from '../../components/menu/Menu'
import PostList from '../post-list/PostList';
import TablaPosts from '../../components/tabla-posts/TablaPosts';
import CardPostPrivate from '../../components/card-post-private/CardPostPrivate';
import TablaPostsPrivate from '../tabla-post-private/TablaPostPrivate';
import SwitchColor  from  '../../components/switch/Switch'

const PrivateHome = (props) => {
    const dispatch = useDispatch();
    const userModule = useSelector(store => store.user.users);
    const userByIdModule = useSelector(store => store.user.userById);

    useEffect(() => {
        dispatch(findAllAsyncActionCreator());
    }, []);

    const handlerLogout = () => {
        dispatch(logoutActionCreator());
    };

    const handlerFindById = (user) => {
        return (event) => {
            dispatch(findByIdAsyncActionCreator(user.id));
        }
    }

    return (
        <div className="private-home">
                <Menu></Menu>
            <TablaPostsPrivate/>
        </div>
    );
};

export default PrivateHome;