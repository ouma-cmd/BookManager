import AppRouter from "./router/auth/routes.jsx";
import AdminRouter from "./router/admin/routes.jsx";
import UserRoutes from "./router/users/routes.jsx";

function index() {
  return (
    <>
      <AppRouter />
      <AdminRouter />
      <UserRoutes />
    </>
  );
}
export default index;
