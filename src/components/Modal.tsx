"use client";
import {
  ModalProps,
  MovieFile,
  UPLOAD_STATES,
} from "@/models/interfaces/modal";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MovieForm } from "./MovieForm";
import { useMovies } from "@/store/movies";
import { addMovie, getMyMovies } from "@/api/api";

export default function Modal({ children }: ModalProps) {
  const [showModal, setShowModal] = useState(false);
  const [progressBar, setProgressBar] = useState(0);
  const [uploadState, setUploadState] = useState<string>(
    UPLOAD_STATES.INACTIVE
  );
  const [image, setImage] = useState<MovieFile | null>(null);
  const [title, setTitle] = useState<string>("");
  const [myMovies, setMyMovies] = useState([]);

  const [validForm, setValidForm] = useState<boolean>(false);

  /**
   * @description Validates the form
   * @returns {void}
   * */
  useEffect(() => {
    setValidForm(image !== null && title.trim() !== "");
  }, [image, title]);

  /**
   * @description Handles the modal close event
   * @returns {void}
   * */

  const handleClose = () => {
    setShowModal(false);
    setProgressBar(0);
    setUploadState(UPLOAD_STATES.INACTIVE);
    setImage(null);
    setTitle("");
  };

  /**
   * @description Handles the outside click event to close the modal
   * @param {React.MouseEvent<HTMLDivElement>}
   * @returns {void}
   */
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  /**
   * @description Handles the image upload change event
   * @param {React.ChangeEvent<HTMLInputElement>}
   * @returns {void}
   * */
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] as MovieFile;

    setUploadState(UPLOAD_STATES.IMAGE_UPLOAD);

    const progressInterval = setInterval(() => {
      setProgressBar((prevProgress) => prevProgress + 1);
    }, 10);

    setTimeout(() => {
      clearInterval(progressInterval);

      if (!file?.type.startsWith("image/")) {
        setUploadState(UPLOAD_STATES.ERROR);
      } else {
        setImage(file);
        setUploadState(UPLOAD_STATES.IMAGE_SUCCESS);
      }
      setProgressBar(100);
    }, 1000);
  };

  /**
   * @description Handles the title change, hace que el título sea el valor del input
   * @param {React.ChangeEvent<HTMLInputElement>}
   * @returns {void}
   * */
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  /**
   * @description Handles the form submit
   * @param {React.FormEvent<HTMLFormElement>}
   * @returns {void}
   * */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validForm) {
      await addMovie(image, title);
      const updatedMovies = await getMyMovies();
      useMovies.setState({ myMovies: updatedMovies });
      setUploadState(UPLOAD_STATES.FORM_SUCCESS);
    }
  };

  return (
    <div>
      <button
        className="flex flex-row w-auto h-auto items-center gap-4 transition-transform ease-in-out hover:scale-125 my-10"
        onClick={() => setShowModal(true)}
      >
        {children}
      </button>
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center items-center fixed inset-0 z-20 bg-gray-900/70"
            onClick={(e) => {
              handleOutsideClick(e);
            }}
          >
            <div className="w-full h-full max-w-3xl relative mx-auto lg:min-w-[700px] lg:h-fit">
              <div className="flex flex-col w-full h-full relative bg-secondary shadow-lg p-6 lg:px-16 lg:py-12">
                <Link href={"/"}>
                  <button
                    className="hidden absolute top-4 right-4 lg:flex"
                    onClick={() => {
                      handleClose();
                      setMyMovies([]);
                    }}
                  >
                    <Image
                      src="/icons/plus.svg"
                      alt="Close Modal"
                      width={24}
                      height={24}
                      className="rotate-45"
                    />
                  </button>
                </Link>
                <MovieForm
                  uploadState={uploadState}
                  progressBar={progressBar}
                  validForm={validForm}
                  title={title}
                  handleImageUpload={handleImageUpload}
                  handleTitleChange={handleTitleChange}
                  handleClose={handleClose}
                  handleSubmit={handleSubmit}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
