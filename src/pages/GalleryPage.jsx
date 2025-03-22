// data import
import Data from "../data/DayByDayData";
const data = Data();

// components import
import Navbar from "../Components/Navbar";
import ImageModal from "../Components/ImageModal";
import { useState } from "react";

export default function GalleryPage() {
  // states
  const [modalImage, setModalImage] = useState(null);
  const [zoom, setZoom] = useState(5);

  return (
    <>
      <div className="overflow-x-hidden mb-10 text-slate-700">
        <ImageModal image={modalImage} setmodal={setModalImage} />
        <Navbar />

        {/* title */}
        <h1 className="lg:text-7xl text-5xl pt-10 text-center barriecito">
          Galleria
        </h1>
        <div className="flex justify-center items-center gap-3 py-5 lg:py-10">
          <button
            onClick={() => zoom < 8 && setZoom(zoom + 1)}
            className={`cursor-pointer text-4xl bg-orange-500 lg:h-15 h-10 rounded text-white aspect-square 
              ${zoom == 8 && "opacity-50"} `}
          >
            -
          </button>
          <span className="lg:text-2xl text-xl">Dimensioni foto</span>
          <button
            onClick={() => zoom > 3 && setZoom(zoom - 1)}
            className={`cursor-pointer lg:text-4xl bg-orange-500 lg:h-15 h-10 rounded  text-white aspect-square ${
              zoom == 3 && "opacity-50"
            } `}
          >
            +
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {data.map((giorno) => {
            if (giorno.images.length > 0) {
              return (
                <>
                  <div className="flex">
                    <h3 className="text-3xl barriecito ms-5">
                      {giorno.day}/{giorno.month}/{giorno.year}
                    </h3>

                    {/* go to this day button */}
                    <button
                      className="ms-10 cursor-pointer bg-orange-500 text-white   rounded px-2 py-1 "
                      onClick={() =>
                        (window.location.href = `/giorno/${giorno.day}/${giorno.month}/${giorno.year}`)
                      }
                    >
                      Vai a questo giorno
                    </button>
                  </div>
                  <div className="flex flex-wrap">
                    {giorno.images.map((immagine) => {
                      return (
                        zoom && (
                          <img
                            onClick={() => setModalImage(immagine)}
                            className={`lg:p-2 p-[1px] aspect-square object-cover cursor-pointer
                              ${
                                zoom == 3
                                  ? "w-1/3"
                                  : zoom == 4
                                  ? "w-1/4"
                                  : zoom == 5
                                  ? "w-1/5"
                                  : zoom == 6
                                  ? "w-1/6"
                                  : zoom == 7
                                  ? "w-1/7"
                                  : zoom == 8
                                  ? "w-1/8"
                                  : ""
                              }
                              `}
                            src={immagine}
                            alt=""
                          />
                        )
                      );
                    })}
                  </div>
                </>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
