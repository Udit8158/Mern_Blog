import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Auth from "./pages/Auth";
import BlogDetails from "./pages/BlogDetails";
import CreateBlog from "./pages/CreateBlog";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      {user && <Route path="/" element={<Home />} />}
      {!user && <Route path="/auth" element={<Auth />} />}
      {user && <Route path="/create-blog" element={<CreateBlog />} />}
      {user && <Route path="/user-profile" element={<UserProfile />} />}
      {user && <Route path="/blogs/:blogId" element={<BlogDetails />} />}
      <Route path="/*" element={<Navigate to={user ? "/" : "/auth"} />} />
    </Routes>
  );
};

export default App;
