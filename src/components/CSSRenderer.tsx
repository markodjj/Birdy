import React from "react";
import { CodeInput } from "./CodeInput";

export const CSSRenderer = ({ cssString }: { cssString: string }) => {
  return (
    <pre style={{ whiteSpace: "pre-wrap" }} className="w-[80%]">
      {cssString.split("\n\n").map((chunk, index) => (
        <React.Fragment key={index}>
          {chunk}
          {index < cssString.split("\n\n").length - 1 && <CodeInput />}
        </React.Fragment>
      ))}
    </pre>
  );
};
