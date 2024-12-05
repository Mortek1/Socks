import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#343a40", color: "white", padding: "10px 0" }}
    >
      <Container>
        <Row className="justify-content-between">
          <Col className="col-auto">
            <h5>About Us</h5>
            <p>Just awesome socks!</p>
          </Col>
          <Col className="col-auto">
            <h5></h5>
            <p>© 2024 AwesomeSocks Team. All rights reserved.</p>
          </Col>
          <Col className="col-auto">
            <h5>Contact</h5>
            <p>Email: contact@example.com</p>
            <a
              href="https://t.me/Заказчик_Кастомные_Носки" // Замените пробелы на подчеркивания или уберите их
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://telegram.org/img/t_logo_2x.png"
                alt="Telegram"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
