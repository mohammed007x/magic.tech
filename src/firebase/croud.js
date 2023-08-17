import { addDoc, collection, getFirestore, getDocs } from "firebase/firestore";
import { App } from "./index.js";

const collectionRef = collection(getFirestore(App), "record");

export const AddRecord = async (data) => {
  try {
    await addDoc(collectionRef, data);
    return "success";
  } catch (e) {
    return "fail";
  }
};

export const getRecord = async () => {
  const data = [];
  let Records = await getDocs(collectionRef, "record");
  Records.docs.forEach((Element) => {
    data.push(Element.data());
  });
  return data;
};
