import { navAtom } from "@lucid-state/atoms";
import React from "react";
import { useRecoilValue } from "recoil";

type Props = { children: React.ReactNode };

const Main = ({ children }: Props) => {
  const navValue = useRecoilValue(navAtom);

  return <main className={navValue.open ? "h-[100vh]" : "h-[400vh]"}>{children}</main>;
};

export default Main;
