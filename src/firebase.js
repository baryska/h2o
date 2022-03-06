import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
// import { collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7-BeaAix1qybZtHO7dNjDdf00VNTlgwQ",
  authDomain: "voda-72daa.firebaseapp.com",
  databaseURL: "https://voda-72daa-default-rtdb.firebaseio.com",
  projectId: "voda-72daa",
  storageBucket: "voda-72daa.appspot.com",
  messagingSenderId: "867488962266",
  appId: "1:867488962266:web:074d8a92bfb21f70eaf7e3",
  measurementId: "G-YPFH17HQCB"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore();


// useEffect(() => {
  //   if (user !== null) {
  //     const storage = getStorage();
  //     const imagesRef = ref(storage, 'images/Ohre2016');
  //     const fetchImages = async () => {
  //       const result = await listAll(imagesRef);
  //       console.log(result)
  //       let urlPromises = result.items.map((imageRef) => {
  //         getDownloadURL(imageRef)
  //         console.log(imageRef._location.path_)
  //       }
  //       );

  //       return Promise.all(urlPromises);
  //     }

  //     const loadImages = async () => {
  //       const urls = await fetchImages();
  //       setPhotos(urls);
  //     };

  //     loadImages();
  //   }
  // }, [user]);


  //   const addDataToDatabase = async () => {
  //   photos.forEach(async (photo) => {
  //     try {
  //       const docRef = await addDoc(collection(db, "Ohre2016"), {
  //         "url": photo
  //       });
  //       console.log("Document written with ID: ", docRef.id);
  //     } catch (e) {
  //       console.error("Error adding document: ", e);
  //     }
  //   })
  // }

  
// export const query = graphql`
// {
//   allOhre2016 {
//     edges {
//       node {
//         url
//       }
//     }
//   }
// }
// `

export default app;