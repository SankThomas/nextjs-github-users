import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function MobileNav() {
  return (
    <div className="lg:hidden">
      <Sheet className="bg-slate-900">
        <SheetTrigger>
          <div className="absolute right-0 top-4 pt-4 pr-4">
            <Button variant="outline">
              <MenuIcon />
            </Button>
          </div>
        </SheetTrigger>
        <SheetContent className="w-9/12" side="left">
          <SheetHeader>
            <ul className="grid gap-4">
              <li>
                <Button variant="outline">
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
              </li>
            </ul>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
