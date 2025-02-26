    import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";

    const SocialFanpages = () => {
    return (
        <div className="bg-white py-6 -mt-10"> {/* Added -mt-10 to move it up */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
            {/* Left Section: Heading */}
            <h2 className="text-black font-semibold text-2xl md:text-3xl">
            Our social fanpages
            </h2>

            {/* Middle Section: Description */}
            <p className="text-gray-600 text-sm md:text-base max-w-lg text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut aliqua.
            </p>

            {/* Right Section: Social Icons */}
            <div className="flex gap-4">
            <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-all rounded"
            >
                <FaFacebookF className="text-gray-700 text-lg" />
            </a>
            <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-all rounded"
            >
                <FaXTwitter className="text-gray-700 text-lg" />
            </a>
            <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-all rounded"
            >
                <FaInstagram className="text-gray-700 text-lg" />
            </a>
            </div>
        </div>
        </div>
    );
    };

    export default SocialFanpages;
