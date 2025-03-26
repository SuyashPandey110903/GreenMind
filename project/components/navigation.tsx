"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sun, LineChart, Wrench, Info } from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LineChart },
  { name: "Tools", href: "/tools", icon: Wrench },
  { name: "About", href: "/about", icon: Info },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Sun className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block">
            SolarGrid Optimizer
          </span>
        </Link>
        <div className="flex items-center space-x-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    pathname === item.href &&
                      "bg-muted hover:bg-muted"
                  )}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}