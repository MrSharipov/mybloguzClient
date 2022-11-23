import React from 'react';
import {BiEdit} from 'react-icons/bi';
import {RiDeleteBin5Line} from 'react-icons/ri';
import { Card, CardBody, CardText, CardTitle, CardLink } from 'reactstrap';


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
            <CardLink href="#">
            <BiEdit size={"25px"} />
            </CardLink>
            <CardLink href="#">
            <RiDeleteBin5Line size={"25px"} />
            </CardLink>
        </CardBody>
    </Card>
  )
}

export default Post