export default function HomepageDayCard(e) {
  return (
    <>
      {/* day card */}
      <div
        onClick={() =>
          (window.location.href = `/giorno/${e.day}/${e.month}/${e.year}`)
        }
        className="bg-amber-600 hover:bg-amber-700 cursor-pointer text-white rounded-2xl xl:p-10 p-5 custom-shadow"
      >
        {/* card header */}
        <div className="flex">
          {/* date and title */}
          <div className="w-full">
            <h3 className="text-2xl barriecito">
              {e.day}/{e.month}/{e.year}
            </h3>
            <hr className="my-2 w-full" />
            <h2 className="lg:text-3xl text-xl barriecito">{e.title}</h2>
          </div>
        </div>
        {/* card content */}
        <div>
          <hr className="my-5 hidden xl:block" />
          <p
            className="overflow-hidden text-ellipsis max-h-18 hidden lg:block"
            dangerouslySetInnerHTML={{
              __html: e.content.replace(/\n/g, "<br />"),
            }}
          ></p>
        </div>
      </div>
    </>
  );
}
