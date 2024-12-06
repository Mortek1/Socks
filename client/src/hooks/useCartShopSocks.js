import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function useCartShopSocks() {
  const [cartShop, setCartShop] = useState([])

  useEffect(() => {
    axios('/api/carts').then(({ data }) => setCartShop(data));
  }, []);

  return cartShop;
}