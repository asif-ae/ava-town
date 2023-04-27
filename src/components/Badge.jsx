import React from "react";

export default function Badge({ content = 0, icon, lastChild }) {
  return (
    <div
      className={`w-10 h-10 bg-dark rounded-lg relative flex items-center justify-center cursor-pointer ${
        lastChild ? "mr-0" : "mr-5"
      }`}
    >
      {icon}
      {content > 0 && (
        <div className="text-[0.6rem] bg-red absolute p-1 rounded-full min-w-[1.399375rem] min-h-[1.399375rem] flex items-center justify-center top-[-0.3rem] right-[-0.3rem]">
          {content > 99 ? "99+" : content}
        </div>
      )}
    </div>
  );
}
