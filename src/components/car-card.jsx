function CarCard({ name, img }) {
    return (
      <div
        className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-xl bg-cover bg-center flex items-center justify-center relative shadow-lg"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
        <h3 className="relative z-10 text-white text-2xl md:text-3xl font-bold">{name}</h3>
      </div>
    );
  }
  
  export default CarCard;
  