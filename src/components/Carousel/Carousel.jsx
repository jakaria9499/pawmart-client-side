import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const data = [
    {
      title: "Find Your Furry Friend Today 🐾",
      coverPhoto:
        "https://i.ibb.co.com/DHM3Pksh/pexels-duc-tinh-ngo-2147637857-30170554.jpg",
    },
    {
      title: "Adopt, Don’t Shop — Give a Pet a Home",
      coverPhoto:
        "https://i.ibb.co.com/SDsXG0hM/pexels-ilargian-faus-763704-1629781.jpg",
    },
    {
      title: "Because Every Pet Deserves Love & Care",
      coverPhoto: "https://i.ibb.co.com/0RQmSFgT/pexels-pppsdavid-10914510.jpg",
    },
    {
      title: "Because Every Pet Deserves Love & Care",
      coverPhoto: "https://i.ibb.co.com/0RQmSFgT/pexels-pppsdavid-10914510.jpg",
    },
    {
      title: "Because Every Pet Deserves Love & Care",
      coverPhoto: "https://i.ibb.co.com/0RQmSFgT/pexels-pppsdavid-10914510.jpg",
    },
  ];

  const length = data.length;

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, data]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const slideWidth = container.clientWidth;
      container.scrollTo({
        left: current * slideWidth,
        behavior: "smooth",
      });
    }
  }, [current]);

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
      }}
    >
      {console.log(isPaused)}
      <div
        ref={containerRef}
        className="flex w-full overflow-x-hidden scroll-smooth"
      >
        {data.slice(0, length).map((d, i) => (
          <div key={i} className="flex-none w-full h-96 relative">
            <img
              src={d.coverPhoto}
              alt={d.title}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-5 left-0 w-full  text-white p-4">
              <h2 className="text-xl font-semibold">{d.title}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {data.map((d, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-6 mx-0.5 h-3 rounded-full transition-all ${
              current === i ? "bg-white w-12 scale-125" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>

      <div>
        <div
          onClick={() =>
            setCurrent(current - 1 === -1 ? length - 1 : current - 1)
          }
          className="absolute left-5 top-45 "
        >
          <IoIosArrowBack size={30} />
        </div>
        <div
          onClick={() => setCurrent((current + 1) % length)}
          className="absolute right-5 top-45 "
        >
          <IoIosArrowForward size={30} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
