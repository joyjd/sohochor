import React from "react";
import Box from "@material-ui/core/Box";

import Intro from "./Intro";
import Content from "./Content";

const Donation = () => {
  const dummy = [
    {
      url: "https://images.unsplash.com/photo-1606002830191-c1b4f20e6cda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1c2luZXNzbWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      type: "image",
    },
    {
      url: "https://images.unsplash.com/photo-1542190891-2093d38760f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      type: "image",
    },
    {
      url: "https://images.unsplash.com/photo-1587837073080-448bc6a2329b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvbmluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      type: "image",
    },
  ];
  return (
    <>
      <Intro imgList={dummy} />
      <Content />
    </>
  );
};

export default Donation;
