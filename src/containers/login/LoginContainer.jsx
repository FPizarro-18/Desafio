import React, { Component } from 'react';
import Login from  '../../components/login/Login'
import { Container, Row, Col } from 'reactstrap';



class Home extends Component {
    render(){
            
    return (

        <Container className="themed-container">
        <Row>
            <br></br>
      </Row>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}> <Login {...this.props}/></Col>
      </Row>
        </Container>
    );
    }
}
export default Home;