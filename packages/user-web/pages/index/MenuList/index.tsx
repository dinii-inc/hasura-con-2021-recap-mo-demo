import { Spacer } from "components/Spacer";
import Image from "next/image";
import { Menu } from "pages/index/types";
import React from "react";
import styled from "styled-components";
import { formatPrice } from "util/formatPrice";

import { Badge, IconButton, Typography } from "@material-ui/core";
import { CartItem } from "hooks/useCartItems/types";
import { Add, Remove } from "@material-ui/icons";

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

const CardImage = styled.div`
  width: 160px;
  height: 160px;
  position: relative;
`;

const StyledImage = styled(Image)`
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
`;

const CardActions = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  position: absolute;
  padding: ${({ theme }) => theme.spacing(1)}px;
  color: ${({ theme }) => theme.palette.common.white};
`;

const CartActionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(128, 128, 128, 0.5);
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
  onAdd: (menuId: string) => void;
  onRemove: (menuId: string) => void;
};

export const MenuList = ({ menus, cartItems, onAdd, onRemove }: Props) => {
  const cartCountMap = cartItems.reduce((acc, { menuId, quantity }) => {
    acc[menuId] = (acc[menuId] ?? 0) + quantity;
    return acc;
  }, {} as Record<string, number>);

  return (
    <Container>
      {menus.map(({ id, name, price, image }) => (
        <Card key={id}>
          <Badge badgeContent={cartCountMap[id] ?? 0} color="secondary">
            <CardImage>
              <StyledImage key={image} src={`http://localhost:3000/images/${image}`} width={160} height={160} alt={name} />
            </CardImage>
            <CardActions>
              {cartCountMap[id] > 0 && (
                <CartActionButton onClick={() => onRemove(id)}>
                  <Remove />
                </CartActionButton>
              )}
              <Spacer size={1} />
              <CartActionButton onClick={() => onAdd(id)}>
                <Add />
              </CartActionButton>
            </CardActions>
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
