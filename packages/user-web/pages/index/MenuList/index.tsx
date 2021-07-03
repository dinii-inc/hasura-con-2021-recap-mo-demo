import { Spacer } from "components/Spacer";
import Image from "next/image";
import { Menu } from "pages/index/types";
import React from "react";
import styled from "styled-components";
import { formatPrice } from "util/formatPrice";

import { Typography } from "@material-ui/core";

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
};

export const MenuList = ({ menus }: Props) => {
  return (
    <Container>
      {menus.map(({ id, name, price, image }) => (
        <Card key={id}>
          <StyledImage key={image} src={`http://localhost:3000/images/${image}`} width={160} height={160} alt={name} />
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
