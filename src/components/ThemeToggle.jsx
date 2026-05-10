'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import { useTheme } from '@/context/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        aria-label="Toggle Dark Mode"
      >
        <div className="w-6 h-6" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-200 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? (
        <Icon icon="mdi:white-balance-sunny" className="w-6 h-6 text-yellow-400" />
      ) : (
        <Icon icon="mdi:weather-night" className="w-6 h-6" />
      )}
    </button>
  );
};