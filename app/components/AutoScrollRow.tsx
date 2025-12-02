"use client";

import { ReactNode } from "react";

export const AutoScrollRow = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="
        auto-scroll-container
        relative
        overflow-x-auto
        sm:overflow-hidden
        pb-3
      "
    >
      <div
        className="
          pointer-events-none
          absolute inset-y-0 left-0 w-10
          bg-linear-to-r from-white to-transparent
          dark:from-black
          z-20
        "
      />
      <div
        className="
          pointer-events-none
          absolute inset-y-0 right-0 w-10
          bg-linear-to-l from-white to-transparent
          dark:from-black
          z-20
        "
      />

      <div
        className="
          auto-scroll-track
          flex gap-4
          min-w-max
          relative
          z-10
        "
      >
        {children}
        {children}
      </div>
    </div>
  );
};
