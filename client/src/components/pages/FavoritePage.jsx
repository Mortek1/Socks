import { Row } from 'react-bootstrap';
import FavoritesCardsList from '../ui/FavoritesCardsList'
import FavoriteCard from '../ui/FavoriteCard';

export default function FavoritesPage({ user }) {
  return (
    <Row>
        <FavoriteCard/> 
    </Row>
//     <main>
//       <FavoritesCardsList user={user} />
//     </main>

 );
}