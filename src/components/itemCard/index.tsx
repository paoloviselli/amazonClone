import Image from "next/image";
import { useState } from "react";
import { Item } from "../../types/item/Item";
import Text from "../shared/Text";
import AddToCartButton from "./AddToCartButton";

import {
  AddToCartButtonContainer,
  ItemCardContainer,
  PictureContainer,
  PriceContainer,
  TitleContainer,
} from "./styles";

interface ItemCardProps {
  item: Item;
}

const ItemCard: React.FunctionComponent<ItemCardProps> = ({ item }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  return (
    <ItemCardContainer>
      <TitleContainer>
        <Text color="primary" fontSize={18}>
          {item.name}
        </Text>
      </TitleContainer>
      <PriceContainer>
        <Text color="primary" fontSize={16} bold>
          £ {item.price}
        </Text>
      </PriceContainer>

      <PictureContainer>
        <Image
          src={item.image}
          alt="Item picture"
          layout="fill"
          objectFit="contain"
        />
      </PictureContainer>
      <AddToCartButtonContainer>
        <AddToCartButton item={item} />
      </AddToCartButtonContainer>
    </ItemCardContainer>
  );
};

export default ItemCard;
