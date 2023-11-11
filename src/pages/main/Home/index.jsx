import React, { useEffect, useState } from "react";
// import Hero from "./Hero";
import Stat from "./Stat";
import TopCreate from "./TopCreate";
import TopElement from "./TopElement/index";
import Supporters from "./Supporters/index";
import HeroTest from "./Hero/test";
import AdsViaCarbon from "./AdsViaCarbon";
import { getTopCreators } from "../../../api/account";

function Home() {
  const [topCreator, setTopCreator] = useState([]);
  const [users, setUsers] = useState(0);
  useEffect(() => {
    getTopCreators({ page: 1, pageSize: 6 }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setTopCreator(data.data);
        setUsers(data.metadata.total);
      }
    });
    // eslint-disable-next-line
  }, []);
  return (
    <div className="home-page">
      {/* <Hero /> */}
      <HeroTest />
      <Stat users={users} />
      <TopCreate topCreator={topCreator} />
      <TopElement />
      <Supporters />
      <AdsViaCarbon />
    </div>
  );
}

export default Home;
