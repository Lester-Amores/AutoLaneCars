import { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import CarCard from "./car-card";

const carTypes = [
    { name: "Sedans", img: import.meta.env.BASE_URL + "sedan.jpg" },
    { name: "Sports Cars", img: import.meta.env.BASE_URL + "sportcars.jpg" },
    { name: "Crossovers", img: import.meta.env.BASE_URL + "crossover.jpg" },
    { name: "SUVs", img: import.meta.env.BASE_URL + "suv.jpg" },
    { name: "Pickup Trucks", img: import.meta.env.BASE_URL + "pickup.jpg" },
    { name: "E-Vehicles", img: import.meta.env.BASE_URL + "evehicle.jpg" },
  ];

function CarCategories() {
    const [currentPage, setCurrentPage] = useState(0);
    const [perView, setPerView] = useState(1);

    const [sliderRef, instanceRef] = useKeenSlider({
        loop: false,
        slides: {
            perView: 1.1,
            spacing: 12,
        },
        breakpoints: {
            "(min-width: 640px)": {
                slides: { perView: 2, spacing: 16 },
            },
            "(min-width: 1024px)": {
                slides: { perView: 3, spacing: 20 },
            },
        },
        created(slider) {
            setPerView(slider.options.slides.perView || 1);
        },
        updated(slider) {
            setPerView(slider.options.slides.perView || 1);
        },
        slideChanged(slider) {
            const rel = slider.track.details.rel;
            const pView = slider.options.slides.perView || 1;
            setCurrentPage(Math.round(rel / pView));
        },
    });

    const totalSlides = carTypes.length;
    const totalPages = Math.ceil(totalSlides / perView);

    return (
        <section className="min-h-96 md:min-h-screen py-16 bg-gray-200" id="categories">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-wide">
                <span className="text-red-500">Prestige</span> Rides
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">Explore our premium selection of vehicles</p>

            <div ref={sliderRef} className="keen-slider max-w-7xl mx-auto px-4">
                {carTypes.map((car, i) => (
                    <div key={i} className="keen-slider__slide">
                        <CarCard name={car.name} img={car.img} />
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: totalPages }).map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => instanceRef.current?.moveToIdx(idx * perView)}
                        className={`w-3 h-3 rounded-full transition ${currentPage === idx ? "bg-gray-800 scale-125" : "bg-gray-400"
                            }`}
                    ></button>
                ))}
            </div>
        </section>
    );
}

export default CarCategories;
