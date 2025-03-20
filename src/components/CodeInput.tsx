import React, { useContext, useEffect, useRef, useState } from "react";
import { useTextInput } from "../context/TextInputContext";
import { useLimitRows } from "../hooks/useLimitRows";
import { useLevel } from "../context/LevelSelectContext";

export const CodeInput = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useLimitRows(textareaRef);
  const { text, setText } = useTextInput();
  const { num, setNum } = useLevel();

  return (
    <textarea
      ref={textareaRef}
      data-limit-rows="true"
      rows={2}
      className="p-2 border w-full border-gray-300 rounded resize-none"
      onChange={(e) => setText(e.target.value)}
      value={text}
    />
  );
};
