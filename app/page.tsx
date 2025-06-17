import React, { JSX } from "react";

// import BgImage from "./components/BgImage";
import HomeMain from "./components/home/HomeMain";
import HomeAbout from "./components/home/HomeAbout";
import HomeProduct from "./components/home/HomeProduct";
import HomeLocation from "./components/home/HomeLocation";

const Home = (): JSX.Element => {
  return (
    <React.Fragment>
      <HomeMain />
      <HomeAbout />
      <HomeProduct />
      <HomeLocation />
    </React.Fragment>
  );
};
export default Home;