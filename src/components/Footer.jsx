    import React from "react";

    const Footer = () => {
    return (
        <footer className="bg-gray-100 py-8 px-16">
        <div className="max-w-7xl mx-auto flex justify-between items-start space-x-10">
            <div>
            <h2 className="text-5xl text-yellow-600 font-bold">Be</h2>
            </div>
            <div className="max-w-xs">
            <h3 className="text-lg font-semibold text-gray-800">Contact with us</h3>
            <p className="text-sm text-gray-600 leading-snug">Nullam viverra consectetuer quisque cursus et, porttitor risus.</p>
            <p className="text-sm text-gray-600">+61 (0) 3 8376 6284</p>
            <p className="text-sm text-gray-600"><a href="mailto:noreply@envato.com" className="text-yellow-600">noreply@envato.com</a></p>
            </div>
            <div className="max-w-xs">
            <h3 className="text-lg font-semibold text-gray-800">Localization</h3>
            <p className="text-sm text-gray-600">Envato</p>
            <p className="text-sm text-gray-600">Level 13, 2 Elizabeth</p>
            <p className="text-sm text-gray-600">Victoria 3000</p>
            <p className="text-sm text-gray-600">Australia</p>
            </div>
        </div>
        <div className="border-t border-gray-300 mt-4 pt-3 text-center text-xs text-gray-600">
            &copy; 2025 Betheme by <a href="#" className="text-yellow-600">Muffin group</a> | All Rights Reserved | Powered by <a href="#" className="text-yellow-600">WordPress</a>
        </div>
        <div className="flex justify-center mt-2 space-x-4 text-gray-700 text-lg">
            <a href="#" className="hover:text-yellow-600"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-yellow-600"><i className="fas fa-times"></i></a>
            <a href="#" className="hover:text-yellow-600"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="hover:text-yellow-600"><i className="fab fa-instagram"></i></a>
        </div>
        </footer>
    );
    };

    export default Footer;
