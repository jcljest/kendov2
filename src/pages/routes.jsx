// src/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import BlogIndex from "./pages/BlogIndex";
import Post from "./pages/Post";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/blog", element: <BlogIndex /> },
  { path: "/blog/:slug", element: <Post /> },
]);
