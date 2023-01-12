import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Auth from "./pages/Auth";
import CreateBlog from "./pages/CreateBlog";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";

const App = () => {
  // const {} = useContext(AuthContext)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/create-blog" element={<CreateBlog />} />
      <Route path="/user-profile" element={<UserProfile />} />
    </Routes>
  );
};

export default App;
