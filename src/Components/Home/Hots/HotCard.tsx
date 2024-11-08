interface Iprops {
    IMG: string;
    Name: string;
    Rate?: number;
    Price: number;
}
import RatingSVG from './RatingSVG'

export default function HotCard(props: Iprops) {
    const { IMG, Name, Price } = props;
    return (
        <article
            className="w-[300px] h-[100px]
        flex gap-5  shadow-lg 
        "
        >
            <article className="img w-[100px] h-full">
                <img
                    src={IMG}
                    alt="Placeholder"
                    className="w-full h-full object-cover"
                />
            </article>
            <article className="text flex flex-col  justify-between p-1">
                <h5
                    className="
                text-[#777]
                "
                >
                    {Name}
                </h5>
                <p className="rate"><RatingSVG /></p>
                <p className="font-bold">Price: {Price} $</p>
            </article>
        </article>
    );
}
