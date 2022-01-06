import { ItemCardContainer, PictureContainer, TitleContainer } from "./styles";

interface ItemCardProps {
  title: string;
}

const ItemCard: React.FunctionComponent<ItemCardProps> = ({ title }) => {
  return (
    <ItemCardContainer>
      <TitleContainer> {title}</TitleContainer>

      <PictureContainer />
    </ItemCardContainer>
  );
};

export default ItemCard;
