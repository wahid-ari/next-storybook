import { useState } from "react";

export default function ThemeToggle() {

  const [on, setOn] = useState(false);

  return (
    <div
      onClick={() => setOn(!on)}
      className="transition-all cursor-pointer w-12 h-7 dark:bg-blue-500 bg-neutral-200 rounded-full relative"
    >
      <div className="h-5 w-5 bg-white rounded-full absolute top-1 transition-all dark:left-6 left-1"></div>
    </div>
  )
}