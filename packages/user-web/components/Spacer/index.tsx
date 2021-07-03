import styled from "styled-components";

const Container = styled.div<Props>`
  width: ${({ theme, size }) => theme?.spacing?.(size)}px;
  height: ${({ theme, size }) => theme?.spacing?.(size)}px;
`;

type Props = {
  size: number;
};

export const Spacer = ({ size }: Props) => <Container size={size} />;
