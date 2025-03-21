export default function VideoModal({ video, setmodal }) {
  if (video == null) {
    return;
  } else {
    return (
      <>
        <div
          onClick={() => setmodal(null)}
          className="w-screen h-screen bg-black opacity-60 fixed z-1"
        ></div>
        <div className="h-screen w-screen flex justify-center items-center fixed z-2">
          <div className="bg-amber-50 rounded-2xl p-10 h-90/100 max-w-90/100 flex justify-center items-center relative">
            <video
              className="max-w-full max-h-full lg:h-full w-full"
              src={video}
              controls
              autoPlay
              controlsList="nodownload"
            ></video>
            <button
              className="absolute top-0 right-[-100px] bg-red-500 p-5 cursor-pointer rounded-xl text-white"
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
