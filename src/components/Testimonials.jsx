    import React from "react";
    import { Swiper, SwiperSlide } from "swiper/react";
    import { Pagination, Autoplay } from "swiper/modules";
    import { motion } from "framer-motion";
    import "swiper/css";
    import "swiper/css/pagination";

    const testimonials = [
    {
        quote:
        "Absolutely amazing service! The team was incredibly professional, and they exceeded my expectations.",
        name: "Pamela Grets",
        company: "Sonus Inc.",
    },
    {
        quote:
        "I highly recommend them. They transformed my business with their innovative solutions!",
        name: "John Doe",
        company: "Tech Solutions",
    },
    {
        quote:
        "Great experience! The support and quality of service were top-notch.",
        name: "Emma Smith",
        company: "Creative Minds",
    },
    ];

    const Testimonials = () => {
    return (
        <div className="w-full py-16 px-6">
        <motion.h2
            className="text-center text-3xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            What Our Clients Say
        </motion.h2>
        <motion.p
            className="text-center text-gray-600 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
        >
            Hear from our satisfied customers
        </motion.p>

        <div className="max-w-4xl mx-auto mt-10">
            <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="w-full"
            >
            {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                <motion.div
                    className="bg-blue-100 shadow-2xl rounded-lg p-8 text-center mx-4"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-orange-500 text-5xl">❝</span>
                    <p className="text-lg text-gray-700 mt-4 italic">{item.quote}</p>
                    <div className="mt-6">
                    <h4 className="text-xl font-semibold text-gray-900">
                        {item.name}
                    </h4>
                    <p className="text-gray-500">{item.company}</p>
                    </div>
                </motion.div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>

        {/* Image Section - Fixed Extra Spacing */}
        <div className="mt-12 overflow-hidden shadow-lg">
            <img
            src="/img7.jpg"
            alt="Team Work"
            className="w-full h-200 border-none ring-0 outline-none object-cover"
            />
        </div>
        </div>
    );
    };

    export default Testimonials;
