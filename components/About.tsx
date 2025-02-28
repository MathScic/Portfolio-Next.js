import Link from "next/link";

export default function About() {
  return (
    <div className="">
      <p className="text-2xl pt-4 pb-4">
        Passionné par le développement et la création web. <br />
        Je tente de donné vie a vos projets.
      </p>
      <div className="space-x-4 mt-4">
        <button className="text-1xl rounded-full bg-[#ff7a29] text-white px-6 py-3 transition duration-300 hover:bg-[#ff944d] cursor-pointer">
          <Link href="/about">A propos de moi</Link>
        </button>
        <button className="text-1xl rounded-full bg-[#333] text-white px-6 py-3 transition duration-300 hover:bg-[#444] cursor-pointer">
          <Link href="/about">Je ne sais pas</Link>
        </button>
      </div>
    </div>
  );
}
