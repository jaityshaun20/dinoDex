import { Link } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext";

function DinoCard({ dino }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const favorite = isFavorite(dino.Name);

  function handleFavorite() {
    if (favorite) {
      removeFavorite(dino.Name);
    } else {
      addFavorite(dino);
    }
  }

  return (
    <div className="card">
      <h3>{dino.Name}</h3>
      <p>{dino.Description}</p>

      <button onClick={handleFavorite}>
        {favorite ? "Remove Favorite" : "Add to Favorites"}
      </button>

      <Link to={`/dino/${dino.Name}`}>View Details</Link>
    </div>
  );
}

export default DinoCard;