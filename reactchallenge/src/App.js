import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div style={{ height: "90vh" }}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
