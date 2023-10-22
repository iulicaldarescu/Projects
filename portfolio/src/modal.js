export function Modal(props) {
  const picture = props.picture;
  const closeModal = props.closeModal;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-1">
      {/* Add an overlay or backdrop to darken the background */}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={closeModal}
      ></div>
      {/* Center the modal content */}

      <div className="absolute bg-white p-4 rounded-lg shadow-md w-4/5 h-4/6 sm:w-4/6 sm:h-5/6 overflow-auto lg:w-3/6 2xl:w-3/6">
        <div className="absolute top-0 right-0 mt-2 mr-10">
          <button
            className="fixed rounded-full p-2 bg-gray-100 hover:bg-gray-400 z-20 w-7 h-7
           sm:w-10 sm:h-10 text-center text-xs sm:text-base"
            onClick={closeModal}
          >
            X
          </button>
        </div>
        <img src={picture} alt="das" className="mx-auto" />
      </div>
    </div>
  );
}
