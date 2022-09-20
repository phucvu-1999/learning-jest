import { lazy, Suspense } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./Components/Menu/Menu";

const Greet = lazy(() => import("./Components/Greet/Greet"));

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route
          path="/greet"
          element={
            <Suspense fallback={<p>Loading ...</p>}>
              <Greet />
            </Suspense>
          }
        />
        <Route path="/" element={<Outlet />} />
      </Routes>
    </>
  );
}

export default App;
