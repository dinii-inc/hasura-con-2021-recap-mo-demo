import { Fab as MuiFab, Zoom } from "@material-ui/core";
import { Send } from "@material-ui/icons";

import React from "react";
import styled, { useTheme } from "styled-components";

const StyledFab = styled(MuiFab)`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing(2)}px;
  right: ${({ theme }) => theme.spacing(2)}px;
`;

type Props = {
  onOrderCartItems: () => void;
};

export const Fab = ({ onOrderCartItems }: Props) => {
  const theme = useTheme();
  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <Zoom in timeout={transitionDuration} unmountOnExit>
      <StyledFab color="secondary" variant="extended" onClick={onOrderCartItems}>
        <Send />
        注文する
      </StyledFab>
    </Zoom>
  );
};
