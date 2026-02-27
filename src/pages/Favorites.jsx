import { useFavorites } from "../contexts/FavoritesContext";
import DinoCard from "../components/DinoCard";

function Favorites() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return <p>No favorites yet.</p>;
  }

  return (
    <div>
      <h2>Your Favorites</h2>
      {favorites.map((dino, index) => (
        <DinoCard key={index} dino={dino} />
      ))}
    </div>
  );
}

export default Favorites;