import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import FxExchangeCard from "../components/screens/fxExchangeCard";

export default function Home() {
  return (
    <main>
        <div href="#" className="max-w-2xl mt-5 w-1/2 p-4 mx-auto text-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="">
                <FxExchangeCard/>
            </div>
        </div>
    </main>
  );
}
