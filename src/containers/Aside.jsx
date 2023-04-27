import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { DataContext } from "@/contexts/DataContextProvider";
import categories from '@/data/categories.json';

/**
 * I've build this nested aside navigation by myself with core JS.
 * All the CSS properties was written with Tailwind CSS.
 * I took help from official Tailwind documentation while writing css classes.
 * 
 * @returns 
 */

export default function Aside() {
  const route = useRouter();
  const { filter, setFilter } = useContext(DataContext);

  return (
    <aside
      className="w-64 max-w-[16rem] min-w-[16rem] bg-gray-light sticky float-left top-[3.5625rem] overflow-y-auto"
      style={{
        minHeight: "calc(100vh - 3.5625rem)",
        maxHeight: "calc(100vh - 3.5625rem)",
      }}
    >
      <nav className="p-2.5">
        {categories.map((category) => (
          <div key={category.name}>
            <h4 className="font-bold">{category.name}</h4>
            {category?.children?.length &&
              category.children.map((catChild) => {
                if (catChild.type === "checkbox") {
                  return (
                    <div key={catChild.name}>
                      <label htmlFor={catChild.name} className="ml-2.5">
                        <input type="checkbox" id={catChild.name} />
                        {` ${catChild.name}`}
                      </label>
                      <br />
                    </div>
                  );
                }
                if (catChild.type === "nested") {
                  return (
                    <div key={catChild.name} className="ml-2.5">
                      <Link
                        href={catChild?.link || "/"}
                        className={
                          route.pathname.includes("/full-avatar") ||
                          route.pathname.includes("/item/")
                            ? "underline"
                            : ""
                        }
                        onClick={() =>
                          setFilter('')
                        }
                      >
                        {catChild.name}
                      </Link>
                      {(route.pathname.includes("/full-avatar") ||
                        route.pathname.includes("/item/")) &&
                        catChild?.children?.length &&
                        catChild.children.map((catNestedChild) => (
                          <div key={catNestedChild.name} className="ml-2.5">
                            {catNestedChild?.link ? (
                              <Link
                                href={catNestedChild.link}
                                className={
                                  route.pathname.includes("/human-based") ||
                                  route.pathname.includes("/item/")
                                    ? "underline"
                                    : ""
                                }
                                onClick={() =>
                                  setFilter('')
                                }
                              >
                                {catNestedChild.name}
                              </Link>
                            ) : (
                              !(
                                route.pathname.includes("/human-based") ||
                                route.pathname.includes("/item/")
                              ) && catNestedChild.name
                            )}
                            {(route.pathname.includes("/human-based") ||
                              route.pathname.includes("/item/")) &&
                              catNestedChild?.children?.length &&
                              catNestedChild.children.map(
                                (catGrandNestedChild) => (
                                  <div
                                    key={catGrandNestedChild.name}
                                    className={`${catGrandNestedChild.category === filter ? 'underline ' : ''}ml-2.5`}
                                    onClick={() =>
                                      setFilter(catGrandNestedChild.category)
                                    }
                                    aria-hidden="true"
                                  >
                                    <Link href={catGrandNestedChild.link}>
                                      {catGrandNestedChild.name}
                                    </Link>
                                  </div>
                                )
                              )}
                          </div>
                        ))}
                    </div>
                  );
                }
                if (
                  !(
                    route.pathname.includes("/full-avatar") ||
                    route.pathname.includes("/human-based") ||
                    route.pathname.includes("/item/")
                  )
                ) {
                  return (
                    <div key={catChild.name} className="ml-2.5">
                      <p>{catChild.name}</p>
                    </div>
                  );
                }
                return true;
              })}
          </div>
        ))}
      </nav>
    </aside>
  );
}
