import { useEffect, useState } from "react";
import api from "../../../api/admin";

export default function Dashboard() {
  const [state, setState] = useState({ user: 0, book: 0 });

  useEffect(() => {
    async function getDashboard() {
      try {
        const response = await api.get("/dashboard");
        console.log(response.data);

        setState(response.data);
      } catch (error) {
        console.log("invalid", error);
      }
    }

    getDashboard();
  }, []);

  return (
    <div
      className="
      min-h-screen 
      bg-gray-50
      p-4
      sm:p-6
      lg:p-8
    "
    >
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1
          className="
          text-2xl
          sm:text-3xl
          font-bold
          text-gray-900
        "
        >
          Admin Dashboard
        </h1>

        <p
          className="
          text-gray-500
          mt-2
          text-sm
          sm:text-base
        "
        >
          Manage your books and users
        </p>
      </div>

      {/* Stats Cards */}
      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-3
        gap-4
        sm:gap-6
      "
      >
        {/* Users */}
        <div
          className="
          bg-white
          rounded-2xl
          shadow-sm
          border
          border-gray-100
          p-5
          sm:p-6
          hover:shadow-md
          transition
        "
        >
          <div
            className="
            flex
            items-center
            justify-between
          "
          >
            <div>
              <p className="text-gray-500 text-sm">Total Users</p>

              <h2
                className="
                text-2xl
                sm:text-3xl
                font-bold
                mt-2
                text-gray-900
              "
              >
                {state.user}
              </h2>
            </div>

            <div
              className="
              w-12
              h-12
              sm:w-14
              sm:h-14
              rounded-xl
              bg-green-100
              flex
              items-center
              justify-center
              text-xl
              sm:text-2xl
            "
            >
              👥
            </div>
          </div>
        </div>

        {/* Books */}
        <div
          className="
          bg-white
          rounded-2xl
          shadow-sm
          border
          border-gray-100
          p-5
          sm:p-6
          hover:shadow-md
          transition
        "
        >
          <div
            className="
            flex
            items-center
            justify-between
          "
          >
            <div>
              <p className="text-gray-500 text-sm">Total Books</p>

              <h2
                className="
                text-2xl
                sm:text-3xl
                font-bold
                mt-2
                text-gray-900
              "
              >
                {state.Book}
              </h2>
            </div>

            <div
              className="
              w-12
              h-12
              sm:w-14
              sm:h-14
              rounded-xl
              bg-green-100
              flex
              items-center
              justify-center
              text-xl
              sm:text-2xl
            "
            >
              📚
            </div>
          </div>
        </div>

        {/* Welcome */}
        <div
          className="
          bg-[#3ECF8E]
          rounded-2xl
          p-5
          sm:p-6
          text-white
          shadow-sm
          sm:col-span-2
          xl:col-span-1
        "
        >
          <h2
            className="
            text-lg
            sm:text-xl
            font-bold
          "
          >
            Welcome Admin 👋
          </h2>

          <p
            className="
            mt-3
            text-sm
            opacity-90
          "
          >
            Manage your BookManager application easily.
          </p>
        </div>
      </div>
    </div>
  );
}
