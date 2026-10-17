import { Routes, Route } from "react-router-dom";
import Home from "../../../features/auth/pages/Home";
import Register from "../../../features/auth/pages/Register";
import Login from "../../../features/auth/pages/Login";

function AppRouter() {
  return (
    <Routes>
      <Route path="/homePage" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default AppRouter;
