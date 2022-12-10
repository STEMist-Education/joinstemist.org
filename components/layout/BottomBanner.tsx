import { useState } from "react";
import Button from "@/components/layout/Button";
import { useEffect } from "react";
import React from "react";
import SignUpModal from "./SignUpModal";
/*const how_they_heard = [
    "Returning Student",
    "Recommended to my friend",
    "Instagram",
    "WeChat",
    "WhatsApp",
    "Next Door",
]*/
/**
 * Fake popup that will open a form
 * @returns 
 */
export default function BottomBanner() {
    const [isMobile, setMobile] = React.useState(false);
    const [modalState, setModalState] = React.useState<boolean>(false)

    React.useEffect(() => {
        const userAgent =
        typeof window.navigator === "undefined" ? "" : navigator.userAgent;
        const mobile = Boolean(
        userAgent.match(
            /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
        )
        );
        setMobile(mobile);

        if (isMobile) setModalState(true)
        else setModalState(true)
    }, []);
    
    return (
        (modalState && <div className="fixed bottom-0 left-0 bg-slate-50 w-screen h-30 z-40 shadow-inner" style={{backgroundImage:`url("homepage.png")`, padding:'10px'}}> 
            <p className="text-2xl font-bold text-center text-[#2e2e2e]" style={{padding:'5px'}}>Register</p>
            <div className="flex justify-center items-center">
                <SignUpModal/>
            </div>
        </div> || <div/>)
    ) /* || <div className="modal bg-purple-600 shadow-inner">
            <div className=" 
                    fixed 
                    top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
                    bg-slate-50 drop-shadow-xl rounded-xl p-10 z-50 rounded min-w-[90%] sm:min-w-[30%] scale-[0.7] sm:scale-90">
                <div className="translate-x-full translate-y-[-2rem]">
                    <button type="button" className="left-1/2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal"
                        onClick={() => {
                            setShow(true)
                        }}
                    >
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        How did you hear about this class?
                    </label>
                    {
                        how_they_heard.map(value => {
                            return (
                                <div className="flex items-center mb-2 scroll-smooth" id={value}>
                                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label className="ml-2 text-sm font-medium text-gray-800">{value}</label>
                                </div>
                            )
                        })
                    }
                    <div className="mb-6"/>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Parent's Full Name
                    </label>
                    <input className="mb-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name"></input>

                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Parent's Full Email
                    </label>
                    <input className="mb-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email"></input>

                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Student's Full Name
                    </label>
                    <input className="mb-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name"></input>

                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Student's Full Email
                    </label>
                    <input className="mb-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email"></input>

                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Student's Grade {'(2022-2023 year)'}
                    </label>
                    <select className="mb-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="grid-state">
                        {
                            [3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(value => {
                                return <option>{value}</option>
                            })
                        }
                    </select>

                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Student's School Name
                    </label>
                    <input className="mb-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="School Name"></input>

                    <Button
                        backgroundColor="bg-gradient-to-r from-steve-red to-steve-purple h-10 w-25"
                        textColor="text-white"
                        onClick={() => {
                            // stop showing the fake popup
                            setShow(true)
                        }}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>*/
}