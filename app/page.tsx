"use client";

import Navbar from "@/components/Navbar";
import BackgroundVideo from "@/components/BackgroundVideo";
import { Button } from "@/components/ui/button";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="scroll-smooth">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div id="hero" className="relative h-screen">
        <BackgroundVideo />
        <div className="flex flex-col absolute top-0 left-0 right-0 bottom-0 items-center justify-center z-10 pt-20">
          <h1 className="text-9xl text-white text-center px-4 sm:px-0">
            THIS IS FOR <br />
            ETERNITY
          </h1>
          <Button
            className="mt-8 border-white bg-transparent rounded-none text-white px-8 py-4 hover:border-slate-200 hover:text-slate-200 hover:bg-transparent"
            variant="outline"
            size="lg"
            style={{ padding: "25px 40px", letterSpacing: "1px" }}
          >
            DISCOVER THE BUGATTI TOURBILLON
          </Button>
        </div>
      </div>

      {/* Latest News Section */}
      <div id="news" className="bg-black py-16">
        <h2 className="text-white text-6xl text-center mt-12">
          OUR LATEST NEWS
        </h2>
      </div>

      {/* Record-Breaking Video Section */}
      <div id="record" className="relative h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/recordBreaking.mp4"
          autoPlay
          loop
          muted
        ></video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-5"></div>

        {/* Text Content */}
        <div className="flex flex-col absolute top-0 left-0 right-0 bottom-0 items-center justify-center z-10 text-center px-4 sm:px-0">
          <h2 className="text-4xl text-white">
            A RECORD-BREAKING FORCE OF NATURE
          </h2>
          <p className="text-white text-lg mt-4">
            Setting a new benchmark at 453.91 km/h. A triumph of passion,
            precision, <br />
            and performance.
          </p>
          <Button
            className="mt-8 border-white bg-transparent rounded-none text-white px-8 py-4 hover:border-slate-200 hover:text-slate-200 hover:bg-transparent"
            variant="outline"
            size="lg"
            style={{ padding: "25px 40px", letterSpacing: "1px" }}
          >
            WATCH THE RECORD
          </Button>
        </div>
      </div>

      {/* La Maison Bugatti Section */}
      <div
        id="maison"
        className="relative bg-black text-white py-20 text-center"
      >
        <h2 className="text-5xl font-bold mt-24">LA MAISON BUGATTI</h2>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          Since 1909, the people at BUGATTI Automobiles create incomparable
          products and <br /> experiences by pushing the limits of aesthetics
          and dynamics.
        </p>
      </div>

      {/* Discover Bugatti Section */}
      <div id="discover-bugatti" className="py-16 bg-black text-white">
        <div className="gap-6 lg:gap-9 grid w-full grid-cols-6 px-6">
          <Card
            href="/en/about/discover-bugatti"
            imageUrl="/bugattiCard1.jpg"
            altText="BUGATTI Customer Gathering"
            title="Discover BUGATTI"
            subtitle="IF COMPARABLE, IT'S NOT BUGATTI"
            buttonText="Learn more about BUGATTI"
          />
          <Card
            href="/en/about/discover-bugatti"
            imageUrl="bugattiCard2.jpg"
            altText="BUGATTI Customer Gathering"
            title="HISTORIC MODELS"
            subtitle="MILESTONE IN AUTOMOTIVE HISTORY"
            buttonText="LEARN MORE ABOUT OUR HISTORIC MODELS"
          />
          <Card
            href="/en/about/discover-bugatti"
            imageUrl="bugattiCard3.jpg"
            altText="BUGATTI Customer Gathering"
            title="CAREERS"
            subtitle="WORKING AT BUGATTI"
            buttonText="LEARN MORE ABOUT OUR CAREERS"
          />
        </div>
      </div>
    </div>
  );
}
