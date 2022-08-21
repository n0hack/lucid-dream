import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { headerAtom, navAtom, scrollAtom, searchAtom, windowAtom } from "@lucid-state/atoms";
import Nav from "./Nav";
import Logo from "./ui/Logo";
import clsx from "clsx";
import Search from "./ui/Search";

interface Props {
  transition?: boolean;
}

const Header = ({ transition = false }: Props) => {
  const [scrollValue, setScrollValue] = useRecoilState(scrollAtom);
  const [headerValue, setHeaderValue] = useRecoilState(headerAtom);
  const [windowValue, setWindowValue] = useRecoilState(windowAtom);
  const [navValue, setNavValue] = useRecoilState(navAtom);
  const [searchValue, setSearchValue] = useRecoilState(searchAtom);

  const handleOpenNav = () => setNavValue({ open: true });
  const handleCloseNav = () => setNavValue({ open: false });
  const handleOpenSearch = () => setSearchValue((prev) => ({ ...prev, open: true }));

  useEffect(() => {
    setWindowValue((prev) => ({ ...prev, size: window.innerWidth }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!transition) return;

    const event = () => {
      if (window.scrollY >= 60) setHeaderValue({ transition: true });
      else setHeaderValue({ transition: false });
    };
    window.addEventListener("scroll", event);

    return () => {
      window.removeEventListener("scroll", event);
    };
  }, [scrollValue, setHeaderValue, setScrollValue, transition]);

  useEffect(() => {
    const event = () => {
      if (navValue.open && windowValue.size > 1023) setNavValue({ open: false });
      setWindowValue({ size: window.innerWidth });
    };
    window.addEventListener("resize", event);

    return () => {
      window.removeEventListener("resize", event);
    };
  }, [navValue.open, setNavValue, setWindowValue, windowValue.size]);

  return (
    <>
      <div
        className={clsx(
          "fixed top-0 left-0 w-full h-[3.75rem] px-5 flex items-center lg:px-10",
          headerValue.transition ? "bg-white" : ""
        )}
      >
        <Logo />
        <div className="hidden lg:block">
          <Nav />
        </div>
        <div
          className={clsx(
            "absolute top-1/2 right-5 -translate-y-1/2 flex items-center gap-2 transition-colors duration-300 ease-linear lg:right-10",
            headerValue.transition ? "fill-black" : "fill-white"
          )}
        >
          <button onClick={handleOpenSearch} className={clsx("w-6 h-6", searchValue.open ? "lg:opacity-0" : "")}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button onClick={handleOpenNav} className="w-6 h-6 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <Search />
      </div>
      <div className="lg:hidden">
        <Nav onCloseNav={handleCloseNav} />
      </div>
    </>
  );
};

export default Header;
