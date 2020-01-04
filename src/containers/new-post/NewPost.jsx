import React, { Component } from 'react';
import NewPostForm from '../../components/new-post-form/NewPostForm';
import Menu from '../../components/menu/Menu'

class NewPost extends Component {
    render(){
            
    return (
        <div>
        <Menu/>
        <NewPostForm {...this.props}/>
        </div>
        
    );
    }
}
export default NewPost;