import { Row } from 'react-bootstrap';
import CartComp from '../ui/CartComp';
import useCartShopSocks from '../../hooks/useCartShopSocks';

export default function CartPage({ user }) {
  const cartShop = useCartShopSocks();

  return (
    <Row>
      {cartShop.map((cart) => (
        <CartComp key={cart.id} cart={cart} />
      ))}
    </Row>
  );
} 


// import React, { useEffect, useState } from 'react';
// import CartComp from '../ui/CartComp';
// import axiosInstance from '../api/axiosInstance';


// const CartPage = () => {
//   const [socks, setSocks] = useState([]);

//   useEffect(() => {
//     const fetchSocks = async () => {
//       try {
//         const response = await axiosInstance.get('/carts'); 
//         setSocks(response.data)
//       } catch (error) {
//         console.error('Ошибка при получении данных:', error);
//       }
//     };

//     fetchSocks();
//   }, []);

//   return (
//     <div>
//       <h1>Корзина</h1>
//  <CartComp/>

//     </div>
//   );
// };

// export default CartPage;

