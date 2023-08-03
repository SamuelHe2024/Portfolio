export default function LandingCard(){
    return(
        <div className = "relative grid grid-flow-row bg-gunmetal h-screen grid-rows-6 grid-cols-3">
            <div className=" shadow-keppel/50 w-max px-12 py-3 sm:px-24 sm:py-7 md:px-48 md:py-14 lg:px-72 lg:py-21 xl:px-96 xl:py-28 rounded-3xl col-span-3 m-auto row-span-5">
                <div className="text-keppel font-extrabold border-b-2 border-keppel border-double pb-2 text-4xl md:text-5xl lg:text-6xl row-span-1 font-mono overflow-hidden whitespace-nowrap animate-typing1">Samuel He</div>
                <div className="text-keppel text-xl sm:2xl md:text-3xl lg:text-4xl row-span-1 font-mono overflow-hidden whitespace-nowrap animate-typing2">Software Engineer</div>
                <div className="text-keppel text-xl sm:2xl md:text-3xl lg:text-4xl row-span-1 font-mono overflow-hidden whitespace-nowrap animate-typing2">Portfolio Site</div>
            </div>
            <div></div>
            <button className=" max-w-sm m-auto bg-cyan-900/10 rounded-xl md:rounded-xl hover:bg-arsenic/20 active:bg-arsenic/40 ho text-sm sm:text-lg w-full h-max py-3 px-3 border-x border-t md:border-x-4 md:border-t-2 md:border-b text-keppel shadow-sm shadow-keppel font-mono border-gray-500 row-span-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="m-auto animate-pulse w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                </svg>
            </button>
        </div>
    )
}