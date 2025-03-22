export default function Hero() {
  return (
    <>
      <div className="flex justify-center items-center bg-gradient-to-bl from-amber-600 to-amber-400 p-10 lg:p-20">
        <img
          src="https://static.vecteezy.com/system/resources/previews/024/704/874/non_2x/koala-with-ai-generated-free-png.png"
          alt=""
          className={`h-100 absolute top-8 right-30 scale-x-[-1] koala-animation hidden 2xl:block`}
        />
        <img
          src="https://static.vecteezy.com/system/resources/previews/024/722/261/non_2x/kangaroo-with-ai-generated-free-png.png"
          alt=""
          className="lg:h-100 h-35 absolute lg:top-15 top-45 right-5 lg:left-10 lg:scale-x-[-1] kangaroo-jump z-1 "
        />
        <div className="text-white font-bold text-7xl md:text-9xl z-2">
          <p className="text-3xl barriecito">alessia & federico</p>
          <h1 className="barriecito ">Australian Diary</h1>

          <div className="pt-5 w-2/3">
            <h3
              onClick={() => (window.location.href = "/galleria")}
              className="text-[5vw] barriecito bg-white text-slate-700 text-center rounded-2xl p-2 lg:hidden"
            >
              Galleria immagini
            </h3>
          </div>
          <div className="flex justify-between barriecito mt-5">
            <div></div>
            <ul className="text-2xl flex gap-5">
              <li
                onClick={() => (window.location.href = "/galleria")}
                className="hover:underline cursor-pointer hidden 2xl:block"
              >
                galleria
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
