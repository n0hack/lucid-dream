import React from "react";
import clsx from "clsx";
import { Link } from "gatsby";
import { useRecoilValue } from "recoil";
import { headerAtom, navAtom } from "@lucid-state/atoms";

const Nav = () => {
  const { transition } = useRecoilValue(headerAtom);
  const { open } = useRecoilValue(navAtom);

  return (
    <>
      {/* 데스크톱 네비게이션 */}
      <nav className="lg:block hidden">
        <ul className="flex gap-6">
          <li
            className={clsx(
              "font-bold text-sm transition-colors duration-300 ease-linear",
              transition ? "text-black" : "text-white"
            )}
          >
            <Link to="/about">소개</Link>
          </li>
          <li
            className={clsx(
              "font-bold text-sm transition-colors duration-300 ease-linear",
              transition ? "text-black" : "text-white"
            )}
          >
            <Link to="/project">프로젝트</Link>
          </li>
          <li
            className={clsx(
              "font-bold text-sm transition-colors duration-300 ease-linear",
              transition ? "text-black" : "text-white"
            )}
          >
            <Link to="/blog">블로그</Link>
          </li>
          <li
            className={clsx(
              "font-bold text-sm transition-colors duration-300 ease-linear",
              transition ? "text-black" : "text-white"
            )}
          >
            <Link to="/outsourcing">외주</Link>
          </li>
        </ul>
      </nav>
      {/* 모바일 네비게이션 */}
      {open && (
        <nav className="absolute w-full h-screen z-[999] bg-[rgba(255,255,255,0.85)] backdrop-grayscale lg:hidden">
          <button className="absolute top-0 right-0 w-16 h-16 bg-white hover:bg-gray-300 hover:text-white transition-colors duration-200 ease-linear">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="flex flex-col pt-16 pl-9">
            <li>
              <Link
                to="/about"
                className="block py-3 text-6xl font-bold text-black hover:text-primary transition-colors duration-200 ease-in"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className="block py-3 text-6xl font-bold text-black hover:text-primary transition-colors duration-200 ease-in"
              >
                PROJECT
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="block py-3 text-6xl font-bold text-black hover:text-primary transition-colors duration-200 ease-in"
              >
                BLOG
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-3 text-6xl font-bold text-black hover:text-primary transition-colors duration-200 ease-in"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Nav;
