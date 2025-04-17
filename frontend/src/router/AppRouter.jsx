import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import ScrollToTop from "../components/common/ScrollToTop";
import Blogs from "../pages/blog/Blogs";
import BlogDetail from "../pages/blog/BlogDetail";
import Users from "../pages/user/Users";
import UserDetail from "../pages/user/UserDetail";
import NewCategory from "../pages/category/NewCategory";
import Categories from "../pages/category/Categories";
import NewBlog from "../pages/blog/NewBlog";
import About from "../pages/about/About";
import MyBlogs from "../pages/blog/MyBlogs";
import MyBlogDetail from "../pages/blog/MyBlogDetail";
import Profile from "../pages/user/Profile";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Footer from "../components/common/Footer";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/blogs/:username/:_id" element={<BlogDetail />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:_id" element={<UserDetail />} />
        <Route path="/new-category" element={<NewCategory />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/new-blog" element={<NewBlog />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-blogs" element={<MyBlogs />} />
        <Route path="/my-blogs/:username/:_id" element={<MyBlogDetail />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
