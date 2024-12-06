import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../../../public/SOCKS.png';
import texturaSock from '../pages/GeneratePage/texturaSock.avif'
import axiosInstance from '../api/axiosInstance';

function FavoriteCard({ favorite, deleteHandler }) {
  console.log(favorite)
  const handleShare = () => {
    const shareData = {
      title: 'Card Title',
      text: 'Описание карточки, которой вы хотите поделиться.',
      url: img,
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
    <Col xs={3}>
      <Card style={{ width: '18rem'}}>
  
        <Card.Img  src={img} style={{
          // position: 'absolute',
          zIndex: 2,
          backgroundColor: favorite?.Sock?.color,
          }}/>
        <Card.Img  src={texturaSock} style={{
          position: 'absolute',
          zIndex: 1,
        }}/>
        <Card.Img  src={img} src={favorite?.Sock?.logo} style={{
          position: 'absolute',
          zIndex: 3,
          width: '40px',
                objectFit: 'cover',
                borderRadius: '50%',
                marginLeft: '160px',
                marginTop: '265px',
        }}/>

        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Это пример карточки, которую можно поделиться с другими.
          </Card.Text>
          <Button variant="danger" onClick={() => deleteHandler(favorite.id)}>Удалить</Button>
          <Button variant="primary" onClick={handleShare}>
            Поделиться
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default FavoriteCard;