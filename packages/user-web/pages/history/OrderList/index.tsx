import { Spacer } from "components/Spacer";
import { Order } from "hooks/useOrders/types";
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

const Quantity = styled(Typography).attrs({ variant: "body2" })`
  font-weight: bold;
  flex: 1;
`;

const Description = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

type Props = {
  orders: Order[];
};

export const OrderList = ({ orders }: Props) => (
  <Container>
    {orders.map(({ id, name, price, quantity, menu }) => (
      <Card key={id}>
        <StyledImage key={menu.image} src={`/images/${menu.image}`} width={64} height={64} alt={name} />
        <Spacer size={1} />
        <Description>
          <Name>{name}</Name>
          <Quantity>x{quantity}</Quantity>
          <Spacer size={1} />
          <Typography variant="caption">{formatPrice(price * quantity)}</Typography>
        </Description>
      </Card>
    ))}
  </Container>
);
