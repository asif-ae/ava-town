import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Notifications as NotificationsIcon,
  ShoppingCart as ShoppingCartIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import Badge from "./Badge";

export default function Header() {
  const searchRef = useRef();
  const [input, setInput] = useState("");
  return (
    <nav className="h-[3.5625rem] max-h-[3.5625rem] min-h-[3.5625rem] w-full max-w-full min-w-full relative bg-gradient-to-r from-primary to-secondary text-white sticky flex items-center">
      <div className="relative h-[3.5625rem] min-w-[16rem]">
        <Link href="/">
          <Image
            src="https://drive.google.com/uc?id=1Ku6ZM-Tkj51cAaoqoLiLKIqK4PtOw2Ei"
            alt="ava-town"
            width={756}
            height={195}
            className="w-auto"
          />
        </Link>
      </div>
      <div className="flex items-center justify-between w-full p-1.5">
        <div className="border-b border-white">
          <Link href="/">Go to Marketpage</Link>
        </div>
        <div className="flex">
          <div className="mr-5">
            <label class="relative block" htmlFor="search">
              <span class="sr-only">Search</span>
              <input
                class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-9 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-gray"
                placeholder="Search for anything..."
                type="text"
                name="search"
                id="search"
                ref={searchRef}
                defaultValue={input}
                onBlur={(e) => setInput(e.target.value)}
              />
              <span
                class="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                onClick={() => {
                  // alert({ input, sdf: searchRef.current });
                  setInput("");
                  searchRef.current.value = '';
                }}
                aria-hidden="true"
              >
                <SearchIcon className="text-gray" />
              </span>
            </label>
          </div>
          <Badge content={3} icon={<NotificationsIcon />} />
          <Badge content={1} icon={<ShoppingCartIcon />} lastChild />
        </div>
      </div>
    </nav>
  );
}
