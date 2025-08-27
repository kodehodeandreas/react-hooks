App.jsx;

import CookieClicker from "./CookieClicker";
import CatFacts from "./CatFacts";
import Users from "./Users";

function App() {
  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "system-ui, sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
        lineHeight: "1.6",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>React Hooks</h1>

      <section style={{ marginBottom: "3rem" }}>
        <h2>CookieClicker</h2>
        <CookieClicker />
      </section>

      <hr style={{ margin: "2rem 0" }} />

      <section style={{ marginBottom: "3rem" }}>
        <h2>Cat Facts</h2>
        <CatFacts />
      </section>

      <hr style={{ margin: "3rem 0" }} />

      <section>
        <h2>Brukerliste</h2>
        <Users />
      </section>
    </div>
  );
}

export default App;
