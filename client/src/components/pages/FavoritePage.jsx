import { Row } from 'react-bootstrap';
import FavoriteCard from '../ui/FavoriteCard';
// import useFavoriteSocks from '../../hooks/useFavoriteSocks';
import { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';

export default function FavoritesPage({ user }) {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    axiosInstance('/favorites').then(({ data }) => setFavorites(data)
  );
 
  }, []);

  const deleteHandler = async (id) => {
    try {
      const res = await axiosInstance.delete(`/favorites/${id}`);
      if (res.status === 200) {
        setFavorites((prev) => prev.filter((favorite) => favorite.id !== id));
      }
    } catch (error) {
      console.log(error);
      alert("Что-то пошло не так");
    }
  };

  return (
    <Row>
      {favorites.map((favorite) => (
        <FavoriteCard key={favorite.id} favorite={favorite} deleteHandler={deleteHandler}/>
      ))}
    </Row>
  );
}
