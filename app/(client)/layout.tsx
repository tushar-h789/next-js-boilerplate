import React from "react";
import Navbar from "../_components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="pt-16">{children}</div>
    </div>
  );
}
