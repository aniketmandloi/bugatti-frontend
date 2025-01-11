import { Button } from "@/components/ui/button";

interface CardProps {
  href: string;
  imageUrl: string;
  altText: string;
  title: string;
  subtitle: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({
  href,
  imageUrl,
  altText,
  title,
  subtitle,
  buttonText,
}) => {
  return (
    <a
      href={href}
      target="_self"
      className="group relative w-full overflow-clip p-3 md:p-9 transition-all duration-300 flex items-center justify-between flex-col lg:col-span-2 lg:h-[38vw] 2xl:h-[720px] col-span-full aspect-portrait"
    >
      {/* Image Background */}
      <div className="absolute inset-0 transition duration-300 group-hover:scale-105">
        <img
          src={imageUrl}
          alt={altText}
          className="h-full w-full object-cover"
          style={{ objectPosition: "50% 50%" }}
        />
        <div className="absolute inset-0 w-full h-full bg-black opacity-30"></div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col col-span-full mb-6 items-center text-center w-full gap-3 relative z-30">
        <h1 className="text-xs tracking-widest uppercase max-w-prose text-balance">
          {title}
        </h1>
        <h2 className="text-2xl xl:text-4xl max-w-[40ch] text-pretty">
          {subtitle}
        </h2>
      </div>

      {/* Button */}
      <Button
        className="mt-8 border-white bg-transparent rounded-none text-white px-8 py-4 hover:border-slate-200 hover:text-slate-200 hover:bg-transparent relative z-40"
        variant="outline"
        size="lg"
        style={{ padding: "25px 40px", letterSpacing: "1px" }}
      >
        {buttonText}
      </Button>
    </a>
  );
};

export default Card;
