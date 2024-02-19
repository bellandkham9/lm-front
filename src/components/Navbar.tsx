import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import MobileSidebar from "@/components/mobile-sidebar";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { LayoutDashboard, Library } from "lucide-react";
const settinsData = {
  label: "Dashboard",
  icon: LayoutDashboard,
  href: "/dashboard",
  color: "text-sky-500",
};
const alertData = {
  label: "Mes cours",
  icon: Library,
  href: "/cours",
  color: "text-sky-500",
};
const Navbar = async () => {
  return (
    <div className="flex shadow-lg items-center p-4 bg-green-400">
      <MobileSidebar />
      <div className="hidden md:block justify-start text-white">
        <h2 className="text-3xl">Welcome, Belland</h2>
        <h5 className="w-96">Apprenez votre langue maternelle autrement</h5>
      </div>
      <div className="flex w-full justify-end mt-3">
        <div className="hidden md:flex border-none">
          <Input
            type="text"
            placeholder="search..."
            className="w-64 bg-green-600 text-white border-none rounded-xl shadow-xl "
          />
        </div>
        <div className="w-16 h-16">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="bg-transparent hover:bg-transparent">
                  <Image src="/images/icons8_settings_48px.png" alt="" />
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
                  <Image src="/images/icons8_notification_64px.png" alt="" />
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
            <Button>
              <Avatar>
                <AvatarImage src="/images/userProfile.png" alt="@shadcn" />
                <AvatarFallback>BK</AvatarFallback>
              </Avatar>
            </Button>
          </div>
          <div className="hidden md:block text-white text-sm">
            <h2 className="font-bold">Princy Grace</h2>
            <p className="text-xs">Apprenant</p>
          </div>
        </div>
        <div className="w-16 h-16">
          <Button className="bg-transparent hover:bg-transparent">
            <Image src="/images/icons8_menu_vertical_48px.png" alt="" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
