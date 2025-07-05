import React, { JSX } from "react";

import {
  HomeMain,
  HomeAbout,
  HomeTestimonials,
  HomeProduct,
  HomeWhyUs,
  HomeEnd
} from "@/app/components/home";

const Home = (): JSX.Element => {
  return (
    <React.Fragment>
      {/* Hero Section */}
      <HomeMain />
      {/* Gradient separator */}
      <div className="w-full h-30 bg-gradient-to-b from-black to-[#432A1E]" />
      {/* About Section */}
      <HomeAbout />
      {/* Gradient separator */}
      <div className="w-full h-30 bg-gradient-to-b from-[#432A1E] via-[#8c6b52] to-[#AF8D72]" />
      {/* Testimonials Section */}
      <HomeTestimonials />
      {/* Gradient Separator */}
      <div className="w-full h-30 bg-gradient-to-b from-[#AF8D72] to-[#E3DAC9]" />
      {/* Product Section */}
      <HomeProduct />
      {/* Gradient Separator */}
      <div className="w-full h-30 bg-gradient-to-b from-[#E3DAC9] to-[#F5F3EE]" />
      {/* Why Us Section */}
      <HomeWhyUs />
      <HomeEnd />
    </React.Fragment>
  );
};

export default Home;
