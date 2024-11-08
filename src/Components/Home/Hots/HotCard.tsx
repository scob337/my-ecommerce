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
        <div
            className="w-[300px] h-[100px]
        flex gap-5  shadow-lg 
        "
        >
            <div className="img w-[100px] h-full">
                <img
                    src={IMG}
                    alt="Placeholder"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="text flex flex-col  justify-between p-1">
                <h5
                    className="
                text-[#777]
                "
                >
                    {Name}
                </h5>
                <p className="rate"><RatingSVG /></p>
                <p className="font-bold">Price: {Price} $</p>
            </div>
        </div>
    );
}
