import React, { useEffect, useState, useCallback } from "react";
import { getAllArchiveItems } from "./../../firebase/firebaseService";
import Intro from "./Intro";
import Content from "./Content";

const Archives = () => {
  const [archiveList, setArchiveList] = useState([]);

  const getAllItems = async () => {
    const data = await getAllArchiveItems();
    const temp = [];
    data.forEach((res) => {
      temp.push(res.data());
    });
    setArchiveList(temp);
  };

  useEffect(() => getAllItems(), []);
  return (
    <>
      {archiveList.length !== 0 ? <Intro imageList={archiveList} /> : null}
      <Content archiveList={archiveList} />
    </>
  );
};

export default React.memo(Archives);
