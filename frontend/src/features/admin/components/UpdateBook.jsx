import { X, Save } from "lucide-react";
import { useEffect, useState } from "react";
import api from "../../../api/admin";

export default function UpdateBook({ id, onClose, refreshBooks }) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    language: "",
    rating: "",
    publicationDate: "",
    summary: "",
    description: "",
    externalLink: "",
  });

  async function getBook() {
    const response = await api.get(`getBookById/${id}`);
    setForm(response.data);
  }

  useEffect(() => {
    if (id) {
      getBook();
    }
  }, [id]);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function updateBook() {
    await api.put(`updateBook/${id}`, form);

    refreshBooks();
    onClose();
  }

  return (
    <div
      className="
      fixed inset-0
      bg-black/40
      flex
      items-center
      justify-center
      p-4
      z-50
    "
    >
      <div
        className="
        bg-white
        w-full
        max-w-4xl
        rounded-3xl
        shadow-xl
        overflow-hidden
      "
      >
        {/* Header */}
        <div
          className="
          bg-[#3ECF8E]
          text-white
          p-6
          flex
          justify-between
          items-center
        "
        >
          <div>
            <h1 className="text-2xl font-bold">Update Book 📚</h1>

            <p>Edit book information</p>
          </div>

          <button
            onClick={onClose}
            className="
              bg-white
              text-[#3ECF8E]
              p-2
              rounded-xl
            "
          >
            <X />
          </button>
        </div>

        {/* Form */}
        <div
          className="
          p-6
          grid
          grid-cols-1
          md:grid-cols-2
          gap-5
          max-h-[70vh]
          overflow-y-auto
        "
        >
          {[
            ["image", "image"],
            ["title", "Title"],
            ["author", "Author"],
            ["category", "Category"],
            ["language", "Language"],
            ["rating", "Rating"],
            ["publicationDate", "Publication Date"],
          ].map(([name, label]) => (
            <div key={name}>
              <label className="text-sm text-gray-600">{label}</label>

              <input
                name={name}
                value={form[name] || ""}
                onChange={handleChange}
                className="
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                  mt-1
                  outline-none
                  focus:ring-2
                  focus:ring-[#3ECF8E]
                "
              />
            </div>
          ))}

          <div className="md:col-span-2">
            <label>Summary</label>

            <textarea
              name="summary"
              value={form.summary || ""}
              onChange={handleChange}
              rows="3"
              className="
                w-full
                border
                rounded-xl
                p-3
              "
            />
          </div>

          <div className="md:col-span-2">
            <label>Description</label>

            <textarea
              name="description"
              value={form.description || ""}
              onChange={handleChange}
              rows="5"
              className="
                w-full
                border
                rounded-xl
                p-3
              "
            />
          </div>

          <div className="md:col-span-2">
            <label>External Link</label>

            <input
              name="externalLink"
              value={form.externalLink || ""}
              onChange={handleChange}
              className="
                w-full
                border
                rounded-xl
                px-4
                py-3
              "
            />
          </div>
        </div>

        {/* Footer */}

        <div
          className="
          border-t
          p-5
          flex
          justify-end
        "
        >
          <button
            onClick={updateBook}
            className="
              bg-[#3ECF8E]
              text-white
              px-6
              py-3
              rounded-xl
              flex
              gap-2
              items-center
            "
          >
            <Save size={20} />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
