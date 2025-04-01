import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home_page";
// import About from "../pages/about_page";
import Bio from "../pages/bio_page";
import Login from "../pages/login_page";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/bio" element={<Bio />} />
        <Route path="/login" element={<Login />} />
        {/* Route bảo vệ chỉ cho phép truy cập nếu đã đăng nhập
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
