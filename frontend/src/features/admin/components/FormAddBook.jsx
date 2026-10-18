import { useState } from "react";
import { X, Save } from "lucide-react";
import api from "../../../api/admin";

export default function AddBook({ refreshBooks, onClose }) {
  const [form, setForm] = useState({
    image: "",
    title: "",
    author: "",
    category: "",
    summary: "",
    description: "",
    publicationDate: "",
    language: "",
    rating: "",
    externalLink: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await api.post("/creationBook", form);

      refreshBooks();

      console.log("created book:", res.data);

      onClose();
    } catch (error) {
      console.log("error:", error);
    }
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        bg-black/50
        backdrop-blur-sm
        flex
        items-center
        justify-center
        p-3
        sm:p-6
      "
    >
      <div
        className="
          bg-white
          w-full
          max-w-4xl
          rounded-3xl
          shadow-2xl
          overflow-hidden
          max-h-[95vh]
          flex
          flex-col
        "
      >
        {/* Header */}

        <div
          className="
            flex
            items-center
            justify-between
            px-5
            sm:px-8
            py-5
            border-b
            bg-gray-50
          "
        >
          <div>
            <h2
              className="
                text-xl
                sm:text-2xl
                font-bold
                text-gray-900
              "
            >
              Add New Book 📚
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Create a new book in your collection
            </p>
          </div>

          <button
            onClick={onClose}
            className="
              p-2
              rounded-xl
              hover:bg-gray-200
              transition
            "
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}

        <div
          className="
            overflow-y-auto
            p-5
            sm:p-8
          "
        >
          <form
            onSubmit={handleSubmit}
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-5
            "
          >
            <input
              type="text"
              value={form.image}
              onChange={handleChange}
              name="image"
              placeholder="Book image URL"
              className="
                w-full
                border
                border-gray-200
                rounded-xl
                px-4
                py-3
                text-sm
                outline-none
                focus:ring-2
                focus:ring-[#3ECF8E]
              "
            />
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Book title"
              className="
                w-full
                border
                border-gray-200
                rounded-xl
                px-4
                py-3
                text-sm
                outline-none
                focus:ring-2
                focus:ring-[#3ECF8E]
              "
            />

            <input
              name="author"
              value={form.author}
              onChange={handleChange}
              placeholder="Book author"
              className="
                w-full
                border
                border-gray-200
                rounded-xl
                px-4
                py-3
                text-sm
                outline-none
                focus:ring-2
                focus:ring-[#3ECF8E]
              "
            />

            <input
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="Book category"
              className="
                w-full
                border
                border-gray-200
                rounded-xl
                px-4
                py-3
                text-sm
                outline-none
                focus:ring-2
                focus:ring-[#3ECF8E]
              "
            />

            <input
              name="language"
              value={form.language}
              onChange={handleChange}
              placeholder="Language"
              className="
                w-full
                border
                border-gray-200
                rounded-xl
                px-4
                py-3
                text-sm
                outline-none
                focus:ring-2
                focus:ring-[#3ECF8E]
              "
            />

            <input
              name="publicationDate"
              value={form.publicationDate}
              onChange={handleChange}
              placeholder="Publication date"
              className="
                w-full
                border
                border-gray-200
                rounded-xl
                px-4
                py-3
                text-sm
                outline-none
                focus:ring-2
                focus:ring-[#3ECF8E]
              "
            />

            <input
              name="rating"
              value={form.rating}
              onChange={handleChange}
              placeholder="Rating"
              type="number"
              className="
                w-full
                border
                border-gray-200
                rounded-xl
                px-4
                py-3
                text-sm
                outline-none
                focus:ring-2
                focus:ring-[#3ECF8E]
              "
            />

            <input
              name="externalLink"
              value={form.externalLink}
              onChange={handleChange}
              placeholder="External link (Amazon, Google Books...)"
              className="
                md:col-span-2
                w-full
                border
                border-gray-200
                rounded-xl
                px-4
                py-3
                text-sm
                outline-none
                focus:ring-2
                focus:ring-[#3ECF8E]
              "
            />

            <textarea
              name="summary"
              value={form.summary}
              onChange={handleChange}
              placeholder="Short summary"
              className="
                md:col-span-2
                border
                border-gray-200
                rounded-xl
                px-4
                py-3
                h-28
                resize-none
                outline-none
                focus:ring-2
                focus:ring-[#3ECF8E]
              "
            />

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Full description"
              className="
                md:col-span-2
                border
                border-gray-200
                rounded-xl
                px-4
                py-3
                h-36
                resize-none
                outline-none
                focus:ring-2
                focus:ring-[#3ECF8E]
              "
            />

            <button
              className="
                md:col-span-2
                bg-[#3ECF8E]
                hover:bg-[#32b87b]
                text-white
                py-3
                rounded-xl
                flex
                items-center
                justify-center
                gap-2
                font-semibold
                transition
              "
            >
              <Save size={20} />
              Save Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
