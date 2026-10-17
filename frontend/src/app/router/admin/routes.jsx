import { Route, Routes } from "react-router-dom";
import Dashboard from "../../../features/admin/pages/Dashboard";
import ProtectedRouter from "../routes/ProtectedRouter";
import Layout from "../../../features/Layouts/DashboardLayoutes";
import Books from "../../../features/admin/pages/Books";
import Users from "../../../features/admin/pages/Users";

function AdminRouter() {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <ProtectedRouter allowedRoles={["admin"]}>
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRouter>
        }
      />
      <Route
        path="/books"
        element={
          <ProtectedRouter allowedRoles={["admin"]}>
            <Layout>
              <Books />
            </Layout>
          </ProtectedRouter>
        }
      />
      <Route
        path="/users"
        element={
          <ProtectedRouter allowedRoles={["admin"]}>
            <Layout>
              <Users />
            </Layout>
          </ProtectedRouter>
        }
      />
    </Routes>
  );
}
export default AdminRouter;
