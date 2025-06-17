import Image from "next/image";
import { JSX } from "react";

const BgImage = (): JSX.Element => {
    return (
        <div className="absolute w-full h-screen select-none -z-50">
            <Image
                src="/bg-image-pejuang.jpg"
                alt="Background Image"
                objectFit="cover"
                className="w-full h-full"
                width={1920}
                height={1080}
                priority
            />
        </div>
    );
};

export default BgImage;