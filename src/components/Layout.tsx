import React from "react";
import Header from "./Header";
import { RecoilRoot } from "recoil";
import Main from "./Main";

interface Props {
  transition: boolean;
  children: React.ReactNode;
}

const Layout = ({ transition, children }: Props) => {
  return (
    <RecoilRoot>
      <div className="relative overflow-hidden">
        <Header transition={transition} />
        <Main>{children}</Main>
      </div>
    </RecoilRoot>
  );
};

export default Layout;
