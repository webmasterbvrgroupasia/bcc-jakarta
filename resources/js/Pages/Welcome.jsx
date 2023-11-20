import { Link, Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import DivisionCard from "@/Components/DivisionCard";
import EventsCard from "@/Components/EventsCard.jsx";
import Calendar from "@/Components/Calendar.jsx";
import eventBbc from "@/utils/eventBbc.js";
import {useState} from "react";


export default function Welcome() {
    const [dateTimeEvent, setDateTimeEvent] = useState([]);
    const [event, setEvent] = useState([]);

    const handleClickDate = event => {
        const data = eventBbc().filter((item) => new Date(item.datetime).getTime() === (new Date(event.$d).getTime()));
        const sliceData = data.slice(0, 4);
        setDateTimeEvent(sliceData)
    }

    useState(() => {
        setEvent(eventBbc)
    }, []);

    const handleTimeGetMonthYear = dateYearTime => {
        const dateTime = new Date(dateYearTime);
        const daysData = dateTime.getDate();
        const month = dateTime.toLocaleString('default', {month: 'long'});
        const year = dateTime.getFullYear();

        return `${daysData} ${month} ${year}`;
    }

    return (
        <>
            <Head title="Enjoy a Cup of Bali Arabica Coffee at Our Coffee Shop in Jakarta" />
            <MainLayout>
                <header className="bg-gradient-to-b from-black to-neutral-950 w-full h-screen md:h-[75vh] lg:h-screen flex items-center justify-center -z-10">
                    <video
                        className="absolute z-10 w-full h-screen md:h-[75vh] lg:h-screen shadow-md object-cover shadow-gray-400/20"
                        autoPlay
                        loop
                        muted
                    >
                        <source
                            src="https://balicoffeeclub.com/video/video-background.webm"
                            type="video/mp4"
                        />
                    </video>
                    <div className="max-w-full mt-10 z-20 md:max-w-2xl lg:max-w-7xl px-4 md:px-0 lg:px-0 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 items-center mx-auto">
                        <div className="col-span-2 bg-black/20 p-5 lg:p-5 backdrop-blur-sm rounded-lg">
                            <img
                                src="/images/we-know-coffee-white-1.webp"
                                className="w-44 lg:w-72 mb-6 mx-auto"
                                alt="Bali Coffee Club"
                            />
                            <h1 className="leading-none text-4xl lg:text-6xl font-extrabold mb-6 text-center text-white">
                                Bali Coffee Club Jakarta - Enjoy the Taste of Bali Arabica Coffee
                            </h1>
                            <p className="text-center text-base lg:text-xl max-w-3xl mx-auto font-normal text-gray-200">
                                Bali Coffee Club Jakarta (BCC Jakarta) serves you Bali Arabica coffee, so you can experience the taste of Bali in every cup. Start your day the right way with a cup of BCC Jakarta coffee!
                            </p>
                            <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row space-x-0 md:space-x-2 w-full justify-center lg:space-x-[8px] mt-8 text-white ">
                                <Link className="px-8 py-3.5 text-center bg-[#ff5700] rounded-lg text-base font-medium" title={`about bali coffee club`}>
                                    About Bali Coffee Club
                                </Link>
                                <a
                                    href="https://www.youtube.com/playlist?list=PLH13vI_kaCue5AH0sFwZBlOQnGE61bxtQ" title={`link youtube`}
                                    target="blank"
                                    className="px-8 py-3.5 bg-gray-800 border-gray-600 border rounded-lg font-medium flex justify-center items-center space-x-2 text-gray-400"
                                >
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                                        </svg>
                                    </div>
                                    <div>Watch Our Videos</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                <section
                    id="welcomeSection"
                    className="py-32 lg:pt-32 lg:pb-24 w-full bg-gradient-to-b from-neutral-950 to-black">
                    <div className="max-w-full px-4 md:max-w-2xl lg:max-w-6xl mx-auto">
                        <h2 className="text-white text-center text-3xl lg:text-4xl font-extrabold">
                            From Bali to Jakarta, We Bring Arabica
                        </h2>
                        <p className="text-gray-400 text-center max-w-full lg:max-w-lg mx-auto mt-4">
                            Feel the combination of Balinese culture and nature at our coffee shop in Jakarta - Bali Coffee Club Jakarta (BCC Jakarta)
                        </p>
                        <div className="grid grid-cols-4 mt-8 gap-4">
                            <div className="col-span-2 bg-neutral-800 rounded-lg overflow-hidden">
                                <img
                                    src="/images/2.webp"
                                    className="h-52 rounded-lg object-cover w-full"
                                    alt="Bali Coffee Club Jakarta Menu"
                                />
                            </div>
                            <div className=" bg-neutral-800 rounded-lg overflow-hidden">
                                <img
                                    src="/images/1.webp"
                                    className="h-52 rounded-lg object-cover w-full"
                                    alt="Bali Coffee Club Jakarta Menu"
                                />
                            </div>
                            <div className="bg-neutral-800 rounded-lg overflow-hidden">
                                <img
                                    src="/images/3.webp"
                                    className="h-52 rounded-lg object-cover w-full"
                                    alt="Bali Coffee Club Jakarta Menu"
                                />
                            </div>
                            <div className=" bg-neutral-800 rounded-lg overflow-hidden">
                                <img
                                    src="/images/6.webp"
                                    className="h-52 rounded-lg object-cover w-full"
                                    alt="Bali Coffee Club Jakarta Menu"
                                />
                            </div>
                            <div className="col-span-2 bg-neutral-800 rounded-lg overflow-hidden">
                                <img
                                    src="/images/5.webp"
                                    className="h-52 rounded-lg object-cover w-full"
                                    alt="Bali Coffee Club Jakarta Menu"
                                />
                            </div>
                            <div className="bg-neutral-800 rounded-lg overflow-hidden">
                                <img
                                    src="/images/4.webp"
                                    className="h-52 rounded-lg object-cover w-full"
                                    alt="Bali Coffee Club Jakarta Menu"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="storySection"
                    className="lg:px-0 bg-gradient-to-b from-black to-neutral-950 w-full"
                >
                    <div className="bg-[#ff5700] px-4 py-8 lg:py-24">
                        <div className="max-w-full md:max-w-2xl lg:max-w-6xl mx-auto">
                            <h2 className="text-white leading-tight font-extrabold text-4xl max-w-lg">
                                Bali Coffee Club Jakarta - From Balinese Culture to Coffee Lovers
                            </h2>
                            <p className="max-w-3xl text-gray-200 mt-2 text-base md:text-base lg:text-lg">
                                From the beautiful landscape of Bali to your cup, we share the beauty of Bali through Arabica coffee beans directly to you. Experience the beauty of Bali in every cup of Bali Coffee Club Jakarta.
                            </p>
                            <a
                                href="https://balicoffeeclub.com" title={'bali coffee club'}
                                className="text-white font-semibold block w-fit mt-4"
                            >
                                Discover the Culture
                            </a>
                        </div>
                    </div>

                    <div className="">
                        <img
                            src="/images/coffee-plantation.jpg"
                            className="h-44 md:h-72 lg:h-[500px] w-full object-cover rounded-b-lg"
                            alt="Bali Coffee Club"
                        />
                    </div>
                </section>

                <section
                    id="featuresSection"
                    className="py-8 lg:py-24 px-4 md:px-0 lg:px-0 bg-gradient-to-b from-neutral-950 to-black w-full"
                >
                    <div className="max-w-full md:max-w-2xl lg:max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-start gap-10">
                        <div className="col-span-2"  itemScope itemType={"https://jakarta.balicoffeeclub.com"}>
                            <div>
                                <h2 itemProp={"header"} className="text-white font-extrabold text-3xl lg:text-4xl mb-2">
                                    One Place, One Connection - only at Bali Coffee Club Jakarta
                                </h2>
                                <p className="text-gray-400 leading-relaxed text-lg" itemProp={"description"}>
                                    We present a perfect settings to enjoy the real Balinese atmosphere - for you, coffee passion!

                                    Here, you'll have an exciting community experience, only at Bali Coffee Club Jakarta.

                                    A welcoming and stylish atmosphere, excellent service, professional baristas, wonderful music, and of course, Arabica coffee with the touch of Bali.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            <DivisionCard
                                image={"images/logo/bvr-ga.png"}
                                title={"BVR Group Asia"}
                                description="The Acronym BVR stands for Building Valuable Relationships. BVR Group Asia is empowered by decades of business experience
                                in various countries throughout the world.We are a full-service organization that successfully and transparently manages client
                                expectations throughout the full project life cycle"
                                href={"https://bvrgroupasia.com"}
                            />
                            <DivisionCard
                                image={"images/logo/grand-land-corp.png"}
                                title={"Grand Land Corp"}
                                description="A real estate development company with the core mandate of identifying, acquiring and managing value-added
                                residential, hospitality, and commercial real estate assets, in strategically targeted locations throughout Asia."
                                href={"https://grandlandcorp.com"}
                            />
                            <DivisionCard
                                image={"images/logo/bvr-studio.png"}
                                title={"BVR Studio"}
                                description="BVR Studio is an industry leading facility with cutting edge technologies and offers the most complete production
                                studio experience in the area. Our facility can provide a creatively inspiring environment where great ideas become
                                extraordinary productions.
                                "
                                href={"https://bvrgroupasia.com"}
                            />

                            <DivisionCard
                                title={"Herberto Gelato"}
                                image={"images/logo/herberto.png"}
                                description="Every scoop of Herberto Gelato is a taste you have never experienced before and a taste that will never
                                fade from your taste buds. Our gelato artisans are dream weavers, blending only the finest ingredients
                                into a creamy delight that you will want to experience again and fagain. Melted memories of our delightful
                                Gelato are the best memories of all.
                                "
                                href={"https://bvrgroupasia.com"}
                            />
                        </div>
                    </div>
                </section>

                <section
                    id="outletsSection"
                    className="py-8 lg:py-24 px-4 md:px-0 lg:px-0 bg-gradient-to-b from-black to-neutral-950 w-full"
                >
                    <div className="max-w-full md:max-w-2xl lg:max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="">
                            <h2 className="text-neutral-400">
                                Bali Coffee Club
                            </h2>
                            <h3 className="text-white font-extrabold text-4xl">
                                Find Our Other Coffee Shops
                            </h3>
                        </div>
                        <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-5 text-white">
                            <Link title={`bcc canggu`}
                                className="h-72 text-2xl bg-cover bg-center rounded-lg overflow-hidden font-extrabold"
                                style={{
                                    backgroundImage: `url('https://balicoffeeclub.com/img/bcc-1.webp')`,
                                }}
                            >
                                <div className="h-72 bg-black/30 w-full px-4 flex items-center">
                                    BCC Canggu
                                </div>
                            </Link>
                            <Link title={`Bcc Sunset`}
                                className="h-72 text-2xl bg-cover bg-center rounded-lg overflow-hidden font-extrabold"
                                style={{
                                    backgroundImage: `url('https://balicoffeeclub.com/img/bcc-sunset.webp')`,
                                }}
                            >
                                <div className="h-72 bg-black/30 w-full px-4 flex items-center">
                                    BCC Sunset
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="bg-gradient-to-b from-neutral-950 to-black w-full">
                    <div className="max-w-full md:max-w-2xl lg:max-w-6xl mx-auto bg-neutral-900 py-14 px-4 md:px-0 lg:px-0 rounded-lg">
                        <h3 className="text-white text-4xl font-extrabold text-center">
                            Wholesale?
                        </h3>
                        <p className="mt-4 text-neutral-400 text-center max-w-lg mx-auto">
                            If you have any inquiries regarding wholesale.
                            Please leave your email address below. Our amazing
                            team will be in touch with you as soon as possible.
                        </p>
                        <form
                            action=""
                            className="mt-8 w-full justify-center flex space-x-4 max-w-md mx-auto"
                        >
                            <input
                                type="email"
                                placeholder="Enter Your Email Address"
                                className="bg-neutral-700 w-full border-none rounded-lg px-4 py-3.5 text-sm text-white"
                                name=""
                                id=""
                            />
                            <button className="w-1/3 text-sm py-3 px-5 bg-blue-700 text-white font-medium rounded-lg">
                                Submit
                            </button>
                            <div></div>
                        </form>
                    </div>
                </section>
            </MainLayout>
        </>
    );
}
