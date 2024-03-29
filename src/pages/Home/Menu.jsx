import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SectionHeading from "../../components/sectionHeading";

const Menu = () => {
  return (
    <section>
      <SectionHeading
        title={"From 11:00am to 10:00pm"}
        heading={"ORDER ONLINE"}
      ></SectionHeading>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-12"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/2KVWhDz/slide2.jpg" />
          <h3 className="uppercase text-4xl text-white -mt-16 text-center shadow-lg">
            pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/Df6KsRW/slide3.jpg" />
          <h3 className="uppercase text-4xl text-white -mt-16 text-center shadow-lg">
            soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/28tD6m6/slide4.jpg" />
          <h3 className="uppercase text-4xl text-white -mt-16 text-center shadow-lg">
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/Df6KsRW/slide3.jpg" />
          <h3 className="uppercase text-4xl text-white -mt-16 text-center shadow-lg">
            soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/2KVWhDz/slide2.jpg" />
          <h3 className="uppercase text-4xl text-white -mt-16 text-center shadow-lg">
            pizza
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Menu;
