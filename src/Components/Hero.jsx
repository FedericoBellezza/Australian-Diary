export default function Hero() {
  return (
    <>
      <div className="flex justify-center items-center bg-gradient-to-bl from-amber-600 to-amber-400 p-20">
        <div className="text-white font-bold text-9xl ">
          <p className="text-3xl barriecito">alessia & federico</p>
          <h1 className="barriecito ">Australian Diary</h1>

          <img
            src="https://static.vecteezy.com/system/resources/previews/024/704/874/non_2x/koala-with-ai-generated-free-png.png"
            alt=""
            className="h-100 absolute top-8 right-30 scale-x-[-1] koala-animation"
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/024/722/261/non_2x/kangaroo-with-ai-generated-free-png.png"
            alt=""
            className="h-100 absolute top-15 left-10 scale-x-[-1] kangaroo-jump"
          />
          <div className="flex justify-between barriecito mt-5">
            <div></div>
            <ul className="text-2xl flex gap-5">
              <li className="hover:underline cursor-pointer">home</li>
              <li className="hover:underline cursor-pointer">galleria</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
