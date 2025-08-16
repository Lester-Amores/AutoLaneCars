import image2 from "@/assets/image2.jpg";


function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center px-4 text-white bg-cover bg-center relative"
      style={{ backgroundImage: `url(${image2})` }}
    >
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-4">Drive Your Dream</h1>
        <p className="text-lg mb-6 max-w-xl">
          Explore premium cars with style, performance, and comfort all in one place.
        </p>
        <button className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg text-white font-semibold transition">
          Explore Cars
        </button>
      </div>
    </section>
  );
}

export default Hero;
