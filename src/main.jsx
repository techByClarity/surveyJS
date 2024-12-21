import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Preview from "./Preview";

function AppRouter() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<App />} />
        <Route path="/preview" element={<Preview />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default AppRouter;
