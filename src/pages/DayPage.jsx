// data import
import Data from "../data/DayByDayData";
const data = Data();
console.log(data);

// react router import
import { useParams } from "react-router";

// components import
import Navbar from "../Components/Navbar";
import ImageModal from "../Components/ImageModal";
import VideoModal from "../Components/VideoModal";

import { useState } from "react";

export default function DayPage() {
  const { day, month, year } = useParams();

  const [modalImage, setModalImage] = useState(null);
  const [modalVideo, setModalVideo] = useState(null);

  console.log(data.length);

  return (
    <>
      <ImageModal image={modalImage} setmodal={setModalImage} />
      <VideoModal video={modalVideo} setmodal={setModalVideo} />

      <Navbar />
      <div className="flex flex-col gap-10">
        {data.map((e, index) => {
          if (e.day == day && e.month == month && e.year == year) {
            return (
              <>
                <div className="bg-amber-200 min-h-screen py-10">
                  <div className="container py-10 flex flex-col gap-5 text-slate-700 relative">
                    <h2 className="text-3xl barriecito text-center">
                      {e.day}/{e.month}/{e.year}
                    </h2>

                    {/* next day button */}
                    <button
                      className={`absolute top-0 right-5 lg:right-0 barriecito cursor-pointer hover:underline ${
                        index + 1 == data.length ? "hidden" : ""
                      }`}
                      onClick={() => {
                        data[index + 1]
                          ? (window.location.href = `/giorno/${
                              data[index + 1].day
                            }/${data[index + 1].month}/${data[index + 1].year}`)
                          : (window.location.href = `/`);
                      }}
                    >
                      Giorno successivo
                    </button>

                    {/* previus day button */}
                    <button
                      className={`absolute  left-5 top-0 lg:left-0 barriecito cursor-pointer hover:underline ${
                        index == 0 ? "hidden" : ""
                      }`}
                      onClick={() => {
                        data[index - 1]
                          ? (window.location.href = `/giorno/${
                              data[index - 1].day
                            }/${data[index - 1].month}/${data[index - 1].year}`)
                          : (window.location.href = `/`);
                      }}
                    >
                      Giorno precedente
                    </button>

                    {/* title */}
                    <h1 className="lg:text-5xl text-2xl font-bold barriecito text-center text-balance">
                      {e.title}
                    </h1>
                    <p
                      className="text-xl lg:py-10 py-5  text-balance"
                      dangerouslySetInnerHTML={{
                        __html: e.content.replace(/\n/g, "<br />"),
                      }}
                    ></p>
                    <div className="flex flex-wrap gap-3 mx-auto justify-center items-center">
                      {e.images.map((e) => {
                        return (
                          <img
                            onClick={() => setModalImage(e)}
                            src={e}
                            alt=""
                            className="lg:w-1/4 p-1 aspect-square object-cover cursor-pointer hover:scale-98  duration-300 rounded-2xl"
                          />
                        );
                      })}
                      {e.videos.map((e) => {
                        return (
                          <>
                            <div className="hover:scale-98 duration-300 rounded-2xl overflow-hidden lg:w-1/4 aspect-square object-cover cursor-pointer relative">
                              <img
                                onClick={() => setModalVideo(e)}
                                className="absolute w-25 mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                src="https://www.gov.br/pt-br/midias-agorabrasil/play.png/@@images/image.png"
                                alt=""
                              />
                              <video
                                className="h-full w-full object-cover"
                                src={e}
                                controlsList="nodownload"
                                onClick={() => setModalVideo(e)}
                              ></video>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </>
            );
          } else {
            return;
          }
        })}
      </div>
    </>
  );
}
