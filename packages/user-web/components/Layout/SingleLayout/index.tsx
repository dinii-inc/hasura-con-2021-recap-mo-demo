import { Spacer } from "components/Spacer";
import Head from "next/head";
import React, { useState } from "react";
import styled from "styled-components";

import { Button, Container, Paper, TextField, Typography } from "@material-ui/core";
import { theme } from "styles/theme";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.palette.primary.main};
`;

const StyledContainer = styled(Container).attrs({
  maxWidth: "sm",
})`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(16)}px ${({ theme }) => theme.spacing(2)}px;
`;

const StyledPaper = styled(Paper)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(4)}px;
`;

type Props = {
  title: string;
  children: React.ReactNode;
};

export const SingleLayout = ({ title, children }: Props) => (
  <Background>
    <StyledContainer>
      <Head>
        <title>{title}</title>
      </Head>
      <StyledPaper elevation={3}>{children}</StyledPaper>
    </StyledContainer>
  </Background>
);
