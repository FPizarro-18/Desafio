import React from 'react';
import { Card, CardBody, CardHeader,CardImg, CardFooter } from 'reactstrap'; 
// import './card-post.css'
import { Link } from 'react-router-dom';


const CardPostPrivate = ({ post }) => (
    <Card>
        {/* <CardImg top width="100%" src={`data:image/jpeg;base64,${post.image_url}`} alt="" /> */}
        <CardHeader className="headerModal" > #{post.id} - {post.title}</CardHeader>
        <CardBody className="bodyModal">
        {post.description} 
        </CardBody>
        <CardFooter>
        <Link to={`/private/post/view/${post.id}`}>Editar</Link>
        </CardFooter>
        </Card>
);

export default CardPostPrivate;