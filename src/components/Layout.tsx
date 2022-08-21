import React from "react";
import Header from "./Header";
import { RecoilRoot } from "recoil";

interface Props {
  transition: boolean;
  children: React.ReactNode;
}

const Layout = ({ transition, children }: Props) => {
  return (
    <RecoilRoot>
      <div className="relative h-[400vh]">
        <Header transition={transition} />
        <main>{children}</main>
      </div>
    </RecoilRoot>
  );
};

export default Layout;
