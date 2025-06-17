import { JSX } from "react";

import FooterHead from "./FooterHead";
import FooterBody from "./FooterBody";
import FooterEnd from "./FooterEnd";

const Footer = (): JSX.Element => {
    return (
        <div className="bg-gray-800 select-none">
            <FooterHead />
            <FooterBody />
            <FooterEnd />
        </div>
    );
};

export default Footer;