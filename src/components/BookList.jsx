import { Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import fantasy from "../data/fantasy.json";

const BookList = () => {
  return (
    <Row md={4} className="gy-3 gx-3 mb-4">
      {fantasy.map((book) => {
        return <SingleBook img={book.img} title={book.title} key={book.asin} />;
      })}
    </Row>
  );
};

export default BookList;
