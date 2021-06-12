import React from "react";
import Intro from "./Intro";
import News from "./News";
import Alma from "./Alma";
import Archives from "./Archives";

const Home = () => {
  return (
    <>
      <Intro />
      <News />
      <Alma />
      <Archives />
    </>
  );
};

export default React.memo(Home);
