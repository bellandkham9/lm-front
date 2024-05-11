import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const bodyLanding = () => {
  return (
    <div className=" grid grid-cols-12 gap-4 pr-6 pl-6 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
      <div className=" col-span-12 rounded-sm  px-5 pb-5 pt-1 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-12">
        <div className="p-10">
          <div className="grid grid-col-2  p-4 gap-4 md:grid-cols-1  md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
            <div className="w-full">
              <div className="w-full mt-14 justify-center rounded-xl shadow-sm border-none">
                <h2 className="text-3xl">Apprenez autrement votre</h2>
                <h2 className="text-xl text-green-500">
                  langue maternelle et la culture qui l'entoure
                </h2>
                <p className="text-gray-500 text-base">
                  L'amélioration de la capacité d'apprentissage d'une langue maternelle
                   via une application est indispensable pour notre société actuelle mais,
                    plus particulièrement pour les jeune africain soit pour simplement assurer 
                    la survie de ces langue, soit pour lutter contre l'acculturation de ces derniers
                     et ainsi concerver leurs identités culturelle.
                </p>
                <div className="flex space-x-3 mt-4">
                  <Link href="/sign-in">
                    <Button className="bg-white p-6 border shadow-xl">
                      <h1>COMMENCER L'AVENTURE</h1>
                    </Button>
                  </Link>
                  <Link href="/sign-in">
                    <Button className="bg-green-600  text-white p-6 border-gray-700 shadow-xl hover:bg-green-600">
                     <h1>DEVENIR EXPERT/ENSEIGNANT</h1>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="flex w-full justify-center rounded-xl shadow-sm border-none">
                <Image
                  width={750}
                  height={750}
                  src="/images/africa.png"
                  alt=""
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default bodyLanding;
