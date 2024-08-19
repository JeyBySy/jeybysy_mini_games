import Games from "@/components/Games/page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className='text-sky-50 self-center my-10 text-2xl'>JeyBySy Mini Games</div>
      <section>
        <Games />
      </section>
    </main>
  );
}
