import React from 'react';
import { Card, CardBody, CardHeader,CardImg, CardFooter } from 'reactstrap'; 
import './card-post.css'
import ReadMoreReact from 'read-more-react';
import { Link } from 'react-router-dom';


const CardPost = ({ post }) => (
    <Card>
        {/* <CardImg top width="100%" src={`data:image/jpeg;base64,${post.image_url}`} alt="" /> */}
        <CardHeader className="headerModal" > #{post.id} - {post.title}</CardHeader>
        <CardBody className="bodyModal">
        {/* <ReadMoreReact 
        text={post.description} 
        min={3}
        ideal={15}
        max={200} 
        readMoreText="Click aquí para leer más"/> */}
        {post.description} 
        </CardBody>
       
    </Card>
);

export default CardPost;