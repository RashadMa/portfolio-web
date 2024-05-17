import React from "react";
import ReactDOM from "react-dom/client";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "./App";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import ProjectsPage from "./pages/ProjectsPage";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<App />} >
      <Route path='/' element={<Home />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/projects' element={<ProjectsPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </>
))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);