import React, { Children, useEffect, useState } from "react";
import { db } from "../../../firebase/clientApp";
import { Item } from "../../types/item/Item";

type Storage = { storageItems: Item[] };

interface StorageContext {
  storage?: Storage;
}

export const StorageContext = React.createContext<StorageContext>({
  storage: { storageItems: [] },
});

interface StorageProviderProps {}

const StorageProvider: React.FunctionComponent<StorageProviderProps> = ({
  children,
}) => {
  const [data, setData] = useState<Storage>({ storageItems: [] });

  useEffect(() => {
    const fetchHandler = async () => {
      const fetchedData = (await (
        await db.collection("storage").doc("vJ93ZkKjkBUnjzSIkEFu").get()
      ).data()) as Storage;

      //   console.table(fetchedData.storageItems);

      setData(fetchedData);
    };

    fetchHandler();
  }, []);

  return (
    <StorageContext.Provider
      value={{
        storage: data,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};

export default StorageProvider;
