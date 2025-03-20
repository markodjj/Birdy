import levels from "../data/levels.json";

export const parseCSS = (cssString: string) => {
  try {
    const styleObject: React.CSSProperties = {};
    const rules = cssString.split(";").filter(Boolean); // Split rules by `;` and filter out empty ones
    for (const rule of rules) {
      const [key, value] = rule.split(":").map((s) => s.trim());
      if (key && value) {
        const camelCaseKey = key.replace(/-([a-z])/g, (_, letter) =>
          letter.toUpperCase()
        ); // Convert kebab-case to camelCase
        styleObject[camelCaseKey as keyof React.CSSProperties] = value;
      }
    }
    return styleObject;
  } catch (error) {
    console.error("Invalid CSS:", error);
    return {};
  }
};

const allRules: string[] = [
  "flex-direction",
  "flex-wrap",
  "flex-flow",
  "order",
  "align-items",
  "align-self",
  "align-content",
  "justify-content",
];

export const checkFlexProperties = (cssString: string) => {
  const rules = cssString.split(";").filter(Boolean); // Split rules by `;` and filter out empty ones
  for (const rule of rules) {
    const [key, value] = rule.split(":").map((s) => s.trim());
    // console.log(key);
    if (allRules.includes(key)) {
      return true;
    } else {
      return false;
    }
  }
  // return true;
};

const isEqual = (obj1: Record<string, any>, obj2: Record<string, any>) => {
  return (
    Object.keys(obj1).length === Object.keys(obj2).length &&
    Object.entries(obj1).every(([key, value]) => obj2[key] === value)
  );
};

export const checkAnwser = (cssString: string, level: string) => {
  type Levels = typeof levels;
  type LevelKey = keyof Levels;
  const levelKey = level as LevelKey;

  const correctAnswerString: string = levels[levelKey]["correct"];

  if (isEqual(parseCSS(cssString), parseCSS(correctAnswerString))) {
    console.log("da");
    return true;
  } else {
    return false;
  }
};

// if (parseCSS(cssString) === parseCSS(correctAnswerString)) {
//   console.log("da");
// } else {
//   console.log(parseCSS(cssString), parseCSS(correctAnswerString));
// }
