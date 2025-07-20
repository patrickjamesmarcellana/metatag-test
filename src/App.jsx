import { Routes, Route } from "react-router-dom";
import Post from "./routes/Post.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/post/:slug" element={<Post />} />
    </Routes>
  );
}
