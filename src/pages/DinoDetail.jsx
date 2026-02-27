import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDinosaurByName } from "../services/dinoApi";

function DinoDetail() {
  const { id } = useParams();
  const [dino, setDino] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDino() {
      const data = await getDinosaurByName(id);
      setDino(data);
      setLoading(false);
    }

    fetchDino();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!dino) return <p>Dinosaur not found.</p>;

  return (
    <div>
      <h2>{dino.Name}</h2>
      <p>{dino.Description}</p>
    </div>
  );
}

export default DinoDetail;