import { Link } from "react-scroll";

export default function DivisionCard({ title, description, href, image }) {
    return (
        <div className="col-span-2 p-5 border h-auto md:h-auto border-neutral-800 space-y-4">
            <img src={image} alt={title} className="h-16" title={title} />
            <div>
            <h2 className="text-white font-semibold text-xl">{title}</h2>
            <p className="text-gray-400">{description}</p>
            </div>
            <Link className="text-white font-medium mt-2 block" href={href} title={`more details`}>More Details</Link>
        </div>
    );
}
