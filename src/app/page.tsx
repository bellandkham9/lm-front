"use client";
import landPage from "./(landing)/page";

export default landPage


























































/* "use client";

import { FcGoogle } from "react-icons/fc";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";

import { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import router from "next/router";

const Login = () => {
  const [user, setUser] = useState(null); // Store user information
  return (
    <>
      <div className="flex items-center justify-center ">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          repellendus distinctio incidunt.
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            try {
              const decoded = jwtDecode(credentialResponse?.credential);
              console.log(decoded);
            } catch (error) {
              console.error("Error decoding JWT:", error);
            }
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
      <div className="flex items-center justify-center ">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            repellendus distinctio incidunt.
          </h1>
        </div>
    </>
  );
};

export default Login;
 */