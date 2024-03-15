import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UPLOAD_STATES } from "@/models/interfaces/modal";
import { MovieFormProps } from "@/models/interfaces/movie";
export const MovieForm = ({
  uploadState,
  progressBar,
  validForm,
  title,
  handleImageUpload,
  handleTitleChange,
  handleClose,
  handleSubmit,
}: MovieFormProps) => {
  return (
    <>
      {uploadState === UPLOAD_STATES.FORM_SUCCESS ? (
        <Image
          src="/icons/logo.svg"
          alt="logo"
          width={113}
          height={34}
          className="self-center"
        />
      ) : (
        <div className="flex justify-center items-center w-full h-24">
          <h3 className="text-2xl text-center text-primary mb-12 mt-24 lg:text-xl lg:mt-0 ">
            Agregar Película
          </h3>
        </div>
      )}
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col items-center lg:gap-2 "
      >
        {uploadState === UPLOAD_STATES.INACTIVE && (
          <label
            htmlFor="file_input"
            className="flex items-center justify-center w-full h-20 relative gap-4 mb-12 border-2 border-dashed cursor-pointer lg:h-24"
          >
            <Image
              src="/icons/clip.svg"
              alt="play movie"
              width={16}
              height={16}
              className="relative"
            />
            <p>
              <b>Agregá un archivo &nbsp;</b>
              <span className="hidden lg:inline">
                O ARRASTRALO Y SOLTALO AQUÍ
              </span>
            </p>
            <input
              id="file_input"
              type="file"
              accept="image/*"
              className="w-full h-full absolute opacity-0 cursor-pointer"
              name="file"
              placeholder="Agregá un archivo"
              onChange={(e) => handleImageUpload(e)}
            />
          </label>
        )}
        {uploadState === UPLOAD_STATES.IMAGE_UPLOAD && (
          <div className="flex flex-col w-full gap-4 mb-12">
            <p className="text-left text-sm">{`Cargando: ${progressBar}%`}</p>
            <div
              className="h-2 bg-primary"
              style={{ width: `${progressBar}%` }}
            ></div>
            <button
              type="button"
              onClick={() => handleClose()}
              className="text-right"
            >
              Cancelar
            </button>
          </div>
        )}
        {uploadState === UPLOAD_STATES.ERROR && (
          <div className="flex flex-col w-full gap-4 mb-12">
            <p className="text-left text-sm">
              Error no se pudo cargar la pelicula
            </p>
            <div
              className="h-2 bg-red-500"
              style={{ width: `${progressBar}%` }}
            ></div>
            <button
              type="button"
              className="text-right"
              onClick={() => handleClose()}
            >
              Reintentar
            </button>
          </div>
        )}
        {uploadState === UPLOAD_STATES.IMAGE_SUCCESS && (
          <div className="flex flex-col w-full gap-4 mb-12">
            <p className="text-left text-sm">100% Cargado</p>
            <div
              className="h-2 bg-primary"
              style={{ width: `${progressBar}%` }}
            ></div>
            <span className="text-right text-primary text-lg">¡Listo!</span>
          </div>
        )}
        {uploadState !== UPLOAD_STATES.FORM_SUCCESS && (
          <>
            <input
              name="title"
              id="title"
              type="text"
              placeholder="Título"
              className="text-center w-60 mb-24 border-b-2 bg-transparent lg:mb-12 focus:outline-none"
              onChange={(e) => handleTitleChange(e)}
            />
            <button
              type="submit"
              className={`text-lg text-secondary w-60 mb-6 py-3 bg-white ${
                !validForm && "opacity-40 cursor-not-allowed"
              }`}
              disabled={!validForm}
            >
              Subir Pelicula
            </button>
            <button
              type="button"
              onClick={() => handleClose()}
              className={`text-lg w-60 mb-6 border border-white/50 bg-transparent py-3 ${
                !validForm && "opacity-40 cursor-not-allowed"
              } lg:hidden`}
            >
              Salir
            </button>
          </>
        )}
        {uploadState === UPLOAD_STATES.FORM_SUCCESS && (
          <>
            <div className="flex flex-col justify-center items-center text-center h-full w-full py-24">
              <h3 className="text-2xl font-bold mb-6">¡Felicitaciones!</h3>
              <p className="text-xl">
                <span>{`${title}`} &nbsp;</span>
                fue correctamente subida.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                handleClose();
              }}
              className="text-lg text-secondary w-60 mb-6 py-3 bg-white"
            >
              <Link href="/">Ir a Home</Link>
            </button>
          </>
        )}
      </form>
    </>
  );
};
