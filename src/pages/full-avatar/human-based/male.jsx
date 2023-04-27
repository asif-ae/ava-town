import React, { useContext, useEffect } from "react";
import { DataContext } from "@/contexts/DataContextProvider";
import MainTemplate from "@/components/templates/Main";
import { filterByGender } from "@/utils/filter";
import allData from "@/data/index.json";
import Pagination from "@/components/Pagination";
import Card from "@/components/Card";
import Select from "@/components/Select";

export default function Male({ data: getData, totalPages }) {
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
            Full avatar {">"} Human based {">"} Male
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

Male.getInitialProps = async () => {
  const data = await filterByGender(allData, "male");
  const totalRecords = (await data?.length) || 0;
  const totalPages = Math.ceil(totalRecords / 12);
  return {
    data,
    totalPages,
    totalRecords,
  };
};
