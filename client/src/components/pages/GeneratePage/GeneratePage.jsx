import React, { useEffect, useState } from 'react';
import sock from './sock.png'; // Стандартное изображение
import texturaSock from './texturaSock.avif';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import axiosInstance from '../../api/axiosInstance';

export default function GeneratePage() {
  const [bgColor, setBgColor] = useState('#ff0000'); // Начальный цвет — красный
  const [uploadedImage, setUploadedImage] = useState(null); // Слой пользовательского изображения

  const handleColorChange = (event) => {
    setBgColor(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const addShopCartHandler = () => {
    axiosInstance.post('/api/carts', { color: bgColor, logo: uploadedImage });
  };

  const addFavoriteHandler = () => {
    axiosInstance.post('/api/favorite', {
      color: bgColor,
      logo: uploadedImage,
    });
  };
  return (
    <div
      style={{
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      <div style={{ position: 'relative', width: '400px', height: '500px' }}>
        <div>
          <img
            style={{
              zIndex: '2',
            position: 'absolute',
            width: '100%',
            height: '100%',
              opacity: '30%',
            }}
            src={texturaSock}
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
                // height: '100px',
                objectFit: 'cover',
                borderRadius: '50%',
                // marginTop: '500px',
                marginLeft: '220px',
                marginTop: '365px',
              }}
            />
          </div>
        )}
        {/* Верхний слой — базовое изображение носка */}
        <div
          style={{
            zIndex: '4',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '400px',
          }}
        >
          <img
            src={sock}
            alt="Носок"
            style={{
              maxWidth: '400px',
              borderRadius: '30px',
            }}
          />
          <Button
            onClick={addShopCartHandler}
            style={{
              marginTop: '30px',
              marginRight: '129px',
            }}
          >
            Добавить в 🛒
          </Button>
          <Button
            onClick={addFavoriteHandler}
            style={{
              marginTop: '30px',
            }}
          >
            Добавить в ❤️
          </Button>
        </div>
      </div>

      <div>
        <h2
          style={{
            textAlign: 'center',
          }}
        >
          Выберите цвет
        </h2>
        <input
          type="color"
          value={bgColor}
          onChange={handleColorChange}
          style={{
            marginBottom: '20px',
            width: '400px',
            height: '50px',
            border: 'none',
            padding: '0',
            borderRadius: '20px',
          }}
        />
        <h2 style={{ textAlign: 'center' }}>Загрузите картинку</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{
            marginBottom: '20px',
            width: '400px',
            height: '50px',
          }}
        />
      </div>
    </div>
  );
}
// export default function GeneratePage() {
//   return (
//     <>
//     <div>

//     </div>

//       <div style={{ position: 'relative' }}>
//         <img src={sock} style={{
//           marginTop: '150px',
//           marginLeft: '13px',
//           width: "400px",
//           position: "absolute",
//           zIndex: '2'
//           }}></img> */
//           }
//         <div style={{
//           position: 'absolute',
//           zIndex: "1"
//           }}>
//           <img
//             src={red}
//             style={{
//               width: '400px',
//               height: '550px',
//             }}
//           ></img>
//         </div >
//         <div style={{
//           position: 'absolute',
//           zIndex: "2"
//           }}>
//           <img
//             src={uzor1}
//             style={{
//               zIndex: "2"
//             }}
//           ></img>
//         </div>
//         { <div style={{
//           position: 'absolute',
//           zIndex: "1"
//           }}>
//           <img
//             src={fon} style={{
//               width: "81em"
//             }}
//           ></img>
//         </div>
//       </div>
//     </>
//   );
// }
