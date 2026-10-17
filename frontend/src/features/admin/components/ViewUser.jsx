export default function UserView({ selectedUser, onClose }) {
  return (
    <>
      {selectedUser && (
        <div
          className="
            fixed
            inset-0
            bg-black/40
            flex
            items-center
            justify-center
            z-50
          "
        >
          <div
            className="
              bg-white
              rounded-3xl
              p-8
              w-full
              max-w-md
              shadow-xl
            "
          >
            <h2
              className="
                text-2xl
                font-bold
                mb-6
              "
            >
              User Details 👤
            </h2>

            <div className="space-y-3">
              <div>
                <p className="text-gray-500 text-sm">Name</p>

                <p className="font-semibold">{selectedUser.name}</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Email</p>

                <p className="font-semibold">{selectedUser.email}</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Role</p>

                <span
                  className="
                    inline-block
                    mt-1
                    bg-[#3ECF8E]
                    text-white
                    px-3
                    py-1
                    rounded-full
                    text-sm
                  "
                >
                  {selectedUser.role}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="
                mt-8
                w-full
                bg-[#3ECF8E]
                text-white
                py-3
                rounded-xl
                hover:bg-[#32b87b]
                transition
              "
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
