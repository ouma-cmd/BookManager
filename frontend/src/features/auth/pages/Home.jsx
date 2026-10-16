import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-emerald-600">BookManager</h1>

          <div className="flex items-center gap-3">
            <button className="px-5 py-2 text-gray-700 font-medium hover:text-emerald-600 transition">
              <NavLink to="/login">Login</NavLink>
            </button>

            <button className="px-5 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition">
              <NavLink to="/register">Register</NavLink>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
              Discover books and
              <span className="block text-emerald-600">
                find your next read
              </span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
              BookManager helps you discover books through summaries, author
              information and ratings. When you find a book you like, you can
              access external platforms to buy or read it.
            </p>
          </div>

          {/* Book Preview Card */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8">
            <div className="bg-emerald-50 rounded-2xl p-6">
              <div className="w-20 h-28 bg-emerald-600 rounded-xl flex items-center justify-center shadow">
                <span className="text-white text-3xl font-bold">B</span>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Book Information
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                View book summaries, author details, categories and ratings
                before choosing your next book.
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-emerald-600 font-semibold">★ 4.8</span>

                <span className="text-gray-500 text-sm">User rating</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
