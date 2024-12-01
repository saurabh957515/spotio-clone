import { useState } from "react";
import "./App.css";
import GlobalSidebar from "./Components/GlobalSidebar.tsx";
import Map from "./Map/Map.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <GlobalSidebar>
      <Map />
    </GlobalSidebar>
  );
}

export default App;
