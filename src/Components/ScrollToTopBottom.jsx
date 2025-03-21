import ScrollToBottom from "./ScrollToBottom";
import ScrollToTop from "./ScrollToTop";

export default function ScrollToTopBottom() {
  return (
    <>
      <div className="fixed bottom-10 right-10 flex flex-col gap-5">
        <ScrollToTop />
        <ScrollToBottom />
      </div>
    </>
  );
}
