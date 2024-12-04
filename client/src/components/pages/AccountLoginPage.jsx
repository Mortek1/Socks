import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function AccountLoginPage({ signInHandler }) {
  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }} className="mt-5">
        <h3 className="text-center text-white">Войти в учетную запись</h3>
        <Form onSubmit={signInHandler} className="bg-dark p-4 rounded">
          <Form.Group className="mb-3" controlId="email">
            <Form.Label className="text-white">Email</Form.Label>
            <Form.Control 
              name="email" 
              type="email" 
              placeholder="Введите email" 
              className="bg-secondary text-white border-0" 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label className="text-white">Пароль</Form.Label>
            <Form.Control 
              name="password" 
              type="password" 
              placeholder="Введите пароль" 
              className="bg-secondary text-white border-0" 
            />
          </Form.Group>
          <Button variant="outline-light" type="submit">
            Войти
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
