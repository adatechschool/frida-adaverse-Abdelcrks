"use client";

import { EncryptedText } from "@/src/components/ui/encrypted-text";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="mt-6 mb-10 grid gap-8 md:grid-cols-2 items-center">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-black dark:text-white">
          Ada Tech School • Promo Frida
        </p>

        <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight">
          <EncryptedText
            text="Je suis Abdel"
            className="block"
            revealedClassName="text-black dark:text-white"
            encryptedClassName="text-zinc-400 dark:text-zinc-500"
            revealDelayMs={60}
            flipDelayMs={50}
          />

          <div className="block">
            <EncryptedText
              text="Berkat"
              className="inline-block mr-2"
              revealedClassName="text-black dark:text-white"
              encryptedClassName="text-zinc-400 dark:text-zinc-500"
              revealDelayMs={70}
              flipDelayMs={50}
            />
            <EncryptedText
              text="Développeur"
              className="inline-block"
              revealedClassName="bg-[linear-gradient(135deg,#6A00FF_0%,#B245FC_40%,#00A8FF_100%)] bg-clip-text text-transparent"
              encryptedClassName="text-zinc-400 dark:text-zinc-500"
              revealDelayMs={80}
              flipDelayMs={50}
            />
          </div>

          <EncryptedText
            text="Full-Stack en"
            className="block"
            revealedClassName="bg-[linear-gradient(135deg,#6A00FF_0%,#B245FC_40%,#00A8FF_100%)] bg-clip-text text-transparent"
            encryptedClassName="text-zinc-400 dark:text-zinc-500"
            revealDelayMs={90}
            flipDelayMs={30}
          />

          <div className="mt-1 flex flex-wrap items-center gap-3">
            <EncryptedText
              text="formation"
              className="inline-block"
              revealedClassName="bg-[linear-gradient(135deg,#6A00FF_0%,#B245FC_40%,#00A8FF_100%)] bg-clip-text text-transparent"
              encryptedClassName="text-zinc-400 dark:text-zinc-500"
              revealDelayMs={100}
              flipDelayMs={50}
            />

            <a
              href="https://www.linkedin.com/in/abdel-berkat"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 text-white hover:bg-blue-600 transition px-3 py-3 shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.25h4.56V24H.22V8.25zM8.34 8.25h4.37v2.14h.06c.61-1.16 2.1-2.39 4.32-2.39 4.62 0 5.47 3.04 5.47 6.99V24h-4.56v-6.79c0-1.62-.03-3.71-2.26-3.71-2.26 0-2.61 1.77-2.61 3.59V24H8.34V8.25z" />
              </svg>
            </a>

            <a
              href="https://github.com/Abdelcrks"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 text-white hover:bg-blue-600 transition px-3 py-3 shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.79 8.21 11.38.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.21.09 1.85 1.25 1.85 1.25 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.67 1.65.26 2.87.13 3.17.77.84 1.23 1.91 1.23 3.23 0 4.64-2.8 5.66-5.48 5.96.43.37.81 1.1.81 2.22v3.29c0 .33.22.71.83.59A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                />
              </svg>
            </a>
          </div>
        </h1>

        <p className="text-sm text-black dark:text-white">
          Je fais partie de la promo <span className="font-semibold">Frida</span> d’Ada Tech School.
          Avec <span className="font-semibold">Adaverse</span>, je rassemble les projets réalisés par mes camarades
          et moi-même : des applications web, des outils internes, de la dataviz et des intégrations d’API.
        </p>
      </div>

      <div className="relative">
        <div className="absolute -inset-4 bg-[radial-gradient(circle_at_top,#6A00FF_0%,transparent_100%),radial-gradient(circle_at_bottom,#00A8FF_50%,transparent_55%)] opacity-50 blur-3xl" />
        <div className="relative rounded-3xl overflow-hidden bg-zinc-900/80 border border-white/5 shadow-2xl">
          <div className="aspect-video flex items-center justify-center text-zinc-500 text-sm">
            <Image
              src="/images/hero-abdel.png"
              alt="illustration d'abdel en train de coder"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
