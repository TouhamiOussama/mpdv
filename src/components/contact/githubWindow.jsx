import { socialMedia } from "../../websiteContent";
import Window from "./window";

function GithubWindow() {


    return (
        <>
            <Window>
                <div className="flex items-center max-md:flex-col">
                    <div className="leftSection px-[2rem] py-[1rem]">
                        <div className="w-[130px] h-[130px] max-md:w-[110px] max-md:h-[110px] bg-white rounded-full">
                        </div>
                        <div className="p-[10px]">
                            <p className="text-[1.2rem] text-[#7d7d7d] text-center" >{socialMedia[1].data.accountName}</p>
                            <a href={socialMedia[1].data.link} target="_blank">
                                <button className="w-full bg-[#2c2c2c]  text-[#a9a8a8]
                            py-[2px] px-[4px] rounded-[5px] mt-[10px] cursor-pointer hover:opacity-80 text-[0.8rem]
                            " >Visit Profile</button>
                            </a>
                        </div>
                    </div>
                    <div className="rightSection flex flex-col gap-[5px] w-full ps-4">
                        {socialMedia[1].data.dummyRepos.map((repo, index) => {
                            return (
                                <div className="flex flex-col gap-[5px] p-5 max-md:p-2 border-b-2 border-[#464646] w-full hover:bg-[#181818] ">
                                    <div className="flex items-center gap-[10px]">
                                        <h1 className="text-[1.2rem] max-md:text-[0.9rem] font-[700] text-[white]" >{repo.repoName}</h1>
                                        <div className="bg-[#232323]  text-[0.7rem] rounded-[20px] p-[3px] px-4 text-[#868686]">Public</div>
                                    </div>
                                    <div className="">
                                        <div className="flex items-center gap-[0.5rem] text-[#7b7b7b] text-[0.8rem] max-md:text-[0.7rem]">
                                            <div className="flex items-center gap-[5px] ">
                                                <div className="w-[10px] h-[10px] rounded-full bg-[#00b8c2]"></div>
                                                React JS
                                            </div>
                                            <div className="">
                                                Updated 1 hour ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Window>
        </>
    )
}
export default GithubWindow;