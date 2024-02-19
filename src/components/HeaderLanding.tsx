"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { LayoutDashboard, UserIcon, UserPlus } from "lucide-react";


const route = {
  label: "Se connecter",
  icon: UserPlus,
  href: "/sign-in",
  color: "text-white",
};

const HeaderLanding = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
  ];

  return (
    <>
      {/* <div className="hidden sm:flex justify-items-end justify-end relative">
        <div className="relative flex w-4/5 h-2 bg-green-400"></div>
      </div> */}
      <div className="flex justify-between bg-scrol  w-full h-20  text-white shadow-lg fixed  nav">
        <div>
          {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
          <h1 className="text-5xl font-signature ml-2">
            <a
              className="link-underline link-underline-black"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <div className="relative w-32 h-16 m-4 justify-items-center ">
                <Image fill alt="logo" src="/images/logo_lm.png"></Image>
              </div>
            </a>
          </h1>
        </div>

        <ul className="hidden md:flex justify-end mt-4">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-green-400 duration-200 link-underline"
            >
              <Link href={link}>{link}</Link>
            </li>
          ))}
          <li>
            <div className="justify-end w-full flex">
              <Link href={"sign-in"}>
                <button
                  type="submit"
                  className="flex justify-end  bg-green-600 px-3 mr-4 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <route.icon
                    className={cn(
                      "h-5 w-5 mr-3  flex justify-end",
                      route.color
                    )}
                  />
                  Se connecter
                </button>
              </Link>
            </div>
          </li>
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link onClick={() => setNav(!nav)} href={link}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
      <div className="absolute -z-10 inset-0 opacity-65">
          <Image
            src="/images/africa_illustration.svg"
            alt="background image"
            fill
          />
        </div>
        <div className="p-40">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam debitis beatae vitae.</p>
        </div>
      </div>
    </>
  );
};

export default HeaderLanding;
