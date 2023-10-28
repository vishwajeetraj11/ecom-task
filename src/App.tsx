import { useState } from "react";
import "./App.css";
import { CiSearch } from "react-icons/ci";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <div>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        <CiSearch />
      </div>
    </>
  );
}

export default App;
