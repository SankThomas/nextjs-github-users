"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Search",
    href: "/search",
  },
  {
    title: "User Profile",
    href: "/user-profile",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden fixed h-screen bg-slate-900 w-64 p-4 lg:flex flex-col items-start justify-between">
      <Button variant="secondary">Welcome</Button>

      <ul className="grid gap-4">
        {links.map((link, index) => (
          <li key={index}>
            <Button variant={pathname === link.href ? "secondary" : "outline"}>
              <Link href={link.href}>{link.title}</Link>
            </Button>
          </li>
        ))}
      </ul>

      <Button variant="outline">
        Built by <a href="https://tsbsankara.netlify.app">Thomas Sankara</a>
      </Button>
    </div>
  );
}
