function Features() {
  return (
    <section id="features" className="bg-gray-100 px-6 py-16 flex items-center justify-center">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Discover <span className="text-red-500">Premium Benefits</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Elevate your driving experience with exclusive features designed for luxury and convenience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-center hover:shadow-2xl transition">
            <h3 className="text-3xl font-bold mb-4 text-red-500">Luxury Fleet</h3>
            <p className="text-gray-600 text-lg">
              Experience a curated collection of premium cars tailored to meet the highest standards of performance and comfort.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2">Flexible Financing</h4>
              <p>Exclusive payment plans to fit your lifestyle and budget.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2">Premium Support</h4>
              <p>Dedicated concierge service for a seamless buying experience.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2">Exclusive Deals</h4>
              <p>Special offers and limited-edition vehicles only for our members.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
