import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import img from '../public/sock.png';

export default function CartComp({}) {
  const [purchased, setPurchased] = useState(false);

  const handlePurchase = () => {
    setPurchased(true);
  };

  return (
    <Card style={{ width: '18rem', position: 'relative' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Text>Размер: L</Card.Text>
        <Card.Text>Цена: 500 руб.</Card.Text>
        <Button
          variant={purchased ? 'success' : 'primary'}
          onClick={handlePurchase}
          disabled={purchased}
        >
          {purchased ? 'Куплено' : 'Купить'}
        </Button>
      </Card.Body>
    </Card>
  );
}
