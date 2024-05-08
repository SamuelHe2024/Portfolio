import profile from "../images/profile.jpg"
import empty from "../images/empty.webp"
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"


export default function LandingCard(){
    return(
        <div className = "fixed grid grid-flow-row bg-gunmetal w-screen h-screen grid-rows-6 grid-cols-3">
            <div className="row-span-1"></div>
            
            <div className="col-span-3 row-span-3 m-auto border-b bg-slate-900 rounded-xl p-16 shadow-teal-400 shadow-sm border-keppel">
                <div className="text-keppel mb-8 xl:mb-12 text-4xl xl:text-5xl row-span-1 font-mono overflow-hidden whitespace-nowrap animate-typing1">Samuel He</div>
                <img src={profile} alt={empty}  className="m-auto mb-8 col-span-3 my-auto w-[125px] xl:w-[200px] border-keppel border-2 rounded-full"/>
                <div className="grid grid-cols-4 mb-8">
                    <div></div>
                    <a href = "https://github.com/SamuelHe2024"><img src={github} alt={empty} className="max-w-[40px] m-auto"></img></a>
                    <a href = "https://www.linkedin.com/in/samuel-he-48151b202"><img src={linkedin} alt = {empty} className="max-w-sm m-auto"></img></a>
                </div>
            </div>
            <div></div>
        </div>
    )
}