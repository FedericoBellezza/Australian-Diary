export default function ImageModal({ image, setmodal }) {
  if (image == null) {
    return;
  } else {
    return (
      <>
        <div className="h-screen w-screen flex justify-center items-center fixed z-1">
          <div className="bg-amber-50 rounded-2xl p-10 h-90/100 max-w-90/100 flex justify-center items-center relative">
            <img className="max-w-full max-h-full h-full" src={image} alt="" />
            <button
              className="absolute top-5 right-[-100px] bg-red-500 p-5 cursor-pointer rounded-xl text-white"
              onClick={() => setmodal(null)}
            >
              Chiudi
            </button>
          </div>
        </div>
      </>
    );
  }
}
