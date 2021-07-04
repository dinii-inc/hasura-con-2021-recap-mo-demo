import { Spacer } from "components/Spacer";
import Image from "next/image";
import { Menu } from "pages/index/types";
import React from "react";
import styled from "styled-components";
import { formatPrice } from "util/formatPrice";

import { Badge, Typography } from "@material-ui/core";
import { CartItem } from "hooks/useCartItems/types";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(1)}px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 160px;
  margin: ${({ theme }) => theme.spacing(1)}px;
`;

const StyledImage = styled(Image)`
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
`;

const Name = styled(Typography).attrs({ variant: "body2" })`
  font-weight: bold;
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
`;

type Props = {
  menus: Menu[];
  cartItems: CartItem[];
  onClick: (menuId: string) => void;
};

export const MenuList = ({ menus, cartItems, onClick }: Props) => {
  const cartCountMap = cartItems.reduce((acc, { menuId, quantity }) => {
    acc[menuId] = (acc[menuId] ?? 0) + quantity;
    return acc;
  }, {} as Record<string, number>);

  return (
    <Container>
      {menus.map(({ id, name, price, image }) => (
        <Card key={id} onClick={() => onClick(id)}>
          <Badge badgeContent={cartCountMap[id] ?? 0} color="secondary">
            <StyledImage key={image} src={`http://localhost:3000/images/${image}`} width={160} height={160} alt={name} />
          </Badge>
          <Spacer size={1} />
          <Description>
            <Name>{name}</Name>
            <Spacer size={1} />
            <Typography variant="caption">{formatPrice(price)}</Typography>
          </Description>
        </Card>
      ))}
    </Container>
  );
};
