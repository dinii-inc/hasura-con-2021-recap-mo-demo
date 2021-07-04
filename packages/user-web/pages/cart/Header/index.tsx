import { Button } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { useRouter } from "next/dist/client/router";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.palette.common.white};
  background: ${({ theme }) => theme.palette.primary.main};
  padding: ${({ theme }) => theme.spacing(2)}px ${({ theme }) => theme.spacing(1)}px;
  position: relative;
`;

export const Header = () => {
  const router = useRouter();

  return (
    <Container>
      <Button color="inherit" startIcon={<ArrowBack />} onClick={() => router.back()}>
        戻る
      </Button>
    </Container>
  );
};
