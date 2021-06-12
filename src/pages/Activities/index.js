import React, { useState, useEffect, useCallback } from "react";
import Intro from "./Intro";
import Content from "./Content";
import { getAllActivity, getActivityImageTop3 } from "./../../firebase/firebaseService";

const Activities = () => {
  const [activityList, setActivityList] = useState([]);
  const [imageList, setImageList] = useState([]);

  const getAllActivities = useCallback(async () => {
    let tempDoc = [];
    const activities = await getAllActivity();
    activities.forEach((doc) => {
      tempDoc.push(doc.data());
    });
    console.log(tempDoc);
    setActivityList(tempDoc);
  }, []);

  const getHeaderImages = useCallback(async () => {
    let tempDoc = [];
    const mediaFiles = await getActivityImageTop3();
    mediaFiles.forEach((doc) => {
      tempDoc.push(doc.data());
    });
    console.log(tempDoc);
    setImageList(tempDoc);
  }, []);

  useEffect(() => {
    getAllActivities();
    getHeaderImages();
  }, []);

  return (
    <>
      <Intro imgList={imageList} />
      <Content activityList={activityList} />
    </>
  );
};

export default React.memo(Activities);
