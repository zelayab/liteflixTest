"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import { NavItemKey, NavItem } from "@/models/interfaces/navbar";

export const NavItems: Record<NavItemKey, NavItem> = {
  [NavItemKey.HOME]: { label: "Inicio", href: "/" },
  [NavItemKey.SERIES]: { label: "Series", href: "/" },
  [NavItemKey.MOVIES]: { label: "Peliculas", href: "/" },
  [NavItemKey.RECENTLY_ADDED]: { label: "Agregadas Recientemente", href: "/" },
  [NavItemKey.POPULAR]: { label: "Populares", href: "/" },
  [NavItemKey.MY_MOVIES]: { label: "Mis Peliculas", href: "/" },
  [NavItemKey.MY_LIST]: { label: "Mi Lista", href: "/" },
  [NavItemKey.ADD_MOVIE]: {
    label: "Agregar Pelicula",
    href: "/",
    modalNav: true,
  },
  [NavItemKey.LOG_OUT]: { label: "Cerrar Sesión", href: "/" },
};

export const Menu: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  /**
   *  Function to close the menu when clicking outside
   * @param e
   * @returns
   */
  const clickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShowMenu(false);
    }
  };

  return (
    <>
      <button
        className="flex items-center gap-3"
        onClick={() => setShowMenu(true)}
      >
        {children}
      </button>
      <AnimatePresence>
        {showMenu && (
          <div
            className="h-full w-full fixed overflow-y-hidden overflow-x-hidden inset-0 z-50 bg-gray-900/70 lg:overflow-y-auto"
            onClick={clickOutside}
          >
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 2 }}
              exit={{ x: 60, opacity: 0 }}
              transition={{ ease: "easeInOut" }}
              className={`h-full p-6 bg-secondary lg:w-[35%] lg:absolute lg:py-6 lg:px-12 lg:right-0 `}
            >
              <header className="flex justify-between w-full gap-10">
                <Image
                  src="/icons/plus.svg"
                  alt="Close Menu"
                  width={30}
                  height={30}
                  className="cursor-pointer rotate-45 transition-transform ease-in-out hover:scale-125"
                  onClick={() => setShowMenu(false)}
                />
                <div className="flex justify-center w-full lg:justify-end">
                  <button className="hidden lg:flex">
                    <Image
                      src="/icons/notification.svg"
                      alt="notification icon"
                      width={24}
                      height={24}
                      className="self-center transition-transform ease-in-out hover:scale-125"
                    />
                  </button>
                  <Image
                    src="/icons/logo.svg"
                    alt="Liteflix"
                    width={98}
                    height={28}
                    className="self-center lg:hidden"
                  />
                </div>
                <button>
                  <Image
                    src="/icons/avatar.svg"
                    alt="Profile"
                    width={45}
                    height={45}
                    className="transition-transform ease-in-out hover:scale-125"
                  />
                </button>
              </header>
              <nav
                className="py-14 px-1"
                /* hacemos una funcion que si clickeo afuera, se cierra el menu */
              >
                <ul className="flex flex-col gap-7 text-left text-lg">
                  {Object.values(NavItems).map((obj, index) => (
                    <motion.li
                      key={obj.label}
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, ease: "easeIn" }}
                    >
                      {obj.modalNav ? (
                        <Modal onClose={() => setShowMenu(false)}>
                          <Image
                            src="/icons/plus.svg"
                            alt="add movie"
                            width={14}
                            height={14}
                            className="w-auto h-auto"
                          />
                          <span
                            className={
                              obj.modalNav
                                ? "w-auto h-auto leading-5 font-bold hover:text-tertiary focus:outline-none"
                                : "w-auto h-auto"
                            }
                          >
                            AGREGAR PELICULA
                          </span>
                        </Modal>
                      ) : (
                        <p className="relative group">
                          <Link
                            href={obj.href}
                            className="leading-5 font-bold hover:text-tertiary focus:outline-none"
                          >
                            {obj.label}
                          </Link>
                          <span
                            className="w-0 h-1 absolute -bottom-1 left-0 rounded-full bg-tertiary
                              group-hover:w-80 group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out
                            "
                          ></span>
                        </p>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
