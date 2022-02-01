import { firestore } from "./firebase.js";
import {
  doc,
  getDocs,
  updateDoc,
  collection,
  addDoc,
  query,
  where,
  arrayUnion,
  getDoc,
  limit,
  startAt,
  endAt,
  orderBy,
  startAfter,
} from "firebase/firestore";

const createPost = (postInfo) => {
  addDoc(collection(firestore, "posts"), postInfo)
    .then((post) => {
      return post;
    })
    .catch((err) => alert(err.message));
};

const getPosts = (page, topics) => {
  const topicsArr = topics || [];
  const postArray = [];
  if (topicsArr.length) {
    return getDocs(
      query(
        collection(firestore, "posts"),
        where("topics", "array-contains-any", topics),
        orderBy("createdDate", "desc"),
        startAfter(page),
        limit(10)
      )
    )
      .then((arr) => {
        arr.forEach((doc) => {
          const docData = doc.data();
          postArray.push({ ...docData, id: doc.id });
        });
        return postArray;
      })
      .catch((err) => console.log(err.message));
  } else {
    return getDocs(
      query(
        collection(firestore, "posts"),
        orderBy("createdDate", "desc"),
        startAfter(page),
        limit(10)
      )
    )
      .then((arr) => {
        arr.forEach((doc) => {
          const docData = doc.data();
          postArray.push({ ...docData, id: doc.id });
        });
        return postArray;
      })
      .catch((err) => alert(err.message));
  }
};

export { createPost, getPosts };
