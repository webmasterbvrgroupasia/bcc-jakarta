import { Head, Link as InertiaLink } from "@inertiajs/react";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function MainLayout({ children }) {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    return (
        <>
            <nav className="block md:block lg:hidden fixed top-0 z-50 left-0 w-full bg-neutral-900 py-4">
                <div className="max-w-full md:max-w-2xl mx-auto grid grid-cols-2 items-center px-4">
                    <div>
                        <img src="/images/logo.png" className="w-32" alt="" />
                    </div>
                    <div className="flex justify-end">
                        <button
                            onClick={() => {
                                setIsNavExpanded(!isNavExpanded);
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="text-white w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    className={
                        isNavExpanded
                            ? "max-w-full md:max-w-2xl mx-auto flex flex-col items-center px-4 py-8 h-screen z-50"
                            : "hidden"
                    }
                >
                    <Link
                        to="welcomeSection"
                        smooth={true}
                        title={"welcome"}
                        className="text-white font-extrabold text-xl w-full text-left py-4"
                    >
                        Welcome
                    </Link>
                    <Link
                        to="storySection"
                        smooth={true}
                        title={"The Story Behind Bali Coffee Club"}
                        className="text-white font-extrabold text-xl w-full text-left py-4"
                    >
                        The Story Behind Bali Coffee Club
                    </Link>
                    <Link
                        to="featuresSection"
                        smooth={true}
                        title={"What's in Bali Coffee Club Jakarta"}
                        className="text-white font-extrabold text-xl w-full text-left py-4"
                    >
                        What's in Bali Coffee Club Jakarta
                </Link>
                    <Link
                        to="featuresSection"
                        smooth={true}
                        title={"Our Outlets"}
                        className="text-white font-extrabold text-xl w-full text-left py-4"
                    >
                        Our Outlets
                    </Link>
                </div>
            </nav>
            <nav className="hidden md:hidden lg:block fixed w-full bg-black z-50 top-0 left-0">
                <div className="max-w-full md:max-w-3xl lg:max-w-7xl hidden md:hidden lg:grid grid-cols-6 items-center mx-auto py-4">
                    <div>
                        <img
                            src="images/logo.png"
                            className="w-32"
                            alt="Bali Coffee Club"
                        />
                    </div>
                    <div className="col-span-4 flex flex-row space-x-8 text-sm justify-center text-gray-50 font-medium">
                        <Link
                            to="welcomeSection"
                            smooth={true}
                            className="hover:text-white transition ease-in-out duration-300 cursor-pointer"
                        >
                            Welcome
                        </Link>
                        <Link
                            to="storySection"
                            smooth={true}
                            className="hover:text-white transition ease-in-out duration-300 cursor-pointer"
                        >
                            The Story Behind Bali Coffee Club
                        </Link>
                        <Link
                            to="featuresSection"
                            smooth={true}
                            className="hover:text-white transition ease-in-out duration-300 cursor-pointer"
                        >
                            What's in BCC Jakarta
                        </Link>
                        <Link
                            to="outletsSection"
                            smooth={true}
                            className="hover:text-white transition ease-in-out duration-300 cursor-pointer"
                        >
                            Club Location
                        </Link>
                    </div>
                    <div className="text-right text-sm text-gray-200">
                        Wholesale?{" "}
                        <a
                            href="https://wa.me/6288218466715"
                            target="blank"
                            title={`contact us`}
                            className="text-white"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </nav>
            {children}
            <footer className="py-16 lg:py-24 bg-neutral-900 w-full px-4 md:px-0 lg:px-0">
                <div className="max-w-full md:max-w-2xl lg:max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="md:col-span-2">
                        <img src="/images/logo.png" className="w-44" alt="" />
                        <div className="text-gray-400 font-normal mt-3">
                        Our talented coffee Family really “Knows Coffee” and will come to any location so the very unique coffee beans of Bali can truly be experienced.
                        </div>
                        <div className="flex space-x-5 mt-3">
                            <a
                                href="#"
                                className="text-neutral-400 font-medium"
                                title={"instagram"}
                            >
                                Instagram
                            </a>
                            <a
                                href="#"
                                title={"tiktok"}
                                className="text-neutral-400 font-medium"
                            >
                                Tiktok
                            </a>
                            <a
                                href="#"
                                title={"facebook"}
                                className="text-neutral-400 font-medium"
                            >
                                Facebook
                            </a>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="uppercase text-sm font-semibold text-white">
                            Locations
                        </div>
                        <div className="grid grid-cols-2 gap-5 mt-5">
                            <div>
                                <h5 className="text-neutral-200">Jakarta</h5>
                                <p className="text-gray-400 text-sm mt-2">
                                    Jl. Lebak Bulus I No.4, RT.4/RW.4, Cilandak
                                    Bar., Kec. Cilandak, Jakarta, Daerah Khusus
                                    Ibukota Jakarta 12430
                                </p>
                                <a
                                    target="blank"
                                    title={"viewo on goggle maps"}
                                    href="https://www.google.com/maps/dir//bvr+group+asia+jakarta+office/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x2e69f142d7827da7:0xfc0ea5a05aa2ba1d?sa=X&ved=2ahUKEwjrg8eB8beAAxVhcmwGHTADD28Q9Rd6BAgmEAA&ved=2ahUKEwjrg8eB8beAAxVhcmwGHTADD28Q9Rd6BAg2EAU"
                                    className="block text-[#FF5700] font-medium text-sm mt-2 w-fit"
                                >
                                    View on Google Maps
                                </a>
                            </div>
                            <div>
                                <h5 className="text-neutral-200">
                                    Sunset Road
                                </h5>
                                <p className="text-gray-400 text-sm mt-2">
                                    Gg. Meduri Lingkungan Taman Mertanadi No.5,
                                    Kerobokan Kelod, Kec. Kuta Utara, Kabupaten
                                    Badung, Bali 80361
                                </p>
                                <a
                                    target="blank"
                                    title={"view on google maps"}
                                    href="https://www.google.com/maps/dir/-8.6814105,115.2007726/Bali+Coffee+Club,+Gang+Meduri+Lingkungan+Taman+Mertanadi,+Kerobokan+Kelod,+Badung+Regency,+Bali/@-8.6926445,115.1725034,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2dd2478ae3378f59:0xea13d19be98b21a6!2m2!1d115.1651734!2d-8.6817193?entry=ttu"
                                    className="block text-[#FF5700] font-medium text-sm mt-2 w-fit"
                                >
                                    View on Google Maps
                                </a>
                            </div>
                            <div>
                                <h5 className="text-neutral-200">Canggu</h5>
                                <p className="text-gray-400 text-sm mt-2">
                                    Jl. Kubu Manyar No.22, Canggu, Kec. Kuta
                                    Utara, Kabupaten Badung, Bali 80361
                                </p>
                                <a
                                    target="blank"
                                    title={"view on google maps"}
                                    href="https://www.google.com/maps/dir//chillhouse+canggu/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x2dd2388c7ef01e35:0x2c90c7289466e681?sa=X&ved=2ahUKEwj97YKx8reAAxVabGwGHbODCG0Q9Rd6BAhfEAA&ved=2ahUKEwj97YKx8reAAxVabGwGHbODCG0Q9Rd6BAhhEAQ"
                                    className="block text-[#FF5700] font-medium text-sm mt-2 w-fit"
                                >
                                    View on Google Maps
                                </a>
                            </div>
                            <div>
                                <h5 className="text-neutral-200">Other Locations Coming Soon</h5>
                             </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="uppercase text-sm font-semibold text-white">
                            Useful Links
                        </div>
                        <div className="mt-2">
                            <a
                                href="https://balicoffeeclub.com"
                                target="blank"
                                title={"bali coffee club main site"}
                                className="text-neutral-400"
                            >
                                Bali Coffee Club Main Site
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
