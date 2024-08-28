import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import PageLoader from "./PageLoader";

const ListingPage = lazy(() => import("./ListingPage"));
const NotFound = lazy(() => import("./NotFound"));
const Credits = lazy(() => import("./Credits"));

function AuthRoute() {
  const user = localStorage.getItem("user");
  return user ? <Outlet /> : <Navigate to="/" />;
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Navigate to="/pokemons" />} exact />
            <Route path="/home" element={<Navigate to="/" />} exact />
            <Route path="/pokemons" element={<ListingPage />} />
            <Route element={<AuthRoute />}>
              <Route path="/credits" element={<Credits />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
