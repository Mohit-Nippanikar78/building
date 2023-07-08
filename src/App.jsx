import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
import Root from "./Root";
import { Homepage, ProductCatalogue, ProductPage } from "./components";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Homepage />} />
        <Route path="/products"  element={<ProductCatalogue />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
