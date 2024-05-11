"use client";

import { GoogleLogin } from "@react-oauth/google";
import { sign } from "crypto";
import { jwtDecode } from "jwt-decode";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import Navigate  from "react-router-dom";
export default function Page() {
  return (
    <>
      <div className="flex justify-center">
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
        <div className="flex lg:w-1/2 justify-center py-1 mt-5 shadow-xl rounded-r-x">
          <div className="relative hidden lg:flex items-center justify-center w-1/2 rounded-l-xl shadow-lg">
            <div className="w-60 h-60 bg-gradient-to-tr from-orange-600 to-orange-300 rounded-full animate-spin "></div>
            <div className="w-full  h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg " />
          </div>
          <div className="flex min-h-full  flex-col justify-center px-6 py-12 rounded-r-xl">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="justify-end w-full flex space-x-2">
                <p className="">Je n'ai pas de Compte!</p>
                <Link href={"sign-up"}>
                  <button
                    type="submit"
                    className="flex w-auto justify-center rounded-md bg-green-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Creer un compte
                  </button>
                </Link>
              </div>
              <h2 className="mt-10 text-start text-3xl font-bold leading-9 tracking-tight text-gray-700">
                Hello! welcome back
              </h2>
              <h3 className="mt-2 text-start text-md  leading-9 tracking-tight text-gray-400">
                Login with data that entered during registration
              </h3>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-400"
                  >
                    Email address
                  </label>
                  <div className="mt-2 shadow-lg">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-lg  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 p-3 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-400"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-green-400 hover:text-blue-400"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2 shadow-lg">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-lg  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 p-3 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <Link href="/dashboard">
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-green-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-lg hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Connexion
                  </button>
                  </Link>
                </div>

                <div>
                 <button
                    type="submit"
                    className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-lg hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    <div className="flex items-center justify-center">
                    <GoogleLogin
                      onSuccess={(credentialResponse) => {
                        // Rediriger vers le tableau de bord
                         window.location.href = '/dashboard';
                        /* try {
                          const decoded = jwtDecode(
                            credentialResponse?.credential
                          );
                          console.log(decoded);
                        } catch (error) {
                          console.error("Error decoding JWT:", error);
                        } */
                      }}
                      onError={() => {
                        console.log("Login Failed");
                      }}
                    />
                  </div>
                  </button>
                </div>
              </form>

              <p className="mt-10 text-start text-sm text-gray-500">
                Don't have an account?{" "}
                <Link
                  href={"sign-up"}
                  className="font-semibold leading-6 text-green-400 hover:text-blue-400"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
     {/*  <div className="flex justify-center mt-3">
        <Image
          src="/images/people_talk.svg"
          width={520}
          height={280}
          alt={""}
        />
      </div> */}
    </>
  );
}
