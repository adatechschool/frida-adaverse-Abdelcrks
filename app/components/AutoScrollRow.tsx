"use client";

import { ReactNode } from "react";

export const AutoScrollRow = ({ children }: { children: ReactNode }) => {
  return (
    <div className="auto-scroll-container pb-3">
      <div
        className="
          auto-scroll-track
          flex gap-4
        "
      >
        {children}
        {children}
      </div>
    </div>
  );
};
