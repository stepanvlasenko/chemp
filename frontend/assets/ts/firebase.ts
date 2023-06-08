import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, uploadBytes } from 'firebase/storage'

type directory = 'user' | 'post' | 'comment'

const firebaseConfig = {
  apiKey: "AIzaSyB7m9tb6RQjz2d9EhScsapzk5PMabPqGLc",
  authDomain: "chemp-c9930.firebaseapp.com",
  databaseURL: "https://chemp-c9930-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chemp-c9930",
  storageBucket: "chemp-c9930.appspot.com",
  messagingSenderId: "775737144466",
  appId: "1:775737144466:web:52f9e5a5d1c7b01325e24b"
};

initializeApp(firebaseConfig);

const storage = getStorage()

export const sendFile = async (directory: directory, fileName: string, data: Uint8Array) => {
    const pathRef = ref(storage, `${directory}/${fileName}`)
    return await uploadBytes(pathRef, data)
}
export const getFileURL = async (directory: directory, fileName: string) => {
    const pathRef = ref(storage, `${directory}/${fileName}`)
    return await getDownloadURL(pathRef)
}