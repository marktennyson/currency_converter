// components/FetchSpinner.js
import Image from "next/image";
import SpinnerSVG from "../public/spinner.svg"

const FetchSpinner = ({ loading }) => {
    return (
    <div className={`fixed top-0 left-0 w-full h-full flex justify-center items-center ${loading ? 'block' : 'hidden'}`}>
      <div class="relative flex justify-center items-center">
        <div class="absolute animate-spin rounded-full h-36 w-36 border-t-4 border-b-4 border-purple-500"></div>
        <div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-green-500"></div>
        <div class="absolute animate-spin rounded-full h-28 w-28 border-t-4 border-b-4 border-cyan-500"></div>
        <Image src={SpinnerSVG} width={96} height={96}  class="rounded-full h-24 w-24" alt="" />
      </div>
    </div>
    );
  };
  
  export default FetchSpinner;
  