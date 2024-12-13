import "./App.css";
import GlobalSidebar from "./Components/GlobalSidebar.tsx";
import Map from "./Map/Map.tsx";

function App() {

  return (
    <GlobalSidebar>
      <Map />
    </GlobalSidebar>
  );
}

export default App;
