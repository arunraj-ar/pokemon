import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NotFound } from "./NotFound";
import { Credits } from "./Credits";
import { ListingPage } from "./ListingPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/pokemons" />} exact />
          <Route path="/home" element={<Navigate to="/" />}  exact/>
          <Route path="/pokemons" element={<ListingPage />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
