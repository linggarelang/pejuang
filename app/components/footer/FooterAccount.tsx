import { JSX } from "react";
import Link from "next/link";

import { FooterListData } from "@/app/types";
import { footerAccountList } from "@/app/data/footerLists";



const FooterAccount = (): JSX.Element => {
    return (
        <div className="flex flex-col mb-4 lg:mb-0">
            <h4 className="text-2xl pb-2 lg:pb-5">Account</h4>

            <ul className="space-y-2 text-gray-300">
                {footerAccountList.map((item: FooterListData, index: number) => (
                    <li
                        key={index}
                        className="font-extralight hover:text-white"
                    >
                        <Link
                            href={item.link}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterAccount;