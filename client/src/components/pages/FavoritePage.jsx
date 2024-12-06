import { Row } from 'react-bootstrap';
import FavoriteCard from '../ui/FavoriteCard';
import useFavoriteSocks from '../../hooks/useFavoriteSocks';

export default function FavoritesPage({ user }) {
  const favorites = useFavoriteSocks();

  return (
    <Row>
      {favorites.map((favorite) => (
        <FavoriteCard key={favorite.id} favorite={favorite} />
      ))}
    </Row>
  );
}
