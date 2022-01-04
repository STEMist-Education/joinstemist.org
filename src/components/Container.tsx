import { useEffect } from "react";
import Navbar from "./Navbar";

export default function Container({ children }: { children: JSX.Element | string }) {
    useEffect(() => {
        window.onscroll = scrollFunction

        function scrollFunction() {
            console.log(document.documentElement.scrollTop)
            if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
                document.querySelector("nav")!.style.top = "0"
            } else {
                document.querySelector("nav")!.style.top = "-56px"
            }
        }
    }, [])
    return <div className="max-w-7xl mx-auto h-[10000px]">
        <Navbar className="sm:px-6 lg:px-6 px-2 transition-[top] duration-300 z-50 sticky top-[-56px] bg-gradient-to-r from-slate-200 to-slate-300 backdrop-filter backdrop-blur" />
        <div className="sm:px-6 px-2 lg:px-6">
            {children}
        </div>
    </div>
}