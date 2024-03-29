import Footer from "@/blocks/globals/Footer";
import Header from "@/blocks/globals/Header";
import "@/styles/globals.css";
import axios from "axios";
import type { AppProps } from "next/app";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.patch["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
