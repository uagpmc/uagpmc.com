import Navigation from "@/components/Navigation";

import "./page.css";

export default function Home() {
  return (
    <>
      <Navigation />

      <section className="min-h-[50vh] flex items-center p-4 lg:pl-16 bg-[url('/glamour-skydive.jpg')] bg-cover bg-center">
        <div className="space-y-4 font-bold">
          <h1 className="text-4xl bg-black text-white p-2 uppercase">
            Unnamed Arma Group
          </h1>
          <div className="space-x-4">
            <a
              className="bg-[lime] text-black px-4 py-2 uppercase"
              href="/discord"
            >
              Join Us
            </a>
            <a className="bg-white text-black px-4 py-2 uppercase">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white p-8 py-16 text-2xl">
        <p className="text-center font-bold">
          Providing peace of mind to the world's most elite shadow cabals since
          2016 by offering the best in private security, intelligence, and
          logistics services.
        </p>
      </section>
    </>
  );
}
