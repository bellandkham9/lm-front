// Supprimez l'importation 'use client'; car cela pourrait être la cause de l'erreur
"use client"
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import InputFile from "@/components/chooseFile";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { fetchTranslation } from "@/lib/fetchTranslation";

const Page = () => {
  const [sourceLang, setSourceLang] = useState("");
  const [targetLang, setTargetLang] = useState("");
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslate = () => {
    fetchTranslation(sourceLang, targetLang, text)
      .then((translation) => {
        console.log("regarde un peu ici")
        setTranslatedText(translation);
      })
      .catch((error) => { 
        console.log('Erreur:', error);
      });
  };

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
                  width={600}
                  height={600}
                ></Image>
              </div>
            </div>

            <div className=" grid grid-cols-12 gap-4 pr-6 pl-6 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
              <div className=" col-span-12 rounded-sm  px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-9">
                <div className="">
                  <div className="flex justify-center justify-items-end bg-blue-400 h-10 pt-2 shadow-xl">
                    <Image
                      src="/images/language_skill_120px.png"
                      alt=""
                      width={32}
                      height={25}
                    />
                    <h2 className="text-white">LM-TRADUCTION</h2>
                  </div>
                  <div className="grid grid-col-1 mt-4 p-4 gap-4 md:grid-cols-1  md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
                    <div className="w-full">
                      <div className="flex w-fully justify-center rounded-xl shadow-sm border-none">
                        <Select
                          value={sourceLang}
                          onValueChange={(value) => setSourceLang(value)}
                        >
                          <SelectTrigger className="w-full border-gray-400 shadow-xl rounded-xl">
                            <SelectValue placeholder="Sélectionnez une langue source" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectGroup>
                              <SelectItem value="fr">Français</SelectItem>
                              <SelectItem value="en">Anglais</SelectItem>
                              <SelectItem value="es">Espagnol</SelectItem>
                              {/* Ajoutez d'autres options ici */}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <Textarea
                        className="border-gray-400 shadow-xl rounded-xl p-4 mt-3"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Entrez le texte à traduire"
                      />
                    </div>
                    <div className="w-full">
                      <div className="flex w-full justify-center rounded-xl shadow-sm border-none">
                        <Select
                          value={targetLang}
                          onValueChange={(value) => setTargetLang(value)}
                        >
                          <SelectTrigger className="w-full border-gray-400 shadow-xl rounded-xl">
                            <SelectValue placeholder="Sélectionnez une langue cible" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectGroup>
                              <SelectLabel>Langue</SelectLabel>
                              <SelectItem value="ln">Lingala</SelectItem>
                              <SelectItem value="ha">haousa</SelectItem>
                              {/* Ajoutez d'autres options ici */}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <Textarea
                        className="border-gray-400 shadow-xl rounded-xl mt-3"
                        value={translatedText}
                        readOnly
                        placeholder="Traduction apparaîtra ici"
                      />
                    </div>
                  </div>
                  <div className="flex w-full justify-center border-none">
                    <Button
                      className="bg-blue-400 text-white w-44 shadow-xl rounded-xl hover:bg-blue-400"
                      onClick={handleTranslate}
                    >
                      <p>Traduire maintenant</p>
                    </Button>
                  </div>
                </div>
                <div className="flex mt-4 p-4">
                  <div className="">
                    <Image
                      width={96}
                      height={96}
                      src="/images/pdf.png"
                      alt=""
                    ></Image>
                  </div>
                  <div className="">
                    <InputFile />
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

export default Page;
