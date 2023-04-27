import { useRouter } from "next/router";
import React, { createContext, useEffect, useState } from "react";

/**
 * I've build this context provider component by the help of React context api.
 * It helps me organize all the default states in a single place.
 */

export const DataContext = createContext("");

export default function DataContextProvider({ children }) {
  const { pathname } = useRouter();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [routes, setRoutes] = useState([]);
  const [baseURL, setBaseURL] = useState("");

  useEffect(() => {
    if (window) {
      setBaseURL(window.location.origin);
    }
  }, []);

  useEffect(() => {
    if (pathname.includes("/unisex")) {
      setRoutes(["Full avatar", "Human based", "Unisex"]);
      setFilter("unisex");
    } else if (pathname.includes("/male")) {
      setRoutes(["Full avatar", "Human based", "Male"]);
      setFilter("male");
    } else if (pathname.includes("/female")) {
      setRoutes(["Full avatar", "Human based", "Female"]);
      setFilter("female");
    } else if (pathname.includes("/human-based")) {
      setRoutes(["Full avatar", "Human based"]);
    } else if (pathname.includes("/full-avatar")) {
      setRoutes(["Full avatar"]);
    } else {
      setRoutes([]);
    }
  }, [pathname]);

  return (
    <DataContext.Provider
      value={{ data, setData, filter, setFilter, baseURL, routes }}
    >
      {children}
    </DataContext.Provider>
  );
}
