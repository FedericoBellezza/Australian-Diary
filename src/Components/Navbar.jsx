export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center barriecito bg-gradient-to-bl from-amber-600 to-amber-400 text-white p-5 lg:px-8">
        <div className="lg:text-4xl text-2xl font-bold">
          <a href="/">Australian Diary</a>
        </div>
        <div className="flex gap-7 text-xl">
          <li className="list-none hover:underline">
            <a className="hidden lg:block" href="/">
              home
            </a>
          </li>
          <li className="list-none hover:underline">
            <a
              className="bg-white text-slate-700 px-2 py-1 rounded-xl text-sm lg:text-xl lg:bg-transparent lg:text-white"
              href="/galleria"
            >
              galleria
            </a>
          </li>
        </div>
      </nav>
    </>
  );
}
