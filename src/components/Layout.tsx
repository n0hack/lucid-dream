import React from "react";
import Header from "./Header";
import styled, { ThemeProvider } from "styled-components";
import theme from "@lucid-ui/theme";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledLayout>
        <Header transition={true} />
        {children}
      </StyledLayout>
    </ThemeProvider>
  );
};

export default Layout;

const StyledLayout = styled.div`
  min-height: 400vh;
  background-color: black;
`;
