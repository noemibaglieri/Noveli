import { Card, Col, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";

const AllTheBooks = () => {
  return (
    <>
      <Row md={4} className="gy-3">
        {fantasy.map((book) => {
          return (
            <Col key={book.asin}>
              <Card className="book-card">
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default AllTheBooks;
