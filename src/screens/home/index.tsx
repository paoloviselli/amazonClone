import Header from "../../components/header";
import ItemCard from "../../components/itemCard";
import { HomepageContainer, ScreenContainer } from "./styles";
import itemPic from "../../../public/Crime-and-punishment.jpeg";
import NFL from "../../../public/NFL.jpeg";
import { useEffect, useState } from "react";
import { db } from "../../../firebase/clientApp";
import { Item } from "../../types/item/Item";
import { sendData } from "next/dist/server/api-utils";
import useStorage from "../../hooks/useStorage";

// const DUMMY_DATA = [
//   {
//     id: "0",
//     name: "Crime and punishment",
//     image:
//       "https://firebasestorage.googleapis.com/v0/b/clone-bbb31.appspot.com/o/CrimeAndPunishment.jpeg?alt=media&token=58e4e4b7-d0a3-40b2-adb1-68ab0720af2c",
//     price: 12.99,
//     quantity: 0,
//     stockAmount: 100,
//   },
//   {
//     id: "1",
//     name: "MacBook Pro 14",
//     image:
//       "https://firebasestorage.googleapis.com/v0/b/clone-bbb31.appspot.com/o/MacBook_Pro_14.jpeg?alt=media&token=b6aa5680-6490-4d7d-b9e5-fdf2a0d4cde1",
//     price: 1899,
//     quantity: 0,
//     stockAmount: 100,
//   },
//   {
//     id: "2",
//     name: "Sony Headphones",
//     image:
//       "https://firebasestorage.googleapis.com/v0/b/clone-bbb31.appspot.com/o/sonyHeadphones.jpeg?alt=media&token=275d3a95-017c-42d4-86e5-4b61f052afcc",
//     price: 170,
//     quantity: 0,
//     stockAmount: 100,
//   },
//   {
//     id: "3",
//     name: "Amazon Echo Dot",
//     image:
//       "https://firebasestorage.googleapis.com/v0/b/clone-bbb31.appspot.com/o/AmazonEcho.jpeg?alt=media&token=7544c655-da7d-47d3-8be6-7279b3aa2023",
//     price: 79.99,
//     quantity: 0,
//     stockAmount: 100,
//   },
//   {
//     id: "4",
//     name: "12 Rules for life",
//     image:
//       "https://firebasestorage.googleapis.com/v0/b/clone-bbb31.appspot.com/o/12Rules.jpeg?alt=media&token=b5f68301-7281-4cc2-970f-055e77d76576",
//     price: 19.99,
//     quantity: 0,
//     stockAmount: 100,
//   },
//   {
//     id: "5",
//     name: "Meditations",
//     image:
//       "https://firebasestorage.googleapis.com/v0/b/clone-bbb31.appspot.com/o/meditations.jpeg?alt=media&token=3fcafce0-54a2-444d-8716-254d3fe1ed82",
//     price: 9.99,
//     quantity: 0,
//     stockAmount: 100,
//   },
// ];

interface HomepageProps {}

const Homepage: React.FunctionComponent<HomepageProps> = () => {
  const { storage } = useStorage();

  // //pushes Dummy Data in Firebase to set Storage Items
  // useEffect(() => {
  //   db.collection("storage")
  //     .doc("vJ93ZkKjkBUnjzSIkEFu")
  //     .set({ storageItems: DUMMY_DATA });
  // }, []);

  interface HomepageProps {}
  return (
    <ScreenContainer>
      <Header />
      <HomepageContainer>
        {storage?.storageItems.map((el) => (
          <ItemCard item={el} key={el.id} />
        ))}
      </HomepageContainer>
    </ScreenContainer>
  );
};

export default Homepage;
