"use client"

import React, { JSX } from "react"
import { ReactLenis } from "lenis/react"
import { LenisOptions } from "lenis"

interface LenisProviderProps {
    children: React.ReactNode
    root?: boolean,
    options?: LenisOptions
}

const LenisProvider = ({
    children,
    root,
    options
}: LenisProviderProps): JSX.Element => {
    return (
        <ReactLenis
            root={root}
            options={options}
        >
            {children}
        </ReactLenis>
    )
}

export default LenisProvider