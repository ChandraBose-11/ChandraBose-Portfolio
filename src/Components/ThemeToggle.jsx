import { Button } from "flowbite-react";
import React, { useState, useEffect } from "react";
const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for saved theme preference in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.documentElement.classList.add(savedTheme);
    } else {
      // Default to light mode
      document.documentElement.classList.add("light");
    }
  }, []);
  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
    document.documentElement.classList.toggle("light", isDarkMode);

    // Save the theme in localStorage
    localStorage.setItem("theme", newTheme);
  };
  return (
    <Button
      onClick={toggleTheme}
      className=" bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
      size="sm"
      color="light" pill
      rounded
    >
      {isDarkMode ? "🌞" : "🌙"}
    </Button>
  );
};

export default ThemeToggle;
