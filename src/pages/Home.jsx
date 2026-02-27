import { useEffect, useState } from "react";
import DinoCard from "../components/DinoCard";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { getDinosaurs } from "../services/dinoApi";

function Home() {
  const [dinosaurs, setDinosaurs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredDinosaurs = dinosaurs.filter((dino) =>
    dino.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="home-container">
      <h2>Browse Dinosaurs</h2>

      <input
        type="text"
        placeholder="Search dinosaurs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredDinosaurs.length === 0 ? (
        <p style={{ textAlign: "center" }}>No dinosaurs found.</p>
      ) : (
        <div className="card-grid">
          {filteredDinosaurs.map((dino, index) => (
            <DinoCard key={index} dino={dino} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;