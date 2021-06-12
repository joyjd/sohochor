import { db, storage } from "./../config/firebase";
import firebase from "firebase/app";

export const addEvent = async ({ eventId, title, desc, highlightDesc, eventDate, stardesc, starIndex, eventtype }) => {
  try {
    await db.collection(eventtype).doc(eventId).set({
      id: eventId,
      title: title,
      desc: desc,
      highlightDesc: highlightDesc,
      eventDate: eventDate,
      stardesc: stardesc,
      starIndex: starIndex,
    });

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const addMedia = (activityType, eventId, mediaId, type, url, collectionName) => {
  return db.collection(activityType).doc(eventId).collection(collectionName).doc(mediaId).set({
    id: mediaId,
    type: type,
    url: url,
  });
};

export const addGalleryMedia = (mediaId, url) => {
  return db.collection("Gallery").doc(mediaId).set({
    id: mediaId,
    url: url,
  });
};
export const addArchiveMedia = (mediaId, url, memory) => {
  return db.collection("Archive").doc(mediaId).set({
    id: mediaId,
    url: url,
    memory: memory,
  });
};

export const mediaFileUpload = (activityType, activityId, file) => {
  return storage.child(`${activityType}/${activityId}/media/${file.name}`).put(file);
};

export const galleryUpload = (file) => {
  return storage.child(`Gallery/media/${file.name}`).put(file);
};
export const archiveUpload = (file) => {
  return storage.child(`Archive/media/${file.name}`).put(file);
};
export const getAllActivity = async () => {
  return await db.collection("Activities").orderBy("eventDate", "desc").get();
};
export const getActivityTop3 = async () => {
  return await db.collection("Activities").orderBy("eventDate", "desc").limit(3).get();
};
export const getAllReunion = async () => {
  return await db.collection("Reunions").orderBy("eventDate", "desc").get();
};
export const getActivityImageTop3 = async () => {
  return await db.collectionGroup("Media").where("type", "==", "image").limit(4).get();
};
export const getReunionImageTop3 = async () => {
  return await db.collectionGroup("ReunionMedia").where("type", "==", "image").limit(4).get();
};
export const getActivitySpecificImages = async (activityId, count) => {
  return await db.collection("Activities").doc(activityId).collection("Media").where("type", "==", "image").limit(count).get();
};
export const getReunionSpecificImages = async (activityId, count) => {
  return await db.collection("Reunions").doc(activityId).collection("ReunionMedia").where("type", "==", "image").limit(count).get();
};
export const getActivityFullDetailById = async (activityId) => {
  return await db.collection("Activities").doc(activityId).get();
};
export const getReunionFullDetailById = async (activityId) => {
  return await db.collection("Reunions").doc(activityId).get();
};
export const getActivityFullMediaById = async (activityId) => {
  return await db.collection("Activities").doc(activityId).collection("Media").get();
};
export const getReunionFullMediaById = async (activityId) => {
  return await db.collection("Reunions").doc(activityId).collection("ReunionMedia").get();
};

export const getAllActivityImage = () => {
  return db.collectionGroup("Media").where("type", "==", "image").get();
};
export const getAllReunionImage = () => {
  return db.collectionGroup("ReunionMedia").where("type", "==", "image").get();
};
export const getAllGalleryImage = () => {
  return db.collectionGroup("Gallery").get();
};
export const getAllArchiveItems = async () => {
  return await db.collectionGroup("Archive").get();
};
export const getAllArchiveItemsTop6 = async () => {
  return await db.collectionGroup("Archive").limit(6).get();
};
