import Image from "next/image"


export const Hero = () => {
    return (
        <section className="mt-6 mb-10 grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-black dark:text-white">Ada Tech School • Promo Frida</p>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-black dark:text-white">
          Je suis Abdel Berkat
          
          <span className="block md:inline md:ml-2 bg-[linear-gradient(135deg,#6A00FF_0%,#B245FC_40%,#00A8FF_100%)] bg-clip-text text-transparent">
          Développeur Full-Stack en formation
          </span>
        </h1>
        <p className="text-sm text-black  dark:text-white">
        Je fais partie de la promo <span className="font-semibold  dark:text-white">Frida</span> d’Ada Tech School.
          Avec <span className="font-semibold text-black dark:text-white">Adaverse</span>, je rassemble les projets réalisés par mes camarades
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
    )
}