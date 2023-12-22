import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import AddBeerPage from "./pages/AddBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* path is what is visible for user, in {are what is imported and rendered from} */}
        <Route path="/beers" element={<AllBeersPage />} />
        <Route path="/randomBeer" element={<RandomBeerPage />} />
        <Route path="/newBeer" element={<AddBeerPage />} />
        <Route path="/beers/:beerid" element={<BeerDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
