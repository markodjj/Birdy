// import { CodeInput } from "./CodeInput";
// import { CSSRenderer } from "./CSSRenderer";

// interface prop {
//   level: {
//     p1: string;
//     ul: string[];
//     p2: string;
//     css: string;
//   };
// }

// export const Instruction: React.FC<prop> = (props) => {
//   return (
//     <div className="text-xl mt-10">
//       {props.level.p1 && (
//         <>
//           <p>{props.level.p1}</p>
//         </>
//       )}
//       {props.level.ul && (
//         <>
//           <ul className="pl-15 mt-5 list-disc">
//             {props.level.ul.map((item, index) => (
//               <li key={index}> {item}</li>
//             ))}
//           </ul>
//         </>
//       )}
//       {props.level.p2 && <p className="mt-5">{props.level.p2}</p>}
//       {props.level.css && (
//         <pre className="mt-5">
//           <CSSRenderer cssString={props.level.css} />
//         </pre>
//       )}
//     </div>
//   );
// };
import { CSSRenderer } from "./CSSRenderer";
import { NextButton } from "./NextButton";

interface Prop {
  level: {
    p1: string;
    ul?: string[];
    p2?: string;
    css: string;
  };
}

const highlightWords = [
  "justify-content",
  "align-items",
  "flex-direction",
  "flex-start",
  "flex-end",
  "center",
  "space-between",
  "space-around",
  "column",
  "row",
  "row-reverse",
  "column-reverse",
];

const highlightText = (text: string) => {
  const regex = new RegExp(`\\b(${highlightWords.join("|")})\\b`, "gi");
  return text.split(regex).map((part, index) =>
    highlightWords.includes(part) ? (
      <span key={index} className="text-blue-500 font-bold">
        {part}
      </span>
    ) : (
      part
    )
  );
};

export const Instruction: React.FC<Prop> = (props) => {
  return (
    <div className="text-xl mt-10">
      {props.level.p1 && <p>{highlightText(props.level.p1)}</p>}
      {props.level.ul && (
        <ul className="pl-13 mt-3 list-disc">
          {props.level.ul.map((item, index) => (
            <li key={index}>{highlightText(item)}</li>
          ))}
        </ul>
      )}
      {props.level.p2 && (
        <p className="mt-5">{highlightText(props.level.p2)}</p>
      )}
      {props.level.css && (
        <pre className="flex justify-between items-end  mt-30 bottom-30 bg-[#fafccb] p-5">
          <CSSRenderer cssString={props.level.css} />
          <NextButton />
        </pre>
      )}
    </div>
  );
};
