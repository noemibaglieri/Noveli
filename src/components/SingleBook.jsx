// SingleBook is used to generate books in "BookList"

import { useState } from "react";
import { Card, Col } from "react-bootstrap";

const SingleBook = (props) => {
  const [select, setSelect] = useState(false);

  return (
    <>
      <Col>
        <Card className={"book-card" + (select ? " selected-card" : "")} onClick={() => setSelect(!select)}>
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default SingleBook;
