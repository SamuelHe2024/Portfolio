export default function LandingCard(){
    return(
        <div className = "relative grid grid-flow-row bg-gunmetal h-screen grid-rows-6 grid-cols-3">
            <div className="col-span-3 m-auto row-span-5">
                <div className="text-keppel text-3xl md:text-4xl lg:text-6xl row-span-1 font-mono overflow-hidden whitespace-nowrap animate-typing1">I'm Samuel</div>
                <div className="text-keppel text-2xl md:text-3xl lg:text-4xl row-span-1 font-mono overflow-hidden whitespace-nowrap animate-typing2">Software Engineer</div>
            </div>
            <div></div>
            <button className="animate-bounce rounded-full hover:bg-arsenic/20 active:bg-arsenic/40 ho text-sm sm:text-lg w-full h-1/3 border-2 text-keppel font-mono border-keppel row-span-1">
                <div className="animate-pulse">See my projects</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="m-auto animate-pulse w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                </svg>
            </button>
        </div>
    )
}