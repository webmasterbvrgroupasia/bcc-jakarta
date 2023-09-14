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
            <Head title="Welcome" />
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
                                We're now brewing in Jakarta!
                            </h1>
                            <p className="text-center text-base lg:text-xl max-w-3xl mx-auto font-normal text-gray-200">
                                World class coffee, grown and roasted in Bali,
                                it is the perfect way to start any day. Bring
                                the energy of Bali into your morning with every
                                cup of Bali Coffee Club (BCC).
                            </p>
                            <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row space-x-0 md:space-x-2 w-full justify-center lg:space-x-[8px] mt-8 text-white ">
                                <Link className="px-8 py-3.5 text-center bg-[#ff5700] rounded-lg text-base font-medium">
                                    About Bali Coffee Club
                                </Link>
                                <a
                                    href="https://www.youtube.com/playlist?list=PLH13vI_kaCue5AH0sFwZBlOQnGE61bxtQ"
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
                    className="py-32 lg:pt-32 lg:pb-24 w-full bg-gradient-to-b from-neutral-950 to-black"
                >
                    <div className="max-w-full px-4 md:max-w-2xl lg:max-w-6xl mx-auto">
                        <h2 className="text-white text-center text-3xl lg:text-4xl font-extrabold">
                            Welcome to Bali Coffee Club
                        </h2>
                        <p className="text-gray-400 text-center max-w-full lg:max-w-lg mx-auto mt-4">
                            Thinking of a trip to Bali, but you have no free
                            time? Here we are ready, to make you feel like a
                            Bali Coffee Clubber.
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
                            <div className=" bg-neutral-800 rounded-lg overflow-hidden">
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
                            <div className=" bg-neutral-800 rounded-lg overflow-hidden">
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
                            <h3 className="text-white leading-tight font-extrabold text-4xl max-w-lg">
                                The Story Behind Bali, the Coffee, and the Club
                            </h3>
                            <p className="max-w-3xl text-gray-200 mt-2 text-base md:text-base lg:text-lg">
                                Bali is home to a rich culture and holds a
                                myriad of ways to celebrate it. At Bali Coffee
                                Club, we celebrate the culture surrounding
                                coffee, which permeates through the many islands
                                of Indonesia. From the beautiful land of Bali to
                                your kitchen, wherever it may be, we share a
                                part of our culture directly with you.
                            </p>
                            <a
                                href="https://balicoffeeclub.com"
                                className="text-white font-semibold block w-fit mt-4"
                            >
                                Find Out More
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
                        <div className="col-span-2">
                            <div className="">
                                <h4 className="text-white font-extrabold text-3xl lg:text-4xl mb-2">
                                    One Place, One Connection to Expand your
                                    Network only at Bali Coffee Club Jakarta
                                </h4>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    At Bali Coffee Club Jakarta, you will
                                    discover an inviting, stylish, and welcoming
                                    atmosphere, excellent customer service,
                                    friendly and knowledgeable baristas,
                                    wonderful music, and of course, serving the
                                    best coffee anywhere in Jakarta. As Coffee
                                    is the most consumed beverage on the planet,
                                    combined with our coffee made from our own
                                    home grown coffee beans, with an exciting
                                    community experience, you’re assured to keep
                                    coming back for more. All of this and more,
                                    you’ll discover at Bali Coffee Club Jakarta.
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
                                image={"images/logo/bvr-heartbeat.png"}
                                title={"BVR Heartbeat"}
                                description="The # 1 indoor cycling center offering High Intensity Interval Training (HITT) Classes. Unlike the traditional spin classes
                                of the past, our cycling coaches and trainers have personally developed a one of a kind, high intensity and
                                inspirational training experience that will challenge you and test your limits both physically and mentally."
                                href={"https://bvrheartbeat.com"}
                            />
                            <DivisionCard
                                title={"Herberto Gelato"}
                                image={"images/logo/herberto.png"}
                                description="Every scoop of Herberto Gelato is a taste you have never experienced before and a taste that will never
                                fade from your taste buds. Our gelato artisans are dream weavers, blending only the finest ingredients
                                into a creamy delight that you will want to experience again and again. Melted memories of our delightful
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
                            <h4 className="text-neutral-400">
                                Bali Coffee Club
                            </h4>
                            <h5 className="text-white font-extrabold text-4xl">
                                Our Other Outlets
                            </h5>
                        </div>
                        <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-5 text-white">
                            <Link
                                className="h-72 text-2xl bg-cover bg-center rounded-lg overflow-hidden font-extrabold"
                                style={{
                                    backgroundImage: `url('https://balicoffeeclub.com/img/bcc-1.webp')`,
                                }}
                            >
                                <div className="h-72 bg-black/30 w-full px-4 flex items-center">
                                    BCC Canggu
                                </div>
                            </Link>
                            <Link
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
                        <h5 className="text-white text-4xl font-extrabold text-center">
                            Wholesale?
                        </h5>
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
                <section
                    id="eventSection"
                    className="py-8 lg:py-24 bg-gradient-to-b from-black to-neutral-950 w-full"
                >
                    <div className="max-w-full md:max-w-2xl lg:max-w-6xl mx-auto px-4 md:px-0 lg:px-0 rounded-lg">
                        <h5 className="text-white font-bold text-4xl">
                            Events in BCC Jakarta
                        </h5>

                        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                            <div className="h-full md:h-52 w-full">
                                <Calendar event={event} handleClick={handleClickDate}/>
                            </div>
                            <div className="md:col-span-1 lg:col-span-2">
                                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
                                    {
                                        dateTimeEvent.length !== 0 ? (
                                            dateTimeEvent.map(item => (
                                                <EventsCard image={item.image} eventTitle={item.title} date={handleTimeGetMonthYear(item.datetime)}/>
                                            ))
                                        ): (
                                            <>
                                                <div className="text-neutral-400">
                                                    <EventsCard
                                                        image={'https://staging.grandlandcorp.com/blogpost/1692761089.jpg'}
                                                        eventTitle={'Please check again later'}
                                                        date={handleTimeGetMonthYear(new Date())}
                                                        description={'Currently we don\'t have any upcoming events'}/>
                                                </div>
                                            </>
                                        )
                                    }
                                </div>
                                {
                                    dateTimeEvent.length >= 3 ? (
                                        <div className="text-white">
                                            <button className={"bg-blue-500 shadow-lg shadow-blue-500/50 p-2 rounded hover:bg-blue-40 hover:shadow-blue-300"}>
                                                <Link>View All Event</Link>
                                            </button>
                                        </div>
                                    ): (null)
                                }
                            </div>

                        </div>
                    </div>
                </section>
            </MainLayout>
        </>
    );
}
