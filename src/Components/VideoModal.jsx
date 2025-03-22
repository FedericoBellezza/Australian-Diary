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
          <div className="bg-amber-50 rounded-2xl lg:p-10 p-3 max-h-90/100 lg:h-90/100 max-w-90/100 flex justify-center items-center relative">
            <video
              className="max-w-full max-h-full lg:h-full w-full"
              src={video}
              controls
              autoPlay
              controlsList="nodownload"
            ></video>
            <button
              className="absolute lg:top-0 top-[-90px] lg:right-[-100px] bg-red-500 p-5 cursor-pointer rounded-xl text-white"
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
