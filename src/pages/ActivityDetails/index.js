import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SkewImageSet from "./../../components/SkewImageSet";
import Box from "@material-ui/core/Box";
import DetailPage from "./../../components/DetailPage";
import { getActivityFullDetailById, getActivityFullMediaById, getActivitySpecificImages } from "./../../firebase/firebaseService";
import EventMediaUpload from "./../../modules/EventMediaUpload";
import EditEventText from "./../../modules/EditEventText";

const ActivityDetails = () => {
  const [detail, setDetail] = useState({});
  const [medialList, setMediaList] = useState([]);
  const [medialListHeader, setMediaListHeader] = useState([]);
  const { id } = useParams();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const getDetails = useCallback(async () => {
    const doc = await getActivityFullDetailById(id);
    setDetail(doc.data());
  }, []);

  const getFullMedia = useCallback(async () => {
    const doc = await getActivityFullMediaById(id);
    let temp = [];
    doc.forEach((el) => {
      temp.push(el.data());
    });
    setMediaList(temp);
    if (temp.length >= 3) {
      setMediaListHeader([temp[0], temp[1], temp[2]]);
    } else {
      while (temp.length < 3) {
        temp.concat(temp[0]);
      }
      setMediaListHeader([temp[0], temp[1], temp[2]]);
    }
  }, []);

  useEffect(() => {
    getDetails();
    getFullMedia();
  }, []);

  return (
    <>
      {medialList.length !== 0 ? (
        <Box>
          <div className={matches ? "quoteImg" : "quote"}>
            <SkewImageSet mediaObj={medialListHeader} />
          </div>
          <DetailPage
            date={new Date(detail.eventDate).toDateString()}
            title={detail.title}
            desc={detail.desc}
            media={medialList}
            highlightDesc={detail.highlightDesc}
            stardisplayMedia={[
              {
                url: medialList[detail.starIndex].url,
                desc: detail.stardesc,
              },
            ]}
          />
          <EventMediaUpload eventtype='Activities' eventId={id} />
          <EditEventText eventtype='Activities' eventId={id} />
        </Box>
      ) : null}
    </>
  );
};

export default ActivityDetails;
