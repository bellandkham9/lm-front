"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import MobileSidebar from "@/components/mobile-sidebar";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Profile from "@/components/Profile";

const Navbar = async () => {
  return (
    <div className="flex shadow-lg items-center p-4 bg-green-400">
      <MobileSidebar />
      <div className="hidden md:block justify-start text-white ml-5 w-3/4">
        <h2 className="text-3xl">Welcome, Belland</h2>
        <p className="text-sm hover:font-bold">Apprenez votre langue maternelle autrement et explorez la culture qui l'entoure</p>
      </div>
      <div className="flex w-full justify-end mt-3">
        <div className="hidden md:flex border-none">
        <form method="GET">
    <div className="relative text-gray-600 focus-within:text-gray-400">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6 text-white"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
      <Input
            type="text"
            placeholder="search..."
            className="w-64 placeholder:pl-10 bg-green-600 text-white border-none rounded-xl shadow-xl "
          />
    </div>
  </form>
        </div>
      
        <div className="w-16 h-16">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="bg-transparent hover:bg-transparent">
                  <Image src="/images/icons8_settings_48px.png" alt="" width={32} height={32} />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-orange-400 text-white border-none shadow-xl rounded-xl">
                <p>parametres</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="w-16 h-16">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="bg-transparent hover:bg-transparent">
                  <Image src="/images/icons8_notification_64px.png" alt="" width={32} height={32}/>
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-orange-400 text-white border-none shadow-xl rounded-xl">
                <p>notification</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="flex relative justify-center justify-items-center space-x-2">
          <div>
            <Profile/>
          </div>
          <div className="hidden md:block text-white text-sm">
            <h2 className="font-bold">Princy Grace</h2>
            <p className="text-xs">Apprenant</p>
          </div>
        </div>
        <div className="w-16 h-16">
          <Button className="bg-transparent hover:bg-transparent">
            <Image src="/images/icons8_menu_vertical_48px.png" alt="" width={32} height={32}/>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
