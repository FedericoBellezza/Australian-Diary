export default function ScrollToTop() {
  return (
    <>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="text-4xl cursor-pointer"
      >
        <img
          className="w-15 rotate-270"
          src="https://www.onlygfx.com/wp-content/uploads/2016/07/hand-drawn-arrow-1.png"
          alt=""
        />
      </button>
    </>
  );
}
