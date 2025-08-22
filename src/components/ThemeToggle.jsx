// "use client";
// import { useTheme } from "next-themes";


// export default function ThemeToggle() {
// const { theme, setTheme } = useTheme();
// return (
// <button
// onClick={() => setTheme(theme === "light" ? "dark" : "light")}
// className="px-3 py-2 rounded-xl bg-sand text-charcoal hover:opacity-90"
// >
// {theme === "light" ? "Dark" : "Light"} Mode
// </button>
// );
// }


// src/components/ThemeToggle.jsx

"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a placeholder button
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="px-3 py-2 rounded-xl bg-sand text-charcoal hover:opacity-90"
    >
      {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}