import { Row } from 'react-bootstrap';
import CartComp from '../ui/CartComp';
import { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';

export default function CartPage({ user }) {
  // const cartShop = useCartShopSocks();
  const [cartShop, setCartShop] = useState([])

  useEffect(() => {
    axiosInstance('/carts').then(({ data }) => setCartShop(data));
  }, []);

  const deleteHandler = async (id) => {
    try {
      const res = await axiosInstance.delete(`/carts/${id}`);
      if (res.status === 200) {
        setCartShop((prev) => prev.filter((cart) => cart.id !== id));
      }
    } catch (error) {
      console.log(error);
      alert("Что-то пошло не так");
    }
  };

  return (
    <Row>
      {cartShop.map((cart) => (
        <CartComp key={cart.id} cart={cart} deleteHandler={deleteHandler}/>
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

