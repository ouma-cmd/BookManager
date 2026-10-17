import { Eye, Trash2, User } from "lucide-react";
import { useEffect, useState } from "react";
import api from "../../../api/admin";
import UserView from "../components/ViewUser";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [totalPages, settotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  async function getUsers(page = 1) {
    try {
      const response = await api.get(`/getuser?page=${page}&limit=5`);

      setUsers(response.data.data);
      settotalPages(response.data.totalPages);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers(currentPage);
  }, [currentPage]);

  async function deleteUser(id) {
    try {
      await api.delete(`/deleteuser/${id}`);

      getUsers(currentPage);
    } catch (error) {
      console.log(error);
    }
  }

  async function viewUser(id) {
    try {
      const response = await api.get(`/getuserById/${id}`);

      setSelectedUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      className="
      min-h-screen
      bg-gray-50
      p-6
    "
    >
      {selectedUser && (
        <UserView
          selectedUser={selectedUser}
          onClose={() => setSelectedUser(false)}
        />
      )}
      {/* Header */}

      <div className="mb-8">
        <h1
          className="
          text-3xl
          font-bold
        "
        >
          Users Management 👥
        </h1>

        <p
          className="
          text-gray-500
          mt-2
        "
        >
          Manage application users
        </p>
      </div>

      {/* Table */}

      <div
        className="
        bg-white
        rounded-2xl
        shadow-sm
        border
        overflow-hidden
      "
      >
        <table
          className="
          w-full
        "
        >
          <thead
            className="
            bg-gray-100
            text-gray-600
          "
          >
            <tr>
              <th className="px-6 py-4 text-left">User</th>

              <th className="px-6 py-4 text-left">Email</th>

              <th className="px-6 py-4 text-left">Role</th>

              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="
                border-t
                hover:bg-gray-50
              "
              >
                <td
                  className="
                px-6
                py-4
                flex
                items-center
                gap-3
              "
                >
                  <div
                    className="
                  bg-[#3ECF8E]
                  text-white
                  p-2
                  rounded-full
                "
                  >
                    <User size={18} />
                  </div>

                  <span className="font-medium">{user.name}</span>
                </td>

                <td
                  className="
                px-6
                py-4
                text-gray-600
              "
                >
                  {user.email}
                </td>

                <td className="px-6 py-4">
                  <span
                    className="
                  bg-green-100
                  text-green-700
                  px-3
                  py-1
                  rounded-full
                  text-sm
                "
                  >
                    {user.role}
                  </span>
                </td>

                <td
                  className="
                px-6
                py-4
                flex
                justify-center
                gap-3
              "
                >
                  <button
                    onClick={() => viewUser(user._id)}
                    className="
                    bg-blue-500
                    text-white
                    p-2
                    rounded-lg
                  "
                  >
                    <Eye size={18} />
                  </button>

                  <button
                    onClick={() => deleteUser(user._id)}
                    className="
                    bg-red-500
                    text-white
                    p-2
                    rounded-lg
                  "
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center gap-3 mt-8">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className={`
      px-4
      py-2
      rounded-xl
      border
      transition
      ${
        currentPage === 1
          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
          : "bg-white hover:bg-[#3ECF8E] hover:text-white"
      }
    `}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`
        w-10
        h-10
        rounded-xl
        font-medium
        transition
        ${
          currentPage === index + 1
            ? "bg-[#3ECF8E] text-white shadow-lg"
            : "bg-white border hover:border-[#3ECF8E] hover:text-[#3ECF8E]"
        }
      `}
          >
            {index + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className={`
      px-4
      py-2
      rounded-xl
      border
      transition
      ${
        currentPage === totalPages
          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
          : "bg-white hover:bg-[#3ECF8E] hover:text-white"
      }
    `}
        >
          Next
        </button>
      </div>
    </div>
  );
}
