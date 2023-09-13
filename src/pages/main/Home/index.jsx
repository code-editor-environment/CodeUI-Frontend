import React from "react";
import Hero from "./Hero";
import Stat from "./Stat";
import TopCreate from "./TopCreate";
import TopElement from './TopElement/index';
import Supporters from './Supporters/index';

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Stat />
      <TopCreate />
      <TopElement />
      <Supporters />
    </div>
  );
}

export default Home;
