import React, { JSX } from "react";

const FooterDescription = (): JSX.Element => {
    return (
        <React.Fragment>
            <h1 className="text-2xl pb-2 lg:pb-5">Why People Like Us!</h1>
            <blockquote className="text-gray-300 font-extralight text-justify">
                Pejuang Coffee Shop is where flavor, comfort, and spirit come together. It&apos;s the perfect place to take a break, get some work done, or simply enjoy quality time with the people who matter most.
            </blockquote>
        </React.Fragment>
    );
};

export default FooterDescription;