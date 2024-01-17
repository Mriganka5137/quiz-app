"use client";
import { useTheme } from "next-themes";
import React from "react";
import { Switch } from "../ui/switch";

const ThemeSwitch = () => {
  const { setTheme, theme } = useTheme();

  const handleTheme = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return <Switch checked={theme === "dark"} onCheckedChange={handleTheme} />;
};

export default ThemeSwitch;
