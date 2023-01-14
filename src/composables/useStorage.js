import { db } from "../firebase/config";
import { getStorage, ref } from "firebase/storage";

const storage = getStorage();

// Points to the root reference
const storageRef = ref(storage);

// Points to 'images'
const imagesRef = ref(storageRef, 'images');

// Points to 'images/space.jpg'
// Note that you can use variables to create child values
const fileName = 'JasperArt_2022-09-04_16.10.11_1.png';
const spaceRef = ref(imagesRef, fileName);

// File path is 'images/space.jpg'
const path = spaceRef.fullPath;

// File name is 'space.jpg'
const name = spaceRef.name;

// Points to 'images'
const imagesRefAgain = spaceRef.parent;

export function useStorage () {

    console.log("Path", path)

    return { useStorage }
}