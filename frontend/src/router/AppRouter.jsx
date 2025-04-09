import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/user/Users";
import Login from "../pages/auth/Login";
import NewBlog from "../pages/blog/NewBlog";
import BlogDetail from "../pages/blog/BlogDetail";
import UserDetail from "../pages/user/UserDetail";
import Footer from "../components/common/Footer";
import Register from "../pages/auth/Register";
import NewCategory from "../pages/category/NewCategory";
import Categories from "../pages/category/Categories";
import MyBlogs from "../pages/blog/MyBlogs";
import Profile from "../pages/user/Profile";
import About from "../pages/about/About";
import MyBlogDetail from "../pages/blog/MyBlogDetail";
import ScrollToTop from "../components/common/ScrollToTop";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/new-category" element={<NewCategory />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/new-blog" element={<NewBlog />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-blogs" element={<MyBlogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/blogs/:username/:_id" element={<BlogDetail />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/users/:_id" element={<UserDetail />} />
        <Route path="/my-blogs/:username/:_id" element={<MyBlogDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
