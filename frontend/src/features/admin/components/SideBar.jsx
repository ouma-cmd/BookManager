import { NavLink, useNavigate } from "react-router-dom";
import {
  BookOpen,
  Users,
  LayoutDashboard,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function SideBar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  function logout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  const menuItems = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      path: "/books",
      name: "Books",
      icon: <BookOpen size={20} />,
    },
    {
      path: "/users",
      name: "Users",
      icon: <Users size={20} />,
    },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="
          lg:hidden fixed top-4 left-4 z-50
          bg-slate-900 text-white
          p-3 rounded-xl shadow-lg
        "
      >
        <Menu size={22} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
            lg:hidden fixed inset-0
            bg-black/40 z-30
          "
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40
          w-64 h-screen

          bg-slate-950
          text-white
          shadow-2xl

          transition-transform duration-300

          ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Logo */}
        <div
          className="
            h-20
            flex items-center justify-between
            px-6
            border-b border-slate-700
          "
        >
          <h1 className="text-2xl font-bold text-[#3ECF8E]">BookManager</h1>

          <button onClick={() => setOpen(false)} className="lg:hidden">
            <X size={22} />
          </button>
        </div>

        {/* Menu */}
        <nav className="mt-6 px-4 space-y-3">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `
                flex items-center gap-3
                px-4 py-3
                rounded-xl

                transition

                ${
                  isActive
                    ? "bg-[#3ECF8E] text-slate-900 font-semibold"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }
                `
              }
            >
              {item.icon}

              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <div
          className="
            absolute bottom-6
            w-full px-4
          "
        >
          <button
            onClick={logout}
            className="
              w-full

              flex items-center gap-3

              px-4 py-3

              rounded-xl

              bg-red-500
              hover:bg-red-600

              transition

              shadow-lg
            "
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}
