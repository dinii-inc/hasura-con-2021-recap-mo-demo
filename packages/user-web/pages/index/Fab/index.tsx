import { Fab as MuiFab, Zoom } from "@material-ui/core";
import { Navigation } from "@material-ui/icons";
import { CartItem } from "pages/index/types";
import React from "react";
import styled, { useTheme } from "styled-components";

const StyledFab = styled(MuiFab)`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing(2)}px;
  right: ${({ theme }) => theme.spacing(2)}px;
`;

type Props = {
  cartItems: CartItem[];
};

export const Fab = ({ cartItems }: Props) => {
  const theme = useTheme();
  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <Zoom in={cartItems.length > 0} timeout={transitionDuration} unmountOnExit>
      <StyledFab color="secondary" variant="extended">
        <Navigation />
        注文を確認する
      </StyledFab>
    </Zoom>
  );
};
