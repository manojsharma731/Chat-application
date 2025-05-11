 "use client";
// import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
// const user=useUser()
// console.log("User id is",user.user?.id)
  return (
    <nav className="bg-gray-600 text-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Chat-app
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/forums" className="hover:underline">Forum</Link></li>
          <li><Link href="/chat" className="hover:underline">UserChat</Link></li>
          <li><UserButton/></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center mt-4 space-y-4">
          <li><Link href="/" className="hover:underline" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/about" className="hover:underline" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link href="/contact" className="hover:underline" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li><UserButton/></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;