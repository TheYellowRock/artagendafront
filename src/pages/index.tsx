import Image from "next/image";
import { Inter } from "next/font/google";
import UnderConstruction from "@/components/UnderConstruction";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <UnderConstruction />
    </main>
      
  );
}
