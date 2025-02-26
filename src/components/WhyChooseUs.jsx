    import { FaPaperclip, FaFileAlt, FaThumbtack, FaDatabase } from 'react-icons/fa';

    const WhyChooseUs = () => {
    return (
        <section className="bg-gray-50 py-25">
        <div className="container mx-auto text-center">
            <h2 className="text-4xl font-semibold text-gray-800">Why choose us?</h2>
            <p className="mt-4 text-md text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus</p>
            <p className="mt-1 text-md text-gray-800">nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6 pr-50 pl-50 h-100">
            {/* Service Block 1 */}
            <div className="p-6 bg-white shadow-lg rounded-md text-center border-b-2 border-blue-600 pt-25 transform transition-transform duration-300 hover:shadow-lg hover:-translate-y-3">
                <FaPaperclip className="text-4xl text-blue-300 mb-4 mx-auto" />
                <h3 className="text-xl font-medium text-gray-800">Quantum porter</h3>
                <p className="text-gray-600 mt-2">Ed minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com.</p>
            </div>

            {/* Service Block 2 */}
            <div className="p-6 bg-white shadow-lg rounded-md text-center border-b-2 border-blue-600 pt-25 transform transition-transform duration-300 hover:shadow-lg hover:-translate-y-3">
                <FaFileAlt className="text-4xl text-blue-300 mb-4 mx-auto" />
                <h3 className="text-xl font-medium text-gray-800">Veri materni</h3>
                <p className="text-gray-600 mt-2">Ed minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com.</p>
            </div>

            {/* Service Block 3 */}
            <div className="p-6 bg-white shadow-lg rounded-md text-center border-b-2 border-blue-600 pt-25 transform transition-transform duration-300 hover:shadow-lg hover:-translate-y-3">
                <FaThumbtack className="text-4xl text-blue-300 mb-4 mx-auto" />
                <h3 className="text-xl font-medium text-gray-800">Postra monter</h3>
                <p className="text-gray-600 mt-2">Ed minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com.</p>
            </div>

            {/* Service Block 4 */}
            <div className="p-6 bg-white shadow-lg rounded-md text-center border-b-2 border-blue-600 pt-25 transform transition-transform duration-300 hover:shadow-lg hover:-translate-y-3">
                <FaDatabase className="text-4xl text-blue-300 mb-4 mx-auto" />
                <h3 className="text-xl font-medium text-gray-800">Elis parae</h3>
                <p className="text-gray-600 mt-2">Ed minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com.</p>
            </div>
            </div>
        </div>
        </section>
    );
    };

    export default WhyChooseUs;
