import Header from "../../components/header";
import ItemCard from "../../components/itemCard";
import { HomepageContainer, ScreenContainer } from "./styles";
import useStorage from "../../hooks/useStorage";

interface HomepageProps {}

const Homepage: React.FunctionComponent<HomepageProps> = () => {
  const { storage } = useStorage();

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
