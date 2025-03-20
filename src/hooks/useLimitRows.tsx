import { useEffect } from "react";

export const useLimitRows = (
  textareaRef: React.RefObject<HTMLTextAreaElement>
) => {
  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const numberOfLines = (text: string): number =>
      (text.match(/\n/g) || []).length + 1;

    const maxRows = parseInt(textarea.getAttribute("rows") || "0", 10);

    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        event.key === "Enter" &&
        textarea.value &&
        numberOfLines(textarea.value) >= maxRows
      ) {
        event.preventDefault();
      }
    };

    const handlePaste = (event: ClipboardEvent) => {
      const pastedText = event.clipboardData?.getData("text/plain") || "";
      if (pastedText && numberOfLines(textarea.value + pastedText) > maxRows) {
        event.preventDefault();
      }
    };

    textarea.addEventListener("keypress", handleKeyPress);
    textarea.addEventListener("paste", handlePaste);

    return () => {
      textarea.removeEventListener("keypress", handleKeyPress);
      textarea.removeEventListener("paste", handlePaste);
    };
  }, [textareaRef]);
};
