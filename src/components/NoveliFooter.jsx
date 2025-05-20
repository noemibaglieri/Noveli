import { Col, Container, Row } from "react-bootstrap";
import { Apple, CreditCard2BackFill, Google, Instagram, Linkedin, Paypal, Stripe, TwitterX } from "react-bootstrap-icons";

const NoveliFooter = () => {
  return (
    <footer className="p-4 bg-body-tertiary">
      <Container fluid>
        <Container>
          <Row className="mt-4">
            <Col>
              <h5 className="noveli-primary">Follow us</h5>
              <ul className="d-flex gap-2">
                <li>
                  <Linkedin />
                </li>
                <li>
                  <Instagram />
                </li>
                <li>
                  <TwitterX />
                </li>
              </ul>
            </Col>
            <Col>
              <h5 className="noveli-primary">Noveli</h5>
              <ul>
                <li>16 The Green</li>
                <li>W5 5DA - London</li>
                <li>Company reg. n. 297087</li>
              </ul>
            </Col>
            <Col>
              <h5 className="noveli-primary">Payment methods</h5>
              <ul className="d-flex gap-2">
                <li>
                  <Paypal />
                </li>
                <li>
                  <CreditCard2BackFill />
                </li>
                <li>
                  <Stripe />
                </li>
                <li>
                  <Apple />
                </li>
                <li>
                  <Google />
                </li>
              </ul>
            </Col>
            <Col>
              <h5 className="noveli-primary">Legal</h5>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Shipment</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Work with us</a>
                </li>
                <li>
                  <a href="#">Contacts</a>
                </li>
              </ul>
            </Col>
            <Col md={12}>
              <p>&copy; Noemi Baglieri, 2025 - All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
};

export default NoveliFooter;
