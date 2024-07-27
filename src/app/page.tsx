import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-start justify-center p-24">
      <Image
        src="/Images/BG/paris-bilal-YEtLnGgmgvk-.jpg" // Replace with the path to your image
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0 opacity-50" // Adjust opacity as needed
      />
      <h1 className="z-10 text-9xl font-ledcounter7 text-center justify-start">
        spli<span className="text-purple-400">X</span>tech
      </h1>
      <p className="font-mono text-2xl  z-10 text-center mt-8">
        Akshar Patel presents iDevNow Tech, transforming the digital landscape with cutting-edge web development, AI, ML, advanced software solutions, <span className="text-green-400">exceptional UI/UX design, and 3D product design, </span>in partnership with Redmagic Studio.
      </p>
    </main>
  );
}
