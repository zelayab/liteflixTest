import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FILTERS_ENUM } from "@/models/constants/constants";

export const FilterDropdown = ({
  selectedFilter,
  setSelectedFilter,
}: {
  selectedFilter: string;
  setSelectedFilter: (value: string) => void;
}) => {
  const [dropOpen, setDropOpen] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full relative inline-block text-left z-10 lg:w-[300px] text-lg lg:fixed lg:right-22 lg:z-50 lg:top-[270px]"
      >
        <button
          className="flex justify-center items-center w-full gap-3 px-4 py-2 text-lg lg:shadow"
          onClick={() => setDropOpen(!dropOpen)}
          style={{
            boxShadow: dropOpen ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
          }}
        >
          Ver: <b className="text-tertiary">{selectedFilter}</b>
          <Image
            src="/icons/arrow.svg"
            alt="select category"
            width={14}
            height={14}
            className={dropOpen ? "transform rotate-180" : "transform rotate-0"}
          />
        </button>
        <AnimatePresence>
          {dropOpen && (
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col w-full absolute shadow-lg shadow-gray-900 top-12 right-0 bg-secondary z-10"
            >
              <button
                className={`flex items-center justify-between py-4 px-6 ${
                  selectedFilter === FILTERS_ENUM.POPULAR_MOVIES
                    ? "bg-tertiary text-black"
                    : "bg-secondary"
                }`}
                onClick={() => {
                  setSelectedFilter(FILTERS_ENUM.POPULAR_MOVIES);
                  setDropOpen(false);
                }}
              >
                {FILTERS_ENUM.POPULAR_MOVIES}
                {selectedFilter === FILTERS_ENUM.POPULAR_MOVIES && (
                  <Image
                    src="/icons/check.svg"
                    alt="choosen filter"
                    width={20}
                    height={20}
                    className="w-auto h-auto  text-tertiary "
                  />
                )}
              </button>
              <button
                className={`flex items-center justify-between py-4 px-6 ${
                  selectedFilter === FILTERS_ENUM.MY_MOVIES
                    ? "bg-tertiary text-black"
                    : "bg-secondary"
                }`}
                onClick={() => {
                  setSelectedFilter(FILTERS_ENUM.MY_MOVIES);
                  setDropOpen(false);
                }}
              >
                {FILTERS_ENUM.MY_MOVIES}
                {selectedFilter === FILTERS_ENUM.MY_MOVIES && (
                  <Image
                    src="/icons/check.svg"
                    alt="choosen filter"
                    width={20}
                    height={20}
                    className="w-auto h-auto text-black"
                  />
                )}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};
