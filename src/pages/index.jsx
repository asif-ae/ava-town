import React, { useContext } from "react";
import MainTemplate from "@/components/templates/Main";
import { DataContext } from "@/contexts/DataContextProvider";
import allData from "@/data/index.json";
import Pagination from "@/components/Pagination";
import Card from "@/components/Card";
import Select from "@/components/Select";

export default function Homepage() {
  const { data, setData, baseURL } = useContext(DataContext);

  const getData = allData;
  const totalRecords = allData?.length || 0;
  const totalPages = Math.ceil(totalRecords / 12);

  return (
    <MainTemplate>
      <main className="bg-[#FAFAFA] w-full">
        <div className="flex items-center justify-between">
          <h3 className="m-2.5 text-2xl font-semibold">All items</h3>
          <div className="m-2.5">
            <Select />
          </div>
        </div>
        <section className="flex flex-wrap">
          {data?.length > 0 &&
            data.map((item) => (
              <div className="m-2.5 relative" key={item.id}>
                <Card item={item} baseURL={baseURL} />
              </div>
            ))}
        </section>
        {totalPages > 1 && (
          <Pagination
            getData={getData}
            totalPages={totalPages}
            setData={setData}
          />
        )}
      </main>
    </MainTemplate>
  );
}
