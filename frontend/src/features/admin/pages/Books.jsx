import { Plus, Edit, Trash2, Eye } from "lucide-react";
import api from "../../../api/admin";
import { useEffect, useState } from "react";
import AddBook from "../components/FormAddBook";
import ViewBook from "../components/ViewBook";
import UpdateBook from "../components/UpdateBook";

export default function Books() {
  const [state, setState] = useState([]);
  const [book, setBook] = useState(false);
  const [view, setView] = useState(null);
  const [update, setUpdate] = useState(null);
  const [totalPages, settotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  function handlAdd() {
    setBook(true);
  }
  async function getBook(page = 1) {
    console.log("CATEGORY:", category);
    const response = await api.get(
      `/getBook?page=${page}&limit=3&category=${filterCategory}&search=${search}`,
    );
    console.log("RESULT:", response.data.data);
    setState(response.data.data);
    settotalPages(response.data.totalPages);
  }

  useEffect(() => {
    getBook(currentPage);
  }, [currentPage, filterCategory, search]);

  async function deletBook(id) {
    const responce = await api.delete(`/deleteBook/${id}`);
    getBook(currentPage);
  }

  function viewBook(id) {
    setView(id);
  }

  function handleUpdateBook(id) {
    setUpdate(id);
  }

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
      {book && (
        <AddBook
          onClose={() => setBook(false)}
          refreshBooks={() => getBook(currentPage)}
        />
      )}
      {view && <ViewBook id={view} onClose={() => setView(false)} />}

      {update && (
        <UpdateBook
          id={update}
          onClose={() => setUpdate(null)}
          refreshBooks={getBook}
        />
      )}
      {/* Header */}
      <div
        className="
        flex
        flex-col
        sm:flex-row
        sm:items-center
        sm:justify-between
        gap-4
        mb-8
      "
      >
        <div>
          <h1
            className="
            text-2xl
            sm:text-3xl
            font-bold
          "
          >
            Books Management 📚
          </h1>

          <p className="text-gray-500 mt-2">Manage your books collection</p>
        </div>

        <button
          onClick={handlAdd}
          className="
            bg-[#3ECF8E]
            text-white
            px-5
            py-3
            rounded-xl
            flex
            items-center
            justify-center
            gap-2
            hover:bg-[#32b87b]
            transition
          "
        >
          <Plus size={20} />
          Add Book
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border p-5 mb-6">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <input
            type="text"
            value={search}
            onChange={(e) => {
              (setSearch(e.target.value), setCurrentPage(1));
            }}
            placeholder="🔍 Search books..."
            className="w-full lg:w-80 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3ECF8E]"
          />

          <div className="flex flex-wrap gap-3">
            {/* Category */}
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3ECF8E]"
            >
              <option value="">All Categories</option>
              <option value="Roman">Roman</option>
              <option value="Novel">Novel</option>
              <option value="Business">Business</option>
              <option value="Technology">Technology</option>
              <option value="History">History</option>
              <option value="Self Development">Self Development</option>
            </select>

            {/* Button */}
            <button
              onClick={() => {
                setCurrentPage(1);
                setFilterCategory(category);
              }}
              className="bg-[#3ECF8E] text-white px-6 py-3 rounded-xl hover:bg-[#34b87f] transition"
            >
              Filter
            </button>
          </div>
        </div>
      </div>
      <div
        className="
        bg-white
        rounded-2xl
        border
        shadow-sm
        overflow-hidden
      "
      >
        <div className="overflow-x-auto">
          <table
            className="
            w-full
            min-w-[700px]
          "
          >
            <thead
              className="
              bg-gray-100
              text-gray-600
              text-sm
            "
            >
              <tr>
                <th className="px-8 py-5 text-left">Image</th>
                <th className="px-6 py-4 text-left">Title</th>

                <th className="px-6 py-4 text-left">Author</th>

                <th className="px-6 py-4 text-left">Category</th>

                <th className="px-6 py-4 text-left">Language</th>

                <th className="px-6 py-4 text-left">Rating</th>

                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {state.map((book) => (
                <tr
                  key={book._id}
                  className="
                    border-t
                    hover:bg-gray-50
                  "
                >
                  <td className="px-8 py-5">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="
                          w-14
                          h-14
                          rounded-xl
                          object-cover
                          "
                    />
                  </td>

                  <td className="px-6 py-4 font-medium">{book.title}</td>

                  <td className="px-6 py-4 text-gray-600">{book.author}</td>

                  <td className="px-6 py-4">{book.category}</td>

                  <td className="px-6 py-4">{book.language}</td>

                  <td className="px-6 py-4">⭐ {book.rating}</td>

                  <td
                    className="
                    px-6
                    py-4
                    flex
                    justify-center
                    gap-3
                  "
                  >
                    {/* View */}
                    <button
                      onClick={() => viewBook(book._id)}
                      className="
                        bg-green-500
                        text-white
                        p-2
                        rounded-lg
                        hover:bg-green-600
                      "
                    >
                      <Eye size={18} />
                    </button>

                    {/* Edit */}
                    <button
                      onClick={() => handleUpdateBook(book._id)}
                      className="
                        bg-blue-500
                        text-white
                        p-2
                        rounded-lg
                      "
                    >
                      <Edit size={18} />
                    </button>

                    {/* Delete */}
                    <button
                      onClick={() => deletBook(book._id)}
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
