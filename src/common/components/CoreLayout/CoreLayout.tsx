import styled from '@emotion/styled';

export const CoreLayout = ({ children }) => {
  return <Box>{children}</Box>;
};

const Box = styled.div`
  min-height: 100%;
  height: 100%;
  position: relative;
`;
