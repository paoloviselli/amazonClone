import Image from "next/image";
import { useState } from "react";
import Text from "../shared/Text";
import AddToCartButton from "./AddToCartButton";

import {
  AddToCartButtonContainer,
  ItemCardContainer,
  PictureContainer,
  TitleContainer,
} from "./styles";

interface ItemCardProps {
  title: string;
  image: StaticImageData;
  price?: string;
  onClick?: () => void;
}

const ItemCard: React.FunctionComponent<ItemCardProps> = ({ title, image }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const addToCartHandler = () => {
    setAddedToCart(true);
    console.log("CLICKED");
  };

  console.log(addedToCart, "yesss");

  //onClick itemInCartCount +1, if itemInCartCount is >0 then
  //render item into cart and add price to TotalAmount

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
        <AddToCartButton onClick={addToCartHandler} />
      </AddToCartButtonContainer>
    </ItemCardContainer>
  );
};

export default ItemCard;
