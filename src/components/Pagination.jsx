import React, { useEffect, useState } from "react";
import {
  ArrowBackIosNew as ArrowBackIosNewIcon,
  ArrowForwardIos as ArrowForwardIosIcon,
} from "@mui/icons-material";

/**
 * This component build for implementing pagination.
 * All the function build by myself by the help of MDN,
 * Stack Overflow, etc.
 */

export default function Pagination({ getData, totalPages, setData }) {
  const [pageNo, setPageNo] = useState(1);

  let pages = [];

  useEffect(() => {
    const slicedData = getData.slice((pageNo - 1) * 12, pageNo * 12);
    setData(slicedData);
  }, [getData, pageNo]);

  for (let i = 1; i <= totalPages; i += 1) {
    pages = [...pages, i];
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex items-center justify-center py-5 bg-white">
      <div
        className="bg-white p-2.5 mr-1 cursor-pointer"
        onClick={() => {
          if (pageNo === 1) {
            return;
          }
          setPageNo((prev) => prev - 1);
          scrollToTop();
        }}
        aria-hidden="true"
      >
        <ArrowBackIosNewIcon />
      </div>
      {pages.map((r) => (
        <div
          key={r}
          className={`${
            pageNo === r ? "bg-[#D9D9D9] font-bold" : "bg-white cursor-pointer"
          } p-2.5 mr-1 select-none`}
          onClick={() => {
            if (pageNo === r) {
              return;
            }
            setPageNo(r);
            scrollToTop();
          }}
          aria-hidden="true"
        >
          {r}
        </div>
      ))}
      <div
        className="bg-white p-2.5 cursor-pointer"
        onClick={() => {
          if (pageNo === totalPages) {
            return;
          }
          setPageNo((prev) => prev + 1);
          scrollToTop();
        }}
        aria-hidden="true"
      >
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
}
