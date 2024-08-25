import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Pokemons } from "./Pokemons";
import { NotFound } from "./NotFound";
import { Credits } from "./Credits";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pokemons />} />
          <Route path="*" element={<NotFound />} />
          <Route path="credits" element={<Credits />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
