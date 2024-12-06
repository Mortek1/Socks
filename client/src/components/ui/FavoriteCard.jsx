import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../../../public/SOCKS.png';

function FavoriteCard() {
  const handleShare = () => {
    const shareData = {
      title: 'Card Title',
      text: 'Описание карточки, которую вы хотите поделиться.',
      url: img, // Ссылка на изображение или URL страницы
    };

    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log('Успешно поделились'))
        .catch((error) => console.error('Ошибка при попытке поделиться', error));
    } else {
      // Альтернативное поведение для браузеров, которые не поддерживают share API
      alert('К сожалению, ваш браузер не поддерживает функцию "Поделиться".');
    }
  };

  return (
    <Col xs={7}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Это пример карточки, которую можно поделиться с другими.
          </Card.Text>
          <Button variant="danger">Удалить</Button>
          <Button variant="primary" onClick={handleShare}>
            Поделиться
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default FavoriteCard;