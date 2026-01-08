"use client";

import { useState, useEffect } from "react";
import Container from "./Container";
import Button from "./ui/Button";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-slate-900/90 to-slate-900/60 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold text-white">Finech</div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <a className="text-sm text-slate-300 hover:text-white">Products</a>
            <a className="text-sm text-slate-300 hover:text-white">Developers</a>
            <a className="text-sm text-slate-300 hover:text-white">Pricing</a>
            <a className="text-sm text-slate-300 hover:text-white">Company</a>
            <Button>Get Started</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-2xl"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </Container>

      {/* Mobile Sidebar */}
      {open && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/70"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <aside className="fixed right-0 top-0 z-50 h-full w-72 bg-slate-900 p-6 shadow-2xl">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-lg font-bold text-white">Finech</span>
              <button
                onClick={() => setOpen(false)}
                className="text-white text-xl"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-col gap-6 rounded-xl bg-slate-900/70 p-6 backdrop-blur-md">
              <a className="text-slate-300 hover:text-white">Products</a>
              <a className="text-slate-300 hover:text-white">Developers</a>
              <a className="text-slate-300 hover:text-white">Pricing</a>
              <a className="text-slate-300 hover:text-white">Company</a>

              <div className="pt-4">
                <Button className="w-full">Get Started</Button>
              </div>
            </nav>
          </aside>
        </>
      )}
    </header>
  );
}
