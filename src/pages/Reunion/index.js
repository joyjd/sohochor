import React, { useState, useEffect, useCallback } from "react";
import Intro from "./Intro";
import Content from "./Content";
import { getReunionImageTop3, getAllReunion } from "./../../firebase/firebaseService";

const Reunion = () => {
  const [reunionList, setReunionList] = useState([]);
  const [imageList, setImageList] = useState([]);

  const getAllReunions = useCallback(async () => {
    let tempDoc = [];
    const activities = await getAllReunion();
    activities.forEach((doc) => {
      tempDoc.push(doc.data());
    });
    console.log(tempDoc);
    setReunionList(tempDoc);
  }, []);

  const getHeaderImages = useCallback(async () => {
    let tempDoc = [];
    const mediaFiles = await getReunionImageTop3();
    mediaFiles.forEach((doc) => {
      tempDoc.push(doc.data());
    });
    console.log(tempDoc);
    setImageList(tempDoc);
  }, []);
  useEffect(() => {
    getAllReunions();
    getHeaderImages();
  }, []);
  return (
    <>
      <Intro imgList={imageList} />
      <Content reunionList={reunionList} />
    </>
  );
};

export default React.memo(Reunion);
