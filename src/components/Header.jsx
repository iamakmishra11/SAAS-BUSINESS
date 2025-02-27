    import { FaPhoneAlt } from "react-icons/fa";
    import p0p0p0 from "../assets/p0p0p0.png";
    import { useState } from "react";

    const Header = () => {
    const [hover, setHover] = useState(false);

    return (
        <header
        className="relative bg-gray-100 text-center min-h-screen flex flex-col items-center justify-center"
        style={{
            backgroundImage: `url(${p0p0p0})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
        >
        <div className="relative z-10 px-6 text-center pb-50">
            <h1 className="text-lg tracking-widest text-gray-600">HELLO THERE</h1>
            <h2 className="text-5xl font-bold text-gray-900 mt-2">
            Transforming Ideas into Digital Excellence 🚀 
            </h2>
            <button
            className={`mt-6 px-6  text-white text-sm font-semibold rounded-md shadow-md cursor-pointer h-10 w-50 transition-all duration-500 relative overflow-hidden ${hover ? 'bg-blue-600' : 'bg-blue-400'}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            >
            <span
                className={`absolute inset-0 bg-blue-300 transition-all duration-500 ${hover ? 'right-0' : 'right-full'}`}
            ></span>
            <span
                className={`relative z-10 transition-all duration-500 ${hover ? 'text-white' : 'text-white'}`}
            >
                View more details
            </span>
            </button>
            <div className="mt-6 flex justify-center items-center space-x-3">
            {/* <FaPhoneAlt className="text-gray-700 text-xl" /> */}
            </div>
        </div>
        </header>
    );
    };

    export default Header;