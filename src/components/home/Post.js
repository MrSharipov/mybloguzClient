import React from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';


const Post = (props) => {

  return (
    <Card className="mb-3" style={{
        width: '500px'
    }}>
        <CardBody>
            <CardTitle tag="h5">
            {props.title}
            </CardTitle>
        </CardBody>
        <img
            alt="Card cap"
            src={props.link}
            width="100%"
        />
        <CardBody>
            <CardText>
            {props.description}
            </CardText>
            <CardText>
        <small className="text-muted">
          Created at {props.time.slice(0,10)}
        </small>
      </CardText>
        </CardBody>
    </Card>
  )
}

export default Post