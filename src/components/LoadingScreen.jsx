import { useState, useEffect } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello World/>";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 100);

    const timeout = setTimeout(() => {
      onComplete(); // ✅ call parent to hide loading screen
    }, 2000); // maybe 2s for better sync

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold flex items-center">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>

      <div className="w-[200px] h-[2px] bg-gray-700 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b84f6] animate-loading-bar">
          {""}
        </div>
      </div>
    </div>
  );
};
