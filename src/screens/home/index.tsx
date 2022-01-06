import Header from "../../components/Header";
import ItemCard from "../../components/ItemCard";
import { HomepageContainer, ScreenContainer } from "./styles";
import itemPic from "../../../public/Crime-and-punishment.jpeg";
import NFL from "../../../public/NFL.jpeg";

const DUMMY_DATA = [
  {
    id: 0,
    title: "Crime and punishment",
    img: itemPic,
    price: "£9.99",
  },
  {
    id: 1,
    title: "NFL Football",
    img: NFL,
    price: "£29.99",
  },
  {
    id: 2,
    title: "NFL Football",
    img: NFL,
    price: "£29.99",
  },
];

interface HomepageProps {}

const Homepage: React.FunctionComponent<HomepageProps> = () => {
  return (
    <ScreenContainer>
      <Header />
      <HomepageContainer>
        {DUMMY_DATA.map((el) => (
          <ItemCard
            key={el.id}
            image={el.img}
            title={el.title}
            price={el.price}
          />
        ))}
      </HomepageContainer>
    </ScreenContainer>
  );
};

export default Homepage;
