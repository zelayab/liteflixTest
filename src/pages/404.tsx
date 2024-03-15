import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });

const NotFoundPage = () => {
  return (
    <main className={`${bebasNeue.className}`}>
      <section className="flex flex-col justify-between h-full w-full max-w-7xl mx-auto pb-16 lg:py-4 lg:px-6 ">
        <section className="flex justify-center">
          <Image
            src="/icons/logo.svg"
            alt="Liteflix"
            width={98}
            height={28}
            className="w-auto h-auto "
          />
        </section>
        <section className="flex justify-center mt-40 gap-1 ">
          <h1 className="text-4xl text-white">404</h1>
          <p>
            <span className="text-4xl text-white">|</span>
            <span className="text-4xl text-white">Página no encontrada</span>
          </p>
        </section>
        <section className="flex justify-center mt-40">
          <button
            type="button"
            className="text-lg font-bold text-secondary w-60 mb-6 py-3 bg-primary leading-6 "
          >
            <Link href={"/"}>IR A HOME</Link>
          </button>
        </section>
      </section>
    </main>
  );
};

export default NotFoundPage;
