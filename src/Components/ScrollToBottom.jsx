export default function ScrollToBottom() {
  return (
    <>
      <button
        onClick={() =>
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          })
        }
        className="text-4xl cursor-pointer"
      >
        <img
          className="w-15 rotate-90"
          src="https://www.onlygfx.com/wp-content/uploads/2016/07/hand-drawn-arrow-1.png"
          alt=""
        />
      </button>
    </>
  );
}
