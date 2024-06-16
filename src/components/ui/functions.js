/* "use client";

import { useRouter, useSearchParams } from "next/navigation";


// get data function
import { useState, useEffect } from 'react';

interface Data {
  motsfrancais: {
    nom: string;
  };
}
async function getData(): Promise<Data[]> {
  try {
    const res = await fetch("http://127.0.0.1:3005/dictionnaire/traductions/?langue=1");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data: Data[] = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle the error in a more user-friendly way (e.g., display an error message)
    return []; // Return an empty array to prevent further errors
  }
}

export default getData; */