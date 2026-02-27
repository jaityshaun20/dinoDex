import { Link } from "react-router-dom";

function DinoCard({ dino }) {
  return (
    <div className="card">
      <h3>{dino.Name}</h3>
      <p>{dino.Description}</p>
      <Link to={`/dino/${dino.Name}`}>View Details</Link>
    </div>
  );
}

export default DinoCard;