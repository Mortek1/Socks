import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function useFavoriteSocks() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    axios('/api/favorites').then(({ data }) => setFavorites(data));
  }, []);

  return favorites;
}
