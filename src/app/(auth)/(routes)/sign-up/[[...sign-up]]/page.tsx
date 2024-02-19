import Image from "next/image";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


export default function Page() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex lg:w-1/2 justify-center py-1 mt-5 shadow-xl rounded-r-x">
          <div className="relative hidden lg:flex items-center justify-center w-1/2 rounded-l-xl shadow-lg">
            <div className="w-60 h-60 bg-gradient-to-tr from-orange-600 to-orange-300 rounded-full animate-spin "></div>
            <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg " />
          </div>
          <div className="flex min-h-full  flex-col justify-center px-6 py-12 rounded-r-xl">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="justify-end w-full flex space-x-2">
                <p className="">J'ai déjà un Compte!</p>
                <Link href={"sign-in"}>
                  <button
                    type="submit"
                    className="flex w-auto justify-center rounded-md bg-green-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Se connecter
                  </button>
                </Link>
              </div>
              <div className="container">
                <h2 className="mt-10 text-start text-3xl font-bold leading-9 tracking-tight text-gray-700">
                  Hello! welcome!!
                </h2>
                <h3 className="mt-2 text-start text-md  leading-9 tracking-tight text-gray-400">
                  Save data that you'll enter to login
                </h3>
              </div>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div className="container space-x-6 flex justify-between">
                  <div>
                    <label
                      htmlFor="Nom"
                      className="block text-sm font-medium leading-6 text-gray-400"
                    >
                      Nom(s)
                    </label>
                    <div className="mt-2 shadow-lg">
                      <input
                        id="Nom"
                        name="Nom"
                        type="text"
                        placeholder="Nom"
                        autoComplete=""
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-lg  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 p-3 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-400"
                    >
                      Prenom(s)
                    </label>
                    <div className="mt-2 shadow-lg">
                      <input
                        id="Prenom"
                        name="Prenom"
                        type="text"
                        placeholder="Prenom"
                        autoComplete=""
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-lg  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 p-3 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="container">
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
                <div className="container space-x-6 flex justify-between">
                  <div>
                    <label
                      htmlFor="Nom"
                      className="block text-sm font-medium leading-6 text-gray-400"
                    >
                      Password
                    </label>
                    <div className="mt-2 shadow-lg">
                      <input
                        id="Password"
                        name="Password"
                        type="Password"
                        placeholder="Password"
                        autoComplete=""
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-lg  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 p-3 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-400"
                    >
                      Conf.Password
                    </label>
                    <div className="mt-2 shadow-lg">
                      <input
                        id="Password"
                        name="Password"
                        type="Password"
                        placeholder="Conf.Password"
                        autoComplete=""
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-lg  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 p-3 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="container">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-400"
                    >
                      Chois de la langue
                    </label>
                  </div>
                  <div className="relative flex mt-2 shadow-lg justify-center items-center">
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="LINGALA" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">BULU</SelectItem>
                        <SelectItem value="dark">YEMBA</SelectItem>
                        <SelectItem value="system">HAOUSSA</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="container">
                  <Link href={"sign-in"}>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-green-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-lg hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Enregistrer
                    </button>
                  </Link>
                </div>
              </form>

              <p className="mt-10 text-start text-sm text-gray-500">
                have an account?{" "}
                <Link
                  href={"sign-in"}
                  className="font-semibold leading-6 text-green-400 hover:text-blue-400"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <Image
          src="/images/people_talk.svg"
          width={520}
          height={280}
          alt={""}
        />
      </div>
    </>
  );
}
