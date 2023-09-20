'use client'
import { useTheme } from "@/context/ThemeContext";
import Overview from "@/components/PagesSection/Dasboard/Overview/Overview";
import React from "react";

const OverviewDashboard = () => {
  const { isDarkMode } = useTheme();
  const themeClass = isDarkMode ? 'dark-mode' : 'light-mode';
  return (
    <div className={` ${themeClass}`}>
        <Overview />
    </div>
  );
};

export default OverviewDashboard;
