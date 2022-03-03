import { useContext } from "react";

import { StorageContext } from "../context/Storage";

const useStorage = () => useContext(StorageContext);

export default useStorage;
