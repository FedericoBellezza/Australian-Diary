export default function HomepageDayCard(e) {
  return (
    <>
      {/* day card */}
      <div className="bg-amber-600 text-white h-60 rounded-2xl p-10 custom-shadow   ">
        {/* card header */}
        <div className="flex">
          {/* date and title */}
          <div>
            <h2 className="text-3xl barriecito">{e.title}</h2>
            <h3 className="text-2xl barriecito">
              {e.day}/{e.month}/{e.year}
            </h3>
          </div>
          {/* see more button */}
          <div className="ml-auto">
            <button
              onClick={() =>
                (window.location.href = `/giorno/${e.day}/${e.month}/${e.year}`)
              }
              className="barriecito cursor-pointer hover:underline"
            >
              Vedi di più
            </button>
            <div className="text-sm text-end italic ">
              + {e.images.length} foto
            </div>
          </div>
        </div>
        {/* card content */}
        <div>
          <hr className="my-5" />
          <p
            className="overflow-hidden text-ellipsis max-h-18"
            dangerouslySetInnerHTML={{
              __html: e.content.replace(/\n/g, "<br />"),
            }}
          ></p>
        </div>
      </div>
    </>
  );
}
