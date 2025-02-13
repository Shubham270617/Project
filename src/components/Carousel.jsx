import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = () => {
  const images = [
    { src: "https://viprafoundation.in/wp-content/uploads/2022/07/shree-abhyuday-utasav-1920x700.jpg", title: "श्री आयुदय उत्सव" },
    { src: "https://viprafoundation.in/wp-content/uploads/2023/06/VMS2023.jpg", title: "तेजस्विनी सम्मान" },
    { src: "https://viprafoundation.in/wp-content/uploads/2022/07/bhagwan-parshuram-murti-ka-shilanyas.jpg", title: "गौरव सम्मान" },
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Swiper Component */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="relative rounded-lg overflow-hidden"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} className="relative">
            <img src={item.src} alt={item.title} className="w-full h-[500px] object-cover" />
            <div className="absolute bottom-0 bg-black/60 text-white w-full text-center py-3 text-lg font-semibold">
              {item.title}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 p-2 rounded-full text-white">
        <FaChevronLeft size={20} />
      </button>
      <button className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 p-2 rounded-full text-white">
        <FaChevronRight size={20} />
      </button>
    </div>
  );
};

export default Carousel;
