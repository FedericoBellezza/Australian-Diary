// react import
import { useState } from "react";

// data import
import Data from "../data/DayByDayData";

// components import
import Hero from "../Components/Hero";
import HomepageDayCard from "../Components/HomepageDayCard";
import ScrollToTopBottom from "../Components/ScrollToTopBottom";

export default function Home() {
  // functions to change month and year
  const getMonth = (e) => {
    switch (e) {
      case 1:
        return "Gennaio";
      case 2:
        return "Febbraio";
      case 3:
        return "Marzo";
      case 4:
        return "Aprile";
      case 5:
        return "Maggio";
      case 6:
        return "Giugno";
      case 7:
        return "Luglio";
      case 8:
        return "Agosto";
      case 9:
        return "Settembre";
      case 10:
        return "Ottobre";
      case 11:
        return "Novembre";
      case 12:
        return "Dicembre";
    }
  };
  const lessMonth = () => {
    if (month == 1) {
      setYear(year - 1);
      setMonth(12);
      return;
    }
    setMonth(month - 1);
  };
  const moreMonth = () => {
    if (month == 12) {
      setYear(year + 1);
      setMonth(1);
      return;
    }
    setMonth(month + 1);
  };

  const data = Data();
  console.log(data);
  const [month, setMonth] = useState(8);
  const [year, setYear] = useState(2022);

  return (
    <>
      <div className="bg-amber-200 min-h-screen">
        <Hero />
        <ScrollToTopBottom />
        {/* page container */}
        <div className="container">
          {/* month selector */}
          <div className="flex flex-wrap justify-center gap-3 my-15 barriecito text-slate-800">
            <div className="flex gap-3">
              <button
                onClick={month == 8 && year == 2022 ? () => {} : lessMonth}
                className={` text-2xl ${
                  month == 8 && year == 2022 ? "opacity-30" : "cursor-pointer"
                }`}
              >
                ⬅
              </button>
              <span className="font-bold text-3xl w-50 text-center">
                {getMonth(month) + " " + year}
              </span>
              <button
                onClick={month == 8 && year == 2023 ? () => {} : moreMonth}
                className={`text-2xl ${
                  month == 8 && year == 2023 ? "opacity-30" : "cursor-pointer"
                }`}
              >
                ➡
              </button>
            </div>
          </div>

          {/* cards container */}
          <div className="flex flex-col gap-10 pb-20">
            {data.map((e, index) => {
              if (e.month == month && e.year == year) {
                return <HomepageDayCard key={index} {...e} />;
              } else {
                return;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}
