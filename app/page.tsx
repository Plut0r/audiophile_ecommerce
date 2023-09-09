"use client";

import Hero from "@/components/hero";
import Layout from "@/components/layout";
import Image from "next/image";
import Product from "@/components/product";
import LastSection from "@/components/last-section";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function handleProductClick(slug: string) {
    if (slug === "headphones") {
      router.push("/headphones");
    } else if (slug === "speakers") {
      router.push("/speakers");
    } else {
      router.push("/earphones");
    }
  }
  return (
    <Layout>
      <main>
        <Hero handleClick={(param: string) => router.push(param)} />
        <Product handleClick={handleProductClick} />
        {/* First Category */}
        <div className="container">
          <div className="h-[37.5rem] md:h-[45rem] lg:h-[35rem] bg-[#D87D4A] rounded-[0.5rem] flex flex-col lg:flex-row gap-20 lg:gap-40 justify-center items-center overflow-hidden categoryA">
            <div className="hidden lg:flex justify-end items-end -mb-20">
              <Image
                src="/assets/home/desktop/image-speaker-zx9.png"
                alt="speaker"
                width={25.63963 * 16}
                height={30.8125 * 16}
                priority
              />
            </div>
            <div className="hidden md:block lg:hidden">
              <Image
                src={"/assets/home/tablet/image-speaker-zx9.png"}
                alt="speaker"
                width={197.21}
                height={237}
              />
            </div>
            <div className="md:hidden">
              <Image
                src={"/assets/home/mobile/image-speaker-zx9.png"}
                alt="speaker"
                width={172.25}
                height={207}
              />
            </div>
            <div className="flex flex-col justify-center items-center lg:items-start gap-6 text-center lg:text-start">
              <h3 className="text-[2.25rem] md:text-[3.5rem] font-bold leading-[2.5rem] md:leading-[3.625rem] text-white">
                ZX9 <br /> SPEAKER
              </h3>
              <p className="w-[17.5rem] md:w-[21.8125rem] text-white opacity-75 text-[0.9375rem]">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <button
                className="w-[10rem] h-[3rem] bg-black text-[0.8125rem] font-bold text-white"
                onClick={() => router.push("/zx9-speaker")}
              >
                SEE PRODUCT
              </button>
            </div>
          </div>
        </div>
        {/* Second Category */}
        <div className="container">
          <div className="h-[20rem] rounded-[0.5rem] mt-5 lg:mt-20 categoryB flex flex-col gap-8 justify-center pl-5 md:pl-14 lg:pl-24 bg-[#CDCDCD]">
            <h3 className="text-black font-bold text-[1.75rem]">ZX7 SPEAKER</h3>
            <button
              className="w-[10rem] h-[3rem] border border-black text-[0.8125rem] font-bold"
              onClick={() => router.push("/zx7-speaker")}
            >
              SEE PRODUCT
            </button>
          </div>
        </div>
        {/* Third Category */}
        <div className="container md:h-[20rem] grid md:grid-cols-2 gap-5 mt-5 lg:mt-20">
          <div className="bg-black rounded-[0.5rem] categoryC"></div>
          <div className="bg-[#F1F1F1] rounded-[0.5rem] flex flex-col gap-8 pl-10 lg:pl-32 justify-center h-[12.5rem] md:h-[20rem]">
            <h3 className="text-[1.75rem] font-bold">YX1 EARPHONES</h3>
            <button
              className="w-[10rem] h-[3rem] border border-black text-[0.8125rem] font-bold"
              onClick={() => router.push("/yx1-earphones")}
            >
              SEE PRODUCT
            </button>
          </div>
        </div>
        {/* <LastSection />
        <Footer /> */}
      </main>
    </Layout>
  );
}
