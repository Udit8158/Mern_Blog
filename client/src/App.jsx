import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import CreateBlog from "./pages/CreateBlog";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/create-blog" element={<CreateBlog />} />
    </Routes>
  );
};

export default App;
