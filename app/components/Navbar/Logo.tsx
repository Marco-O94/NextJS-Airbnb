"use client";
// Componente Image di Next.js
import Image from "next/image";
// Nuova funzione di Routing di Next.js
import { useRouter } from "next/navigation";
const Logo = () => {
  const router = useRouter();
  return (
    <Image
      alt="Logo"
      className="hidden cursor-pointer md:block"
      height="100"
      width="100"
      src="/images/logo.png"
    />
  );
};

export default Logo;
