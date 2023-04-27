import React, { useState } from "react";
import Image from "next/image";
import {
  Star as StarIcon,
  Close as CloseIcon,
  LocalMall as LocalMallIcon,
  AddShoppingCart as AddShoppingCartIcon,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import allData from "@/data/index.json";
import { filterById } from "@/utils/filter";
import MainTemplate from "@/components/templates/Main";

export default function Item() {
  const {query} = useRouter();
  const [showAvatar, setShowAvatar] = useState(false);

  const data = filterById(allData, parseInt(query.id, 10))?.[0];

  return (
    <MainTemplate>
      <main className="min-h-screen w-full">
        {/* Hero Section */}
        <div className="w-full h-72 relative">
          <Image
            src="https://drive.google.com/uc?id=1ahfO57aiMssNQsh2DAEvKc5K-ITqnPcr"
            alt="Banner"
            width={2560}
            height={1707}
            className="w-full object-cover object-center"
            priority
          />
          <div className="tooltip w-40 h-40 absolute left-40 bottom-[-50%] -translate-y-2/4">
            {data?.image && (
              <Image
                src={`https://drive.google.com/uc?id=${data?.image}`}
                alt="Banner"
                width={1024}
                height={1024}
                className="rounded-full border-4 hover:border-gray-dark cursor-pointer transition-all ease-out"
                priority
                onClick={() => setShowAvatar(true)}
              />
            )}
            <span className="tooltiptext">Click to see full size</span>
          </div>
        </div>

        {showAvatar && (
          <div className="absolute top-0 bottom-0 left-0 right-0 z-[1500] bg-[rgba(0,0,0,0.75)] transition-all ease-out">
            <div className="relative w-full h-screen min-w-full min-h-screen max-w-full max-h-screen">
              {data?.image && (
                <Image
                  src={`https://drive.google.com/uc?id=${data?.image}`}
                  alt="Banner"
                  width={1024}
                  height={1024}
                  className="w-full object-contain object-center p-20"
                  priority
                />
              )}
              <button
                type="button"
                className="tooltip absolute right-[10px] top-[10px] p-2.5 bg-white flex items-center justify-center border border-white hover:border-[#4c45f6] rounded-full transition-all ease-out"
                onClick={() => setShowAvatar(false)}
                aria-hidden="true"
              >
                <CloseIcon className="w-5 h-auto text-[#4c45f6]" />
                <span className="tooltiptext-right">Close</span>
              </button>
            </div>
          </div>
        )}

        <div className="px-20 h-20 flex items-center justify-end">
          <p className="text-red text-3xl">${data?.price}</p>
        </div>

        {/* Avatar Main */}
        <div className="px-20 flex items-center justify-between">
          <div className="pr-5">
            <h2 className="text-2xl font-bold text-gray-dark">{data?.title}</h2>
            <h5 className="text-xl font-medium text-[#01875f]">{data?.name}</h5>
            <p className="my-3 text-gray-dark">{data?.desc}</p>
          </div>
          <div className="pl-5 flex flex-col">
            <button
              type="button"
              className="bg-[#f57224] text-white py-2 px-5 mb-5"
            >
              <AddShoppingCartIcon /> Add to cart
            </button>
            <button type="button" className="bg-[#4c45f6] text-white py-2 px-5">
              <LocalMallIcon /> Buy now
            </button>
          </div>
        </div>
        <div className="mt-10 px-20">
          <h4 className="text-xl font-bold text-gray-dark">
            About this avatar
          </h4>
          <div className="mt-5">
            {data?.longText.split(/(?:\r\n|\r|\n)/g)?.map((text) => (
              <div key={text}>
                <p>{text}</p>
                <br />
              </div>
            ))}
          </div>
        </div>

        {/* Ratings */}
        <div className="flex items-center justify-center flex-col mt-5 mb-10">
          <div className="mb-5">
            <h3 className="text-3xl text-gray-dark">Ratings</h3>
          </div>
          <div className="mb-5">
            <div className="flex items-center mr-1">
              <StarIcon className="text-[#F9AE3F] text-3xl" />
              <StarIcon className="text-[#F9AE3F] text-3xl" />
              <StarIcon className="text-[#F9AE3F] text-3xl" />
              <StarIcon className="text-[#F9AE3F] text-3xl" />
              <StarIcon className="text-[#F9AE3F] text-3xl" />
            </div>
          </div>
          <p className="text-3xl text-[#01875f]">{data?.ratings}</p>
          <p className="text-xl text-gray-dark">{data?.totalReview} Likes</p>
        </div>
      </main>
    </MainTemplate>
  );
}
