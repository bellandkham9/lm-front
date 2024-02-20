"use client"

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const page = () => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-52 md:flex-col md:fixed md:inset-y-0 z-[80]">
        <Sidebar />
      </div>
      <main className="md:pl-52">
        <Navbar />
        <div className="">
          <div className="relative">
            <div className="absolute -z-40 inset-0 opacity-80">
              <div className="flex relative pl-36 justify-center justify-items-center">
                <Image
                  src="/images/africa_illustration.svg"
                  alt="background image"
                  width={750}
                  height={750}
                ></Image>
              </div>
            </div>

            <div className=" grid grid-cols-12 gap-4 pr-6 pl-6 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
              <div className="col-span-12 rounded-sm  px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-9">
                <div className="conatiner-fluid space-x-2">
                  <div className="flex space-x-2 justify-items-center">
                    <div className="w-3 h-3 bg-blue-400 mt-1"></div>
                    <div className="text-sm font-medium">Dictionnaire</div>
                    <div className="relative w-2/4 h-1 mt-2 bg-green-400"></div>
                  </div>
                </div>
                <div className="grid grid-cols-1 mt-2 gap-4 md:grid-cols-1 md:gap-6 xl:grid-cols-1 2xl:gap-7.5">
                  <div className="flex justify-items-center justify-center mt-4 space-x-3">
                    <Input
                      type="text"
                      placeholder="rechercher un mot"
                      className="w-80 bg-white text-gray-600 placeholder:text-gray-400 border-none rounded-3xl shadow-xl "
                    />
                    <Button className="bg-gray-400 shadow-slate-400 hover:bg-gray-400 rounded-full">
                      <Image
                        src="/images/search_96px.png"
                        alt=""
                        width={12}
                        height={12}
                      ></Image>
                    </Button>
                  </div>
                  <div
                    id="main-container"
                    className="shadow-md rounded-md  gap-1"
                  >
                    <div className="flex justify-end justify-items-end border-none bg-transparent">
                      <Button className="flex bg-orange-400 space-x-2 w-1/5 p-2 justify-items-center shadow-lg hover:bg-orange-400 no-underline text-white  rounded-t-3xl">
                        <Image
                          src="/images/icons8-add-shopping-cart-30.png"
                          alt=""
                          width={28}
                          height={28}
                        ></Image>
                        <h4 className="flex text-white text-xs pt-1">
                          Panier de mots <span>(59)</span>
                        </h4>
                      </Button>
                    </div>
                    <div className="flex items-center justify-center flex-wrap md:flex-nowrap">
                      <Button className="text-xs rounded-tl-2xl md:rounded-tl-2xl text-green-400 hover:text-xl bg-gray-100 p-1 md:w-1/5">
                        A
                      </Button>
                      <Button className="text-xs text-green-400 md:text-green-400 hover:text-xl bg-gray-100 p-1 md:w-1/5">
                        B
                      </Button>
                      <Button className=" text-xs text-green-400 md:text-green-400 hover:text-xl bg-gray-100 p-1 md:w-1/5">
                        C
                      </Button>
                      <Button className=" text-xs text-green-400 md:text-green-400 hover:text-xl bg-gray-100 p-1 md:w-1/5">
                        D
                      </Button>
                      <Button className=" text-xs text-green-400 md:text-green-400 hover:text-xl bg-gray-100 p-1 md:w-1/5">
                        E
                      </Button>
                      <Button className=" text-xs text-green-400 md:text-green-400 hover:text-xl bg-gray-100 p-1 md:w-1/5">
                        F
                      </Button>
                      <Button className=" text-xs text-green-400 md:text-green-400 hover:text-xl bg-gray-100 p-1 md:w-1/5">
                        G
                      </Button>
                      <Button className=" text-xs text-green-400 md:text-green-400 hover:text-xl bg-gray-100 p-1 md:w-1/5">
                        H
                      </Button>
                      <Button className=" text-xs text-green-400 md:text-green-400 hover:text-xl bg-gray-100 p-1 md:w-1/5">
                        I
                      </Button>
                      <Button className=" text-xs text-green-400 md:text-green-400 hover:text-xl bg-gray-100 p-0 md:w-1/5">
                        J
                      </Button>
                      <Button className=" text-xs text-green-400 md:text-green-400 hover:text-xl bg-gray-100 p-1 md:w-1/5">
                        K
                      </Button>
                      <Button className="text-xs text-green-400 md:text-green-400 hover:text-xl bg-gray-100 p-0 md:w-1/5">
                        L
                      </Button>
                      <Button className="text-xs text-green-400 md:text-green-400  hover:text-xl bg-gray-100 p-1 md:w-1/5">
                        M
                      </Button>
                      <Button className="text-xs text-green-400 md:text-green-400  hover:text-xl bg-gray-100 p-0 md:w-1/5">
                        N
                      </Button>
                      <Button className="text-xs text-green-400 md:text-green-400  hover:text-xl bg-gray-100 p-1 md:w-1/5">
                        O
                      </Button>
                      <Button className="text-xs text-green-400 md:text-green-400  hover:text-xl bg-gray-100 p-1 md:w-1/5">
                        P
                      </Button>
                      <Button className="text-xs text-green-400 md:text-green-400  hover:text-xl bg-gray-100 p-1 md:w-1/5">
                        Q
                      </Button>
                      <Button className="text-xs text-green-400 md:text-green-400  hover:text-xl bg-gray-100 p-1 md:w-1/5">
                        R
                      </Button>
                      <Button className="text-xs text-green-400 md:text-green-400  hover:text-xl bg-gray-100 p-1 md:w-1/5">
                        S
                      </Button>
                      <Button className="text-xs text-green-400 md:text-green-400  hover:text-xl bg-gray-100 p-1 md:w-1/5">
                        T
                      </Button>
                      <Button className="text-xs text-green-400 md:text-green-400  hover:text-xl bg-gray-100 p-1 md:w-1/5">
                        U
                      </Button>
                      <Button className="text-xs text-green-400 md:text-green-400  hover:text-xl bg-gray-100 p-1 md:w-1/5">
                        V
                      </Button>
                      <Button className="text-xs text-green-400 md:text-green-400  hover:text-xl bg-gray-100 p-1 md:w-1/5">
                        W
                      </Button>
                      <Button className="text-xs text-green-400 md:text-green-400  hover:text-xl bg-gray-100 p-1 md:w-1/5">
                        X
                      </Button>
                      <Button className="text-xs text-green-400 md:text-green-400  hover:text-xl bg-gray-100 p-1 md:w-1/5">
                        Y
                      </Button>
                      <Button className="text-xs rounded-tr-2xl text-green-400 md:text-green-400   hover:text-xl bg-gray-100 p-1 rmd:w-1/5">
                        Z
                      </Button>
                    </div>
                    <div className="container bg-white mx-auto pr-14 pl-14 flex flex-col sm:flex-row">
                      <div className="w-full sm:w-full pr-2 sm:pr-4">
                        <div className="flex justify-between space-x-56">
                          <div className="flex mt-3 bg-white">
                            <Button className="mr-2 p-0">
                              <Image
                                src="/images/icons8-volume-16.png"
                                alt=""
                                width={16}
                                height={16}
                              ></Image>
                            </Button>

                            <Dialog>
                              <DialogTrigger asChild>
                                <Button className="flex text-start mt-2">
                                  <h2 className="font-bold">
                                    <h1>Malamu</h1>
                                    <p className="hidden sm:block text-gray-400 mb-4 text-xs">
                                      Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit. Et ab veniam ad.
                                    </p>
                                  </h2>
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="bg-white rounded-xl sm:max-w-[800px] md:max-w-[600px]">
                                <DialogHeader>
                                  <DialogDescription>
                                    <div className=" grid grid-cols-12 space-y-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                                      <div className="col-span-12 rounded-sm  shadow-default dark:border-strokedark dark:bg-boxdark sm:xl:col-span-9">
                                        <div className="">
                                          <h1 className="text-2xl font-bold">
                                            Malamu
                                          </h1>
                                        </div>
                                        <div className="flex space-x-3">
                                          <div>
                                            <Button className="bg-orange-400 text-white hover:bg-orange-400 rounded-lg">
                                              <Image
                                                src="/images/icons8-volume-16.png"
                                                alt=""
                                                width={24}
                                                height={24}
                                              ></Image>
                                              <p className="text-xs">
                                                Audio de prononciation
                                              </p>
                                            </Button>
                                          </div>
                                          <div>
                                            <Button className="bg-blue-400 text-white hover:bg-blue-400 rounded-lg">
                                              <Image
                                                src="/images/icons8-volume-16.png"
                                                alt=""
                                                width={24}
                                                height={24}
                                              ></Image>
                                              <p className="text-xs">
                                                TRADUIRE EN UNE AUTRE LANGUE
                                              </p>
                                            </Button>
                                          </div>
                                        </div>
                                        <div className="text-start mt-3">
                                          <h2 className="text-gray-800 font-medium">
                                            DESCRIPTION DU MOT
                                          </h2>
                                          <p className="text-gray-400">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Eum
                                            nam quo quod totam corrupti
                                            accusantium amet!
                                          </p>
                                        </div>
                                        <div className="text-start mt-3">
                                          <h2 className="text-gray-800 font-medium">
                                            EXEMPLE CONTEXTUEL
                                          </h2>
                                          <p className="text-gray-400">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Eum
                                            nam quo quod totam corrupti
                                            accusantium amet!
                                          </p>
                                        </div>
                                        <div className="mt-3">
                                          <Button className="bg-orange-400 text-white hover:bg-orange-400 rounded-lg">
                                            <Image
                                              src="/images/icons8-volume-16.png"
                                              alt=""
                                              width={24}
                                              height={24}
                                            ></Image>
                                            <p className="text-xs">
                                              Audio de prononciation
                                            </p>
                                          </Button>
                                        </div>
                                      </div>
                                      <div className="col-span-12 pt-16 rounded-sm bg-white p-7.5  dark:border-strokedark dark:bg-boxdark xl:col-span-3">
                                        <Image
                                          src="/images/word-img.jpg"
                                          alt=""
                                          width={850}
                                          height={850}
                                        ></Image>
                                        <p>Illustration du mot</p>
                                      </div>
                                    </div>
                                  </DialogDescription>
                                </DialogHeader>

                                <DialogFooter className="sm:justify-center">
                                  <DialogClose asChild>
                                    <Button
                                      type="button"
                                      variant="secondary"
                                      className="bg-red-700 font-bold text-white rounded-xl hover:bg-red-70"
                                    >
                                      FERMER
                                    </Button>
                                  </DialogClose>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          </div>
                          <div className="flex">
                            <Button className="mb-2">
                              <Image
                                src="/images/icons8_heart_32px.png"
                                alt=""
                                width={16}
                                height={16}
                              ></Image>
                            </Button>
                          </div>
                        </div>
                        <div className="flex justify-between space-x-56">
                          <div className="flex mt-3 bg-white">
                            <Button className="mr-2 p-0">
                              <Image
                                src="/images/icons8-volume-16.png"
                                alt=""
                                width={16}
                                height={16}
                              ></Image>
                            </Button>
                            <Button className="flex text-start mt-2">
                              <h2 className="font-bold">
                                <h1>Malamu</h1>
                                <p className="hidden sm:block text-gray-400 mb-4 text-xs">
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Et ab veniam ad.
                                </p>
                              </h2>
                            </Button>
                          </div>
                          <div className="flex">
                            <Button className="mb-2">
                              <Image
                                src="/images/icons8_heart_32px.png"
                                alt=""
                                width={16}
                                height={16}
                              ></Image>
                            </Button>
                          </div>
                        </div>
                        <div className="flex justify-between space-x-56">
                          <div className="flex mt-3">
                            <Button className="mr-2 p-0">
                              <Image
                                src="/images/icons8-volume-16.png"
                                alt=""
                                width={16}
                                height={16}
                              ></Image>
                            </Button>
                            <Button className="flex text-start mt-2">
                              <h2 className="font-bold">
                                <h1>Malamu</h1>
                                <p className="hidden sm:block text-gray-400 mb-4 text-xs">
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Et ab veniam ad.
                                </p>
                              </h2>
                            </Button>
                          </div>
                          <div className="flex">
                            <Button className="mb-2">
                              <Image
                                src="/images/heart_60px.png"
                                alt=""
                                width={16}
                                height={16}
                              ></Image>
                            </Button>
                          </div>
                        </div>
                        <div className="flex justify-between space-x-56">
                          <div className="flex mt-3">
                            <Button className="mr-2 p-0">
                              <Image
                                src="/images/icons8-volume-16.png"
                                alt=""
                                width={16}
                                height={16}
                              ></Image>
                            </Button>
                            <Button className="flex text-start mt-2">
                              <h2 className="font-bold">
                                <h1>Malamu</h1>
                                <p className="hidden sm:block text-gray-400 mb-4 text-xs">
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Et ab veniam ad.
                                </p>
                              </h2>
                            </Button>
                          </div>
                          <div className="flex">
                            <Button className="mb-2">
                              <Image
                                src="/images/icons8_heart_32px.png"
                                alt=""
                                width={16}
                                height={16}
                              ></Image>
                            </Button>
                          </div>
                        </div>
                        <div className="flex justify-between space-x-56">
                          <div className="flex mt-3">
                            <Button className="mr-2 p-0">
                              <Image
                                src="/images/icons8-volume-16.png"
                                alt=""
                                width={16}
                                height={16}
                              ></Image>
                            </Button>
                            <Button className="flex text-start mt-2">
                              <h2 className="font-bold">
                                <h1>Malamu</h1>
                                <p className="hidden sm:block text-gray-400 mb-4 text-xs">
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Et ab veniam ad.
                                </p>
                              </h2>
                            </Button>
                          </div>
                          <div className="flex">
                            <Button className="mb-2">
                              <Image
                                src="/images/heart_60px.png"
                                alt=""
                                width={16}
                                height={16}
                              ></Image>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="pagination" className="p-6 bg-white">
                      <Pagination>
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious href="#" />
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink
                              href="#"
                              isActive
                              className="border-orange-400"
                            >
                              2
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationEllipsis />
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationNext href="#" />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 rounded-sm bg-white p-8  dark:border-strokedark dark:bg-boxdark xl:col-span-3">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-2 xl:grid-cols-1 2xl:gap-2">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="flex justify-between p-2 justify-items-center shadow-lg hover:no-underline text-white bg-orange-400 rounded-t-3xl">
                        <h3 className="flex text-white text-xs pl-14">
                          Ma progression
                        </h3>
                      </AccordionTrigger>
                      <AccordionContent className="w-full ">
                        <div className="flex items-center text-white">
                          <div className="w-full bg-white border rounded-b-xl shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-2">
                              <div className="flex justify-between">
                                <p className="mb-2 p-1 text-xs font-bold tracking-tight text-gray-900">
                                  Progression dans les leçons
                                </p>

                                <button type="button" className="">
                                  <Image
                                    src="/images/Groupe 31.png"
                                    alt=""
                                    width={28}
                                    height={28}
                                  />
                                </button>
                              </div>
                              <div className="pr-5 pl-5 mt-4 h-32 overflow-auto">
                                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                                  <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 w-20"></div>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                                  <div className="bg-green-400 h-1.5 rounded-full dark:bg-blue-500 w-40"></div>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                                  <div className="bg-red-400 h-1.5 rounded-full dark:bg-blue-500 w-50"></div>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                                  <div className="bg-yellow-400 h-1.5 rounded-full dark:bg-blue-500 w-20"></div>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                                  <div className="bg-green-400 h-1.5 rounded-full dark:bg-blue-500 w-40"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="flex justify-between p-2 justify-items-center shadow-lg hover:no-underline text-white bg-orange-400 rounded-t-3xl">
                        <h3 className="flex text-white text-xs pl-5 pr-5">
                          Statistiques d'apprentissage
                        </h3>
                      </AccordionTrigger>
                      <AccordionContent className="w-full ">
                        <div className="flex items-center">
                          <div className="w-full rounded-b-xl bg-white border shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-5">
                              <div className="mb-3 rounded-b-3xl">
                                <div className="space-y-3 text-xs">
                                  <p className="flex font-bold">
                                    Point d'expérience (xp) et niveau
                                  </p>
                                  <p className="flex space-x-1">
                                    <span>
                                      <Image
                                        src="/images/icons8_rating_96px.png"
                                        alt=""
                                        width={20}
                                        height={20}
                                      ></Image>
                                    </span>
                                    <span>
                                      200 xp-- <span>Niveau introductif</span>
                                    </span>
                                  </p>
                                  <p className="flex font-bold">
                                    Temps d'apprentissage total
                                  </p>
                                  <p className="flex space-x-1">
                                    <span>
                                      <Image
                                        src="/images/icons8_pocket_watch_96px_1.png"
                                        alt=""
                                        width={20}
                                        height={20}
                                      ></Image>
                                    </span>
                                    <span>
                                      <span>233</span> <span>heures</span>
                                    </span>
                                  </p>
                                </div>
                                <div className="flex justify-items-center justify-center mt-3">
                                  <Button className="bg-blue-400 pr-6 pl-6 text-white rounded-xl shadow-md hover:bg-orange-400 justify-center">
                                    <p>EN SAVOIR +</p>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between pr-5 pl-5">
            <Button className="bg-orange-400 p-5 text-white rounded-xl shadow-md hover:bg-orange-400">
              <p>Poursuivre une leçons</p>
            </Button>

            <div className="mr-36">
              <div className="flex">chat</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
