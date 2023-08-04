import profile from "../images/profile.jpg"
import empty from "../images/empty.webp"
import github from "../images/github.png"
import instagram from "../images/instagram.png"
import linkedin from "../images/linkedin.png"


export default function LandingCard(){
    return(
        <div className = "relative grid grid-flow-row bg-gunmetal h-screen grid-rows-6 grid-cols-3">
            <div className="row-span-1"></div>
            
            <div className="col-span-3 row-span-3 m-auto border-b border-keppel">
                <div className="text-keppel font-extrabold mb-8 xl:mb-12 text-4xl xl:text-5xl row-span-1 font-mono overflow-hidden whitespace-nowrap animate-typing1">Samuel He</div>
                <img src={profile} alt={empty}  className="m-auto mb-8 col-span-3 my-auto w-[125px] xl:w-[200px] border-keppel border-2 rounded-full"/>
                <div className="grid grid-cols-4 mb-8">
                    <div></div>
                    <a href = "https://github.com/weewoo123"><img src={github} className="max-w-[40px] m-auto"></img></a>
                    <a href = "https://www.linkedin.com/in/samuel-he-48151b202"><img src={linkedin} className="max-w-sm m-auto"></img></a>
                </div>
                
            </div>
            <div></div>
            <div className = "m-auto row-span-2">
                <div className= "text-keppel font-bold text-sm md:text-lg font-mono text-center mb-2">Press to Unlock</div>
                <button className="bg-cyan-900/10 rounded-xl hover:bg-arsenic/20 active:bg-arsenic/40 w-full h-max py-3 px-3 border-x-2 animate-pulse border-t-2 border-b text-keppel shadow-md shadow-keppel font-mono border-gray-500 row-span-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="m-auto w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
            </div>
            
            
        </div>
    )
}