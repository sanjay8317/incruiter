/**
 * Utility functions for the application
 */

/**
 * Format a number with K/M suffix for display
 */
export function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
}

/**
 * Generate a random ID
 */
export function generateId() {
  return Math.random().toString(36).substring(2, 15);
}

/**
 * Debounce function for search inputs
 */
export function debounce(func, wait) {
  let timeout = null;

  return (...args) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Class name helper - combines class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}