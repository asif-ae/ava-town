import React from "react";
import { Aside, Header } from "@/containers";

/**
 * This template is created for all the available pages
 */

export default function MainTemplate({ children }) {
  return (
    <>
      <Header />
      <div className="flex">
        <Aside />
        {children}
      </div>
    </>
  );
}
