"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Icon } from "@iconify/react";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
            aria-label="InCruiter Home"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600">
              <span className="text-lg font-bold text-white">I</span>
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white">InCruiter</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="relative">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors hover:text-slate-900 dark:hover:text-white"
                aria-expanded={isProductsOpen}
                aria-haspopup="true"
              >
                Products
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 rounded-xl bg-white dark:bg-slate-800 p-2 shadow-xl ring-1 ring-slate-200/50 dark:ring-slate-700/50">
                  {[
                    { href: "/products", label: "All Products" },
                    { href: "/products#incserve", label: "IncServe" },
                    { href: "/products#incbot", label: "IncBot" },
                    { href: "/products#incvid", label: "IncVid" },
                    { href: "/products#incproctor", label: "IncProctor" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsProductsOpen(false)}
                      className="block rounded-lg px-4 py-2.5 text-sm text-slate-600 dark:text-slate-300 transition-colors hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors hover:text-slate-900 dark:hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors hover:text-slate-900 dark:hover:text-white"
            >
              Book Demo
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              Get Started
            </Link>
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full text-slate-600 dark:text-slate-300 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
              aria-label="Toggle color mode"
            >
              {mounted ? (
                theme === 'dark' ? (
                  <Icon icon="lucide:sun" className="h-5 w-5 text-amber-500" />
                ) : (
                  <Icon icon="lucide:moon" className="h-5 w-5" />
                )
              ) : null}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-600 dark:text-slate-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-16 bg-white dark:bg-slate-900 shadow-xl">
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-slate-600 dark:text-slate-300 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <div className="my-2 border-t border-slate-200 dark:border-slate-700" />
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-slate-600 dark:text-slate-300 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
              >
                Book Demo
              </Link>
              <div className="flex items-center gap-2">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex-1 rounded-full bg-indigo-600 px-4 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-indigo-700"
                >
                  Get Started
                </Link>
                <button
                  onClick={toggleTheme}
                  className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors hover:bg-slate-200 dark:hover:bg-slate-700"
                  aria-label="Toggle color mode"
                >
                  {mounted ? (
                    theme === 'dark' ? (
                      <Icon icon="lucide:sun" className="h-6 w-6 text-amber-500" />
                    ) : (
                      <Icon icon="lucide:moon" className="h-6 w-6" />
                    )
                  ) : null}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}