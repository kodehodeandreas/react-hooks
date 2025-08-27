import { useState } from "react";

export default function CookieClicker() {
  const [score, setScore] = useState(0);

  const handleClick = () => setScore((prev) => prev + 1);
  const handleReset = () => setScore(0);

  return (
    <section style={{ textAlign: "center", marginTop: "1rem" }}>
      <p style={{ fontSize: "1.25rem" }}>Poeng: {score}</p>

      <button
        onClick={handleClick}
        style={{ border: "none", background: "transparent", cursor: "pointer" }}
        aria-label="Trykk på kjeksen for poeng"
      >
        <img
          src="cookie.png"
          alt="Image of a Cookie"
          style={{ width: "120px", display: "block", margin: "0 auto" }}
        />
      </button>

      <div style={{ marginTop: "10px" }}>
        <button
          onClick={handleReset}
          style={{
            padding: "5px 10px",
            borderRadius: "5px",
            border: "1px solid #333",
            cursor: "pointer",
            background: "#f5f5f5",
            color: "#000", // svart tekst
            fontSize: "1rem",
          }}
        >
          Reset
        </button>
      </div>
    </section>
  );
}
