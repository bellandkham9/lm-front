"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Library,
  Heart,
  Camera,
  MessageCircle,
  HelpCircle,
  Settings,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";


const DashboardMenu = [
  {
    label: "Vocabulaire",
    icon: Library,
    href: "/Vocabulaire",
    color: "text-sky-500",
  },
  {
    label: "Conjugaison",
    icon: Heart,
    href: "/Conjugaison",
    color: "text-sky-500",
  },
  {
    label: "Champs lexical",
    icon: Camera,
    href: "/Forum",
    color: "text-sky-500",
  },

]

const routes = [
  {
    label: "Mes cours",
    icon: Library,
    href: "/cours",
    color: "text-sky-500",
  },
  {
    label: "Mes favoris",
    icon: Heart,
    href: "/favoris",
    color: "text-sky-500",
  },
  {
    label: "Forum",
    icon: Camera,
    href: "/Forum",
    color: "text-sky-500",
  },
  {
    label: "Message",
    icon: MessageCircle,
    href: "/Message",
    color: "text-sky-500",
  },
  {
    label: "Aide",
    icon: HelpCircle,
    href: "/Aide",
    color: "text-sky-500",
  },
  {
    label: "Paramettre",
    icon: Settings,
    href: "/Paramettre",
    color: "text-sky-500",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-1 flex flex-col h-full shadow-md text-white bg-white">
      <div className="flex-1">
        <Link
          href="/dashboard"
          className="relative flex items-center justify-center  mb-14 bg-gray-50 p-5"
        >
          <div className="relative flex w-32 h-16 justify-center items-center">
            <Image fill alt="logo" src="/images/logo_lm.png" />
          </div>
        </Link>
        <Accordion type="single" collapsible  className="mt-28">
          <AccordionItem value="item-1">
            <AccordionTrigger
              className={cn(
                "flex justify-end p-2 text-sm group w-full shadow-sm font-medium cursor-pointer hover:text-gray-700 no-underline hover:bg-gray-500/10  transition",
                pathname === "dashbord"
                  ? " text-gray-900 border-r-4 border-green-400"
                  : "text-gray-400"
              )}
            >
              <div>Dashboard</div>
            </AccordionTrigger>
            <AccordionContent className="w-full">
            <div className="space-y-1">
          {DashboardMenu.map((menu) => (
            <Link
              href={menu.href}
              key={menu.href}
              className={cn(
                "text-sm group  flex p-2 pr-6 w-full justify-start font-medium cursor-pointer hover:text-gray-700 hover:bg-gray-500/10  transition",
                pathname === menu.href
                  ? " text-gray-900 border-r-4 border-green-400"
                  : "text-gray-400"
              )}
            >
              <div
                className={cn(
                  "relative flex items-end text-xs justify-end flex-1",
                  pathname === menu.href
                    ? " border-green-400"
                    : "text-gray-400"
                )}
              >
                {menu.label}
              </div>
            </Link>
          ))}
        </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group  flex p-2 pr-6 w-full justify-start font-medium cursor-pointer hover:text-gray-700 hover:bg-gray-500/10  transition",
                pathname === route.href
                  ? " text-gray-900 border-r-4 border-green-400"
                  : "text-gray-400"
              )}
            >
              <div
                className={cn(
                  "relative flex items-end justify-end flex-1",
                  pathname === route.href
                    ? " border-green-400"
                    : "text-gray-400"
                )}
              >
                {route.label}
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/dashboard"
          className="relative flex items-center justify-center  mt-32  bg-gray-50 p-5 mb-0"
        >
          <div className="relative flex w-20 h-16 justify-center items-center">
            <Image fill alt="logo" src="/images/studying.png" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
