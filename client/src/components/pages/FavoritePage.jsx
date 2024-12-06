import { Row } from 'react-bootstrap';
import FavoriteCard from '../ui/FavoriteCard';
// import useFavoriteSocks from '../../hooks/useFavoriteSocks';
import { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';

export default function FavoritesPage({ user }) {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    axiosInstance('/favorites').then(({ data }) => setFavorites(data));
  }, []);

  return (
    <Row>
      {favorites.map((favorite) => (
        <FavoriteCard key={favorite.id} favorite={favorite} />
      ))}
    </Row>
  );
}
