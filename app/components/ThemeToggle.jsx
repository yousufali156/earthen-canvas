"use client";
import { useTheme } from "next-themes";


export default function ThemeToggle() {
const { theme, setTheme } = useTheme();
return (
<button
onClick={() => setTheme(theme === "light" ? "dark" : "light")}
className="px-3 py-2 rounded-xl bg-sand text-charcoal hover:opacity-90"
>
{theme === "light" ? "Dark" : "Light"} Mode
</button>
);
}