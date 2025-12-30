import { useState } from "react";
import { socialTabs } from "../../websiteContent";
import Parallax1 from "../parallaxEffects/parallax1";
import Parallax2 from "../parallaxEffects/parallax2";
import InstagramWindow from "./instagramWindow";
import Window from "./window";
import GithubWindow from "./githubWindow";
import { useDispatch, useSelector } from "react-redux";
import { closeWindow, openWindow } from "../../store/windowSlice";
import LinkedinWindow from "./emailBox";
import EmailBox from "./emailBox";

function Contact() {
    const activeWindow = useSelector((state) => state.window.activeWindow);
    const dispatch = useDispatch();

    function handleOpenWindow(tabId){
        dispatch(openWindow(tabId))
    }
    
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let time = `${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}`;
    let currentDate = `${day}/${month}/${year}`;
    let amPm = hours >= 12 ? "PM" : "AM";

    return (
        <>
            <section id="contact" data-index={6} className="lightSection min-h-[100vh] h-auto" >
                <Parallax2 />
                <Parallax1 sectionName={"Contact"} />
                <div className="h-[100vh] bg-[#111111] flex items-center justify-center">
                    <div className="border-2 border-white min-w-[90%] min-h-[85%] rounded-[15px] relative">
                        <div className="flex border-b-2 border-white px-3 py-3 gap-[5px]">
                            {[...Array(3)].map((_, index) => {
                                return (
                                    <div key={index} className="w-[15px] h-[15px] rounded-full bg-white" />
                                )
                            })}
                        </div>
                        <div className="screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            {activeWindow == 3 &&
                                <InstagramWindow/>
                            }
                            {activeWindow == 2 &&
                                <GithubWindow/>
                            }
                            {activeWindow == 1 &&
                                <EmailBox/>
                            }

                        </div>
                        <div className="taskbar absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-between w-full p-4">
                            <div className="apps flex justify-center text-center  gap-[0.8rem]">
                                {socialTabs.map((tab, index) => {
                                    return (
                                        <div style={{scale: tab.id == activeWindow ? 1.2 : 1 }} onClick={() => handleOpenWindow(tab.id)} key={index} className="w-[40px] h-[40px] flex items-center justify-center transition-all hover:-translate-y-[5px] hover:scale-[1.1] cursor-pointer bg-[#fff] rounded-[10px]">
                                            <img src={tab.icon} className="w-[30px]" alt="" />
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="date text-end text-[white] text-[0.7rem] font-[700]">
                                <div className="">{time} {amPm}</div>
                                <div className="">{currentDate}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact;