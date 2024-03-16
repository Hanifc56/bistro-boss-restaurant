import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Menu from "./Menu";
import Promotion from "./Promotion";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | HOME</title>
      </Helmet>
      <Banner></Banner>
      <Menu></Menu>
      <Promotion></Promotion>
    </div>
  );
};

export default Home;
