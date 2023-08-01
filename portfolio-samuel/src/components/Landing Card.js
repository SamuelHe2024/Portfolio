export default function LandingCard(){
    return(
        <div className = "relative grid grid-flow-row bg-gunmetal h-screen grid-rows-6 grid-cols-3">
            <div className="col-span-3 m-auto row-span-5">
                <div className="text-keppel text-6xl row-span-1 font-mono overflow-hidden whitespace-nowrap animate-typing1">I'm Samuel</div>
                <div className="text-keppel text-4xl row-span-1 font-mono overflow-hidden whitespace-nowrap animate-typing2">Software Engineer</div>
            </div>
            <div></div>
            <button class="rounded w-full h-1/3 border-2 text-keppel font-mono border-keppel row-span-1 ">See my projects</button>
        </div>
    )
}