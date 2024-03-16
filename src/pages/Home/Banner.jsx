import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <Carousel showArrows={true} infiniteLoop={true}>
      <div>
        <img src="https://i.ibb.co/4WNq0K8/01.jpg" />
      </div>
      <div>
        <img src="https://i.ibb.co/1vSS5dK/02.jpg" />
      </div>
      <div>
        <img src="https://i.ibb.co/txHZLr7/03.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/nMV71vt/04.jpg" />
      </div>
      <div>
        <img src="https://i.ibb.co/P4ktNyb/05.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/BTKr863/06.png" />
      </div>
    </Carousel>
  );
};

export default Banner;
