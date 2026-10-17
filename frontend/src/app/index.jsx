import AppRouter from "./router/auth/routes.jsx";
import AdminRouter from "./router/admin/routes.jsx";

function index() {
  return (
    <>
      <AppRouter />
      <AdminRouter />
    </>
  );
}
export default index;
