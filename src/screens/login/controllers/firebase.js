import { App } from "../../../firebase/index.js";

import {
  collection,
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";

export const AddAdmin = async (name, email, password) => {
  // collection ref
  const collectionRef = collection(getFirestore(App), "admin");
  // creater the use with email and password
  try {
    // auth the user with email and passowod
    const userCred = await createUserWithEmailAndPassword(
      getAuth(App),
      email,
      password
    );

    // add the use to firestore data base
    await setDoc(doc(collectionRef, userCred.user.uid), {
      name,
      email,
      password,
      uid: userCred.user.uid,
    });

    // if every thing went good
    return true;
  } catch (e) {
    return false;
  }
};

export const loginAdmin = async (email, password) => {
  // get firestore
  const db = getFirestore(App);
  try {
    // auth the user
    const userCred = await signInWithEmailAndPassword(
      getAuth(App),
      email,
      password
    );
    // ckeck if the user is admin
    const docRef = doc(db, "admin", userCred.user.uid);
    const docSnap = await getDoc(docRef);

    return [true, docSnap.data()];
  } catch (e) {
    return [false, null];
  }
};
