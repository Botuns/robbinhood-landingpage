"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe, LeafIcon, Tally2, X } from "lucide-react";
interface MenuItemsInteface {
  name: string;
  submenu?: boolean;
  subItems?: { name: string; href: string }[];
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const iconVariants = {
    initial: {
      opacity: 0,
      rotate: -90,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      rotate: 90,
      scale: 0.5,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const mobileMenuVariants = {
    initial: {
      opacity: 0,
      height: 0,
    },
    animate: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.9,
        ease: "easeIn",
      },
    },
  };
  const menuItems: MenuItemsInteface[] = [
    {
      name: "What We Offer",
      submenu: true,
      subItems: [
        { name: "Invest", href: "#" },
        { name: "Crypto", href: "#" },
        { name: "Retirement", href: "#" },
        { name: "Options", href: "#" },
        { name: "Futures", href: "#" },
      ],
    },
    { name: "Credit Card" },
    { name: "Gold" },
    { name: "Robinhood Legend" },
    { name: "Learn" },
    { name: "Support" },
  ];

  const mobileMenuItems = [
    "Invest",
    "Crypto",
    "Retirement",
    "Options",
    "Futures",
    "Credit Card",
    "Gold",
    "Robinhood Legend",
    "Learn",
    "Support",
    "Login",
  ];

  return (
    <nav className="bg-black text-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 border-b-2 border-b-gray-300">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center ">
            <div className="flex flex-row gap-2">
              <LeafIcon className="h-8 w-8" />
              <span className="text-xl font-medium">Robinhood</span>
            </div>
            {/* <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href="#"
                    className="text-gray-300  hover:text-[#ccff00] px-3 py-2  text-sm font-medium flex items-center"
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                  </a>
                ))}
              </div>
            </div> */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuItems.map((item: MenuItemsInteface) => (
                  <NavMenuItem key={item.name} item={item} />
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-black text-white flex items-center px-3 py-2 rounded-md text-sm font-medium hover:text-[#ccff00]">
                <Globe className="mr-1 h-4 w-4" />
                US
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <button className="ml-4  rounded-full text-sm font-medium bg-black text-white border border-[#ccff00] px-8 py-3">
                Log in
              </button>
              <button className="ml-4   rounded-full text-sm font-medium bg-[#ccff00] text-black px-8 py-3 !block">
                Sign up
              </button>
            </div>
          </div>
          <button className="ml-4   rounded-full hidden text-sm font-medium bg-[#ccff00] text-black px-8 py-3 max-sm:block">
            Sign up
          </button>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-black inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white relative"
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div
                    key="close"
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute"
                  >
                    <X className="block h-10 w-10" aria-hidden="true" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute"
                  >
                    <Tally2 className="block h-10 w-10" aria-hidden="true" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            // initial={{ opacity: 0, height: 0 }}
            // animate={{ opacity: 1, height: "auto" }}
            // exit={{ opacity: 0, height: 0 }}
            initial="initial"
            animate="animate"
            className="md:hidden z-10 relative"
            variants={mobileMenuVariants}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {mobileMenuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-300  hover:text-[#ccff00] block px-3 py-2 rounded-md text-3xl font-bold"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

interface NavMenuItemProps {
  item: MenuItemsInteface;
}

const NavMenuItem = ({ item }: NavMenuItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const chevronVariants = {
    open: {
      rotate: 180,
      transition: { duration: 0.2 },
    },
    closed: {
      rotate: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <a
        href="#"
        className="text-gray-300 hover:text-[#ccff00] px-3 py-2 text-sm font-medium flex items-center"
      >
        {item.name}
        {item.submenu && (
          <motion.div
            variants={chevronVariants}
            animate={isOpen ? "open" : "closed"}
            className="ml-1"
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        )}
      </a>

      {item.submenu && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={dropdownVariants}
              className="absolute left-0 mt-0 w-48 bg-black rounded-md shadow-lg py-2"
            >
              {item.subItems &&
                item.subItems.map((subItem) => (
                  <a
                    key={subItem.name}
                    href={subItem.href}
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-[#ccff00] hover:bg-gray-900"
                  >
                    {subItem.name}
                  </a>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};
