import { Star, ArrowLeft, ExternalLink, Globe, Calendar } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../api/users";
import { useEffect, useState } from "react";

function DetailsBook() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [state, setState] = useState(null);

  async function getBook() {
    try {
      const response = await api.get(`/getBookId/${id}`);
      setState(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBook();
  }, [id]);

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F6F8F7] px-6 py-10">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-[#16A36A] mb-8"
      >
        <ArrowLeft size={20} />
        Back to books
      </button>

      <div
        className="
        max-w-6xl
        mx-auto
        bg-white
        rounded-3xl
        shadow-xl
        p-10
      "
      >
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Image */}

          <div className="flex justify-center">
            <div className="relative">
              <img
                src={state.image}
                alt={state.title}
                className="
                w-80
                h-[450px]
                object-cover
                rounded-3xl
                shadow-lg
                "
              />

              <span
                className="
                absolute
                top-5
                left-5
                bg-[#3ECF8E]
                text-white
                px-4
                py-1
                rounded-full
                "
              >
                {state.category}
              </span>
            </div>
          </div>

          {/* Information */}

          <div className="lg:col-span-2">
            <h1
              className="
              text-5xl
              font-bold
              text-gray-900
            "
            >
              {state.title}
            </h1>

            <p
              className="
              text-xl
              text-gray-500
              mt-3
            "
            >
              {state.author}
            </p>

            {/* Info */}

            <div
              className="
              grid
              sm:grid-cols-3
              gap-4
              mt-8
            "
            >
              <Info
                icon={<Star />}
                title="Rating"
                value={`${state.rating}/5`}
              />

              <Info icon={<Globe />} title="Language" value={state.language} />

              <Info
                icon={<Calendar />}
                title="Published"
                value={state.publicationDate}
              />
            </div>

            {/* Summary */}

            <div className="mt-10">
              <h2
                className="
                text-3xl
                font-bold
                text-gray-900
              "
              >
                Summary
              </h2>

              <p
                className="
                mt-4
                text-gray-600
                leading-8
                text-lg
              "
              >
                {state.summary}
              </p>
            </div>

            {/* Description */}

            <div className="mt-8">
              <h2
                className="
                text-3xl
                font-bold
              "
              >
                Description
              </h2>

              <p
                className="
                mt-4
                text-gray-600
                leading-8
              "
              >
                {state.description}
              </p>
            </div>

            {/* Button */}

            <div className="mt-10">
              <a
                href={state.externalLink}
                target="_blank"
                className="
                inline-flex
                items-center
                gap-2
                bg-[#3ECF8E]
                text-white
                px-8
                py-3
                rounded-xl
                font-semibold
                hover:bg-[#34b97d]
                "
              >
                <ExternalLink size={18} />
                Buy / Read Book
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}

      <div
        className="
        max-w-6xl
        mx-auto
        mt-12
        bg-white
        rounded-3xl
        p-8
      "
      >
        <h2
          className="
          text-3xl
          font-bold
        "
        >
          Reviews
        </h2>

        <div className="flex items-center gap-3 mt-5">
          <Star className="fill-yellow-400 text-yellow-400" />

          <span>{state.rating}/5 average rating</span>
        </div>
      </div>
    </div>
  );
}

function Info({ icon, title, value }) {
  return (
    <div
      className="
      bg-[#F8FAFC]
      rounded-2xl
      p-5
    "
    >
      <div className="text-[#16A36A]">{icon}</div>

      <p className="text-gray-500 text-sm mt-3">{title}</p>

      <p className="font-bold text-lg">{value}</p>
    </div>
  );
}

export default DetailsBook;
