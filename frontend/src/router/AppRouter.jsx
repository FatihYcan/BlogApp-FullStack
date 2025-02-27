import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/user/Users";
import Login from "../pages/auth/Login";
import PrivateRouter from "./PrivateRouter";
import NewBlog from "../pages/blog/NewBlog";
import BlogDetail from "../pages/blog/BlogDetail";
import UserDetail from "../pages/user/UserDetail";
import Footer from "../components/common/Footer";
import Register from "../pages/auth/Register";
import NewCategory from "../pages/category/NewCategory";
import Categories from "../pages/category/Categories";
import MyBlogs from "../pages/blog/MyBlogs";
import Profile from "../pages/user/Profile";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/new-category" element={<NewCategory />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="" element={<PrivateRouter />}>
          <Route path="new-blog" element={<NewBlog />} />
        </Route>
        {/* <Route path="about" element={<About />} /> */}
        <Route path="my-blogs" element={<MyBlogs />} />
        <Route path="profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/blog/:username/:_id" element={<BlogDetail />} />
        <Route path="/user/:_id" element={<UserDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
