import React from "react";
import DataContextProvider from "@/contexts/DataContextProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <DataContextProvider>
      <Component {...pageProps} />
    </DataContextProvider>
  );
}
