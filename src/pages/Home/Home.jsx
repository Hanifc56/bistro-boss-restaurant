import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Menu from "./Menu";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | HOME</title>
      </Helmet>
      <Banner></Banner>
      <Menu></Menu>
    </div>
  );
};

export default Home;
