import profile from "./linkedinprofile"
import ExperienceCard from "./utils/Experience Card" 
export default function WorkExperience(props){
    return(
        <div className = "relative bg-slate-900 border-t-2 inherit border-keppel">
            <div className = "m-auto row-span-2 h-[10vh] grid grid-cols-5">
                <div className='col-span-2'></div>
                <button onClick={() => window.scrollTo({
                    top: document.querySelector("#experience").offsetTop,
                    behavior: "smooth",
                    })} className="bg-cyan-900/10 rounded-xl m-auto hover:bg-arsenic/20 active:bg-arsenic/40 w-max h-max py-3 px-3 border-x-2 animate-pulse border-t-2 border-b text-keppel shadow-md shadow-keppel font-mono border-gray-500 row-span-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="m-auto w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                    </svg>
                </button>
            </div>
            <div className="h-full grid">
                
                <div   className="max-w-xl xl:max-w-4xl lg:max-w-2xl bg-arsenic sm:rounded-xl rounded-none mt-[10vh] mx-auto">
                    <div   className="border-t mx-8 p-2 pt-8 border-arsenic font-bold text-white py-1 text-lg md:text-xl font-mono">
                        Experience:
                    </div>
                    <div className = "grid divide-y mx-6 mt-2 mb-6 divide-gray-500">
                    {profile.map(job=>
                        <ExperienceCard
                            imgLink = {job.imgLink}
                            role = {job.role}
                            company = {job.company}
                            type = {job.type}
                            duration = {job.duration}
                            location = {job.location}
                            description = {job.description}
                            skills = {job.Skills}
                        >
                        </ExperienceCard>
                    )}
                    </div>
                    <div id="experience"></div>
                </div>
                
            </div>
        </div>
    )
}