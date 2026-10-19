import { Route, Routes } from "react-router-dom";
import ProtectedRouter from "../routes/ProtectedRouter";
import BookUsers from "../../../features/users/pages/BookUses";
import DetailsBook from "../../../features/users/components/detailsBook";

function UserRoutes() {
  return (
    <Routes>
      <Route
        path="/booksUsers"
        element={
          <ProtectedRouter allowedRoles={["user"]}>
            <BookUsers />
          </ProtectedRouter>
        }
      />
      <Route
        path="/DetailBook/:id"
        element={
          <ProtectedRouter allowedRoles={["user"]}>
            <DetailsBook />
          </ProtectedRouter>
        }
      />
    </Routes>
  );
}
export default UserRoutes;
