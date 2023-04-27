import React, { useContext, useEffect } from "react";
import { DataContext } from "@/contexts/DataContextProvider";
import MainTemplate from "@/components/templates/Main";
import allData from "@/data/index.json";
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import Select from "@/components/Select";

export default function HumanBased({ data: getData, totalPages }) {
  const { data, setData, baseURL } = useContext(DataContext);

  useEffect(() => {
    if (!(totalPages > 1)) {
      setData(getData);
    }
  }, [data]);
  return (
    <MainTemplate>
      <main className="bg-[#FAFAFA] w-full">
        <div className="flex items-center justify-between">
          <h3 className="m-2.5 text-2xl font-semibold">
            Full avatar {">"} Human based
          </h3>
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

HumanBased.getInitialProps = async () => {
  const totalRecords = allData?.length || 0;
  const totalPages = Math.ceil(totalRecords / 12);
  return {
    data: allData,
    totalPages,
    totalRecords,
  };
};
