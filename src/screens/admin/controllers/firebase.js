import { App } from "../../../firebase/index.js";

import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";

export const getAdminData = async (id) => {
  // get firestore
  const db = getFirestore(App);

  const docRef = doc(db, "admin", id);
  const docSnap = await getDoc(docRef);

  return docSnap.data();
};

export const getAdmins = async () => {
  const collectionRef = collection(getFirestore(App), "admin");
  const data = [];
  let Records = await getDocs(collectionRef, "admin");
  Records.docs.forEach((Element) => {
    data.push(Element.data());
  });
  return data;
};
