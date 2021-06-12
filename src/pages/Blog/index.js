import React from "react";
import Box from "@material-ui/core/Box";
import Intro from "./Intro";
import Content from "./Content";
const dummy = [
  {
    url: "https://www.knowledgebrokeringgroup.com.au/wp-content/uploads/2017/10/slide3.jpg",
    type: "image",
  },
];
const Blog = () => {
  return (
    <>
      <Intro imgList={dummy} />
      <Content />
    </>
  );
};

export default Blog;
