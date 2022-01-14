import React from 'react';
import { Container, Row, Col } from "reactstrap";

const OSTAG = () => {
  return `<script async src="https://s.getonsite.io/6FqpMnJ/onsite.js"></script>`
}

const Footer = () => {
  return (
    <section className="footer section">
      <Container>
        <Row className="mt-5">
          <Col md={12}>
            <div className="text-center text-muted">
              <h6>2022 © OnSiteJS | hello@onsitejs.org</h6>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Footer;