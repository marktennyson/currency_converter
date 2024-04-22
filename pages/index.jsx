'use client';
import Head from "next/head";
import { Inter } from "next/font/google";
import { useUrl } from 'nextjs-current-url';

const inter = Inter({ subsets: ["latin"] });
import FxExchangeCard from "../components/screens/fxExchangeCard";

export default function Home() {
  const { pathname, href } = useUrl() ?? {};
  const endPoint = `${href}api/exchange-rates/`
  return (
    <main>
      <Head>
        <title>Forex converter -- Free</title>
        <link rel="icon" href="https://img.icons8.com/color/56/swiss-franc--v1.png" sizes="any" />
      </Head>
        <div className="max-w-2xl mt-5 w-1/2 p-4 mx-auto text-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="">
                <FxExchangeCard/>
            </div>
            <div>
              <p className="mt-2 p-0 m-0">
                <span className="font-black text-medium">API Endpoint:&nbsp;</span>
                <a className="italic text-green-400 hover:underline hover:text-blue-400" href={endPoint} target="_blank">{endPoint}</a>
              </p>
            </div>
        </div>
    </main>
  );
}
