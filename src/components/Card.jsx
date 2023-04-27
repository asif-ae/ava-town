import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Link as LinkIcon,
  Star as StarIcon,
  IosShare as IosShareIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  AddShoppingCart as AddShoppingCartIcon,
} from "@mui/icons-material";

export default function Card({ item, baseURL }) {
  const [isClicked, setIsClicked] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showShareBtn, setShowShareBtn] = useState(false);
  const imageLink = `https://drive.google.com/uc?id=${item.image}`;

  return (
    <Link
      href={`/item/${item.id}`}
      onClick={(e) => {
        if (showShareBtn) {
          e.preventDefault();

          /**
           * If you click on copy link button,
           * then the state shouldn't be changed.
           * It's a core JS technique.
           */
          if (
            e.target.id === "show-button" ||
            e.target.parentNode.id === "show-button"
          ) {
            return;
          }
          setShowShareBtn(false);
        }
      }}
    >
      <div className="max-w-[15.625rem] rounded-lg bg-white">
        <div className="relative w-[15.625rem] max-w-[15.625rem] h-[15.625rem] min-h-[15.625rem] rounded-lg">
          <Image
            src={imageLink}
            alt={item.image}
            width={1024}
            height={1024}
            className="w-auto rounded-lg"
          />
        </div>

        <div className="absolute top-[10px] right-[10px] bg-[#4c45f6] rounded-md px-2 py-1 flex items-center text-white">
          <AddShoppingCartIcon className="text-sm" />
          <p className="text-sm ml-2">Add</p>
        </div>

        <div className="p-1.5">
          {/* Title */}
          <h1 className="mb-1">{item.title}</h1>

          {/* Ratings */}
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center">
              <div className="flex items-center mr-1">
                <StarIcon className="text-[#F9AE3F] text-sm" />
                <StarIcon className="text-[#F9AE3F] text-sm" />
                <StarIcon className="text-[#F9AE3F] text-sm" />
                <StarIcon className="text-[#F9AE3F] text-sm" />
                <StarIcon className="text-[#F9AE3F] text-sm" />
              </div>
              <p className="text-sm">
                {item.ratings} & {item.totalReview}Likes
              </p>
            </div>
            <div>
              {isFavorite ? (
                <FavoriteIcon
                  className="text-red"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsFavorite(!isFavorite);
                  }}
                />
              ) : (
                <FavoriteBorderIcon
                  onClick={(e) => {
                    e.preventDefault();
                    setIsFavorite(!isFavorite);
                  }}
                />
              )}
            </div>
          </div>

          {/* Profile */}
          <div className="flex items-center mb-1">
            <div className="relative w-6 h-6 rounded-full mr-2">
              <Image
                src={imageLink}
                alt={item.image}
                width={1024}
                height={1024}
                className="w-auto rounded-full"
              />
            </div>
            <div>
              <h4 className="text-xs font-medium">{item.name}</h4>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center mb-1">
            <p>$</p>
            <p className="text-3xl ml-2">{item.price}</p>
          </div>

          {/* Type */}
          <div className="flex items-center mb-1">
            <div className="bg-[#3CD4F5] w-4 h-4 rounded-full" />
            <p className="text-xs ml-2">{item.type}</p>
          </div>

          {/* Description */}
          <div className="flex items-center justify-between mb-1">
            <p className="text-xs">{item.desc}</p>
            <IosShareIcon
              className="text-xl ml-2"
              onClick={(e) => {
                e.preventDefault();
                setShowShareBtn(!showShareBtn);
              }}
            />
          </div>

          {/* Share Button */}
          {showShareBtn && (
            <div
              id="show-button"
              className="absolute bottom-[40px] right-[10px] flex items-center bg-white border py-1 px-1.5 rounded-md z-[100]"
              onClickCapture={() => {
                setIsClicked(true);
                setTimeout(() => {
                  setIsClicked(false);
                }, 200);
              }}
              onClick={async (e) => {
                e.preventDefault();
                if ("clipboard" in navigator) {
                  await navigator.clipboard.writeText(
                    `${baseURL}/item/${item.id}`
                  );
                } else {
                  document.execCommand(
                    "copy",
                    true,
                    `${baseURL}/item/${item.id}`
                  );
                }
              }}
              aria-hidden="true"
            >
              <LinkIcon className="text-xs mr-1" />
              <p className="text-xs">Copy Link</p>
            </div>
          )}

          {/* Chip */}
          {isClicked && (
            <div className="absolute bottom-[60px] right-[10px] flex items-center bg-[#D9D9D9] z-[150] rounded-md">
              <p className="text-[10px] px-1.5 py-1">Copied</p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
