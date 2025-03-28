import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Slider = ({ apiUrl }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      }
    };

    fetchImages();
  }, [apiUrl]);

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className="w-full max-w-2xl" style={{width: '600px'}}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image.url} alt={image.title} width={600} className="w-full rounded-lg" />
        </SwiperSlide>
      ))}
    </Swiper>

  );
};

export default Slider;
