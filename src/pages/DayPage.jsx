// data import
import Data from "../data/DayByDayData";
const data = Data();
console.log(data);

// react router import
import { useParams } from "react-router";

// components import
import Navbar from "../Components/Navbar";
import ImageModal from "../Components/ImageModal";
import { useState } from "react";

export default function DayPage() {
  const { day, month, year } = useParams();

  console.log();
  const [modalImage, setModalImage] = useState(null);

  return (
    <>
      <ImageModal image={modalImage} setmodal={setModalImage} />
      <Navbar />
      <div className="flex flex-col gap-10 ">
        {data.map((e) => {
          if (e.day == day && e.month == month && e.year == year) {
            return (
              <>
                <div className="bg-amber-200 h-full py-10">
                  <div className="container py-10 flex flex-col gap-5 text-slate-700">
                    <h2 className="text-3xl barriecito text-center">
                      {e.day}/{e.month}/{e.year}
                    </h2>
                    <h1 className="text-5xl barriecito text-center text-balance">
                      {e.title}
                    </h1>
                    <p
                      className="text-xl py-10  text-balance"
                      dangerouslySetInnerHTML={{
                        __html: e.content.replace(/\n/g, "<br />"),
                      }}
                    ></p>
                    <div className="flex flex-col gap-3 mx-auto w-1/2 justify-center items-center">
                      {e.images.map((e) => {
                        return (
                          <div className="">
                            <img
                              onClick={() => setModalImage(e)}
                              src={e}
                              alt=""
                              className="p-1 w-full object-cover cursor-pointer hover:scale-98  duration-300 rounded-2xl"
                            />
                          </div>
                        );
                      })}
                      {e.videos.map((e) => {
                        return (
                          <video
                            className="hover:scale-98 duration-300 rounded-2xl p-1 w-full"
                            src={e}
                            controls
                          ></video>
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
