import Header from "../../components/header";
import ItemCard from "../../components/itemCard";
import { ScreenContainer, HomepageContainer } from "./styles";

interface HomepageProps {}

const Homepage: React.FunctionComponent<HomepageProps> = () => {
  return (
    <ScreenContainer>
      <Header />
      <HomepageContainer>
        <ItemCard title="Crime and Punishment" />
      </HomepageContainer>
    </ScreenContainer>
  );
};

export default Homepage;
