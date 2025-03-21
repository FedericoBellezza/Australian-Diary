export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center barriecito bg-gradient-to-bl from-amber-600 to-amber-400 text-white p-5 px-8">
        <div className="text-4xl font-bold">
          <a href="/">Australian Diary</a>
        </div>
        <div className="flex gap-7 text-xl">
          <li className="list-none hover:underline">
            <a href="/">home</a>
          </li>
          <li className="list-none hover:underline">
            <a href="/galleria">galleria</a>
          </li>
        </div>
      </nav>
    </>
  );
}
