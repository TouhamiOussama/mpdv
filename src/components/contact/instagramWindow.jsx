import { socialMedia } from "../../websiteContent";
import Window from "./window";

function InstagramWindow() {
    return (
        <>
            <Window>
                <div className="">
                    <div className="header flex  items-center max-md:flex-col justify-center p-4  gap-[2rem]">
                        <div className="profilePic w-[110px] h-[110px] max-md:w-[90px] max-md:h-[90px] bg-[#a1a1a1] rounded-full flex items-center justify-center ">
                            <img src="/myPortfolio/images/myImage7.jpg" className="w-[100px] h-[100px] rounded-full max-md:w-[80px] max-md:h-[80px] " alt="" />
                        </div>
                        <div className="accountInfo text-white">
                            <div className="t">
                                <p className="text-[1.3rem] font-[700] max-md:text-[1rem]" >ussa.m4</p>
                                <p className="text-[#c5c5c5] max-md:text-[0.8rem]" >Oussama Touhami</p>
                            </div>
                            <div className="flex justify-between items-center gap-[0.7rem] max-md:text-[0.8rem]">
                                <div className="posts"><span className="font-[700]" >{socialMedia[0].data.posts}</span> posts</div>
                                <div className="followers"><span className="font-[700]" >{socialMedia[0].data.followers}</span> followers</div>
                                <div className="following"><span className="font-[700]" >{socialMedia[0].data.following}</span> following</div>
                            </div>
                            <div className="">
                                <a href={socialMedia[0].data.link} target="_blank">
                                    <button className="w-full bg-white text-black my-[1rem] p-1 font-[700] rounded-[7px] cursor-pointer transition-all hover:-translate-y-[2px] hover:opacity-80 max-md:text-[0.8rem]" >Follow me</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="bottomNav flex justify-center items-center gap-[1rem] border-b-2 border-[#464646] pb-2">
                            <div className="text-[white]">Posts</div>
                            <div className="">Reels</div>
                        </div>
                        <div className="flex items-center justify-center pt-[2rem]">
                            <p className="text-white text-[1.5rem] font-[700]" >No Posts Yet</p>
                        </div>
                    </div>
                </div>
            </Window>
        </>
    )
}
export default InstagramWindow;