import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { googleLogout } from "@react-oauth/google";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { FcSettings } from "react-icons/fc";

const Profile = () => {
  return (
    
    <Popover>
      <PopoverTrigger asChild>
        <Button>
          <Avatar>
            <AvatarImage width={50} height={50} src="/images/userProfile.png" alt="@shadcn" />
            <AvatarFallback>BK</AvatarFallback>
          </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-52  bg-white rounded-xl">
        <div className="grid gap-4">
          <div className="space-y-2 hover:bg-gray-200">
            <Link href={"/"}>
                <Button>
                        Profile
                </Button>
            </Link>
            
          </div>
          <div className="space-y-2 hover:bg-gray-200">
            
            <Link href={"/"}>
                <Button>
                       <FcSettings width={42} height={42} className="pt-1 "/>
                        manage profile
                </Button>
            </Link>
            
          </div>
          <div className="space-y-2 hover:bg-gray-200">
            
            <Link href="">
                <Button  className="pt-1 " onClick={googleLogout}>
                        Logout
                </Button>
            </Link>
          </div>
          
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Profile;
