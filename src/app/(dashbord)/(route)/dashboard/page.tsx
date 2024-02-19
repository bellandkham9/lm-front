"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const dashboard = () => {
  return (
    <div className="">
      <div className="relative">
        <div className="absolute -z-40 inset-0 opacity-80">
          <div className="flex relative pl-36 justify-center">
            <Image
              src="/images/africa_illustration.svg"
              alt="background image"
              width={650}
              height={650}
            ></Image>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-12 gap-4 p-6 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          <div className="col-span-12 rounded-sm  px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-9">
            <div className="conatiner-fluid space-x-2">
              <div className="flex space-x-2 justify-items-center">
                <div className="w-3 h-3 bg-blue-400 mt-1"></div>
                <div className="text-sm font-medium">RUBRIQUE</div>
                <div className="relative w-2/4 h-1 mt-2 bg-green-400"></div>
              </div>
            </div>
            {/* le petit block contenant le niveau et la langue en bas du narbar */}

            {/* <div className="justify-start justify-items-start">
              <div className="w-60 flex p-3 text-xs shadow-xl bg-white rounded-2xl">
                <Image
                  src="/images/studying.png"
                  width={20}
                  height={20}
                  alt=""
                ></Image>
                <span className="p-1">LINGALA</span>
                <span className="p-1">-</span>
                <span className="text-orange-400 p-1">Niveau introductif</span>
              </div>
            </div> */}
            <div className="grid grid-cols-1 mt-2 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
              <div className="flex items-center text-white">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-1">
                    <div className="flex bg-slate-50">
                      <Image
                        alt=""
                        src="/images/communication_120px.png"
                        width={40}
                        height={40}
                      />
                      <h4 className="mb-2 p-1 text-lg font-bold tracking-tight text-gray-900">
                        Chat
                      </h4>
                    </div>
                    <p className="mb-3 text-sm p-3 justify-items-center font-normal text-justify  text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions
                    </p>
                    <div className="flex justify-items-center justify-center mb-3">
                      <Button className="bg-green-400 rounded-xl shadow-md hover:bg-orange-400 justify-center">
                        <p>viens chatter</p>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center text-white">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-1">
                    <div className="flex bg-slate-50">
                      <Image
                        alt=""
                        src="/images/video_conference_120px.png"
                        width={40}
                        height={40}
                      />
                      <h4 className="mb-2 p-1 text-lg font-bold tracking-tight text-gray-900">
                        Conférence
                      </h4>
                    </div>
                    <p className="mb-3 text-sm p-3 justify-items-center font-normal text-justify  text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions
                    </p>
                    <div className="flex justify-items-center justify-center mb-3">
                      <Button className="bg-green-400 rounded-xl shadow-md hover:bg-orange-400 justify-center">
                        <p>Participer</p>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center text-white">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-1">
                    <div className="flex bg-slate-50">
                      <Image
                        alt=""
                        src="/images/native_american_chief_120px.png"
                        width={40}
                        height={40}
                      />
                      <h4 className="mb-2 p-1 text-lg font-bold tracking-tight text-gray-900">
                        Culture
                      </h4>
                    </div>
                    <p className="mb-3 text-sm p-3 justify-items-center font-normal text-justify  text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions
                    </p>
                    <div className="flex justify-items-center justify-center mb-3">
                      <Button className="bg-green-400 rounded-xl shadow-md hover:bg-orange-400 justify-center">
                        <p>Découvrir la culture</p>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center text-white">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-1">
                    <div className="flex bg-slate-50">
                      <Image
                        alt=""
                        src="/images/dictionary_120px.png"
                        width={40}
                        height={40}
                      />
                      <h4 className="mb-2 p-1 text-lg font-bold tracking-tight text-gray-900">
                        Dictionnaire
                      </h4>
                    </div>
                    <p className="mb-3 text-sm p-3 justify-items-center font-normal text-justify  text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions
                    </p>
                    <div className="flex justify-items-center justify-center mb-3">
                      <Link href="/Dictionnaire">
                        <Button className="bg-green-400 rounded-xl shadow-md hover:bg-orange-400 justify-center">
                          <p>Découvrie les mots</p>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center text-white">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-1">
                    <div className="flex bg-slate-50">
                      <Image
                        alt=""
                        src="/images/man_reading_a_book_120px.png"
                        width={40}
                        height={40}
                      />
                      <h4 className="mb-2 p-1 text-lg font-bold tracking-tight text-gray-900">
                        Formation
                      </h4>
                    </div>
                    <p className="mb-3 text-sm p-3 justify-items-center font-normal text-justify  text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions
                    </p>
                    <div className="flex justify-items-center justify-center mb-3">
                      <Button className="bg-green-400 rounded-xl shadow-md hover:bg-orange-400 justify-center">
                        <p>Débuter sa formation</p>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center text-white">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-1">
                    <div className="flex bg-slate-50">
                      <Image
                        alt=""
                        src="/images/users_120px.png"
                        width={40}
                        height={40}
                      />
                      <h4 className="mb-2 p-1 text-lg font-bold tracking-tight text-gray-900">
                        Forum
                      </h4>
                    </div>
                    <p className="mb-3 text-sm p-3 justify-items-center font-normal text-justify  text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions
                    </p>
                    <div className="flex justify-items-center justify-center mb-3">
                      <Button className="bg-green-400 rounded-xl shadow-md hover:bg-orange-400 justify-center">
                        <p>Venez discuter</p>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center text-white">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-1">
                    <div className="flex bg-slate-50">
                      <Image
                        alt=""
                        src="/images/language_skill_120px.png"
                        width={40}
                        height={40}
                      />
                      <h4 className="mb-2 p-1 text-lg font-bold tracking-tight text-gray-900">
                        Traduction
                      </h4>
                    </div>
                    <p className="mb-3 text-sm p-3 justify-items-center font-normal text-justify  text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions
                    </p>
                    <div className="flex justify-items-center justify-center mb-3">
                      <Button className="bg-green-400 rounded-xl shadow-md hover:bg-orange-400 justify-center">
                        <p>Entrer pour traduire</p>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 rounded-sm bg-white p-8   dark:border-strokedark dark:bg-boxdark xl:col-span-3">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-2 xl:grid-cols-1 2xl:gap-2">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="flex justify-between p-2 justify-items-center shadow-lg hover:no-underline text-white bg-orange-400 rounded-t-3xl">
                    <h3 className="flex text-white pl-10">Ma progression</h3>
                  </AccordionTrigger>
                  <AccordionContent className="w-full">
                    <div className="flex items-center text-white">
                      <div className="w-full bg-white border rounded-b-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
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
                    <h3 className="flex text-white pl-10">
                      Statistiques
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="w-full">
                    <div className="flex items-center">
                      <div className="w-full bg-white border shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-1">
                          <div className="mb-3 rounded-b-3xl">
                            <div className="space-y-3">
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
      <div className="flex justify-between pl-6 pr-6">
        <Button className="bg-orange-400 p-5 text-white rounded-xl shadow-md hover:bg-orange-400">
          <p>Retour aux leçons</p>
        </Button>

        <div className="mr-36">
          <div className="flex">
            <div className="flex items-center space-x-2">
 Chat
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
