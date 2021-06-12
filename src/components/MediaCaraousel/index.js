/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useEffect, useCallback } from "react";
import ImageGallery from "react-image-gallery";
import "./style.scss";

const MediaCaraousel = ({ mediaObj }) => {
  const [images, setImages] = useState([]);
  const [showPlayButton, setshowPlayButton] = useState(true);
  const [showFullscreenButton, setshowFullscreenButton] = useState(true);
  const [showGalleryPlayButton, setshowGalleryPlayButton] = useState(true);
  const [showGalleryFullscreenButton, setshowGalleryFullscreenButton] = useState(true);
  const [showVideo, setshowVideo] = useState({});

  const toggleShowVideo = (url) => {
    showVideo[url] = !Boolean(showVideo[url]);
    setshowVideo(showVideo);
    if (showVideo[url]) {
      if (showPlayButton) {
        setshowGalleryPlayButton(false);
      }

      if (showFullscreenButton) {
        setshowGalleryPlayButton(false);
      }
    }
  };

  const renderVideo = (item) => {
    return (
      <div>
        {showVideo[item.embedUrl] ? (
          <div className='video-wrapper'>
            <a className='close-video' onClick={() => toggleShowVideo(item.embedUrl)}></a>
            <iframe width='560' title='video' height='315' src={item.embedUrl} frameBorder='0' allowFullScreen></iframe>
          </div>
        ) : (
          <a onClick={() => toggleShowVideo(item.embedUrl)}>
            <div className='play-button'></div>
            <img className='image-gallery-image' src={item.original} alt='' />
          </a>
        )}
      </div>
    );
  };

  const onSlide = () => {
    resetVideo();
  };

  const resetVideo = () => {
    setshowVideo({});
    if (showPlayButton) {
      setshowGalleryPlayButton(true);
    }
    if (showFullscreenButton) {
      setshowGalleryFullscreenButton(true);
    }
  };

  const createMediaList = useCallback(() => {
    let temp = [];
    mediaObj.forEach((ob) => {
      if (ob.type === "video") {
        temp.push({
          thumbnail: "https://i.pinimg.com/originals/a2/47/a3/a247a3232ee0ad8dd0a4bcedf32f19f5.jpg",
          original: "https://i.pinimg.com/originals/a2/47/a3/a247a3232ee0ad8dd0a4bcedf32f19f5.jpg",
          embedUrl: ob.url,
          renderItem: () =>
            renderVideo({
              thumbnail: "https://i.pinimg.com/originals/a2/47/a3/a247a3232ee0ad8dd0a4bcedf32f19f5.jpg",
              original: "https://i.pinimg.com/originals/a2/47/a3/a247a3232ee0ad8dd0a4bcedf32f19f5.jpg",
              embedUrl: ob.url,
            }),
        });
      } else {
        temp.push({
          thumbnail: ob.url,
          original: ob.url,
          originalClass: "featuredSlide",
        });
      }
    });

    setImages(temp);
  }, [mediaObj]);

  useEffect(() => createMediaList(), [mediaObj, createMediaList]);
  return <ImageGallery items={images} lazyLoad={true} onSlide={onSlide} infinite={true} showBullets={true} showFullscreenButton={showFullscreenButton && showGalleryFullscreenButton} showPlayButton={showPlayButton && showGalleryPlayButton} showThumbnails={true} showIndex={true} showNav={true} thumbnailPosition='bottom' slideOnThumbnailOver={true} additionalClass='app-image-gallery' useWindowKeyDown={true} />;
};

export default MediaCaraousel;
