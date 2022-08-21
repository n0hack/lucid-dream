import { atom } from "recoil";

export const headerAtom = atom({
  key: "headerState",
  default: { transition: false },
});

export const scrollAtom = atom({ key: "scrollState", default: 0 });

export const windowAtom = atom({ key: "windowState", default: { size: 0 } });

export const navAtom = atom({ key: "navState", default: { open: false } });
