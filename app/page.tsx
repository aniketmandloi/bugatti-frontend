// pages/index.tsx (or Home page component)
import Navbar from "@/components/Navbar";
import BackgroundVideo from "@/components/BackgroundVideo";

export default function Home() {
  return (
    <div className="relative h-screen">
      {/* Background Video */}
      <BackgroundVideo />

      {/* Navbar */}
      <Navbar />

      {/* Large Centered Text */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-10 pt-20">
        <h1 className="text-9xl text-white text-center px-4 sm:px-0">
          THIS IS FOR <br />
          ETERNITY
        </h1>
      </div>
    </div>
  );
}
