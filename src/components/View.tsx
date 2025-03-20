// import React from "react";
import { Nests } from "./Nests";
import { Birds } from "./Birds";

function View() {
  //   const colors: string[] = ["blue", "red", "yellow"];
  //   const birdSufix: string = "-bird";
  //   const nestSufix: string = "-nest";

  return (
    <div className="">
      <div className="board sticky top-0 w-[50vw] h-[50vw] min-w-[300px] min-h-[300px] max-w-[100vh] max-h-[100vh]">
        <Nests />
        <Birds />
      </div>
    </div>
  );
}

export default View;
