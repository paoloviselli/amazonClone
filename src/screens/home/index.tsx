import Header from "../../components/Header";
import ItemCard from "../../components/ItemCard";
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
//     name: "NFL Football",
//     image:
//       "https://firebasestorage.googleapis.com/v0/b/clone-bbb31.appspot.com/o/NFLFootball.png?alt=media&token=65be564a-5baa-4d89-8a92-63a7c648c3c5",
//     price: 25,
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
// ];

// type Storage = { storageItems: Item[] };

interface HomepageProps {}

const Homepage: React.FunctionComponent<HomepageProps> = () => {
  const { storage } = useStorage();

  console.table(storage?.storageItems);

  // const [data, setData] = useState<Storage>({ storageItems: [] });

  // useEffect(() => {
  //   const fetchHandler = async () => {
  //     const fetchedData = (await (
  //       await db.collection("storage").doc("vJ93ZkKjkBUnjzSIkEFu").get()
  //     ).data()) as Storage;

  //     // console.table(fetchedData.storageItems);

  //     setData(fetchedData);
  //   };

  //   fetchHandler();
  // }, []);

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
