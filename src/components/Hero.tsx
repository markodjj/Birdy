import React from "react";
import Sidebar from "./Sidebar";
import View from "./View";

function Hero() {
  return (
    <div className="w-full h-full min-w-[300px] flex">
      <Sidebar />
      <View />
    </div>
  );
}

export default Hero;
