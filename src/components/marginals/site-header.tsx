"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ScrollArea } from "../ui/scroll-area";

export function SiteHeader() {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
    </>
  );
}

function DesktopHeader() {
  const pathname = usePathname();
  return (
    <>
      <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:flex hidden">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <div className="flex items-center justify-center text-center py-5 gap-5">
            <Image
              src="/isea.png"
              width={90}
              height={90}
              alt="ISEA-ISAP 2025"
              className="mt-4"
            />
            <div className="space-y-2">
              <h1 className="font-bold text-2xl">{siteConfig.title}</h1>
              <h3 className="font-semibold text-lg text-muted-foreground">
                {siteConfig.description}
              </h3>
              <p className="font-semibold text-muted-foreground">
                27 February - 1 March 2025, IIT Madras, Chennai, Tamil Nadu
              </p>
            </div>
            <Image src="/iitm.png" width={90} height={90} alt="IIT Madras" />
          </div>
        </div>
      </header>
      <nav className="sticky top-2 z-10 lg:flex hidden items-center justify-center">
        <div className="p-2 border rounded-lg bg-background">
          <NavigationMenu>
            <NavigationMenuList>
              {siteConfig.navigation.map((item) => {
                if (item.href) {
                  return (
                    <NavigationMenuItem key={item.title}>
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            pathname === item.href &&
                              "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                          )}
                        >
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  );
                }
                if (!item.children) return null;
                return (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul
                        className={cn(
                          "grid gap-1 p-2",
                          item.children.length > 4
                            ? "grid-cols-2 w-[500px]"
                            : "w-[250px]"
                        )}
                      >
                        {item.children.map((child) => (
                          <li key={child.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={child.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {child.title}
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </>
  );
}

function MobileHeader() {
  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-between px-2 py-4 lg:hidden">
      <div className="flex items-center gap-2">
        <Image
          src="/isea.png"
          width={50}
          height={50}
          alt="ISEA-ISAP 2025"
          className="mt-2"
        />
        <div>
          <h1 className="font-bold text-lg">{siteConfig.title}</h1>
          <h3 className="text-xs sm:text-sm text-muted-foreground">
            {siteConfig.description}
          </h3>
        </div>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pr-0">
          <ScrollArea className="h-[calc(100vh-theme(spacing.12))]">
            <SheetHeader className="flex flex-row gap-2 items-center text-left">
              <Image
                src="/isea.png"
                width={50}
                height={50}
                alt="ISEA-ISAP 2025"
                className="mt-4"
              />
              <div>
                <SheetTitle className="font-bold text-lg">
                  {siteConfig.title}
                </SheetTitle>
                <SheetDescription className="text-xs sm:text-sm text-muted-foreground">
                  {siteConfig.description}
                </SheetDescription>
              </div>
            </SheetHeader>
            <div className="flex flex-col space-y-3 mt-4">
              {siteConfig.navigation.map((item) => {
                if (item.href) {
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block py-2 text-sm font-medium"
                    >
                      {item.title}
                    </Link>
                  );
                }
                if (!item.children) return null;
                return (
                  <div key={item.title} className="space-y-3">
                    <div className="font-medium">{item.title}</div>
                    <div className="pl-4 space-y-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          className="block py-2 text-sm"
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </header>
  );
}
