import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { headerAtom, navAtom, scrollAtom, windowAtom } from "@lucid-state/atoms";
import Nav from "./Nav";
import Logo from "./ui/Logo";
import clsx from "clsx";

interface Props {
  transition?: boolean;
}

const Header = ({ transition = false }: Props) => {
  const [scrollValue, setScrollValue] = useRecoilState(scrollAtom);
  const [headerValue, setHeaderValue] = useRecoilState(headerAtom);
  const [windowValue, setWindowValue] = useRecoilState(windowAtom);
  const [navValue, setNavValue] = useRecoilState(navAtom);

  useEffect(() => {
    setWindowValue((prev) => ({ ...prev, size: 0 }));
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
    const event = () => setWindowValue({ size: window.innerWidth });
    window.addEventListener("resize", event);

    return () => {
      window.removeEventListener("resize", event);
    };
  });

  return (
    <>
      <div
        className={clsx(
          "fixed top-0 left-0 w-full h-[3.75rem] px-5 flex items-center lg:px-10",
          headerValue.transition ? "bg-white" : ""
        )}
      >
        <Logo />
        <Nav />
        <div
          className={clsx(
            "absolute top-1/2 right-5 -translate-y-1/2 flex items-center gap-2 transition-colors duration-300 ease-linear lg:right-10",
            headerValue.transition ? "fill-black" : "fill-white"
          )}
        >
          <button className="w-6 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="w-6 h-6 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="lg:hidden">
        <Nav />
      </div>
    </>
  );
  // const [openSearch, setOpenSearch] = useState(false);
  // const [value, setValue] = useState("");
  // const [showMenu, setShowMenu] = useState(false);
  // const [trasitionPoint, setTransitionPoint] = useState(false);
  // const inputRef = useRef<HTMLInputElement>(null);
  // const handleOpenSearch = () => {
  //   setOpenSearch(true);
  //   setTimeout(() => console.log(openSearch), 2000);
  // };
  // const handleCloseSearch = () => {};
  // const onChange = () => {};
  // const onChangeHeader = useCallback(() => {
  //   if (window.scrollY >= 60) setTransitionPoint(true);
  //   else setTransitionPoint(false);
  // }, []);
  // const onChangeLayout = useCallback(() => {
  //   if (window.innerWidth <= 768) setShowMenu(false);
  //   else setShowMenu(true);
  // }, []);
  // useLayoutEffect(() => {
  //   onChangeLayout();
  //   window.addEventListener("resize", onChangeLayout);
  //   return () => {
  //     window.removeEventListener("resize", onChangeLayout);
  //   };
  // }, [onChangeLayout]);
  // useEffect(() => {
  //   if (transition) {
  //     window.addEventListener("scroll", onChangeHeader);
  //     return () => {
  //       window.removeEventListener("scroll", onChangeHeader);
  //     };
  //   }
  // }, [transition, onChangeHeader]);
  // return (
  //   <HeaderBlock initial={transition} trasition={trasitionPoint}>
  //
  //     {showMenu && <Nav />}
  //     <UtilMenuBlock>
  //       {!openSearch && (
  //         <button onClick={handleOpenSearch}>
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             className="h-6 w-6"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //             strokeWidth="2"
  //           >
  //             <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  //           </svg>
  //         </button>
  //       )}
  //       {!showMenu && (
  //         <button>
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             className="h-6 w-6"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //             strokeWidth="2"
  //           >
  //             <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  //           </svg>
  //         </button>
  //       )}
  //     </UtilMenuBlock>
  //     <SearchBox>
  //       <Input
  //         ref={inputRef}
  //         onChange={onChange}
  //         placeholder="프로젝트 또는 포스트 이름으로 검색하기!"
  //         value={value}
  //         open={openSearch}
  //         initial={transition}
  //         transition={trasitionPoint}
  //       />
  //     </SearchBox>
  //   </HeaderBlock>
  // );
};

export default Header;

// const HeaderBlock = styled.header<{ initial: boolean; trasition: boolean }>`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 3.75rem;
//   padding: 0 3.125rem;
//   display: flex;
//   align-items: center;
//   transition: color 0.3s ease, fill 0.3s ease, background-color 0.3s ease;

//   ${(props) => {
//     if (props.initial) {
//       if (props.trasition) {
//         return css`
//           background-color: ${(props) => props.theme.colors.bg.white};
//           color: ${(props) => props.theme.colors.text.black};
//           fill: ${(props) => props.theme.colors.text.black};
//         `;
//       } else {
//         return css`
//           background-color: transparent;
//           color: ${(props) => props.theme.colors.text.white};
//           fill: ${(props) => props.theme.colors.text.white};
//         `;
//       }
//     } else {
//       return css`
//         background-color: ${(props) => props.theme.colors.bg.white};
//         color: ${(props) => props.theme.colors.text.black};
//         fill: ${(props) => props.theme.colors.text.black};
//       `;
//     }
//   }}

//   @media screen and (max-width: 768px) {
//     padding: 0 1.25rem;
//   }
// `;

// const UtilMenuBlock = styled.div`
//   position: absolute;
//   right: 3.125rem;
//   display: flex;
//   gap: 0.875rem;

//   button {
//     width: 1.375rem;
//     height: 1.375rem;
//     background-color: transparent;
//     outline: 0;
//     border: 0;
//     cursor: pointer;
//   }

//   svg {
//     fill: transparent;
//   }

//   @media screen and (max-width: 768px) {
//     right: 2rem;
//   }
// `;

// const SearchBox = styled.div`
//   position: absolute;
//   right: 3.125rem;

//   @media screen and (max-width: 768px) {
//     right: 2rem;
//   }
// `;
