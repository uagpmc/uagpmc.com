import "./page.css";

export default () => {
  return (
    <div>
      <section className="min-h-[50vh] flex items-center p-4 lg:pl-16 bg-[url('/glamour-skydive.jpg')] bg-cover bg-center">
        <div className="space-y-4 font-bold">
          <h1 className="text-6xl bg-black text-white p-2 uppercase">
            Unnamed Arma Group
          </h1>
          <div className="space-x-4 text-2xl">
            <a
              className="bg-[lime] text-black px-4 py-2 uppercase text-2xl"
              href="/discord"
            >
              Join Us
            </a>
            {/* <a
              className="bg-white text-black px-4 py-2 uppercase"
              href="/what-we-do"
            >
              Learn More
            </a> */}
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

      <section className="grid grid-cols-1 lg:grid-cols-3">
        {[
          {
            title: "What We Do",
            description:
              "Pioneers in the field of private security and intelligence",
            background: "/toc.jpg",
            href: "/what-we-do",
          },
          {
            title: "Who We Are",
            description:
              "A diverse team of professionals from around the world",
            background: "/global.png",
            href: "/who-we-are",
          },
          {
            title: "Where We Are",
            description:
              "Offices in every major city and remote locations worldwide",
            background: "/yeet21.png",
            href: "/where-we-are",
          },
          {
            title: "News & Events",
            description: "Stay up to date with the latest from UAG",
            background: "/newsman.png",
            href: "/news-and-events",
          },
          {
            title: "People & Careers",
            description: "Join our team of professionals and make a difference",
            background: "/yeet21.png",
            href: "/people-and-careers",
          },
          {
            title: "Equipment",
            description:
              "Bleeding-edge technology and equipment to get the job done",
            background: "/yeet21.png",
            href: "/equipment",
          },
        ].map((tile, index) => (
          <a
            href={tile.href}
            key={index}
            className="hover:transform hover:scale-105 hover:z-10"
          >
            <div
              className="bg-black bg-opacity-50 text-white aspect-square"
              style={{
                backgroundImage: `url(${tile.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="h-full w-full flex flex-col justify-center items-center">
                <div className="bg-black bg-opacity-50 space-y-2 p-2">
                  <h2 className="text-2xl font-bold">{tile.title}</h2>
                  <p className="text-4xl font-bold">{tile.description}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </section>
    </div>
  );
};
