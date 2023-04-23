import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../../firebase.config";

export const saveFoodData = async (data) => {
  await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
    merge: true,
  });
};
