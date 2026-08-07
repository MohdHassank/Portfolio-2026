"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Home,
  User,
  LayoutGrid,
  FolderKanban,
  Briefcase,
  Award,
  Mail,
  ArrowRight,
  Sun,
  Menu,
  X,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  isActive?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home", icon: Home, isActive: true },
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: LayoutGrid },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Achievements", href: "#achievements", icon: Award },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2.5 bg-white/70 backdrop-blur-xl border border-slate-200/80 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 pl-2 group">
          <div className="flex items-center justify-center font-extrabold text-xl tracking-tight text-[#2563eb]">
            HK
          </div>
          <div className="flex items-center gap-1.5 font-bold text-base text-slate-900 tracking-tight">
            <span>Hassan Khan</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
          </div>
        </Link>

        {/* Center Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/60 p-1 rounded-full border border-slate-200/50">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                  item.isActive
                    ? "bg-[#2563eb] text-white shadow-md shadow-blue-500/25"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/80"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-2.5 pr-1">
          <Link
            href="#contact"
            className="group flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-medium text-xs px-4 py-2 rounded-full transition-all duration-200 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
          >
            <span>Let's Connect</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>

          <button
            type="button"
            aria-label="Toggle theme"
            className="p-2 text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-full shadow-xs transition-colors duration-200 active:scale-95 cursor-pointer"
          >
            <Sun className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Actions & Menu Trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            aria-label="Toggle theme"
            className="p-2 text-slate-600 bg-white border border-slate-200/80 rounded-full shadow-xs"
          >
            <Sun className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-3 bg-white/90 backdrop-blur-2xl border border-slate-200/80 rounded-3xl shadow-2xl flex flex-col gap-1 transition-all">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl text-sm font-medium transition-colors ${
                  item.isActive
                    ? "bg-[#2563eb] text-white"
                    : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
          <div className="pt-2 mt-1 border-t border-slate-100 sm:hidden">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#2563eb] text-white font-medium text-sm px-4 py-2.5 rounded-2xl w-full"
            >
              <span>Let's Connect</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}