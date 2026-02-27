import { useEffect, useState } from "react";
import DinoCard from "../components/DinoCard";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { getDinosaurs } from "../services/dinoApi";

function Home() {
  const [dinosaurs, setDinosaurs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getDinosaurs();
        setDinosaurs(data);
      } catch (err) {
        setError("Failed to load dinosaurs.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <h2>Browse Dinosaurs</h2>
      {dinosaurs.map((dino, index) => (
        <DinoCard key={index} dino={dino} />
      ))}
    </div>
  );
}

export default Home;