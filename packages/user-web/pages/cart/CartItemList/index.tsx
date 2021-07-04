import { Spacer } from "components/Spacer";
import { CartItem } from "hooks/useCartItems/types";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { formatPrice } from "util/formatPrice";

import { Badge, Typography } from "@material-ui/core";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(1)}px;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme.spacing(1)}px;
`;

const StyledImage = styled(Image)`
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
`;

const Name = styled(Typography).attrs({ variant: "body2" })`
  font-weight: bold;
  flex: 1;
`;

const Description = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

type Props = {
  cartItems: CartItem[];
};

export const CartItemList = ({ cartItems }: Props) => (
  <Container>
    {cartItems.map(({ id, name, price, quantity, menu }) => (
      <Card key={id}>
        <Badge badgeContent={quantity} color="secondary">
          <StyledImage key={menu.image} src={`http://localhost:3000/images/${menu.image}`} width={64} height={64} alt={name} />
        </Badge>
        <Spacer size={1} />
        <Description>
          <Name>{name}</Name>
          <Spacer size={1} />
          <Typography variant="caption">{formatPrice(price * quantity)}</Typography>
        </Description>
      </Card>
    ))}
  </Container>
);
