import CTABanner from "./CTABanner";
import React from 'react';
import BottomBanner from "./BottomBanner";

export default function AwardWrapper({children}: {children: React.ReactNode}) {
    return (
        <>
            <CTABanner />
            {children}
        </>
    )
}