import { db } from "./firebaseConfig";
import { getDate } from "./../utils/dateHandling";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  orderBy,
  limit,
  addDoc,
} from "@firebase/firestore";

const blogsCollectionRef = collection(db, "blogs");

const q = query(blogsCollectionRef, orderBy("date"), limit(5));

export const getBlogs = async () => {
  const { docs } = await getDocs(q);

  return docs.map((doc) => {
    const blog = doc.data();
    const date = getDate(blog.date.seconds);
    return {
      ...blog,
      id: doc.id,
      date: date,
    };
  });
};

export const getBlog = async (blogId) => {
  const docRef = doc(db, "blogs", blogId);
  const blog = await getDoc(docRef);
  return blog.data();
};

export const setBlog = async (blog) => {
  await addDoc(blogsCollectionRef, blog);
};
