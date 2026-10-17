import { ArrowLeft, BookOpen, Star, Globe, Calendar } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../api/admin";
import { useEffect, useState } from "react";

export default function ViewBook({ id }) {
  console.log("ViewBook loaded");
  const navigate = useNavigate();

  const [book, setBook] = useState();

  async function getBook() {
    try {
      const response = await api.get(`getBookById/${id}`);

      setBook(response.data);
    } catch (error) {
      console.log("ERROR:", error);
    }
  }

  useEffect(() => {
    if (id) {
      getBook();
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-10">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-[#3ECF8E] text-white p-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">{book?.title}</h1>
            <p className="mt-1 opacity-90">Book Details</p>
          </div>

          <button
            onClick={() => navigate(0)}
            className="bg-white text-[#3ECF8E] p-3 rounded-xl hover:bg-gray-100 transition"
          >
            <ArrowLeft />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <BookOpen className="text-[#3ECF8E]" />
              <div>
                <p className="text-gray-500 text-sm">Author</p>
                <h3 className="font-semibold">{book?.author}</h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <BookOpen className="text-[#3ECF8E]" />
              <div>
                <p className="text-gray-500 text-sm">Category</p>
                <h3 className="font-semibold">{book?.category}</h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Globe className="text-[#3ECF8E]" />
              <div>
                <p className="text-gray-500 text-sm">Language</p>
                <h3 className="font-semibold">{book?.language}</h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="text-[#3ECF8E]" />
              <div>
                <p className="text-gray-500 text-sm">Publication Date</p>
                <h3 className="font-semibold">{book?.publicationDate}</h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Star className="text-yellow-500 fill-yellow-400" />
              <div>
                <p className="text-gray-500 text-sm">Rating</p>
                <h3 className="font-semibold">{book?.rating}</h3>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-bold mb-2">Summary</h2>
              <p className="text-gray-600 leading-7">{book?.summary}</p>
            </div>

            <div>
              <h2 className="text-lg font-bold mb-2">Description</h2>
              <p className="text-gray-600 leading-7">{book?.description}</p>
            </div>

            <a
              href={book?.externalLink}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-[#3ECF8E] text-white px-6 py-3 rounded-xl hover:bg-[#32b87b] transition"
            >
              View on Amazon
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
