import { useState } from "react";
import Button from "@/components/layout/Button";
import { useEffect } from "react";

function isClientMobile() {
    let mql = window.matchMedia('(max-width: 750px)');
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || mql.matches ) {
        return true;
    }
    return false;
}
export default function BottomBanner() {

    if (typeof window !== "undefined") {
        return isClientMobile() && (
            <div className="fixed bottom-0 left-0 bg-slate-50 w-screen h-30 z-40 shadow-inner" style={{backgroundImage:`url("homepage.png")`, padding:10}}> 
                <p className="text-2xl font-bold text-center text-[#fff]">STEM Frontiers Workshop!</p>
                <div className="flex  justify-center items-center">
                    <Button
                        backgroundColor="bg-gradient-to-r from-steve-red to-steve-purple h-10 w-55"
                        textColor="text-white"
                        style={{width:"45%"}}
                    >
                        Register
                    </Button>
                </div>
            </div>
        )
    }
}