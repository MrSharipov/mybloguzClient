import React from 'react';
import SideBar from './SideBar';
import { Container, Row, Col } from 'reactstrap';
import MyAllPosts from './UserPosts';

const PostCard = () => {
  return (
    <Container>
        <Row>
          <Col md={5} className="me-4">
            <SideBar />
          </Col>
          <Col md={5}>
            <MyAllPosts />
          </Col>
        </Row>
      </Container>
  )
}

export default PostCard