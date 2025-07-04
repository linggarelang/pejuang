"use client";

import React, { JSX } from "react";

import { HomeMain, HomeAbout, HomeTestimonials } from "@/app/components/home";


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
    </React.Fragment>
  );
};

export default Home;
