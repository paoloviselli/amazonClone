import Image from "next/image";
import { useState } from "react";
import { Item } from "../../types/item/item";
import Text from "../shared/Text";
import AddToCartButton from "./AddToCartButton";

import {
  AddToCartButtonContainer,
  ItemCardContainer,
  PictureContainer,
  TitleContainer,
} from "./styles";

interface ItemCardProps {
  item: Item;
  title: string;
  image: StaticImageData;
}

const ItemCard: React.FunctionComponent<ItemCardProps> = ({
  title,
  image,
  item,
}) => {
  const [addedToCart, setAddedToCart] = useState(false);

  // const addToCartHandler = () => {
  //   setAddedToCart(true);
  //   console.log("CLICKED");
  // };

  // console.log(addedToCart, "yesss");

  return (
    <ItemCardContainer>
      <TitleContainer>
        <Text color="primary" fontSize={20} bold>
          {title}
        </Text>
      </TitleContainer>

      <PictureContainer>
        <Image src={image} alt="Item picture" layout="fill" objectFit="fill" />
      </PictureContainer>
      <AddToCartButtonContainer>
        <AddToCartButton item={item} />
      </AddToCartButtonContainer>
    </ItemCardContainer>
  );
};

export default ItemCard;
