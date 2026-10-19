import { Search, Star } from "lucide-react";
import api from "../../../api/users";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function BookUsers() {
  const navigate = useNavigate();

  const [state, setState] = useState([]);
  const [totalPages, settotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [languages, setLanguages] = useState("");
  const [rating, setRating] = useState("");
  const [view, setView] = useState(false);

  async function getBooks(page = 1) {
    const response = await api.get(
      `/getBooks?page=${page}&limit=3&category=${category}&language=${languages}&rating=${rating}&search=${search}`,
    );
    console.log(response.data);
    setState(response.data.data);
    settotalPages(response.data.totalPages);
  }

  useEffect(() => {
    getBooks(currentPage);
  }, [currentPage, category, search, languages, rating]);

  function handleUpdateBook(id) {
    setView(id);
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] p-8">
      {/* Header */}

      <div className="mb-8">
        <h1
          className="
          text-4xl
          font-bold
          text-gray-900
        "
        >
          Discover Books 📚
        </h1>

        <p
          className="
          text-gray-500
          mt-2
        "
        >
          Explore summaries and find your next favorite book
        </p>
      </div>

      {/* Search */}

      <div
        className="
        bg-white
        rounded-2xl
        border
        border-gray-100
        p-5
        mb-6
      "
      >
        <div
          className="
          flex
          gap-3
        "
        >
          <div
            className="
            flex
            items-center
            flex-1
            border
            rounded-xl
            px-4
            bg-gray-50
          "
          >
            <Search size={20} className="text-gray-400" />

            <input
              value={search}
              onChange={(e) => {
                console.log(e.target.value);
                setSearch(e.target.value);
              }}
              placeholder="Search by title or author..."
              className="
                w-full
                bg-transparent
                px-3
                py-3
                outline-none
              "
            />
          </div>

          <button
            className="
              bg-[#3ECF8E]
              text-white
              px-8
              rounded-xl
              font-semibold
              hover:bg-[#34b97d]
            "
          >
            Search
          </button>
        </div>
      </div>

      {/* Filters */}

      <div
        className="
        bg-white
        rounded-2xl
        border
        border-gray-100
        p-5
        mb-8
        flex
        flex-wrap
        gap-4
      "
      >
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          className="
          border
          rounded-xl
          px-4
          py-3
          focus:ring-2
          focus:ring-[#3ECF8E]
          outline-none
        "
        >
          <option value="">All Categories</option>
          <option value="Programming">Programming</option>
          <option value="Novel">Novel</option>
          <option value="Business">Business</option>
        </select>

        <select
          value={languages}
          onChange={(e) => {
            setLanguages(e.target.value);
          }}
          className="
          border
          rounded-xl
          px-4
          py-3
          focus:ring-2
          focus:ring-[#3ECF8E]
          outline-none
        "
        >
          <option value="">All Languages</option>
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="Arabic">Arabic</option>
        </select>

        <select
          value={rating}
          onChange={(e) => {
            setRating(e.target.value);
          }}
          className="
          border
          rounded-xl
          px-4
          py-3
          focus:ring-2
          focus:ring-[#3ECF8E]
          outline-none
        "
        >
          <option value="">All Ratings</option>
          <option value="5">⭐ 5</option>
          <option value="4">⭐ 4+</option>
          <option value="3">⭐ 3+</option>
        </select>

        <button
          onClick={() => {
            setCurrentPage(1);
            setCategory("");
            setLanguages("");
            setRating("");
            setSearch("");
          }}
          className="
    border
    border-[#3ECF8E]
    text-[#16A36A]
    px-5
    rounded-xl
    hover:bg-[#3ECF8E]
    hover:text-white
  "
        >
          Reset
        </button>
      </div>

      {/* Books */}

      <div
        className="
        grid
        md:grid-cols-2
        lg:grid-cols-3
        gap-6
      "
      >
        {state.map((book) => (
          <div
            key={book._id}
            className="
                bg-white
                rounded-2xl
                border
                border-gray-100
                p-6
                hover:shadow-xl
                transition
              "
          >
            {/* Cover */}

            <div
              className="
                h-52
                rounded-xl
                flex
                items-center
                justify-center
              "
            >
              <img
                src={book.image}
                alt={book.title}
                className="
    w-full
    h-52
    rounded-xl
    object-cover
  "
              />
            </div>

            <div className="mt-5">
              <div
                className="
                  flex
                  justify-between
                  items-center
                "
              >
                <span
                  className="
                    bg-[#E8FFF4]
                    text-[#16A36A]
                    px-3
                    py-1
                    rounded-full
                    text-sm
                  "
                >
                  {book.category}
                </span>

                <div
                  className="
                    flex
                    items-center
                    gap-1
                  "
                >
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  {book.rating}
                </div>
              </div>

              <h2
                className="
                  text-xl
                  font-bold
                  mt-4
                  text-gray-900
                "
              >
                {book.title}
              </h2>

              <p
                className="
                  text-gray-500
                  mt-1
                "
              >
                {book.author}
              </p>

              <p
                className="
                  text-sm
                  text-gray-600
                  mt-4
                  line-clamp-2
                "
              >
                {book.summary}
              </p>

              <button
                onClick={() => navigate(`/DetailBook/${book._id}`)}
                className="
    w-full
    mt-5
    py-3
    rounded-xl
    bg-[#3ECF8E]
    text-white
    font-semibold
    hover:bg-[#34b97d]
  "
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-2 mt-10">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className={`px-4 py-2 rounded-lg border ${
            currentPage === 1
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-white hover:bg-[#3ECF8E] hover:text-white"
          }`}
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-10 h-10 rounded-lg ${
              currentPage === index + 1
                ? "bg-[#3ECF8E] text-white"
                : "border hover:bg-[#3ECF8E] hover:text-white"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className={`px-4 py-2 rounded-lg border ${
            currentPage === totalPages
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-white hover:bg-[#3ECF8E] hover:text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
