import React, { useEffect, useState, useCallback } from "react";
import Intro from "./Intro";
import Content from "./Content";
import { getAllActivityImage, getAllReunionImage, getAllGalleryImage } from "./../../firebase/firebaseService";

const Gallery = () => {
  const [imageList, setImageList] = useState([]);

  const getAllImages = useCallback(() => {
    let temp = [];
    const promises = [getAllActivityImage(), getAllReunionImage(), getAllGalleryImage()];

    Promise.all(promises)
      .then((result) => {
        result.forEach((doc) => {
          doc.forEach((dt) => temp.push(dt.data()));
        });

        setImageList(temp);
      })
      .catch((err) => console.log(err.code));
  }, []);

  useEffect(() => getAllImages(), []);
  return (
    <>
      {imageList.length !== 0 ? (
        <>
          <Intro imageList={imageList} />
          <Content imageList={imageList} />
        </>
      ) : null}
    </>
  );
};

export default React.memo(Gallery);
