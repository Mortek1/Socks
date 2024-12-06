import React, { useState } from 'react';
import axiosInstance from '../../api/axiosInstance';
import { Button } from 'react-bootstrap';
import sock from './sock.png'; // Стандартное изображение
import texturaSock from './texturaSock.avif';

export default function GeneratePage({ user }) {
  const [bgColor, setBgColor] = useState('#ff0000'); // Начальный цвет — красный
  const [uploadedImage, setUploadedImage] = useState(null); // Слой пользовательского изображения
  const [loading, setLoading] = useState(false); // Для предотвращения двойного нажатия

  const handleColorChange = (event) => {
    setBgColor(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setUploadedImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const addSockHandler = async (type) => {
    if (loading) return; // Предотвращаем повторный запрос
    setLoading(true);

    try {
      const endpoint = type === 'cart' ? '/generate/carts' : '/generate/favorites';
      await axiosInstance.post(endpoint, {
        userId: user.data.id,
        color: bgColor,
        logo: uploadedImage,
      });

      console.log(
        type === 'cart' 
          ? 'Успешно добавлено в корзину' 
          : 'Успешно добавлено в избранное'
      );
    } catch (error) {
      console.error(
        type === 'cart' 
          ? 'Ошибка при добавлении в корзину:' 
          : 'Ошибка при добавлении в избранное:', 
        error
      );
    } finally {
      setLoading(false); // Сбрасываем состояние загрузки
    }
  };

  return (
    <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-evenly' }}>
      <div style={{ position: 'relative', width: '400px', height: '500px' }}>
        <div>
          <img
            style={{ zIndex: '2', position: 'absolute', width: '100%', height: '100%', opacity: '30%' }}
            src={texturaSock}
            alt="Текстура носка"
          />
        </div>
        <div
          style={{
            zIndex: '1',
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: bgColor,
            borderRadius: '40px',
          }}
        ></div>
        {uploadedImage && (
          <div
            style={{
              zIndex: '3',
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              borderRadius: '40px',
              overflow: 'hidden',
            }}
          >
            <img
              src={uploadedImage}
              alt="Дизайн носка"
              style={{
                width: '60px',
                objectFit: 'cover',
                borderRadius: '50%',
                marginLeft: '220px',
                marginTop: '365px',
              }}
            />
          </div>
        )}
        <div style={{ zIndex: '4', position: 'absolute', top: '0', left: '0', width: '400px' }}>
          <img src={sock} alt="Носок" style={{ maxWidth: '400px', borderRadius: '30px' }} />
          <Button 
            onClick={() => addSockHandler('cart')} 
            style={{ marginTop: '30px', marginRight: '129px' }} 
            disabled={loading}
          >
            Добавить в 🛒
          </Button>
          <Button 
            onClick={() => addSockHandler('favorite')} 
            style={{ marginTop: '30px' }} 
            disabled={loading}
          >
            Добавить в ❤️
          </Button>
        </div>
      </div>

      <div>
        <h2 style={{ textAlign: 'center' }}>Выберите цвет</h2>
        <input
          type="color"
          value={bgColor}
          onChange={handleColorChange}
          style={{
            marginBottom: '20px',
            width: '455px',
            height: '50px',
            border: 'none',
            padding: '0',
            borderRadius: '20px',
          }}
        />
        <h2
          style={{
            textAlign: 'center',
            marginBottom: '30px',
          }}
        >
          Примените стильный логотип
        </h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ marginBottom: '20px', width: '400px', height: '50px' }}
        />
      </div>
    </div>
  );
}