import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pages from "./Pages"
import Post from "./routes/Post";
import App from "./App";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Pages/>,
    children: [
      { index: true, element: <App/> },
      { path: "/post/:slug", element: <Post/> }
    ]
  }
])

export default router