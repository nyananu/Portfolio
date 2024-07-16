import React from "react";
import { Cards } from "./Cards";

export const DragCards = () => {
  return (
    <section className= "relative min-h-screen w-full place-content-center overflow-hidden bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 hidden md:flex md:align-center">
      <h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px] ">
        Anusha<span className="text-pink-700">.</span>
      </h2>
      <Cards />
    </section>
  );
};

