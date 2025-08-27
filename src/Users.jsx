import { useState } from "react";

const mockData = [
  { username: "Andreas", email: "andreas@mail.no" },
  { username: "Sandra", email: "Sandra@mail.com" },
  { username: "Michell", email: "michell@mail.com" },
  { username: "Helene", email: "helene@mail.com" },
];

export default function Users() {
  const [users, setUsers] = useState(mockData);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleAddUser = () => {
    if (!username.trim() || !email.trim()) return;
    setUsers([...users, { username, email }]);
    setUsername("");
    setEmail("");
  };

  return (
    <section style={{ marginTop: "2rem" }}>
      <ul style={{ paddingLeft: "1rem", marginTop: "10px" }}>
        {users.map((user, index) => (
          <li key={index} style={{ marginBottom: "5px" }}>
            <strong>{user.username}</strong> - {user.email}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          placeholder="Brukernavn"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="email"
          placeholder="E-post"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginLeft: "5px",
          }}
        />
        <button
          onClick={handleAddUser}
          style={{
            marginLeft: "5px",
            padding: "5px 10px",
            borderRadius: "5px",
            border: "1px solid #333",
            cursor: "pointer",
            background: "#f5f5f5",
            color: "#000", // svart tekst
            fontSize: "1rem",
          }}
        >
          Legg til bruker
        </button>
      </div>
    </section>
  );
}
