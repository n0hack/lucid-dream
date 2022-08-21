import React, { useCallback, useRef } from "react";
import { headerAtom, searchAtom } from "@lucid-state/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { useState } from "react";
import { useEffect } from "react";
import clsx from "clsx";

const Search = () => {
  const [searchValue, setSearchValue] = useRecoilState(searchAtom);
  const { transition } = useRecoilValue(headerAtom);
  const [showCancel, setShowCancel] = useState(false);
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue((prev) => ({ ...prev, value: e.target.value }));
  };

  const handleCloseSearch = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    (e: any) => {
      console.log(e.target);
      if (e.target.parentElement !== ref.current) {
        console.log("close?");
        // setSearchValue({ open: false, value: "" });
        // window.removeEventListener("click", handleCloseSearch);
      }
    },
    [setSearchValue]
  );

  useEffect(() => {
    if (searchValue.open) {
      window.addEventListener("click", handleCloseSearch);
      console.log("이벤트 생성");
    }
  }, [searchValue.open, handleCloseSearch]);

  useEffect(() => {
    if (searchValue.value.length > 0) setShowCancel(true);
    else setShowCancel(false);
  }, [searchValue]);

  return (
    <form
      ref={ref}
      onSubmit={handleSubmit}
      className={clsx(
        "absolute right-10 rounded-md transition-all duration-150 ease-linear",
        transition ? "bg-white border-black" : "bg-[#000]/70 border-white",
        searchValue.open ? "w-80 border-[1px]" : "w-0 border-0"
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={clsx(
          "absolute top-1/2 left-2 -translate-y-1/2 h-5 w-5 transition-colors duration-300 ease-linear",
          transition ? "fill-black" : "fill-white",
          searchValue.open ? "visible" : "invisible"
        )}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        />
      </svg>
      <input
        type="search"
        placeholder="프로젝트 또는 포스트 이름으로 검색하기!"
        maxLength={24}
        value={searchValue.value}
        onChange={handleChange}
        className={clsx(
          "w-full pl-9 pr-8 py-2 text-sm font-medium bg-transparent outline-none placeholder:text-placeholder selection:text-white selection:bg-primary transition-colors duration-300 ease-linear",
          transition ? "text-black" : "text-white"
        )}
      />
      {showCancel && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(
            "absolute top-1/2 right-2 -translate-y-1/2 h-4 w-4 transition-colors duration-300 ease-linear",
            transition ? "fill-black/80" : "fill-white/80"
          )}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </form>
  );
};

export default Search;
