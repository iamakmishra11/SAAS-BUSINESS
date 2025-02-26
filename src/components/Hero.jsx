    import React from "react";
    import TestimonialCarousel from "./Testimonials"; // Import carousel component

    const Hero = () => {
    return (
        <div className="w-full bg-white py-16 px-6 md:px-20 lg:px-32 relative">
        {/* Section Heading */}
        <div className="text-center text-sm text-gray-500">
            <span className="uppercase tracking-wide text-orange-500 font-semibold text-xs">Our Offer</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 leading-tight">
            Check what can we do for you<br /> and your business
            </h2>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-12 gap-12 relative">
            {/* Left Image */}
            <div className="w-full md:w-1/2 flex justify-end">
            <div className="w-[500px] h-[350px] overflow-hidden rounded-lg shadow-lg">
                <img
                src="/imagei.jpg"
                alt="Offer"
                className="w-full h-full object-cover"
                />
            </div>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2 text-left">
            <h4 className="text-lg font-semibold text-gray-800">
                Alborn vito mos nostra pertrone
            </h4>
            <ul className="mt-4 space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                <span className="text-orange-500 text-xl">✔</span>
                Raesent nec magna ac ped auris suscipit mam quis erat id tortor
                </li>
                <li className="flex items-center gap-3">
                <span className="text-orange-500 text-xl">✔</span>
                Raesent nec magna ac ped auris suscipit mam quis erat id tortor
                </li>
                <li className="flex items-center gap-3">
                <span className="text-orange-500 text-xl">✔</span>
                Raesent nec magna ac ped auris suscipit mam quis erat id tortor
                </li>
            </ul>
            </div>
        </div>

        {/* Bottom Section (Reversed Order) */}
        <div className="bg-gray-800 text-white mt-16 flex flex-col md:flex-row-reverse items-center">
            {/* Left Side Text (Moved from Right to Left) */}
            <div className="w-full md:w-1/2 text-white px-6 md:px-12">
            <h2 className="text-3xl font-bold text-orange-400">Join us with three easy steps</h2>
            <div className="mt-6 space-y-4">
                <div>
                <h3 className="font-semibold text-lg flex items-center gap-2">
                    <span className="text-orange-400 text-xl">✔</span> Quantum porter
                </h3>
                <p className="text-sm text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                </div>
                <div>
                <h3 className="font-semibold text-lg flex items-center gap-2">
                    <span className="text-orange-400 text-xl">✔</span> Quantum porter
                </h3>
                <p className="text-sm text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                </div>
                <div>
                <h3 className="font-semibold text-lg flex items-center gap-2">
                    <span className="text-orange-400 text-xl">✔</span> Quantum porter
                </h3>
                <p className="text-sm text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                </div>
            </div>
            </div>

            {/* Right Side Image */}
            <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-[820px] h-[550px] overflow-hidden shadow-lg">
                <img src="/img5.jpg" alt="Team Work" className="w-full h-full object-cover" />
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default Hero;
