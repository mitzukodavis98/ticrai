import { notFound } from "next/navigation";
import axios from "axios";

const URL = axios.create({
  baseURL: "https://vibrantperu.com/api/v2/",
  headers: {
    "x-api-key": "5a941ee8cb9c9c5fc9b879eb9129d457f38b8147",
    "Content-Type": "application/json",
  },
});

export async function getAllCarrusel() {
  try {
    return URL.get("carrusel/");
  } catch {
    return notFound();
  }
}
