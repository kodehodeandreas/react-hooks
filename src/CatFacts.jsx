import { useEffect, useState } from "react";

export default function CatFacts() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://catfact.ninja/facts?limit=5")
      .then((response) => {
        if (!response.ok) throw new Error("Noe gikk galt med API");
        return response.json();
      })
      .then((data) => {
        setFacts(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Feil: {error}</p>;

  return (
    <section style={{ marginTop: "2rem" }}>
      <ul style={{ paddingLeft: "1rem", marginTop: "10px" }}>
        {facts.map((fact, index) => (
          <li key={index} style={{ marginBottom: "5px" }}>
            {fact.fact}
          </li>
        ))}
      </ul>
    </section>
  );
}
