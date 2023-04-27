import React from "react";
import { Header } from "@/containers";

/**
 * This template is created for 404 pages only
 */

export default function ErrorTemplate({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
